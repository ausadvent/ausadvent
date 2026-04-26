# 02 — Phase 0: Branch Cleanup

**Prerequisite:** Read `01_DISCOVERY_REPORT.md` first.
**Risk level:** Low (no production impact, no code changes)
**Estimated time:** 15 minutes
**AWS deploy triggered:** No

---

## Objective

Delete stale and redundant branches from local and remote repositories. Confirm no work is lost. Establish a clean branch state before the security hotfix begins.

---

## Pre-flight checks

Run these commands and verify the output BEFORE doing anything destructive.

```bash
# 1. Confirm current branch
git branch --show-current
# Expected: feat/migration-contentful-to-sanity
```

```bash
# 2. Confirm no uncommitted work
git status
# Expected: "nothing to commit, working tree clean"
# If NOT clean: stop and ask James before proceeding.
```

```bash
# 3. Fetch latest remote state
git fetch --all --prune
```

---

## Step 1 — Verify `feature/design-system-refresh` is fully merged

This branch has already been merged into `dev` (via merge commit `7430a37`). Confirm this is still true:

```bash
git log dev..feature/design-system-refresh --oneline
```

**Expected output:** Empty (no commits on the branch that aren't on dev).

**If output is NOT empty:** STOP. There are commits on this branch that haven't reached dev. Do not delete. Document in Discovery Report section 9 and ask James.

If the output IS empty, proceed.

---

## Step 2 — Investigate `new` branch

This branch was created during James's git learning phase. Verify its content is not unique:

```bash
# Show last 5 commits on 'new'
git log new --oneline -5
```

```bash
# Check what's on 'new' that isn't on main
git log main..new --oneline
```

```bash
# Check what's on 'new' that isn't on dev
git log dev..new --oneline
```

**Decision rules:**
- If both `main..new` and `dev..new` are empty → safe to delete
- If either contains commits → STOP, document the commits in Discovery Report section 9, ask James before deleting

---

## Step 3 — Investigate `staging` branch

```bash
git log staging --oneline -5
git log main..staging --oneline
git log dev..staging --oneline
```

Same decision rules as Step 2.

---

## Step 4 — Confirm `staging-james` is safe to delete

James has confirmed this was a mistake. Still verify:

```bash
git log staging-james --oneline -5
git log main..staging-james --oneline
git log dev..staging-james --oneline
```

If commits exist that aren't on main or dev, document them, but proceed with deletion as James has confirmed this branch is intentionally being discarded.

---

## Step 5 — Delete confirmed-safe branches

⚠️ **REVERT NOTE:** Before any deletion, the branch SHA is captured in this section's output. If we need to recover a branch, run `git branch <branch-name> <sha>` to restore locally.

### 5a. Capture branch SHAs (for potential recovery)

```bash
echo "feature/design-system-refresh: $(git rev-parse feature/design-system-refresh)"
echo "new: $(git rev-parse new)"
echo "staging: $(git rev-parse staging)"
echo "staging-james: $(git rev-parse staging-james)"
```

**Save this output.** Paste it into the deviation log in `01_DISCOVERY_REPORT.md` section 9 with the date. This is your recovery insurance.

### 5b. Delete local branches

Only delete branches that PASSED Steps 1-4.

```bash
git branch -d feature/design-system-refresh
git branch -d new
git branch -d staging
git branch -D staging-james
```

**Note on `-d` vs `-D`:**
- `-d` = safe delete (refuses if branch has unmerged commits)
- `-D` = force delete (only used here because James confirmed staging-james is intentionally discarded)

If `-d` refuses on `new` or `staging`, the branch has unmerged commits. STOP and re-investigate. Do not use `-D` to force.

### 5c. Delete remote branches

```bash
git push origin --delete feature/design-system-refresh
git push origin --delete new
git push origin --delete staging
git push origin --delete staging-james
```

If any push fails (e.g., branch protection), document and continue. Branch protection on remote is acceptable; James can clean up via GitHub UI.

---

## Step 6 — Verification gate

```bash
git branch -a
```

**Expected branches remaining:**
- `feat/migration-contentful-to-sanity` (current)
- `dev`
- `main`
- `remotes/origin/dev`
- `remotes/origin/main`
- `remotes/upstream/*` (these are from the fork relationship; leave them)

**Expected branches REMOVED:**
- `feature/design-system-refresh` (local + remote)
- `new` (local + remote)
- `staging` (local + remote)
- `staging-james` (local + remote)

If any of the deleted branches still appear, run `git fetch --prune` and verify again.

---

## Revert procedure (if you need to undo Phase 0)

To recover any deleted local branch:
```bash
git branch <branch-name> <sha-from-step-5a>
```

To recover and re-push to remote:
```bash
git branch <branch-name> <sha-from-step-5a>
git push origin <branch-name>
```

The SHAs are kept in commit objects for at least 30 days even after branch deletion (git's reflog and orphan commit retention). Recovery is possible.

---

## Update Discovery Report

After Phase 0 completes, update `01_DISCOVERY_REPORT.md` section 10 (Session Journal):

```
| 25 Apr 2026 | <engineer name> | Phase 0 | Branches cleaned: feature/design-system-refresh, new, staging, staging-james deleted. SHAs logged in section 9. | Phase 1 — Security Hotfix |
```

Also update section 5 (Branch state table) to remove the deleted rows.

---

## Verification gate — DO NOT proceed to Phase 1 until ALL of these are true

- [ ] `git branch -a` shows only the expected branches
- [ ] Pre-deletion SHAs are saved in Discovery Report section 9
- [ ] `git status` is clean
- [ ] `git fetch --prune` runs cleanly
- [ ] Discovery Report session journal updated

Once all checks pass, hand off to James to confirm before starting Phase 1.
