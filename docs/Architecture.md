# Architecture

## System Overview

CheapRateMortgage is a static-first Next.js application that displays mortgage rate data from the Federal Reserve. The architecture prioritizes performance, SEO, and minimal runtime dependencies.

```
┌─────────────────────────────────────────────────────────────────┐
│                         Browser                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Next.js Application                           │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   Static Pages  │  │  API Routes     │  │  ISR Cache      │  │
│  │   (SSG + ISR)   │  │  /api/*         │  │  (6 hours)      │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    FRED API (External)                           │
│                    fred.stlouisfed.org                           │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. Build Time (SSG)
```
FRED API → fred-api.ts → page.tsx → Static HTML
```

At build time, Next.js fetches mortgage rates from FRED and generates static HTML pages. This provides instant page loads and SEO benefits.

### 2. Runtime (ISR)
```
Request → Check Cache (6h) → If stale: FRED API → Regenerate → Serve
```

Pages are regenerated in the background every 6 hours. Users always get a cached response while fresh data is fetched.

### 3. Client Interactivity
```
Static HTML → Hydration → Client Components (Calculator, Accordion)
```

Only interactive components use client-side JavaScript. Most of the site is server-rendered.

## Component Architecture

### Server Components (Default)
```
src/app/
├── page.tsx              # Home page - fetches data server-side
├── calculator/page.tsx   # Calculator page - fetches current rate
└── layout.tsx            # Root layout - fonts, metadata

src/components/features/
├── mortgage-rates/
│   ├── RateSummary.tsx   # Hero with rate cards
│   ├── RateCard.tsx      # Individual rate display
│   └── RateChart.tsx     # SVG chart (server-rendered)
└── content/
    ├── TipsSection.tsx   # Static tips content
    ├── ComparisonSection.tsx  # 30yr vs 15yr comparison
    └── FAQSection.tsx    # FAQ with Accordion
```

### Client Components ('use client')
```
src/components/
├── features/calculator/
│   └── MortgageCalculator.tsx  # Interactive calculator
└── ui/
    └── Accordion.tsx           # Expandable FAQ items
```

## API Layer

### FRED API Client (`src/lib/fred-api.ts`)

```typescript
interface MortgageRatesResponse {
  rates: {
    thirtyYear: MortgageRateData;
    fifteenYear: MortgageRateData;
  };
  dataDate: string;   // Last FRED observation date
  fetchedAt: string;  // When we fetched it
}
```

**Key Features:**
- Fetches two FRED series: `MORTGAGE30US`, `MORTGAGE15US`
- Returns last 52 weeks of historical data
- Calculates week-over-week change and direction
- 6-hour cache via Next.js `revalidate`

### Internal API Route (`src/app/api/mortgage-rates/route.ts`)

Exposes mortgage data as JSON for potential client-side use:
```
GET /api/mortgage-rates → MortgageRatesResponse
```

## Styling Architecture

### Tailwind CSS 4 + CSS Variables

Global design tokens in `src/app/globals.css`:
```css
:root {
  --color-ink: #1a1f2e;
  --color-paper: #faf9f7;
  --color-accent: #c9a227;
  /* ... */
}
```

Used in components:
```tsx
<div className="bg-[var(--color-paper)] text-[var(--color-ink)]">
```

### Typography System

Two font families loaded via `next/font/google`:
- `DM Serif Display` - Display/headlines (--font-display)
- `Source Sans 3` - Body text (--font-body)

Applied via CSS:
```css
h1, h2, h3 { font-family: var(--font-display); }
body { font-family: var(--font-body); }
```

## SEO Architecture

### Dynamic Metadata

Each page exports metadata:
```typescript
export const metadata: Metadata = {
  title: 'Page Title | CheapRateMortgage.com',
  description: '...',
  openGraph: { ... },
};
```

### Sitemaps & Robots

Generated dynamically via Next.js conventions:
- `src/app/sitemap.ts` → `/sitemap.xml`
- `src/app/robots.ts` → `/robots.txt`

## Performance Optimizations

1. **Static Generation** - Pages pre-rendered at build
2. **ISR Caching** - 6-hour revalidation matches FRED update schedule
3. **No Chart Libraries** - Custom SVG chart (RateChart.tsx)
4. **Minimal Client JS** - Only calculator and accordion need hydration
5. **Font Optimization** - next/font handles loading and display

## Error Handling

- `src/app/error.tsx` - Error boundary for runtime errors
- `src/app/loading.tsx` - Loading state during navigation
- API errors return 500 with error message JSON

## Deployment Considerations

### Environment Variables
```
FRED_API_KEY=xxx  # Required - get from fred.stlouisfed.org
```

### Build Output
- Static HTML for all pages
- Edge-compatible (no Node.js runtime needed for serving)
- ISR requires serverless function support (Vercel, Netlify, etc.)

### Recommended Hosting
- **Vercel** (native Next.js support)
- **Netlify** (with Next.js adapter)
- **Cloudflare Pages** (with next-on-pages)
