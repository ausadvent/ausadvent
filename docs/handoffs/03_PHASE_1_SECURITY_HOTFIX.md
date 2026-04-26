# 03 — Phase 1: Security Hotfix

**Prerequisite:** Phase 0 complete. Read `01_DISCOVERY_REPORT.md` first.
**Risk level:** ⚠️ Medium-High — touches production
**Estimated time:** 90–120 minutes (including AWS deploys and verification)
**AWS deploy triggered:** Yes, on both dev and main

---

## Objective

Eliminate client-side exposure of Contentful credentials across all locations:
1. Code on `main` (5 files using inline `createClient` with `NEXT_PUBLIC_*`)
2. Code on `dev` and `feat/migration-contentful-to-sanity` (centralized client with `NEXT_PUBLIC_*` fallback)
3. Local `.env.local`
4. AWS Amplify env vars (shared across both branches)
5. The Contentful access token itself (rotate after fix is verified)

Investigate the unknown `NEXT_PUBLIC_API_KEY` env var as part of this phase.

---

## Strategy — staged transition with overlap

Because Amplify env vars are SHARED across branches, we cannot test dev in isolation. Strategy:

1. **First:** Add new (non-prefixed) env vars to Amplify alongside the existing `NEXT_PUBLIC_*` ones. Both sets coexist.
2. **Second:** Push code changes to `dev` that read non-prefixed vars (with `NEXT_PUBLIC_*` fallback temporarily kept). Verify dev builds and runs.
3. **Third:** Apply parallel fix to `main` — refactor 5 files to use a centralized client reading non-prefixed vars (with `NEXT_PUBLIC_*` fallback temporarily kept). Verify main builds and runs.
4. **Fourth:** Remove the `NEXT_PUBLIC_*` fallback from BOTH branches simultaneously.
5. **Fifth:** Remove the old `NEXT_PUBLIC_CONTENTFUL_*` env vars from Amplify.
6. **Sixth:** Rotate the Contentful access token in Contentful dashboard, update Amplify, verify.

This staged approach means at no point is production broken. Each step is reversible.

---

## Pre-flight checks

```bash
git status
# Expected: clean

git branch --show-current
# Note the current branch — you'll switch branches during this phase
```

---

## Step 1 — Investigate `NEXT_PUBLIC_API_KEY` (no production impact)

Run on whichever branch you're currently on:

```bash
git grep "NEXT_PUBLIC_API_KEY" -- 'src/**/*' '*.ts' '*.tsx' '*.js' '*.jsx' '*.json'
```

**Document the findings in Discovery Report section 9** before proceeding. Possible outcomes:
- **Found in code, identifiable purpose** (e.g., Google Maps key) → assess risk, decide whether to address now or defer
- **Found in code, unknown purpose** → flag for James, defer fix to a later phase
- **Not found in code** → it's unused, can be deleted from Amplify in Step 7 of this phase

⚠️ Do NOT delete `NEXT_PUBLIC_API_KEY` from Amplify yet. We'll handle it at the end.

---

## Step 2 — Add new env vars to Amplify (additive, zero-risk)

This step adds new env vars without removing the old ones. Builds will continue to work.

### In AWS Amplify console:

1. Navigate to: AWS Amplify → AUSADVENT app → Hosting → Environment variables → Manage variables
2. Click "Add new variable"
3. Add: `CONTENTFUL_SPACE_ID` = (same value as `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`)
4. Add: `CONTENTFUL_ACCESS_TOKEN` = (same value as `NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY`)
5. Apply to: All branches
6. Save

**Verification:** The Amplify env var list now shows BOTH the prefixed and non-prefixed versions. Both have the same values.

⚠️ **REVERT NOTE:** If anything breaks after this step, simply delete the new env vars. The old `NEXT_PUBLIC_*` vars are still in place and the system will continue working as before.

---

## Step 3 — Update local `.env.local`

Open `.env.local` and update:

**Before:**
```
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=xxxxx
NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY=xxxxx
```

