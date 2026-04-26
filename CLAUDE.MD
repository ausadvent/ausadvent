# Project: AUSADVENT CARE Digital Engine

## Company
- **What:** Registered NDIS Provider (Queensland & Western Australia)
- **Services:** NDIS Accommodation, Support Workers
- **Users:** Participants (fill referral form), Case Managers (assign workers), Support Workers (view assigned participants)

## Brand Identity
- **Primary:** #2563EB (Blue 600) — headings, accents, dividers
- **Primary Dark:** #1E40AF (Blue 800) — body text on white (better contrast)
- **Secondary:** #F59E0B (Amber 500)
- **Error:** #DC2626 (Red)
- **Gray:** #6B7280
- **Font:** Inter, sans-serif
- **Voice:** Professional, calming, NDIS-compliant. No jargon.

## Tech Stack
- **Framework:** Next.js 14+ (App Router, `src/app/`)
- **Styling:** Tailwind CSS with `brand-` prefix tokens
- **CMS:** Contentful (headless) — centralized client at `src/lib/contentful.ts`
- **Database:** Airtable (3 tables: Participants, Support Workers, Case Managers)
- **Automation:** n8n (Docker container, NOT npm global install)
- **Forms:** Tally (`https://tally.so/r/mVAP0l`)
- **PDF Generation:** Google Docs template → PDF export via n8n
- **Email:** Gmail (free) via n8n
- **Hosting:** AWS Amplify (`main` = production, `dev` = staging)

## Infrastructure
- **Docker Runtime (local):** OrbStack — lightweight macOS Docker GUI
- **Docker Runtime (production):** Docker on AWS Lightsail
- **Production Server:** AWS Lightsail $5/mo plan (1 vCPU, 1GB RAM, 40GB SSD, 2TB transfer)
- **Production URL:** `automation.ausadventcare.com.au` (Lightsail + NGINX + Let's Encrypt SSL)
- **Node Version:** 20 LTS (managed via nvm, `.nvmrc` in project root)
- **n8n:** Always runs in Docker. Never install via npm.
- **Webhook Testing:** ngrok (`ngrok http 5678`)

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
- **Contentful:** Always use centralized client at `src/lib/contentful.ts`.
- **Safety:** Validate environment variables before use. Never silently fail.
- **Entities:** Disallow unescaped HTML entities. Use `&apos;` or `&quot;`.
- **Images:** Use Next.js `<Image>` with `priority` for LCP elements.
- **Data Fetching:** Fetch Contentful data in Server Components where possible.

## Accessibility (WCAG 2.1 AA — Non-Negotiable)
- Color contrast: 4.5:1 normal text, 3:1 large text.
- Use `#1E40AF` for body text on white (`#2563EB` barely passes).
- Visible focus indicators on all interactive elements.
- Meaningful alt text on all images.
- Labels on all form inputs.

## File Structure
```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── ui/              # Button, Input, Card, Badge
│   └── sections/        # Hero, Footer, ServiceCards
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
- **Node version:** `nvm use` (reads `.nvmrc`, uses Node 20)
- **n8n start:** `cd n8n && docker compose up -d`
- **n8n stop:** `cd n8n && docker compose down`
- **n8n logs:** `docker logs ausadvent-n8n --tail 50`
- **Webhook tunnel:** `ngrok http 5678`

## Git Workflow
- Branch from `dev`, never from `main`.
- Branch naming: `feature/`, `fix/`, `chore/`
- Commit prefixes: `feat:`, `fix:`, `chore:`
- Always run `npm run lint` before committing.
- Identity: Verify `ausadvent` account via `gh auth status`.
- Use GitLens to verify commit authors and compare branches.

## AI Agent Rules
- Read `RULES_OF_ENGAGEMENT.md` before starting any task.
- Scan codebase before refactoring.
- Never modify files outside the current feature scope.
- Explain WHY before showing code.
- One step at a time. Wait for confirmation.
- Fewer lines = better. Create reusable components.
- New chat session for each new feature.

## Automation: Referral Form Pipeline
- **Tally form** (15 fields) → webhook POST to n8n
- **n8n** (8-node workflow): webhook → map fields → Airtable create → Google Docs fill → PDF export → Drive upload → Airtable update → Gmail send
- **Google Docs template:** 16 placeholders (15 Tally + 1 auto referral_date)
- **Airtable:** 3 tables (Participants, Support Workers, Case Managers)
- **Dashboards:** Case Manager = Airtable Interface, Support Worker = Shared View (read-only)

## Project Phases
- **Phase 1:** ✅ Contentful refactor to `src/lib/contentful.ts` — DONE
- **Phase 2:** n8n referral form automation (CURRENT PRIORITY)
- **Phase 3:** UI/UX aesthetic pass, WCAG audit, component library