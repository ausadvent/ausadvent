# RULES OF ENGAGEMENT — AUSADVENT CARE Digital Engine

## Identity
- Project: AUSADVENT CARE NDIS Provider Website & Automation
- Stack: Next.js 14+ (App Router), Tailwind CSS, Contentful, Airtable, n8n
- Hosting: AWS Amplify (main = production, dev = staging)

## Brand Standards
- Primary Color: #2563EB (Blue 600) — must pass WCAG 2.1 AA (4.5:1) against white
- Primary Dark: #1E40AF (Blue 800) — use for text on light backgrounds
- Secondary Color: #F59E0B (Amber 500)
- Font: Inter, sans-serif
- Voice: Professional, calming, NDIS-compliant. No jargon. Clear and accessible.

## Code Standards
1. Always use `'use client'` or `'use server'` directives explicitly in every component.
2. Use TypeScript interfaces for all component props.
3. Use functional components only (no class components).
4. Disallow unescaped HTML entities (`react/no-unescaped-entities`). Use `&apos;` or `&quot;`.
5. Use Next.js `<Image>` component with `priority` for LCP elements.
6. Fetch Contentful data in Server Components. Use the centralized client at `src/lib/contentful.ts`.
7. All environment variables must be validated before use. Never silently fail.
8. ESLint must pass with zero warnings before any commit.

## Accessibility (Non-Negotiable)
- WCAG 2.1 AA compliance required.
- All interactive elements must have visible focus indicators.
- All images must have meaningful alt text.
- Color contrast ratio: minimum 4.5:1 for normal text, 3:1 for large text.
- Form inputs must have associated labels.

## Tailwind Conventions
- Use `brand-` prefix for custom color tokens (e.g., `bg-brand-primary`, `text-brand-secondary`).
- Avoid arbitrary values `[]` when a Tailwind utility exists.
- Mobile-first responsive design.


## Git Rules
- Branch from `dev`, never from `main`.
- Branch naming: `feature/`, `fix/`, `chore/`
- Commit prefixes: `feat:`, `fix:`, `chore:`
- Always run `npm run lint` before committing.
- PR into `dev` first, then `dev` → `main` for production.

## AI Agent Rules
- Always scan the codebase before refactoring (`@Codebase` or directory scan).
- Never modify files outside the current feature scope without permission.
- Explain WHY before showing code — teach, don't just implement.
- One step at a time. Wait for confirmation before proceeding.
- Create reusable components. Fewer lines = better.