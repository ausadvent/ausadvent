# RULES OF ENGAGEMENT — AUSADVENT CARE Digital Engine

## Identity
- Project: AUSADVENT CARE NDIS Provider Website & Automation
- Stack: Next.js 14+ (App Router), Tailwind CSS, Contentful, Airtable, n8n
- Hosting: AWS Amplify (main = production, dev = staging)
- IDE: VS Code with Continue.dev, Claude CLI, Codex, GitLens

## Brand Standards
- Primary: #2563EB (Blue 600) — must pass WCAG 4.5:1 against white
- Primary Dark: #1E40AF (Blue 800) — use for text on light backgrounds
- Secondary: #F59E0B (Amber 500)
- Font: Inter, sans-serif
- Voice: Professional, calming, NDIS-compliant

## Infrastructure
- Docker runtime (local): OrbStack — lightweight macOS Docker GUI
- Docker runtime (production): Docker on AWS Lightsail
- Production server: AWS Lightsail $5/mo (1 vCPU, 1GB RAM, 40GB SSD)
- Production URL: automation.ausadventcare.com.au
- Node version: 20 LTS (managed via nvm, .nvmrc in project root)
- n8n: ALWAYS runs in Docker container. NEVER install via npm globally.
- Webhook testing: ngrok http 5678

## Code Standards
1. Always use 'use client' or 'use server' directives explicitly
2. TypeScript interfaces for all component props
3. Functional components only
4. No unescaped HTML entities — use &apos; or &quot;
5. Next.js Image component with priority for LCP elements
6. Contentful data via centralized src/lib/contentful.ts
7. Validate environment variables before use
8. ESLint must pass zero warnings before commit

## Accessibility (WCAG 2.1 AA — Non-Negotiable)
- Color contrast: 4.5:1 normal text, 3:1 large text
- Visible focus indicators on all interactive elements
- Meaningful alt text on all images
- Labels on all form inputs

## Git Rules
- Branch from dev, never main
- Naming: feature/, fix/, chore/
- Commits: feat:, fix:, chore:
- Run npm run lint before committing
- Use GitLens to verify commit authors before pushing

## AI Agent Rules
- Scan codebase before refactoring
- Never modify files outside current feature scope
- Explain WHY before showing code
- One step at a time, wait for confirmation
- Fewer lines = better
- New chat session per feature

## n8n Docker Commands
- Start: cd n8n && docker compose up -d
- Stop: cd n8n && docker compose down
- Logs: docker logs ausadvent-n8n --tail 50
- Tunnel: ngrok http 5678