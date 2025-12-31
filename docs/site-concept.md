CheapRateMortgage.com – Next.js (Single Stack) Mortgage Rates Site
Goal

Build a professional mortgage-rate website using Next.js (App Router) with a single frontend/backend stack, powered initially by FRED (Federal Reserve Economic Data) for mortgage rate data.

This site will:

Display weekly mortgage rate averages

Be SEO-friendly and production-ready

Qualify the site for future Zillow API approval

Avoid exposing API keys to the client

Tech Stack

Next.js 14+

App Router

TypeScript

Server Route Handlers

No external chart libraries (SVG-based chart)

FRED API (Freddie Mac PMMS data)

Mortgage Rate Data Source

Use FRED API mortgage series:

MORTGAGE30US → 30-Year Fixed Mortgage Rate (weekly)

MORTGAGE15US → 15-Year Fixed Mortgage Rate (weekly)

Rates are historical averages, not real-time lender quotes.
