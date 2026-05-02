# CURRENT — What's Active Right Now

**Last updated:** 01 May 2026
**Updated by:** Engineer 2

---

## Active phase

**Pending — API Gateway key rotation (Phase 1 blocker)**

## Where to find instructions

Complete the deferred task first:
- Rotate API Gateway key per docs/handoffs/05_PHASE_1_SECURITY_HARDENING.md Step 13b
- Test form on dev and main after rotation
- Delete old API key only after both confirmed working

Then move to: **Phase 2 — Sanity Setup** (handoff doc to be produced by Lead Architect)

## Phase status

🟡 Phase 1 nearly complete — one deferred task remaining before Phase 2 can begin.

## Prerequisites met
- ✅ Phase 0 branch cleanup complete
- ✅ All credentials removed from browser bundle
- ✅ Components refactored to server+client pairs
- ✅ Form proxy created and verified
- ✅ Dev and main verified working
- ✅ Legacy NEXT_PUBLIC_* vars removed from Amplify
- ✅ Contentful token rotated
- ❌ API Gateway key rotation — DEFERRED

## Next phase after blocker clears

Phase 2 — Sanity Setup. Lead Architect to produce handoff doc after Phase 1 blocker is resolved.