**After (keep BOTH temporarily for transition):**
```
# Server-only (preferred)
CONTENTFUL_SPACE_ID=xxxxx
CONTENTFUL_ACCESS_TOKEN=xxxxx

# Legacy — to be removed after Phase 1 Step 6
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=xxxxx
NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY=xxxxx
```

Note: `CONTENTFUL_ACCESS_TOKEN` (not `_KEY`) is the standardized name used by the dev branch's existing code.

---

## Step 4 — Fix on `dev` branch

### 4a. Switch to dev and create a hotfix branch

```bash
git checkout dev
git pull origin dev
git checkout -b fix/security-remove-public-contentful-vars-dev
```

### 4b. The current state of `src/lib/contentful.ts`

```typescript
const spaceId =
  process.env.CONTENTFUL_SPACE_ID ?? process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken =
  process.env.CONTENTFUL_ACCESS_TOKEN ?? process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;
```

### 4c. The change for this step (KEEP the fallback temporarily)

For Step 4, we leave the file unchanged. The dev branch already reads the non-prefixed vars FIRST. Now that those vars exist in Amplify (Step 2), the code path will switch to using them automatically on next build.

**Action:** No code change needed on dev for this step. Trigger a redeploy:

```bash
# Trigger an empty commit to redeploy dev
git commit --allow-empty -m "chore: trigger redeploy with new Contentful env vars"
git push origin fix/security-remove-public-contentful-vars-dev
```

Open a PR to merge `fix/security-remove-public-contentful-vars-dev` → `dev`. Merge it. Amplify will auto-deploy dev.

### 4d. Verification gate for dev

After Amplify deploys:

1. Visit the dev URL (e.g., `https://dev.dXXXXX.amplifyapp.com`)
2. Verify all pages load (home, about, services, blog, blog post detail)
3. Open DevTools → Network → reload → check that Contentful images load
4. Open DevTools → Sources → search all loaded JS for the substring `CONTENTFUL`
   - **Expected:** The Contentful access token value should NOT appear anywhere
   - If the token still appears: the build has cached the old `NEXT_PUBLIC_*` values. This is expected behavior with the fallback still present, and will be resolved in Step 6.

⚠️ **At this point, dev is using the new env vars but the old `NEXT_PUBLIC_*` env vars still exist in Amplify. Step 6 fixes this.**

---

## Step 5 — Fix on `main` branch

This is the bigger code change. `main` has 5 files with inline `createClient`. We refactor them to use a centralized client.

### 5a. Switch to main and create a hotfix branch

```bash
git checkout main
git pull origin main
git checkout -b fix/security-remove-public-contentful-vars-main
```

### 5b. Create the centralized client

Create new file `src/lib/contentful.ts`:

```typescript
import { createClient } from 'contentful';

// Server-only env vars. NEXT_PUBLIC_* fallback retained temporarily for
// staged transition (will be removed in Phase 1 Step 6).
const spaceId =
  process.env.CONTENTFUL_SPACE_ID ?? process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken =
  process.env.CONTENTFUL_ACCESS_TOKEN ?? process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;

if (!spaceId || !accessToken) {
  throw new Error(
    'Missing Contentful environment variables. ' +
    'Ensure CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN are set.'
  );
}

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});
```

### 5c. Refactor the 5 files

Each of these files currently has its own `createClient()`. Replace with import from the centralized client.

**Pattern to apply to each file:**

Before:
```typescript
import { createClient } from 'contentful';
const spaceKey:any = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken:any = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;
const client = createClient({ space: spaceKey, accessToken });
```

After:
```typescript
import { contentfulClient as client } from '@/lib/contentful';
```

