# 05 — Phase 1 (Revised): Security Hardening

**Supersedes:** `03_PHASE_1_SECURITY_HOTFIX.md` (original Phase 1 plan)
**Prerequisite:** Phase 0 complete. Read `01_DISCOVERY_REPORT.md` first.
**Risk level:** ⚠️ Medium — touches multiple components, but dev validation gate prevents production exposure
**Estimated time:** 4–6 hours including dev validation
**AWS deploy triggered:** Yes — first to dev (validated), then to main

---

## Why this revised Phase 1 exists

The original Phase 1 was based on the assumption that `src/lib/contentful.ts` could be fixed in isolation. Engineer 2's pre-flight `security-auditor` scan revealed two compounding issues:

1. **Three components fetch Contentful from the browser** (`Header.tsx`, `Services.tsx`, `LatestArticles.tsx`). Removing the `NEXT_PUBLIC_*` fallback alone would break the site.

2. **A second exposed credential**: `NEXT_PUBLIC_API_KEY` is an AWS API Gateway key for a Lambda that sends emails (form confirmation + business notification). Currently consumed client-side via the AWS Amplify SDK in `Form.tsx` and `ConfigureAmplifyClientSide.ts`.

This revised plan addresses ALL credential exposures and architectural issues in a single coordinated phase, validated through dev before reaching production.

---

## Strategy — single coordinated fix, dev-validated before main

```
1. Create feature branch off dev
2. Refactor 3 components: server-fetch, pass to client for interactivity
3. Refactor Form.tsx: replace AWS Amplify SDK with fetch() to a Next.js API route proxy
4. Create /app/api/form-submit/route.ts as the proxy
5. Remove NEXT_PUBLIC_* fallback from src/lib/contentful.ts
6. Add new Amplify env vars (additive, old + new coexist)
7. Push → merge to dev → Amplify deploys dev
8. VERIFY DEV THOROUGHLY — this is the safety gate
9. Remove old NEXT_PUBLIC_* env vars from Amplify
10. Re-verify dev
11. Merge dev → main, deploy production
12. Rotate Contentful CDA token + API Gateway key
13. Final verification on main
```

---

## Pre-flight checks

```bash
git status                                 # Should be clean
git branch --show-current                  # Note current branch
gh auth status                             # Verify ausadvent is active account
git checkout dev && git pull origin dev    # Start from latest dev
```

---

## Step 1 — Create the feature branch

```bash
git checkout -b feat/security-hardening
```

All work in this phase happens on this branch until Step 9 (merge to dev).

---

## Step 2 — Add new env vars to Amplify (additive, zero-risk)

In AWS Amplify console: Hosting → Environment variables → Manage variables.

**ADD** (do not remove anything yet):
- `CONTENTFUL_SPACE_ID` = same value as `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN` = same value as `NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY`
- `API_KEY` = same value as `NEXT_PUBLIC_API_KEY`

Apply to: **All branches** (this is the Amplify default — it means dev and main both pick up the new vars).

Save. The Amplify env var list now has BOTH prefixed and unprefixed versions for all three. Existing builds continue to work because the `NEXT_PUBLIC_*` versions still exist.

⚠️ **REVERT NOTE:** If anything goes wrong after this step, simply delete the new env vars. Old `NEXT_PUBLIC_*` versions are untouched — system continues working.

---

## Step 3 — Update `.env.local`

