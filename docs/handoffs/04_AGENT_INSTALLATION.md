# 04 — Agent Installation

**Prerequisite:** Read `01_DISCOVERY_REPORT.md` first.
**Risk level:** Low (no production impact, no code changes)
**Estimated time:** 10–15 minutes
**AWS deploy triggered:** No

---

## Objective

Install nine specialized AI agents in the AUSADVENT repo at `.claude/agents/`. These agents will assist with Phase 0, Phase 1, and the subsequent migration phases. Six agents are **portable** (drop-in for any Next.js project); three are **project-specific** to AUSADVENT.

---

## What this handoff installs

### Portable agents (work on any Next.js project)
| Agent | Model | Permissions | Purpose |
|-------|-------|-------------|---------|
| `scout` | Haiku | Read-only | Project structure scanning, discovery reports |
| `debugger` | Sonnet | Read-only | Error analysis without modifying files |
| `reviewer` | Sonnet | Read-only | Security-focused code review (general web) |
| `refactor` | Haiku | Write | Code cleanup and consistency fixes |
| `docs-writer` | Haiku | Write | Documentation, JSDoc, README updates |
| `security-auditor` | Sonnet | Read-only | Scans for credential leaks, env var misconfig, client/server boundary issues |

### Project-specific agents (AUSADVENT-tuned)
| Agent | Model | Permissions | Purpose |
|-------|-------|-------------|---------|
| `ui-builder` | Sonnet | Write | Components using AUSADVENT brand (#2563EB blue, #F59E0B amber), Shadcn, Tailwind |
| `migration-specialist` | Sonnet | Write | Contentful → Sanity migration logic, content transformation |
| `schema-architect` | Sonnet | Write | Sanity schema definitions with strict TypeScript, replaces `:any` |

### Reserved for Batch 2 (require platform layer)
- `knowledge-keeper` — maintains shared knowledge base across projects
- `aws-security-auditor` — AWS Amplify/EC2/IAM-specific security checks
- `glossary-keeper` — maintains a living technical glossary

These three need `~/dev/_platform/` to exist first. They'll be added once the platform is set up.

---

## Step 1 — Verify you're on the right branch

```bash
cd ~/dev/ausadvent  # or wherever the repo lives
git status
```

Expected: clean working tree.

You can install agents on ANY branch, but recommended: install on `dev` so all subsequent branches inherit them. Confirm with James first if uncertain.

```bash
git checkout dev
git pull origin dev
git checkout -b chore/install-claude-agents
```

---

## Step 2 — Create the agents directory

```bash
mkdir -p .claude/agents
```

This creates a `.claude/` folder at the repo root, with an `agents/` subfolder. Both Claude Code and Cursor recognize this convention.

---

## Step 3 — Install the agent files

The agent files are provided alongside this handoff document in:
- `agents/portable/` (six files)
- `agents/project-specific/` (three files)

Copy ALL nine files into the project's `.claude/agents/` folder. The two source folders are flattened into one destination — no subfolders inside `.claude/agents/`.

```bash
# Assuming you have the handoff folder accessible
cp /path/to/handoffs/agents/portable/*.md .claude/agents/
cp /path/to/handoffs/agents/project-specific/*.md .claude/agents/
```

After copy, verify nine files exist:
```bash
ls .claude/agents/
# Expected: scout.md, debugger.md, reviewer.md, refactor.md, docs-writer.md,
# security-auditor.md, ui-builder.md, migration-specialist.md, schema-architect.md
```

Also create a README inside `.claude/agents/` so future engineers understand the folder:

```bash
cat > .claude/agents/README.md << 'EOF'
# AUSADVENT CARE — Claude Agents

This folder contains specialized AI agents used during development.

## Agent philosophy
- Single responsibility per agent
- Minimal context — each agent only sees what it needs
- Read-only where possible (prevents accidental file changes)
- Model tier matched to task complexity (Haiku for simple, Sonnet for complex)

## Portable vs project-specific
- **Portable agents** (scout, debugger, reviewer, refactor, docs-writer, security-auditor)
  work on any Next.js project. Sourced from a shared platform.
- **Project-specific agents** (ui-builder, migration-specialist, schema-architect)
  are tuned for AUSADVENT CARE.

## How to invoke
Inside Claude Code (terminal):
    claude --agent reviewer "Review src/lib/contentful.ts for security issues"

Inside Cursor:
    Cursor reads the agents automatically when set up; reference by name.

For one-off non-interactive queries:
    claude -p --agent scout "List all components that fetch from Contentful"

## Adding new agents
Create a new .md file in this folder following the format:
    ---
    name: agent-name
    description: Brief purpose
    model: haiku | sonnet
    allowedTools: [list]
    ---
    Your agent instructions here.

## Updating portable agents
The six portable agents are versioned in the shared platform.
Do NOT edit them in this repo directly — propose changes to the platform copy
so all projects benefit. Project-specific agents can be edited freely here.
EOF
```

---

## Step 4 — Verify agents are recognized

If you have Claude Code installed:
```bash
claude --list-agents
```

Expected: lists all nine agents by name.

If you don't have Claude Code yet, the agents are still valid markdown files Claude can read. They'll be picked up next time you set up Claude Code.

---

## Step 5 — Test one agent end-to-end

Run a low-risk agent test to confirm everything works:

```bash
claude --agent scout "List all files in src/ that import from contentful, with line counts"
```

Expected: a structured markdown list of files. No code changes.

If this works, the agents are properly installed and reachable.

---

## Step 6 — Commit

```bash
git add .claude/
git commit -m "chore: install Claude Code agents for AUSADVENT migration

Adds nine specialized agents to .claude/agents/:
- 6 portable agents (scout, debugger, reviewer, refactor, docs-writer, security-auditor)
- 3 project-specific agents (ui-builder, migration-specialist, schema-architect)

Agents follow single-responsibility, minimal-context, read-only-by-default
pattern. README in .claude/agents/ explains usage and conventions.

Reserved for Batch 2 (platform layer):
- knowledge-keeper, aws-security-auditor, glossary-keeper

Refs handoff doc 04_AGENT_INSTALLATION.md"

git push origin chore/install-claude-agents
```

Open PR → merge to `dev`. No Amplify deploy is triggered by `.claude/` files (they're not part of the build).

---

## Step 7 — Update Discovery Report

In `01_DISCOVERY_REPORT.md`, update Section 10 (Session journal):

```
| <date> | <engineer> | Phase: Agent install | 9 agents installed in .claude/agents/. Ready for Phase 0/1 work. | Phase 0 — Branch cleanup |
```

---

## Verification gate — agent install complete when ALL of these are true

- [ ] `.claude/agents/` exists with nine `.md` files plus a README
- [ ] At least one agent (`scout`) successfully invoked and returned valid output
- [ ] PR merged to `dev`
- [ ] Discovery Report session journal updated

---

## Revert procedure

To remove the agent install entirely:

```bash
git checkout dev
git revert <merge-commit-sha>
git push origin dev
```

Or, if not yet merged:
```bash
git checkout dev
git branch -D chore/install-claude-agents
git push origin --delete chore/install-claude-agents
```

The `.claude/` folder is a config addition — removing it has no functional impact on the running site.

---

## What happens after Batch 1

Once Phase 0 and Phase 1 are complete and verified, Batch 2 produces:
- The `~/dev/_platform/` shared knowledge base
- Three additional agents (`knowledge-keeper`, `aws-security-auditor`, `glossary-keeper`)
- Multi-account git/AWS housekeeping check
- Glossary subsystem seeded with ~22 terms
- Project index templates

The Batch 1 portable agents will eventually be SOURCED FROM the platform rather than copied directly — but for now, copies in this repo are fine and will continue working.