(The alias `as client` keeps the existing variable name `client` so downstream code doesn't change.)

**Files to refactor:**
1. `src/app/utils/fetchArticles.ts`
2. `src/app/utils/fetchServices.ts`
3. `src/app/components/Values.tsx`
4. `src/app/about/Values.tsx`
5. `src/app/components/Framework.tsx`

### 5d. Verify locally

```bash
npm run lint
# Must pass with zero warnings

npm run build
# Must complete successfully
```

If lint or build fails, fix before committing. Common issues:
- Path alias `@/lib/contentful` not configured in `tsconfig.json` → use relative path instead
- Unused imports → remove them

### 5e. Commit

```bash
git add src/lib/contentful.ts
git add src/app/utils/fetchArticles.ts
git add src/app/utils/fetchServices.ts
git add src/app/components/Values.tsx
git add src/app/about/Values.tsx
git add src/app/components/Framework.tsx
git commit -m "fix: centralize Contentful client and prefer server-only env vars

- Create src/lib/contentful.ts as single source of Contentful client
- Refactor 5 files to import shared client instead of creating their own
- Prefer CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN over NEXT_PUBLIC_* versions
- NEXT_PUBLIC_* fallback retained temporarily; will be removed once Amplify env vars are confirmed working

Refs Phase 1 hotfix in handoff doc 03"
```

### 5f. Push and PR

```bash
git push origin fix/security-remove-public-contentful-vars-main
```

Open a PR to merge into `main`. **Important:** Get a second pair of eyes on this PR if possible — it touches production.

Merge to main. Amplify will auto-deploy production.

### 5g. Verification gate for main

Same checks as Step 4d, but on production URL:
1. All pages load
2. Contentful content (blog posts, services, values, framework) renders
3. DevTools confirm site is functional
4. (Token will still appear in bundle until Step 6 — this is expected)

⚠️ **REVERT NOTE:** If main breaks after deploy, the revert is:
```bash
git checkout main
git revert <merge-commit-sha>
git push origin main
```
Amplify will auto-deploy the revert. Production is restored to the previous architecture.

---

## Step 6 — Remove the `NEXT_PUBLIC_*` fallback (the actual security fix)

Now that BOTH branches are reading non-prefixed env vars successfully, we can remove the fallback. This is what actually removes credentials from the browser bundle.

### 6a. Update `src/lib/contentful.ts` on dev

```bash
git checkout dev
git pull origin dev
git checkout -b fix/remove-public-contentful-fallback
```

Edit `src/lib/contentful.ts`:

**Before:**
```typescript
const spaceId =
  process.env.CONTENTFUL_SPACE_ID ?? process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken =
  process.env.CONTENTFUL_ACCESS_TOKEN ?? process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;
```

**After:**
```typescript
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
```

Update the error message:
```typescript
if (!spaceId || !accessToken) {
  throw new Error(
    'Missing Contentful environment variables. ' +
    'Set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in environment.'
  );
}
```

### 6b. Verify locally, commit, push, PR, merge to dev

```bash
npm run lint
npm run build
git commit -am "fix(security): remove NEXT_PUBLIC_ Contentful env var fallback

Eliminates client-side exposure of Contentful credentials by removing
the fallback to NEXT_PUBLIC_CONTENTFUL_SPACE_ID and NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY.

Server now requires CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN, which
are configured in AWS Amplify env vars (added in Phase 1 Step 2)."
git push origin fix/remove-public-contentful-fallback
```

PR → merge to dev. Amplify deploys dev.

### 6c. Verify dev — credentials should now be GONE from bundle

1. Visit dev URL after deploy completes
2. Open DevTools → Sources tab → expand all chunks → search across all files for the actual Contentful token value
3. **Expected:** Zero matches. The token is no longer in the browser bundle.

If the token still appears, the deploy may still be in progress. Wait 2 minutes and re-check. If still present, investigate caching — the build may need to be triggered with cache cleared from Amplify console.

### 6d. Apply the same change to main

Repeat 6a-6c on `main` branch:
```bash
git checkout main
git pull origin main
git checkout -b fix/remove-public-contentful-fallback-main
```

Edit `src/lib/contentful.ts` (the file you created in Step 5b) — remove the `?? process.env.NEXT_PUBLIC_*` fallbacks.

Commit, push, PR, merge to main. Amplify deploys production.

### 6e. Verify production — same DevTools check

Same verification on production URL. Zero matches for the Contentful token.

---

## Step 7 — Remove old `NEXT_PUBLIC_CONTENTFUL_*` env vars from Amplify

Now that NO code reads the old prefixed vars, they can be safely removed from Amplify.

In AWS Amplify console:
1. Navigate to: Hosting → Environment variables → Manage variables
2. Delete `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
3. Delete `NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY`
4. Save

Trigger redeploy of both `dev` and `main` (Amplify console → Deployments → Redeploy this version).

After both redeploys complete, verify both URLs still work and credentials still absent from bundles.

---

## Step 8 — Address `NEXT_PUBLIC_API_KEY` based on Step 1 findings

Based on what was found in Step 1:

- **If unused in code:** Delete from Amplify, remove from `.env.local`. Trigger redeploys.
- **If used and identifiable purpose (e.g., Maps, low-risk):** Document in Discovery Report and defer to a later cleanup pass.
- **If used and concerning:** Treat as a separate hotfix following the same pattern as Steps 2-7.

---

## Step 9 — Rotate the Contentful access token

The old token has been public. Rotate it.

1. Log into Contentful dashboard
2. Navigate to: Settings → API keys
3. Identify the active CDA token used by the AUSADVENT site
4. Create a NEW CDA token with the same permissions
5. Copy the new token value
6. In AWS Amplify: update `CONTENTFUL_ACCESS_TOKEN` env var with the new value (apply to all branches)
7. In local `.env.local`: update `CONTENTFUL_ACCESS_TOKEN` with the new value
8. Trigger redeploy of both `dev` and `main` in Amplify
9. Verify both sites still load Contentful content
10. **Once verified:** delete the OLD token in Contentful

---

## Step 10 — Cleanup local `.env.local`

Remove the legacy `NEXT_PUBLIC_*` Contentful entries from `.env.local`:

**Final `.env.local` (Contentful section):**
```
CONTENTFUL_SPACE_ID=xxxxx
CONTENTFUL_ACCESS_TOKEN=xxxxx
```

(Keep other unrelated env vars in `.env.local` as they were.)

---

## Step 11 — Sync the migration branch

The migration branch was created from dev BEFORE this hotfix. Bring it up to date:

```bash
git checkout feat/migration-contentful-to-sanity
git pull origin dev  # or: git rebase origin/dev
```

Resolve any conflicts (unlikely since the migration branch hasn't been worked on yet).

```bash
npm run lint
npm run build
```

Both should pass. Migration branch is now ready for Phase 2.

---

## Verification gate — Phase 1 complete when ALL of these are true

- [ ] `NEXT_PUBLIC_API_KEY` investigated and documented
- [ ] Both `dev` and `main` build successfully on Amplify
- [ ] Both dev and main URLs load all pages including Contentful content
- [ ] DevTools search across loaded JS bundles shows ZERO matches for the Contentful token on both sites
- [ ] `NEXT_PUBLIC_CONTENTFUL_*` env vars no longer exist in Amplify
- [ ] Contentful token has been rotated; old token deleted in Contentful
- [ ] `.env.local` only contains the non-prefixed Contentful vars
- [ ] `feat/migration-contentful-to-sanity` is rebased onto updated `dev` and builds clean
- [ ] Discovery Report session journal updated with Phase 1 outcome

---

## Full revert procedure (if Phase 1 must be rolled back entirely)

If Phase 1 needs to be aborted partway through:

1. **If env vars changed but code didn't:** Re-add the `NEXT_PUBLIC_*` versions to Amplify. Existing code will pick them up on next build.
2. **If code on `dev` was merged but main wasn't:** dev still works because Amplify has both env var sets. No urgent action needed.
3. **If code on `main` was merged and broke production:** revert the merge commit on main:
   ```bash
   git checkout main
   git revert <merge-commit-sha>
   git push origin main
   ```
4. **If token was rotated and the new one isn't working:** Don't delete the old token in Contentful until the new one is confirmed working everywhere. Revert the Amplify env var to the old token value.

The staged design of this phase means at no point should there be more than ~5 minutes of broken production state, and reverts are always possible.

---

## After Phase 1

Update `01_DISCOVERY_REPORT.md`:
- Section 4 (Security exposure summary): mark as RESOLVED with date
- Section 10 (Session journal): log Phase 1 completion
- Section 3 (AWS Amplify state): update env var table to reflect new state

Hand off to James for confirmation. Phase 2 (Sanity setup) follows.