Open `.env.local` and ADD the three new entries alongside the existing ones (don't remove the old ones yet):

```
# === SERVER-ONLY (preferred) ===
CONTENTFUL_SPACE_ID=<same value as NEXT_PUBLIC_CONTENTFUL_SPACE_ID>
CONTENTFUL_ACCESS_TOKEN=<same value as NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY>
API_KEY=<same value as NEXT_PUBLIC_API_KEY>

# === LEGACY (will be removed in Step 10) ===
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=<existing>
NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY=<existing>
NEXT_PUBLIC_API_KEY=<existing>

# === Other (keep as-is) ===
NEXT_PUBLIC_MICROSOFT_CLARITY=<existing>
NEXT_PUBLIC_TRACKING_ID=<existing>
```

---

## Step 4 — Refactor the 3 Contentful-using client components

The pattern: fetch on the server, pass data as props to a client component for interactivity.

### 4a — Refactor `Header.tsx`

**Current state:** Header is a client component fetching services in `useEffect`. Refactor splits it into two files: a server wrapper that fetches, and the existing component (renamed) that handles interactivity.

**Step 4a-1:** Rename `Header.tsx` → `HeaderClient.tsx` and update its props:

```tsx
// src/app/components/HeaderClient.tsx
"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
// assets
import Logo from '../../../assets/logo-header.svg'
import Phone from '../../../assets/phone_icon.svg'
import { trackGAEvent } from '../metrics';

interface HeaderClientProps {
  servicesFetched: any[];  // Replace `any` with proper type when schema is defined
}

export default function HeaderClient({ servicesFetched }: HeaderClientProps) {
    // REMOVE the useState/useEffect for servicesFetched
    // REMOVE the useEffect that calls fetchData()
    // Keep everything else (locations, mobile menu, GA event, etc.)
    
    const locations = [
        { id: 1, title: 'Western Australia', route: 'western' },
        { id: 2, title: 'Queensland', route: 'queensland' }
    ]
    
    const [mobileMenu, setMobileMenu] = useState(false);
    // ... rest of existing component logic unchanged
    
    return (
        // ... existing JSX unchanged, uses `servicesFetched` prop instead of state
    )
}
```

**Step 4a-2:** Create new `Header.tsx` as a server component wrapper:

```tsx
// src/app/components/Header.tsx
import { fetchData } from '../utils/fetchServices';
import HeaderClient from './HeaderClient';

// Server component — runs on server, can read server-only env vars
export default async function Header() {
    const servicesFetched = await fetchData();
    return <HeaderClient servicesFetched={servicesFetched ?? []} />;
}
```

The existing imports of `Header` from elsewhere in the codebase don't change — `Header` still exists, it just delegates to `HeaderClient`.

### 4b — Refactor `Services.tsx`

Same pattern. The existing file becomes `ServicesClient.tsx`, a new server component `Services.tsx` fetches and passes props.

**Step 4b-1:** Rename `Services.tsx` → `ServicesClient.tsx`:

```tsx
// src/app/components/ServicesClient.tsx
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
// ... other client-side imports

interface ServicesClientProps {
  servicesData: any[];
}

export default function ServicesClient({ servicesData }: ServicesClientProps) {
    // REMOVE useEffect and useState that fetched data
    // REMOVE the import of fetchData (now happens in parent)
    // Keep all interactive logic, state for hover/click, animations, etc.
    
    return (
        // ... existing JSX unchanged, uses `servicesData` prop
    )
}
```

**Step 4b-2:** Create new `Services.tsx`:

```tsx
// src/app/components/Services.tsx
import { fetchData } from '../utils/fetchServices';
import ServicesClient from './ServicesClient';

export default async function Services() {
    const servicesData = await fetchData();
    return <ServicesClient servicesData={servicesData ?? []} />;
}
```

### 4c — Refactor `LatestArticles.tsx`

Same pattern again.

**Step 4c-1:** Rename `LatestArticles.tsx` → `LatestArticlesClient.tsx`:

```tsx
// src/app/components/LatestArticlesClient.tsx
'use client'
import React, { useState } from 'react'
// ... other client-side imports

interface LatestArticlesClientProps {
  articles: any[];
}

export default function LatestArticlesClient({ articles }: LatestArticlesClientProps) {
    // REMOVE useEffect and useState that fetched articles
    // REMOVE the import of fetchArticles
    // Keep interactive logic
    
    return (
        // ... existing JSX, uses `articles` prop
    )
}
```

**Step 4c-2:** Create new `LatestArticles.tsx`:

```tsx
// src/app/components/LatestArticles.tsx
import { fetchArticles } from '../utils/fetchArticles';
import LatestArticlesClient from './LatestArticlesClient';

export default async function LatestArticles() {
    const articles = await fetchArticles();
    return <LatestArticlesClient articles={articles ?? []} />;
}
```

### 4d — Verify each refactor

After each component refactor, run:

```bash
npm run lint
npm run build
```

If build fails, the most likely cause is:
- A page that imports `Header` is itself a client component → build error because client components can't directly render async server components. Solution: that page also needs to become a server component (remove its `'use client'`), or the data needs to be fetched at a higher level.
- The original component had a default export name that other files reference → keep the same export name (`export default function Header`).

If you hit a build error, paste the error to Engineer 2 / James — do NOT improvise the fix.

---

## Step 5 — Create the form proxy API route

This replaces the AWS Amplify SDK with a server-side Next.js API route that holds the API key.

### 5a — Create the proxy route

Create new file `src/app/api/form-submit/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

const API_GATEWAY_ENDPOINT = process.env.AUSADVENT_QUOTES_ENDPOINT;
const API_KEY = process.env.API_KEY;

export async function POST(request: NextRequest) {
    if (!API_GATEWAY_ENDPOINT || !API_KEY) {
        console.error('Form proxy: missing required env vars');
        return NextResponse.json(
            { error: 'Server configuration error' },
            { status: 500 }
        );
    }

    try {
        const body = await request.json();

        // Forward to API Gateway with the API key
        const response = await fetch(`${API_GATEWAY_ENDPOINT}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': API_KEY,
            },
            body: JSON.stringify(body),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            console.error('Form proxy: upstream error', response.status);
            return NextResponse.json(
                { error: 'Submission failed' },
                { status: response.status }
            );
        }

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Form proxy: unexpected error', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
```

**Note about the path `/contact`:** I've assumed the Lambda is mounted at `/contact` on the API Gateway. **Verify this** by checking what path `Form.tsx` currently posts to via the Amplify SDK. If it's different (e.g., `/quote` or `/submit`), update the fetch URL accordingly.

### 5b — Add the new env var

In Amplify console, ADD:
- `AUSADVENT_QUOTES_ENDPOINT` = `https://9p9qg0zhhi.execute-api.ap-southeast-2.amazonaws.com/staging` (the endpoint from `amplifyconfiguration.json`)

