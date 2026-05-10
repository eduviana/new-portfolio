# AGENTS.md

## Commands
- `npm run dev` — Start dev server (uses Turbopack, port 3000)
- `npm run build` — Production build
- `npm run lint` — Run ESLint

## Project Structure
- `app/` — Next.js App Router pages and components
- `app/page.tsx` — Homepage
- `app/[projectId]/page.tsx` — Dynamic project detail pages
- `app/projects-data/data.ts` — Projects data source (edit here to add/modify projects)
- `public/projects/` — Project screenshots organized by category

## Tech Stack
- Next.js 15 + React 19 + TypeScript
- Tailwind CSS with typography plugin
- Path alias: `@/*` maps to project root

## Notes
- No tests configured
- No pre-commit hooks
- Build output goes to `.next/`
- Custom brand colors defined in `tailwind.config.js` (zinc/orange theme)