# CheapRateMortgage Frontend

## Project Overview

A Next.js 14+ mortgage rate tracking website that displays weekly national average mortgage rates from the Federal Reserve (FRED API). The site uses an "Editorial Finance" design aesthetic - modern financial publication meets fintech.

## Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **React**: 19.2.3
- **Data Source**: FRED API (Federal Reserve Economic Data)

## Quick Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/mortgage-rates/ # API route for FRED data
│   ├── calculator/         # Mortgage calculator page (PPC landing)
│   ├── layout.tsx          # Root layout with fonts/metadata
│   ├── page.tsx            # Home page
│   ├── robots.ts           # Dynamic robots.txt
│   └── sitemap.ts          # Dynamic sitemap.xml
├── components/
│   ├── features/
│   │   ├── calculator/     # MortgageCalculator component
│   │   ├── content/        # TipsSection, ComparisonSection, FAQSection
│   │   └── mortgage-rates/ # RateCard, RateSummary, RateChart
│   ├── layout/             # Header, Footer
│   └── ui/                 # Reusable UI (Accordion)
├── lib/
│   └── fred-api.ts         # FRED API client
└── types/
    └── mortgage.ts         # TypeScript interfaces
```

## Design System

### Typography (Google Fonts)
- **Display**: DM Serif Display - headlines, rates
- **Body**: Source Sans 3 - body text, UI

### Color Palette (CSS Variables)
```css
--color-ink: #1a1f2e;           /* Deep navy - primary text */
--color-ink-light: #4a5568;     /* Secondary text */
--color-paper: #faf9f7;         /* Warm off-white background */
--color-paper-dark: #f0eeeb;    /* Section backgrounds */
--color-accent: #c9a227;        /* Gold - rates, highlights */
--color-success: #2d6a4f;       /* Green - rate down */
--color-danger: #9b2c2c;        /* Red - rate up */
```

## Key Implementation Details

### FRED API Integration
- Series: `MORTGAGE30US` (30-year), `MORTGAGE15US` (15-year)
- Data cached for 6 hours (updates weekly on Thursdays)
- API key stored in `.env.local` as `FRED_API_KEY`

### Caching Strategy
- ISR with 6-hour revalidation (`revalidate = 21600`)
- Static generation at build time with periodic updates

### SEO
- Dynamic `robots.ts` and `sitemap.ts`
- OpenGraph and Twitter card metadata
- Semantic HTML structure

## Development Guidelines

1. **Server Components by default** - Only use 'use client' when needed for interactivity
2. **No external chart libraries** - SVG charts built from scratch (RateChart.tsx)
3. **CSS Variables for theming** - Use `var(--color-*)` pattern
4. **Responsive design** - Mobile-first with Tailwind breakpoints

## Environment Variables

Required in `.env.local`:
```
FRED_API_KEY=your_fred_api_key_here
```

Get a free API key at: https://fred.stlouisfed.org/docs/api/api_key.html

## Auto-Documentation

### Required Updates

When making significant changes to this project, **automatically update** the following documentation:

| File | When to Update |
|------|----------------|
| `../docs/CHANGELOG.md` | Any feature added, changed, or fixed |
| `../docs/project_status.md` | Features completed, issues found, status changes |
| `../docs/Architecture.md` | New components, data flow changes, API changes |

### Documentation Workflow

1. **Before starting work**: Check `../docs/project_status.md` for context
2. **After completing features**: Update `../docs/CHANGELOG.md` with changes
3. **When adding components**: Update file structure in `../docs/project_status.md`
4. **When changing architecture**: Update `../docs/Architecture.md` diagrams/descriptions

### Changelog Entry Format

```markdown
### Added/Changed/Fixed
- **ComponentName** - Brief description of what was added/changed
```

### Pre-Commit Checklist

- [ ] Run `npm run build` - ensure no type errors
- [ ] Update `../docs/CHANGELOG.md` if features changed
- [ ] Update `../docs/project_status.md` if status changed
- [ ] Run `npm run lint` - fix any linting issues