In `.env.local`, ADD:
```
AUSADVENT_QUOTES_ENDPOINT=https://9p9qg0zhhi.execute-api.ap-southeast-2.amazonaws.com/staging
```

### 5c — Refactor `Form.tsx`

Replace the AWS Amplify SDK usage with a `fetch()` to the new proxy.

In `src/app/components/Form.tsx`:

**REMOVE** the imports and configuration block (lines ~10-25):
```tsx
// REMOVE:
import config from '@/amplifyconfiguration.json'
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';

const apiKey:string|undefined = process.env.NEXT_PUBLIC_API_KEY;
Amplify.configure(config, {
  API: {
    REST: {
      headers: async () => {
        return { 'X-Api-Key': apiKey || ''}
      }
    }
  }
})
```

**FIND** the form submission logic — somewhere in `Form.tsx` is a call like:
```tsx
const response = await post({ apiName: 'ausadventQuotes', path: '/contact', options: { body: ... }})
```

**REPLACE** with:
```tsx
const response = await fetch('/api/form-submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),  // formData should be the existing object being sent
});

if (!response.ok) {
    throw new Error('Form submission failed');
}

const result = await response.json();
```

The exact replacement depends on the existing structure. Engineer 2 should preserve the surrounding logic (success/failure handling, GA tracking, state updates) — only the actual API call changes.

### 5d — Delete `ConfigureAmplifyClientSide.ts`

This file exists only to configure the AWS Amplify SDK on the client. Since we're removing the SDK from the client entirely, the file is no longer needed.

