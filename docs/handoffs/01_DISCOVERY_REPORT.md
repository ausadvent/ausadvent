# 01 — Discovery Report

**Project:** AUSADVENT CARE — Contentful → Sanity Migration
**Date:** 25 April 2026
**Author:** Lead Architect (planning agent)
**Audience:** Implementation engineer (Claude Code, Cursor, or human dev)
**Status:** Read this BEFORE executing any other handoff package.

---

## Purpose of this document

This is the single source of truth for the current state of the AUSADVENT CARE codebase, infrastructure, and migration plan. It exists so that any engineer (human or AI) returning to this project — today, next week, or next month — can rebuild full context in under 10 minutes without re-running discovery commands.

Update this document at the end of every work session. Treat it as the project journal.

---

## 1. Project overview

AUSADVENT CARE is a registered NDIS provider operating in Queensland and Western Australia. The website is a Next.js 14 application (App Router) deployed on AWS Amplify, with Contentful as the headless CMS.

**Migration goal:** Replace Contentful with Sanity for cost (free tier ceiling), developer experience (studio-in-repo), and editorial flexibility. The redesign of the site UI is a parallel goal — visual styling does NOT need to be preserved during migration.

---

## 2. Current architectural state

### Repository structure (relevant files)

```
src/
├── lib/
│   └── contentful.ts          ← Exists on dev, NOT on main
├── app/
│   ├── utils/
│   │   ├── fetchArticles.ts   ← Different pattern on main vs dev
│   │   └── fetchServices.ts   ← Different pattern on main vs dev
│   ├── components/
│   │   ├── Values.tsx         ← Different pattern on main vs dev
│   │   └── Framework.tsx      ← Different pattern on main vs dev
│   ├── about/
│   │   └── Values.tsx         ← Duplicate component (also on home page)
│   └── blog/[url]/
│       └── MainContent.tsx    ← Rich Text rendering. Exists on dev only.
└── assets/
    └── contentful/            ← ~50 static image mirrors
```

### Branch divergence — main vs dev

This is the most important fact in this document. **`main` and `dev` have meaningfully different architectures.**

| Aspect | `main` | `dev` |
|--------|--------|-------|
| Centralized client (`src/lib/contentful.ts`) | ❌ Does NOT exist | ✅ Exists |
| Pattern | 5 files each create their own `createClient()` | 5 files import from centralized client |
| Env vars read | `NEXT_PUBLIC_*` only (no fallback) | `CONTENTFUL_*` with `NEXT_PUBLIC_*` fallback |
| Rich Text component (`MainContent.tsx`) | Not present | Present |
| Type safety on env vars | `:any` everywhere | `:any` preserved (not improved by refactor) |

**Implication:** Any fix for `main` is structurally different from any fix for `dev`. They are not the same change applied twice.

### Files on `main` that read `NEXT_PUBLIC_CONTENTFUL_*`

1. `src/app/utils/fetchArticles.ts`
2. `src/app/utils/fetchServices.ts`
3. `src/app/components/Values.tsx`
4. `src/app/about/Values.tsx`
5. `src/app/components/Framework.tsx`

All five follow this anti-pattern:
```typescript
const spaceKey:any = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken:any = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;
const client = createClient({ space: spaceKey, accessToken });
```

### Files on `dev` and `feat/migration-contentful-to-sanity`

`src/lib/contentful.ts` (created by commit `8caca6b`, modified by `6b7a1c6` on 14 Feb 2026):
```typescript
const spaceId =
  process.env.CONTENTFUL_SPACE_ID ?? process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken =
  process.env.CONTENTFUL_ACCESS_TOKEN ?? process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;
```

The `??` fallback to `NEXT_PUBLIC_*` is the security issue on the dev side.

### Local environment

