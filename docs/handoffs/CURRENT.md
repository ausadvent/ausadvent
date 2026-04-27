# CURRENT — What's Active Right Now

**Last updated:** 26 April 2026
**Updated by:** Lead Architect (escalation response)

---

## Active phase

**Phase 1 (Revised) — Security Hardening**

## Where to find instructions

Read: `docs/handoffs/05_PHASE_1_SECURITY_HARDENING.md`

⚠️ **The original `03_PHASE_1_SECURITY_HOTFIX.md` is SUPERSEDED.** Do NOT execute it.

## Phase status

🟢 Ready to start — pre-flight investigation complete. Two new findings from Engineer 2's `security-auditor` scan have been incorporated into the revised plan.

Prerequisites:
- ✅ Phase 0 (branch cleanup) complete
- ✅ Discovery Report read and understood
- ✅ Agents installed
- ✅ Multi-account git authentication working (`ausadvent` account active)

## Why Phase 1 was revised

Engineer 2's pre-flight scan revealed two issues beyond the original scope:

1. **Contentful client used in 3 client components** — removing the `NEXT_PUBLIC_*` fallback alone would break the site, not just expose less. The components must be refactored first.
2. **`NEXT_PUBLIC_API_KEY` is an AWS API Gateway key** — used by `Form.tsx` for sending emails via Lambda. Also exposed to the browser. Needs a Next.js API route proxy.

Both issues are now bundled into a single coordinated Phase 1 that ships through dev validation before reaching production.

## Estimated effort

4-6 hours including dev validation. Higher than original estimate because the scope grew, but the dev validation gate makes it safer than splitting into multiple smaller deploys.

## What this phase does

**Coordinated security hardening:**
1. Refactors `Header.tsx`, `Services.tsx`, `LatestArticles.tsx` into server+client component pairs (server fetches Contentful, client handles interactivity)
2. Creates a Next.js API route at `/api/form-submit` to proxy form submissions
3. Refactors `Form.tsx` to use the proxy instead of AWS Amplify SDK directly
4. Removes `NEXT_PUBLIC_*` fallback from `src/lib/contentful.ts`
5. Removes all `NEXT_PUBLIC_CONTENTFUL_*` and `NEXT_PUBLIC_API_KEY` from Amplify
6. Rotates Contentful CDA token and API Gateway key (both have been public)

All changes validated on dev URL before merging to main. Production breakage risk minimized.

## Next phase after this completes

**Phase 2 — Sanity Setup** (`docs/handoffs/06_PHASE_2_SANITY_SETUP.md`, to be produced after Phase 1 completes)

This begins the actual Contentful → Sanity migration. Sanity Studio installation, schema definitions, parallel-run setup.

## Notes for the next session

- Multi-account git authentication: terminal `gh` active account must be `ausadvent`. Browser must be logged in as `ausadvent` for PR operations.
- AWS Amplify env vars are shared across all branches (no per-branch separation). Plan changes accordingly.
- 78 Dependabot vulnerabilities on `main` (3 critical) — logged for future remediation phase. NOT addressed during current security work.
- Phase 1 revised plan supersedes Phase 1 hotfix plan. Use only `05_PHASE_1_SECURITY_HARDENING.md`.

---

## How to update this file

When the active phase changes:
1. Replace this entire file's content (don't try to edit in place)
2. Update "Last updated" and "Updated by"
3. Update "Active phase," "Where to find instructions," "Phase status"
4. Update "Next phase after this completes" to the phase after that
5. Update "Notes for the next session" with anything important to remember
6. Commit with message: `chore(handoffs): update CURRENT.md — Phase X complete, Phase Y active`

This file should always be readable in under 30 seconds. If it's getting longer, the extra detail belongs in the Discovery Report's session journal, not here.