```bash
# Find where it's imported
git grep "ConfigureAmplifyClientSide"

# Remove imports from those files (likely src/app/layout.tsx or similar)
# Then delete the file:
git rm src/app/ConfigureAmplifyClientSide.ts
```

If `aws-amplify` is no longer used anywhere in client code, also remove from `package.json`:
```bash
git grep "from 'aws-amplify'" -- 'src/**/*.tsx' 'src/**/*.ts'
# If no matches in client code, can remove the dep:
npm uninstall aws-amplify
```

(Leave `aws-amplify` in `package.json` if it's still used elsewhere.)

### 5e — Verify Form.tsx

```bash
npm run lint
npm run build
npm run dev
```

Test the form submission locally:
1. Open `http://localhost:3000` and navigate to the form
2. Fill it out and submit
3. Verify success message appears
4. Check email arrives
5. Check browser DevTools → Network → the request goes to `/api/form-submit`, NOT directly to API Gateway
6. The X-Api-Key header should NOT appear in the request from browser to `/api/form-submit`

---

## Step 6 — Remove the `NEXT_PUBLIC_*` fallback from `src/lib/contentful.ts`

Edit `src/lib/contentful.ts`:

**Replace the entire file with:**

```typescript
import { createClient } from 'contentful';

// Server-only environment variables. Reading these in client components will
// throw at build/runtime — that's intentional and prevents accidental exposure.
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    'Missing Contentful environment variables. ' +
    'Set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in environment.'
  );
}

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});
```

The `NEXT_PUBLIC_*` fallback is gone. If a client component still imports this client (which it shouldn't after Step 4), the build will fail — that's the intended safety net.

---

## Step 7 — Local verification

Before pushing, verify everything works locally:

```bash
npm run lint     # Must pass with zero warnings
npm run build    # Must succeed
npm run dev      # Must serve correctly
```

Visit `http://localhost:3000` and verify:
- [ ] Home page loads
- [ ] Header navigation menu shows services (no "pop in")
- [ ] About page loads
- [ ] Services page loads, all services render
- [ ] Blog page loads, latest articles section renders
- [ ] Form submits successfully, email arrives
- [ ] Browser DevTools (Sources tab) → search loaded JS for "ctfassets" or partial token strings → ZERO matches expected (Contentful credentials never reach the browser)

If anything fails locally, fix before pushing.

---

## Step 8 — Commit and push

```bash
git add -A
git status   # Review what's being committed
```

Make atomic commits — one per logical change:

```bash
# Commit 1: the centralized client fix
git add src/lib/contentful.ts
git commit -m "fix(security): require server-only Contentful env vars

Removes NEXT_PUBLIC_* fallback from src/lib/contentful.ts.
Server-only vars (CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN) are now
required. Client components attempting to use this client will fail at
build time, preventing accidental exposure of credentials in browser bundle."

# Commit 2: the component refactors
git add src/app/components/Header.tsx src/app/components/HeaderClient.tsx
git add src/app/components/Services.tsx src/app/components/ServicesClient.tsx
git add src/app/components/LatestArticles.tsx src/app/components/LatestArticlesClient.tsx
git commit -m "refactor: split data-fetching components into server+client pairs

Header, Services, and LatestArticles now fetch Contentful data in server
components, passing results as props to renamed *Client components for
interactivity. Eliminates client-side Contentful calls and prepares for
removal of NEXT_PUBLIC_* env var fallbacks.

Pattern: server component (data fetch) → client component (interactivity)"

# Commit 3: the form proxy
git add src/app/api/form-submit/route.ts
git add src/app/components/Form.tsx
git rm src/app/ConfigureAmplifyClientSide.ts
git commit -m "fix(security): proxy form submissions through Next.js API route

Replaces client-side AWS Amplify SDK with server-side proxy at
/api/form-submit. The X-Api-Key header is now applied server-side using
API_KEY (server-only) instead of NEXT_PUBLIC_API_KEY (browser-exposed).

Removes ConfigureAmplifyClientSide.ts as the AWS Amplify SDK is no longer
needed in client code."
```

Push:
```bash
git push -u origin feat/security-hardening
```

---

## Step 9 — Merge to dev and verify on Amplify

1. Open PR from `feat/security-hardening` → **`dev`** (NOT main)
2. Review the diff one more time
3. Merge the PR
4. Watch AWS Amplify console — dev branch should auto-build and deploy
5. Wait for deploy to complete (~3-5 minutes)

### 9a — Critical verification on dev URL

Open the dev URL in a browser. Run through this checklist:

**Functional:**
- [ ] Home page loads
- [ ] Header navigation menu shows services (no flicker, no empty state)
- [ ] All locations dropdown works
- [ ] About page loads, values render
- [ ] Services page loads, all service cards render with images
- [ ] Blog list page loads, articles render
- [ ] Click a blog post → individual post loads with rich text
- [ ] Open the contact/referral form → submit a test entry
- [ ] Verify confirmation email arrives at the test email
- [ ] Verify business notification email arrives

**Security verification:**
- [ ] Open DevTools → Sources tab
- [ ] In the file search (Cmd+P or Ctrl+P), search for files containing the actual Contentful access token value
  - Search for the token by its value (or first 10 characters)
  - Expected: **zero matches**
- [ ] Repeat for the API key value: zero matches
- [ ] Open DevTools → Network → reload page → check no requests are made to `images.ctfassets.net` with auth headers from the browser (server-rendered images come from Contentful URLs, but the credential isn't in browser-side requests)
- [ ] Open DevTools → Network → submit form → request goes to `/api/form-submit`, NOT to the API Gateway URL

**If ANY check fails, do NOT proceed.** Investigate and fix on a follow-up commit to `feat/security-hardening`. Do not merge to main with broken dev.

---

## Step 10 — Remove old `NEXT_PUBLIC_*` env vars from Amplify

Once dev is fully verified working, remove the legacy env vars.

In AWS Amplify console:
1. Hosting → Environment variables → Manage variables
2. Delete `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
3. Delete `NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY`
4. Delete `NEXT_PUBLIC_API_KEY`
5. Save
6. Trigger redeploy of `dev` branch (Amplify console → Deployments → "Redeploy this version")
7. Wait for deploy
8. Re-run all verification checks from Step 9a

If anything breaks after this, the fix is to re-add the deleted env vars while we investigate.

---

## Step 11 — Update local `.env.local`

Remove the legacy entries from `.env.local`:

```
# Final state — remove the NEXT_PUBLIC_CONTENTFUL_* and NEXT_PUBLIC_API_KEY entries
CONTENTFUL_SPACE_ID=...
CONTENTFUL_ACCESS_TOKEN=...
API_KEY=...
AUSADVENT_QUOTES_ENDPOINT=...
NEXT_PUBLIC_MICROSOFT_CLARITY=...
NEXT_PUBLIC_TRACKING_ID=...
```

---

## Step 12 — Merge dev → main, deploy production

After dev is verified WITHOUT the legacy env vars:

1. Open PR from `dev` → `main`
2. Title: `Security: remove client-side credential exposure (Contentful + API Gateway)`
3. Description: brief summary referencing this handoff doc
4. Merge to main
5. Amplify deploys production
6. Run the same verification checklist (Step 9a) on the production URL

---

## Step 13 — Rotate compromised credentials

Both credentials have been public for an extended period. Rotate them now.

### 13a — Contentful CDA token

1. Log into Contentful dashboard
2. Settings → API keys
3. Identify the active CDA token
4. Generate a new CDA token with the same permissions
5. Copy the new value
6. In Amplify, update `CONTENTFUL_ACCESS_TOKEN` env var with new value
7. Update `.env.local`
8. Trigger redeploy of dev and main
9. Verify both still load Contentful content
10. Once verified working, DELETE the old token in Contentful

### 13b — API Gateway key

1. AWS Console → API Gateway → ausadventQuotes → API Keys
2. Identify the active API key
3. Create a new API key with the same usage plan
4. Copy the new value
5. In Amplify, update `API_KEY` env var with new value
6. Update `.env.local`
7. Trigger redeploy of dev and main
8. Test the form submission on dev
9. Test on main
10. Once both work, DELETE the old API key in API Gateway

---

## Step 14 — Sync the migration branch

```bash
git checkout feat/migration-contentful-to-sanity
git pull origin dev
```

Resolve any conflicts (likely minimal). Verify build:
```bash
npm run lint
npm run build
```

Migration branch is now ready for Phase 2 (Sanity setup).

---

## Verification gate — Phase 1 complete when ALL of these are true

- [ ] All 5 components refactored (Header, Services, LatestArticles split into server+client; Form refactored to use proxy; ConfigureAmplifyClientSide deleted)
- [ ] Form proxy API route exists at `src/app/api/form-submit/route.ts`
- [ ] `src/lib/contentful.ts` no longer has `NEXT_PUBLIC_*` fallback
- [ ] All Amplify env vars are non-prefixed (no `NEXT_PUBLIC_CONTENTFUL_*`, no `NEXT_PUBLIC_API_KEY`)
- [ ] Both dev and main deployments succeed
- [ ] Dev URL: all pages load, form submits, confirmation emails arrive
- [ ] Main URL: all pages load, form submits, confirmation emails arrive
- [ ] Browser DevTools search confirms ZERO Contentful credentials and ZERO API key in JS bundles on both dev and main
- [ ] Contentful CDA token rotated; old token deleted
- [ ] API Gateway key rotated; old key deleted
- [ ] `.env.local` only contains non-prefixed Contentful + API_KEY + non-secret tracking IDs
- [ ] `feat/migration-contentful-to-sanity` synced and builds clean
- [ ] Discovery Report Section 9 (Deviations) updated with the two findings discovered during pre-flight
- [ ] Discovery Report Section 10 (Session journal) updated with Phase 1 outcome
- [ ] `CURRENT.md` updated to point to next phase (Phase 2 — Sanity setup)

---

## Revert procedures

### If Step 9 verification fails
- Investigate and fix on `feat/security-hardening`
- Re-run verification
- Do NOT merge to main until dev is fully working

### If Step 10 (env var removal) breaks the build
```
Re-add the deleted env vars in Amplify, redeploy. The fallback is gone in
code (Step 6) but the build will succeed if the unprefixed env vars exist.
The exposure remains until the env vars are properly removed.
```

### If Step 12 (main merge) breaks production
```bash
git checkout main
git revert <merge-commit-sha>
git push origin main
```
Amplify auto-deploys the revert. Production restored.

### If Step 13 (rotation) breaks anything
- Old token/key is still active until explicitly deleted
- Revert Amplify env var to old value
- Investigate why new credential isn't working
- Don't delete the old credential until new is confirmed

---

## What this phase does NOT do

To be explicit:
- Does NOT update Dependabot vulnerabilities (78 reported on main; tracked separately)
- Does NOT rotate the Microsoft Clarity or Tracking ID (these are public-by-design)
- Does NOT touch the n8n workflows or other non-website code
- Does NOT migrate to Sanity — that's Phase 2

---

## After Phase 1 completes

Update `CURRENT.md`:
```
Active phase: Phase 2 — Sanity Setup
Read: docs/handoffs/06_PHASE_2_SANITY_SETUP.md (to be produced after Phase 1 verification)
```

Update Discovery Report:
- Section 6 (Phased migration plan): mark Phase 1 ✅ complete
- Section 10 (Session journal): log Phase 1 completion

Then return to the Lead Architect chat with: "Phase 1 verified complete; Batch 2 trigger conditions met."

The Lead Architect produces:
- The Batch 2 platform setup packages (knowledge base, glossary, multi-account housekeeping, etc.)
- Phase 2 Sanity setup handoff
