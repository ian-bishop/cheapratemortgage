# CheapRateMortgage

A mortgage rate tracking website that displays weekly national average mortgage rates from the Federal Reserve (FRED API).

**Live Site:** [cheapratemortgage.com](https://cheapratemortgage.com)

## Features

- **Current Rates** - 30-year and 15-year fixed mortgage rate averages
- **Historical Chart** - 52-week rate trend visualization
- **Mortgage Calculator** - Estimate monthly payments, total interest, and loan costs
- **Educational Content** - Tips for getting better rates, 30yr vs 15yr comparison, FAQ

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Data Source:** [FRED API](https://fred.stlouisfed.org/) (Federal Reserve Economic Data)

## Project Structure

```
cheapratemortgage/
├── cheapratemortgage-frontend/   # Next.js application
│   ├── src/
│   │   ├── app/                  # Pages and API routes
│   │   ├── components/           # React components
│   │   ├── lib/                  # FRED API client
│   │   └── types/                # TypeScript interfaces
│   ├── CLAUDE.md                 # Development guidelines
│   └── package.json
├── docs/
│   ├── Architecture.md           # Technical architecture
│   ├── CHANGELOG.md              # Version history
│   └── project_status.md         # Current status
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- FRED API key ([get one free](https://fred.stlouisfed.org/docs/api/api_key.html))

### Installation

```bash
cd cheapratemortgage-frontend
npm install
```

### Environment Setup

Create `.env.local` in the frontend directory:

```
FRED_API_KEY=your_api_key_here
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

## Data Source

Mortgage rate data comes from the Freddie Mac Primary Mortgage Market Survey (PMMS), accessed via the Federal Reserve Bank of St. Louis FRED API:

- **MORTGAGE30US** - 30-Year Fixed Rate Mortgage Average
- **MORTGAGE15US** - 15-Year Fixed Rate Mortgage Average

Data is updated weekly on Thursdays. The site caches data for 6 hours.

## Documentation

- [Architecture](docs/Architecture.md) - System design and component structure
- [Design System](docs/design.md) - Typography, colors, spacing, components
- [Changelog](docs/CHANGELOG.md) - Version history
- [Project Status](docs/project_status.md) - Current state and roadmap
- [Site Concept](docs/site-concept.md) - Original project requirements
- [Design Skill](docs/claude-frontend-design-skill.md) - Frontend design guidelines

## License

MIT
