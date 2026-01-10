# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CheapRateMortgage is a mortgage rate tracking website displaying weekly national average rates from the Federal Reserve (FRED API). Live at cheapratemortgage.com.

## Commands

All commands run from `cheapratemortgage-frontend/`:

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build (also validates TypeScript)
npm run start    # Production server (binds to 0.0.0.0)
npm run lint     # ESLint checks
```

## Git Workflow

Never commit directly to main. Always use feature branches:
1. `git checkout main && git pull origin main`
2. `git checkout -b feature/your-feature-name`
3. Make changes and commit
4. Push and create PR: `git push -u origin feature/your-feature-name`
5. Merge via GitHub PR

## Pre-Commit Checklist

Before commits:
1. `npm run build` - ensure no type errors
2. `npm run lint` - fix linting issues
3. Update `docs/CHANGELOG.md` if features changed
4. Update `docs/project_status.md` if status changed

## Architecture

### Tech Stack
- Next.js 16 with App Router, TypeScript, Tailwind CSS 4, React 19
- Data: FRED API (30-year: `MORTGAGE30US`, 15-year: `MORTGAGE15US`)

### Key Patterns
- **Server Components by default** - Only use `'use client'` for interactive elements (calculator, accordion)
- **ISR caching** - 6-hour revalidation matches FRED's Thursday update schedule
- **No external chart libraries** - Custom SVG chart in `RateChart.tsx`
- **CSS Variables for theming** - Use `var(--color-*)` from `globals.css`

### Project Structure
```
cheapratemortgage-frontend/src/
├── app/                          # Pages and routes
│   ├── api/mortgage-rates/       # FRED API proxy
│   ├── calculator/               # Calculator page
│   └── [page].tsx                # Static pages
├── components/
│   ├── features/                 # Domain components (calculator, mortgage-rates, content)
│   ├── layout/                   # Header, Footer
│   └── ui/                       # Reusable UI (Accordion)
├── lib/fred-api.ts               # FRED API client with caching
└── types/mortgage.ts             # TypeScript interfaces
```

### Data Flow
1. `lib/fred-api.ts` fetches FRED data with 6-hour ISR cache
2. Server components receive rate data at build/revalidation time
3. Only `MortgageCalculator` and `Accordion` hydrate on client

## Design System

### Colors (CSS Variables)
- `--color-ink`: #1a1f2e (primary text)
- `--color-paper`: #faf9f7 (background)
- `--color-accent`: #c9a227 (gold - rates, highlights)
- `--color-success`: #2d6a4f (rate decrease)
- `--color-danger`: #9b2c2c (rate increase)

### Typography
- Display: DM Serif Display (headlines, rate values)
- Body: Source Sans 3 (body text, UI)

## Environment Variables

Required in `cheapratemortgage-frontend/.env.local`:
```
FRED_API_KEY=your_key_here
```

Get free key: https://fred.stlouisfed.org/docs/api/api_key.html

## Documentation Updates

When making changes, update these files:

| File | When to Update |
|------|----------------|
| `docs/CHANGELOG.md` | Any feature added, changed, or fixed |
| `docs/project_status.md` | Features completed, issues found, status changes |
| `docs/Architecture.md` | New components, data flow changes, API changes |

### Changelog Entry Format
```markdown
### Added/Changed/Fixed
- **ComponentName** - Brief description of what was added/changed
```

## Documentation Reference

- `docs/Architecture.md` - System design, component structure
- `docs/design.md` - Design system details
- `docs/site-concept.md` - Original project requirements
