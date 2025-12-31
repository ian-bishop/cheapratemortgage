# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-12-30

### Added

#### Core Features
- Initial Next.js 16 project setup with TypeScript and Tailwind CSS 4
- FRED API integration for mortgage rate data (MORTGAGE30US, MORTGAGE15US)
- 6-hour ISR caching strategy aligned with weekly FRED updates

#### Pages
- **Home page** (`/`) - Main landing page with rates, chart, tips, comparison, FAQ
- **Calculator page** (`/calculator`) - Interactive mortgage calculator for PPC campaigns

#### Components
- **RateSummary** - Hero section with current 30-year and 15-year rates
- **RateCard** - Individual rate display with change indicators
- **RateChart** - Custom SVG chart showing 52-week rate history
- **MortgageCalculator** - Interactive calculator with sliders and real-time results
- **TipsSection** - 6 tips for getting better mortgage rates
- **ComparisonSection** - 30-year vs 15-year loan comparison with calculations
- **FAQSection** - 8 common mortgage questions with accordion UI
- **Accordion** - Reusable expandable/collapsible component
- **Header** - Sticky navigation header
- **Footer** - Site footer with sitemap and data attribution

#### SEO
- Dynamic `robots.txt` generation
- Dynamic `sitemap.xml` with all pages and sections
- OpenGraph and Twitter card metadata
- Semantic HTML structure

#### Design System
- "Editorial Finance" aesthetic - modern financial publication style
- Typography: DM Serif Display (headlines) + Source Sans 3 (body)
- Color palette: Navy ink, warm paper, gold accents, green/red indicators
- CSS custom properties for consistent theming

### Technical Details
- Server Components by default, client components only where needed
- No external chart libraries - custom SVG implementation
- Type-safe FRED API client with proper interfaces
- Error and loading states

---

## Version History

| Version | Date | Summary |
|---------|------|---------|
| 0.1.0 | 2024-12-30 | Initial release with core features |
