# CURRENT — What's Active Right Now

**Last updated:** 26 April 2026
**Updated by:** Lead Architect (initial creation)

---

## Active phase

**Phase 0 — Branch Cleanup**

## Where to find instructions

Read: `docs/handoffs/02_PHASE_0_BRANCH_CLEANUP.md`

## Phase status

🟢 Ready to start

Prerequisites:
- ✅ Discovery Report read and understood
- ✅ Agents installed at `.claude/agents/`
- ✅ Multi-account git authentication resolved (using `ausadvent` for this repo)

## Estimated effort

15 minutes. Low risk. No production impact.

## What this phase does

Deletes stale branches: `feature/design-system-refresh`, `new`, `staging`, `staging-james`. Captures branch SHAs first as recovery insurance. Verifies no work is lost.

## Next phase after this completes

**Phase 1 — Security Hotfix** (`docs/handoffs/03_PHASE_1_SECURITY_HOTFIX.md`)

This is the credential exposure fix. Higher risk because it touches production. ~90-120 minutes including AWS Amplify changes.

## Notes for the next session

- Multi-account git authentication is now configured. Active account in `gh` CLI must be `ausadvent` for pushes to this repo. Check with `gh auth status` before pushing.
- Browser must also be logged in as `ausadvent` for opening/merging PRs (not `jamescripto`, who has contributor status only).
- AWS Amplify is deploying from `ausadvent/ausadvent` — both `dev` and `main` branches.
- 78 Dependabot vulnerabilities reported on `main` (3 critical, 34 high). Logged for future remediation phase. NOT addressed during current migration work.

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
