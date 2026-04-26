# AUSADVENT CARE — Handoffs

This folder contains everything needed to continue work on this project, regardless of how much time has passed since the last session.

---

## 🚀 Kickoff prompt for Engineer 2

Copy and paste this into a new Claude (Sonnet) chat to start a working session:

> You are Engineer 2 on the AUSADVENT CARE project — a Next.js website for a registered NDIS provider, undergoing a Contentful → Sanity migration plus a security hardening pass.
>
> Your role:
> - You manage the implementation work but you do NOT write code.
> - You guide James (the project owner, a graphic designer learning development) through implementation step by step.
> - You delegate specialized tasks to the agents in `.claude/agents/` (scout, reviewer, security-auditor, refactor, ui-builder, migration-specialist, schema-architect, debugger, docs-writer).
> - You report back to the Lead Architect (a separate Claude chat that produces the strategic plans) when something requires architectural decisions or you cannot resolve a blocker.
>
> First steps:
> 1. Read `docs/handoffs/README.md` (this folder's README) for the system overview and your standing rules.
> 2. Read `docs/handoffs/CURRENT.md` to find what work is currently active.
> 3. Read `docs/handoffs/01_DISCOVERY_REPORT.md` for the project's full state, conventions, and history.
> 4. Read the specific phase handoff doc that `CURRENT.md` points to.
> 5. Confirm with James you understand the active task before issuing any commands.
>
> Standing rules:
> - One step at a time. Wait for James's confirmation before moving forward.
> - Atomic commits with conventional prefixes (`feat:`, `fix:`, `chore:`, `refactor:`).
> - Never push directly to `main` or `dev` — always feature branches and PRs.
> - At the end of each session, update the Discovery Report's session journal AND update `CURRENT.md` if the active phase has shifted.
> - Escalate to the Lead Architect if: the architecture needs changing, a phase reveals new findings that change the plan, or an agent's output looks systematically wrong.
> - Do not write code. Use agents (or guide James) to make code changes.
>
> Acknowledge when you have completed reading the four files above and are ready to begin.

---

## What's in this folder

```
docs/handoffs/
├── README.md                       ← This file. Stable orientation.
├── CURRENT.md                      ← Always tells you what's active right now.
├── 01_DISCOVERY_REPORT.md          ← The project journal and source of truth.
├── 02_PHASE_0_BRANCH_CLEANUP.md    ← Phase 0 instructions.
├── 03_PHASE_1_SECURITY_HOTFIX.md   ← Phase 1 instructions.
├── 04_AGENT_INSTALLATION.md        ← How agents were installed.
└── (future phases get added as they're planned)
```

## How the handoff system works

Three tiers operate in concert:

```
LEAD ARCHITECT (separate Claude chat — strategic)
  Produces handoff packages, makes architectural decisions
       ↓
ENGINEER 2 (Claude Sonnet chat — operational)
  Reads packages, manages agents, guides James
       ↓
SPECIALIZED AGENTS (.claude/agents/ — execution)
  Scoped tasks (review, refactor, scan, etc.)
```

When work is active:
- **Engineer 2** orients via this README → CURRENT.md → active phase doc
- **Engineer 2** delegates narrow tasks to agents and guides James through commands
- **Engineer 2** updates CURRENT.md and the Discovery Report at session end
- **Engineer 2** escalates to the Lead Architect when scope or strategy changes

## Why the README is stable and CURRENT.md is dynamic

If a kickoff prompt baked in *"Start with Phase 0"*, that prompt would go stale the moment Phase 0 finished. Instead:

- **README.md** says *"To find what's active, read CURRENT.md."* This is permanent.
- **CURRENT.md** says *"Phase X is active. Read doc Y."* This gets updated whenever a phase completes.

CURRENT.md is short by design (under 30 lines). It's meant to be replaced wholesale, not edited carefully. The cost of updating is low, so it actually gets updated.

## Maintenance protocol

Every handoff doc contains a verification gate at the end. The final item in every gate is:

> **Update `CURRENT.md` to point to the next phase before declaring this phase complete.**

This makes the dynamic file's update non-negotiable. Without it, the verification gate cannot pass, and the phase isn't done.

The Discovery Report's session journal (Section 10) is also updated at the end of every session. Together, CURRENT.md and the session journal answer two complementary questions:
- "What is active right now?" → CURRENT.md
- "What has happened in this project so far?" → Discovery Report Section 10

## Conventions Engineer 2 must enforce

These are non-negotiable across all phases:

1. **One step at a time.** Never advance multiple steps without James's confirmation.
2. **Verification gates are real.** Every box gets ticked before the next phase starts.
3. **Atomic commits.** One logical change per commit. Conventional commit prefixes.
4. **Branch discipline.** No direct commits to `main` or `dev`. Always feature branches and PRs.
5. **Document deviations.** If reality differs from the handoff doc, log it in Discovery Report Section 9 before proceeding.
6. **No secrets in chat or commits.** Tokens, keys, passwords — refer to them by name only.
7. **Lint before commit.** `npm run lint` must pass with zero warnings.

## Escalation triggers — when Engineer 2 reaches out to the Lead Architect

Escalate when:
- A phase's findings contradict the documented plan (e.g., discovering main and dev have different architectures, as we did at the start)
- A phase's verification gate cannot be passed and the cause isn't documented
- A new architectural decision is required (e.g., choosing between two valid implementation paths)
- An agent's output looks systematically wrong across multiple invocations
- You need to add a new phase or significantly modify an existing one
- The Discovery Report's deviations log grows beyond ~5 entries in a single phase (signal that the plan needs revision)

Don't escalate for:
- Routine command failures (try debugger agent first)
- Small wording or formatting changes
- Standard git workflow questions
- Re-running an agent with adjusted parameters

## File ownership

| File | Updated by | Frequency |
|------|------------|-----------|
| README.md (this file) | Lead Architect | Rarely |
| CURRENT.md | Engineer 2 | Once per phase transition |
| 01_DISCOVERY_REPORT.md (Sections 1-8) | Lead Architect | Phase boundaries |
| 01_DISCOVERY_REPORT.md (Section 9 — Deviations) | Engineer 2 | As needed |
| 01_DISCOVERY_REPORT.md (Section 10 — Session journal) | Engineer 2 | Every session end |
| Phase docs (02, 03, 04, ...) | Lead Architect | Created once, rarely revised |

If Engineer 2 wants to change a Lead Architect-owned section, propose the change first, get approval, then make it. This prevents drift between the strategic plan and operational notes.

---

## Quick reference for James (project owner)

If you (James) are reading this and starting a new session:

1. Open Engineer 2's chat (Claude Sonnet, separate from the Lead Architect chat)
2. Paste the kickoff prompt at the top of this README
3. Wait for Engineer 2 to confirm it has read the four orientation files
4. Tell Engineer 2 what you want to work on (or just "continue from CURRENT.md")
5. Engineer 2 will guide you step by step

If Engineer 2 says it needs to escalate:
1. Pause that chat
2. Open the Lead Architect chat (separate Claude conversation)
3. Paste the question or blocker context
4. Bring the architect's response back to Engineer 2

---

## Lifecycle for new phases

When the Lead Architect produces a new phase doc:

1. The doc is added to `docs/handoffs/` with the next number (`05_PHASE_2_*.md`, etc.)
2. The README's "What's in this folder" tree is updated
3. CURRENT.md is updated to point to the new phase
4. Engineer 2 picks it up on next session start

This way, the system grows phase by phase without requiring rework of stable files.
