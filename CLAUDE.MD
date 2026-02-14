# Project: AUSADVENT CARE Digital Engine

## Company
- **What:** Registered NDIS Provider (Queensland &amp; Western Australia)
- **Services:** NDIS Accommodation, Support Workers
- **Users:** Participants (fill referral form), Case Managers (assign workers), Support Workers (view assigned participants)

## Brand Identity
- **Primary:** #2563EB (Blue 600) — use for headings, accents, dividers
- **Primary Dark:** #1E40AF (Blue 800) — use for body text on white backgrounds (better contrast)
- **Secondary:** #F59E0B (Amber 500)
- **Error/Warning:** #DC2626 (Red)
- **Gray:** #6B7280
- **Font:** Inter, sans-serif
- **Voice:** Professional, calming, NDIS-compliant. No jargon. Clear and accessible.

## Tech Stack
- **Framework:** Next.js 14+ (App Router, `src/app/`)
- **Styling:** Tailwind CSS with `brand-` prefix tokens
- **CMS:** Contentful (headless) — centralized client at `src/lib/contentful.ts`
- **Database:** Airtable (3 tables: Participants, Support Workers, Case Managers)
- **Automation:** n8n (local community edition, free)
- **Forms:** Tally (`https://tally.so/r/mVAP0l`)
- **PDF Generation:** Google Docs template → PDF export via n8n
- **Email:** Gmail (free) via n8n
- **Hosting:** AWS Amplify (`main` = production, `dev` = staging)

## Development Environment
- **IDE:** VS Code (primary)
- **AI Agents:**
  - Continue.dev (AI chat sidebar, Claude + Gemini providers)
  - Claude CLI (terminal, deep refactors and debugging)
  - Codex (high-level planning and complex logic)
  - Cursor (optional, for UI/UX rapid iteration)
- **Key Extensions:**
  - GitLens (inline blame, branch graph, diff comparison, identity verification)
  - Tailwind CSS IntelliSense
  - ESLint + Prettier

## Development Standards
- **Routing:** Next.js App Router (`src/app`).
- **Styling:** Tailwind CSS with `brand-` prefix tokens.
- **Components:** Functional components with TypeScript interfaces. No class components.
- **Directives:** Always use `'use client'` or `'use server'` explicitly.
- **Contentful:** Always use the centralized client at `src/lib/contentful.ts`. Never create separate clients.
- **Safety:** Validate environment variables before client initialization. Never silently fail.
- **Entities:** Disallow unescaped HTML entities (`react/no-unescaped-entities`). Use `&amp;apos;` or `&amp;quot;`.
- **Images:** Use Next.js `&lt;Image&gt;` component with `priority` for LCP elements.
- **Data Fetching:** Fetch Contentful data in Server Components where possible.

## Accessibility (WCAG 2.1 AA — Non-Negotiable)
- Color contrast: 4.5:1 for normal text, 3:1 for large text.
- Use `#1E40AF` for body text on white backgrounds (`#2563EB` barely passes).
- All interactive elements must have visible focus indicators.
- All images must have meaningful alt text.
- All form inputs must have associated labels.

## File Structure
```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── ui/              # Atomic: Button, Input, Card, Badge
│   └── sections/        # Page: Hero, Footer, ServiceCards
├── lib/
│   ├── contentful.ts    # Centralized Contentful client
│   └── utils.ts         # Helper functions
├── types/               # TypeScript type definitions
└── styles/              # Global styles
```

## Essential Commands
- **Install:** `npm install`
- **Dev:** `npm run dev`
- **Lint:** `npm run lint` (must pass zero warnings before commit)
- **n8n:** `n8n start` (automation engine at `http://localhost:5678`)
- **Tunnel:** `ngrok http 5678` (expose n8n for Tally webhooks during testing)

## Git Workflow
- **Branch from `dev`**, never from `main`.
- **Branch naming:** `feature/`, `fix/`, `chore/`
- **Commit prefixes:** `feat:`, `fix:`, `chore:`
- **Always run `npm run lint` before committing.**
- **Identity:** Verify `ausadvent` GitHub account via `gh auth status` before pushing.
- **Use GitLens** to verify commit authors and compare branches before merging.

## AI Agent Rules
- **Read `RULES_OF_ENGAGEMENT.md`** before starting any task.
- Scan codebase before refactoring (`@Codebase` or directory scan).
- Never modify files outside the current feature scope without permission.
- Explain **why** before showing code — teach, don't just implement.
- One step at a time. Wait for confirmation before proceeding.
- Create reusable components. Fewer lines = better.
- Start a **new chat session** for each new feature to save tokens.

## Automation: Referral Form Pipeline
- **Tally form** (15 fields) → webhook POST to n8n
- **n8n** (8-node workflow): receive → map fields → Airtable create → Google Docs fill → PDF export → Drive upload → Airtable update → Gmail send
- **Google Docs template:** 16 placeholders (see `RULES_OF_ENGAGEMENT.md` for full mapping)
- **Airtable:** 3 tables (Participants, Support Workers, Case Managers)
- **Dashboards:** Case Manager = Airtable Interface, Support Worker = Shared View (read-only)

## Project Phases
- **Phase 1:** Agent optimization, Contentful refactor to `src/lib/contentful.ts`
- **Phase 2:** n8n referral form automation (current priority)
- **Phase 3:** UI/UX aesthetic pass, WCAG audit, component library