`.env.local` (gitignored, not committed):
- `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
- `NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY`

`.env*.local` IS in `.gitignore` on main. Credentials never entered git history. ✅

---

## 3. AWS Amplify state

### Hosted environments
- `main` (production) — branch on `ausadvent/ausadvent`
- `dev` (development) — branch on `ausadvent/ausadvent`
- No other branches are auto-deployed.
- AWS Amplify is connected to `ausadvent/ausadvent` (NOT `jamescripto/ausadvent`, which is a contributor's fork)

### Environment variables (shared across ALL branches)

| Variable | Status | Purpose |
|----------|--------|---------|
| `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` | ⚠️ Exposed in browser bundle | Contentful space identifier |
| `NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY` | 🔴 Exposed credential | Contentful CDA token (read-only) |
| `NEXT_PUBLIC_API_KEY` | ❓ UNKNOWN — investigate | Unknown purpose |
| `NEXT_PUBLIC_MICROSOFT_CLARITY` | ✅ Public-by-design | Microsoft Clarity tracking ID |
| `NEXT_PUBLIC_TRACKING_ID` | ✅ Public-by-design | Likely Google Analytics ID |
| `_LIVE_UPDATES` | ✅ Amplify internal | Ignore |

**Critical Amplify constraint:** Env vars are configured at the **app level**, applied to ALL branches. There is no per-branch env var separation. This means dev and main share the same env config. Any env var change affects both branches' next builds.

### Open question — `NEXT_PUBLIC_API_KEY`

Unknown what this is for. Must be investigated before Phase 1 closes. Likely candidates:
- Google Maps API key (typically public, restricted by HTTP referrer)
- A third-party form/email service
- Legacy/unused

**Action required:** During Phase 1, run `git grep "NEXT_PUBLIC_API_KEY" -- 'src/**/*'` to identify usage. Document findings before completing Phase 1.

---

## 4. Security exposure summary

### What is exposed RIGHT NOW in production
- `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` — bundled into client JS, visible to anyone viewing site source
- `NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY` — same, but this is a credential

### Risk assessment
- **Space ID:** Low risk. It's an identifier, not a secret. Publicly visible in many open-source examples.
- **Access Key (CDA token):** Medium risk. Read-only token for published content. Cannot modify or delete content. CAN be used to scrape your content and consume API quota tied to your Contentful account.

### Required remediation
1. Remove `NEXT_PUBLIC_` prefix from both Contentful env vars across all locations (code, `.env.local`, Amplify)
2. After fix is verified deployed, **rotate the Contentful CDA token** (old one has been public, treat as compromised)

---

## 5. Branch state

| Branch | Local | Remote | Status | Action |
|--------|-------|--------|--------|--------|
| `main` | — | ✅ | Production. Last commit `9827d31` (hero text update) | Keep, protected |
| `dev` | ✅ | ✅ | Integration. Last commit `9949d5b` (amplify.yml) | Keep, protected |
| `feat/migration-contentful-to-sanity` | ✅ HEAD | Not pushed | Active migration branch, tracks dev | Keep, active |
| `feature/design-system-refresh` | ✅ | ✅ | Already merged to dev via `7430a37`. Stale. | **Delete** |
| `new` | ✅ | ✅ | Created during git learning. Likely redundant. | **Investigate, then delete** |
| `staging` | ✅ | ✅ | Created during git learning. Likely redundant. | **Investigate, then delete** |
| `staging-james` | ✅ | ✅ | Confirmed mistake by owner. | **Delete** |

`upstream/*` remotes exist — likely from a fork-based workflow during early development. Not actioned in this plan; can be reviewed later.
| 27 Apr 2026 | Engineer 2 | Phase 0 | Branch cleanup complete. Stale branches deleted. CURRENT.md and handoffs README recovered and merged to dev. SHAs logged above. | Phase 1 — Security Hotfix |

---

## 6. Phased migration plan

| Phase | Goal | Branch | AWS deploy? |
|-------|------|--------|-------------|
| **0 — Branch Cleanup** | Delete stale branches | (operates on remote) | No |
| **1 — Security Hotfix** | Remove `NEXT_PUBLIC_` exposure on dev + main, rotate token | `dev` then `main` | Yes (both) |
| **2 — Sanity Setup** | Install Sanity Studio, define schemas | `feat/migration-contentful-to-sanity` | No |
| **3 — Content Migration** | Export Contentful content, transform, import to Sanity | `feat/migration-contentful-to-sanity` | No |
| **4 — Component Refactor** | Swap Contentful queries for Sanity GROQ | `feat/migration-contentful-to-sanity` | No |
| **5 — Dev Validation** | Merge migration → dev, verify on AWS dev URL | `dev` | Yes |
| **6 — Production Cutover** | Merge dev → main, decommission Contentful | `main` | Yes |

Each phase has a dedicated handoff document. **Do not skip phases.** Each phase has a verification gate.

> **Note:** Phase 1 was revised on 26 Apr 2026 after Engineer 2's pre-flight `security-auditor` scan found two issues beyond the original scope (`NEXT_PUBLIC_API_KEY` exposing AWS API Gateway key; Contentful used in client components). Original Phase 1 (`03_PHASE_1_SECURITY_HOTFIX.md`) is superseded by `05_PHASE_1_SECURITY_HARDENING.md`. Original retained for historical reference only.
---

## 7. Standing rules for the implementation engineer

These rules apply to ALL handoff packages.

1. **Atomic commits.** One logical change per commit. Clear conventional commit messages (`feat:`, `fix:`, `chore:`, `refactor:`).
2. **Branch discipline.** Never commit directly to `main` or `dev`. Use feature branches.
3. **Verification before progression.** Every phase has a "Verification gate" section. Do not start the next phase until all gates pass.
4. **Document deviations.** If you must deviate from a handoff package (unexpected error, missing file, etc.), document the deviation in this Discovery Report under section 9 before proceeding.
5. **Never paste secrets in commits, logs, or chat.** Use Amplify console for production secrets, `.env.local` for local. If a secret appears anywhere it shouldn't, treat as compromised and rotate.
6. **WCAG 2.1 AA.** Maintain accessibility. Run `npm run lint` before every commit. Lint must pass with zero warnings.
7. **No `any` types in new code.** When refactoring existing `:any` usage, replace with proper types. Do not propagate `:any`.
8. **Security audit findings need verification before scope expansion.** When the `security-auditor` agent flags a finding, verify the underlying assumption (e.g., "is this actually a client component?") with targeted commands (`head -5` on the file, etc.) before treating the finding as confirmed. False positives are part of read-only heuristic scans. Always verify with targeted commands before expanding scope or modifying plans.

9. **Pre-flight scans before any phase that touches production.** Before executing any phase marked "production deploy," run the relevant audit agents (security-auditor, scout) and review findings with the Lead Architect. Pre-flight scans surface issues that initial discovery missed — better to find them before code changes than during them.

10. **Dev URL is the validation gate, not a development environment.** AWS Amplify dev branch deploys are real production-like environments. Use them as the gate before merging to main. Test functionality AND security on the dev URL before promoting to production.
11. **Multi-account authentication.** This repo requires `ausadvent` as the active GitHub identity in BOTH the terminal (`gh auth switch --user ausadvent`) AND the browser (for PR operations). The `jamescripto` account has contributor status but cannot push directly or open PRs. Verify identity before pushing: `gh auth status` should show `ausadvent` as active.

---

## 8. Reusable insights for future projects

These patterns surfaced during discovery and should inform other AUSADVENT projects.

### "It works" ≠ "it's correct"

The Feb 14 refactor (`6b7a1c6`) added a `NEXT_PUBLIC_` fallback to make the build pass. This solved the symptom (build error) but reintroduced the original problem (client-side credential exposure). When fixing build errors related to env vars, ALWAYS verify the fix doesn't compromise security.

### Branch divergence on stale projects

When returning to a project after a gap, never assume `main` and `dev` have the same architecture. Always run a divergence check:
```bash
git log dev..main --oneline    # commits on main not on dev
git log main..dev --oneline    # commits on dev not on main
```

### Amplify env var scope is global, not per-branch

Amplify env vars apply to all branches by default. This means dev cannot test env var changes in isolation from production. Plan env var changes carefully — code fixes must land first on both branches before env vars are swapped.

---

## 9. Deviations log

| Date | Phase | Deviation | Reason | Resolution |
|------|-------|-----------|--------|------------|
| 26 Apr 2026 | Phase 1 prep | `NEXT_PUBLIC_API_KEY` confirmed as AWS API Gateway key (was listed as "unknown" in initial discovery). Used by `Form.tsx` (line 20) and `ConfigureAmplifyClientSide.ts` (line 13), sent as `X-Api-Key` header to AWS Lambda for email sending. | Initial discovery flagged the var as unknown but didn't trace usage. Engineer 2's pre-flight `security-auditor` scan + manual verification confirmed purpose. | Original Phase 1 scope expanded to cover this credential too. New Phase 1 includes Next.js API route proxy at `/api/form-submit` to hold key server-side. Lambda endpoint stays unchanged. |
| 26 Apr 2026 | Phase 1 prep | Contentful client imported and called from 3 client components: `Header.tsx`, `Services.tsx`, `LatestArticles.tsx` (via `fetchData`/`fetchArticles` utilities). All three have `'use client'` directives confirmed. | Original Phase 1 plan would have removed `NEXT_PUBLIC_*` fallback assuming all Contentful calls were server-side. They are not. Removing the fallback would have caused undefined env vars in browser → Contentful client throw → site break. | Phase 1 revised to refactor each component into a server+client pair: `Header.tsx` (server, fetches) renders `HeaderClient.tsx` (client, interactive). Same pattern for Services and LatestArticles. After refactor, `NEXT_PUBLIC_*` fallback can be safely removed. |
| 26 Apr 2026 | Phase 1 prep | Architectural decision: ship as single coordinated Phase 1 instead of splitting into 1A/1B/1C | James proposed leveraging dev environment as validation gate. Confirmed: AWS Amplify dev branch IS a production-like environment. If fixes are validated on dev URL before merging to main, production breakage risk is minimized. Single coordinated fix is cleaner than three deploys. | Phase 1 (Revised) plans all fixes on a single feature branch off `dev`, with thorough dev URL verification before main merge. Documented in `05_PHASE_1_SECURITY_HARDENING.md`. |
| 28 Apr 2026 | Phase 1 | Amplify SSR runtime could not read non-prefixed env vars without writing them to `.env.production` via `amplify.yml`. | Amplify CodeBuild env vars are not automatically available to the Next.js SSR runtime. | Accepted as interim pattern. `amplify.yml` now writes `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`, `API_KEY`, `AUSADVENT_QUOTES_ENDPOINT` to `.env.production` during build. Revisit if project moves off Amplify or adds genuinely sensitive credentials. |
| 28 Apr 2026 | Phase 1 | `NEXT_PUBLIC_` fallback re-introduced to `contentful.ts` by Codex during build debugging, then protected by server-only import. | Workaround for Amplify runtime env var issue. | Fallback retained server-side only. `import 'server-only'` prevents client bundle exposure. Legacy `NEXT_PUBLIC_*` vars removed from Amplify after verification. |
| 01 May 2026 | Phase 1 | API Gateway key rotation deferred. | Time constraint. | Resolution: Completed 03 May 2026. New key created, Amplify updated, form verified on dev and main, old key deleted. |
| 26 Apr 2026 | Pre-Phase 0 (agent install) | Initial `git push` failed with `Permission to ausadvent/ausadvent.git denied to jamesunboun` | macOS Keychain Internet password cached for `jamesunboun` (a third GitHub account); `gh` CLI also had `jamesunboun` set as active account, taking precedence over Keychain | Cleared Keychain Internet password entries for `github.com`. Switched `gh` CLI active account using `gh auth switch --user ausadvent`. Push then succeeded. PROPER FIX: SSH host aliases — deferred to Batch 2 platform setup. |
| 26 Apr 2026 | Pre-Phase 0 (agent install) | PR creation in browser failed with `Validation failed: must be a collaborator` | Browser was logged into GitHub as `jamescripto`, who has contributor status (can fork, can commit, cannot open PRs against this repo) | Logged into browser as `ausadvent` (collaborator/owner with full PR rights). LESSON: For this repo, BOTH terminal `gh` CLI active account AND browser session must be `ausadvent`. They are separate authentication contexts. |
| 26 Apr 2026 | Pre-Phase 0 (agent install) | Discovered redundant `upstream` remote — points to same URL as `origin` (`https://github.com/ausadvent/ausadvent.git`) | Likely set up early in the project's life when a fork-based workflow was being considered, but never used | Removed via `git remote remove upstream`. |
| 26 Apr 2026 | Pre-Phase 0 (agent install) | GitHub reported 78 Dependabot vulnerabilities on `ausadvent/ausadvent` default branch (3 critical, 34 high, 33 moderate, 8 low) on first push | Dependencies have not been updated for an extended period | Logged here for future remediation phase. NOT addressed during current migration work to keep scope focused. Consider as a follow-on phase after migration completes. |

---

## 10. Session journal

End-of-session summary. Update at the end of every work session.

| Date | Engineer | Phase worked on | Outcome | Next session starts with |
|------|----------|-----------------|---------|--------------------------|
| 25 Apr 2026 | Lead Architect (planning) | Discovery | All four locations mapped (main code, dev code, Amplify, .env.local). Three handoff docs produced. | Phase 0 — branch cleanup |
| 26 Apr 2026 | Engineer 2 (Sonnet) + James (verification) | Phase 0 + Phase 1 pre-flight | Phase 0 complete (stale branches deleted). Phase 1 pre-flight scan revealed 2 new findings; escalated to Lead Architect; Phase 1 plan revised. New `05_PHASE_1_SECURITY_HARDENING.md` produced. CURRENT.md updated. | Phase 1 (Revised) — Security Hardening, starting from feat/security-hardening branch off dev |
| 26 Apr 2026 | Lead Architect (planning) + James (execution) | Pre-Phase 0: agent install + multi-account git resolution | Agents and 4 handoffs committed to `dev` via `chore/install-agents-and-handoffs` PR. Migration branch synced. Multi-account git issue resolved (use `ausadvent` for this repo). 4 deviations logged. README + CURRENT.md added to `docs/handoffs/`. | Phase 0 — Branch Cleanup |
| 28 Apr–01 May 2026 | Engineer 2 (Sonnet) + James | Phase 1 Security Hardening | All credentials removed from browser bundle. Components refactored to server+client pairs. Form proxy created. Dev and main verified working. Legacy `NEXT_PUBLIC_*` vars removed from Amplify. Contentful token rotated. API Gateway key rotation deferred. | API Gateway key rotation, then update `CURRENT.md` to Phase 2. |
| 03 May 2026 | Engineer 2 + James | Phase 1 closeout | API Gateway key rotated and verified. Phase 1 fully complete. | Phase 2 — Sanity Setup |
---

## 11. References

- AUSADVENT CARE brand: Primary `#2563EB`, Secondary `#F59E0B`, Inter font
- Original `CLAUDE.MD` and `cursorrules` are project-level and remain authoritative
- Sanity docs: https://www.sanity.io/docs
- Next.js env var docs: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
- GitHub repo: `ausadvent/ausadvent` (public). Contributors: `juanserna8`, `jamescripto`, `ausadvent` (collaborator). AWS Amplify deploys from this repo's `main` and `dev` branches.
- Active git identity for this repo: `ausadvent` (`ausadventdevelopment@gmail.com`) — set in `git config user.email` locally, must also be active in `gh auth status` and in browser session.
- Pending issue (logged for future): 78 Dependabot vulnerabilities on `main` branch. Schedule a remediation phase after migration completes.
