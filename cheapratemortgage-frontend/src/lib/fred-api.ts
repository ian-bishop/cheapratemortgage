import type {
  FredApiResponse,
  MortgageRateData,
  MortgageRatesResponse,
} from '@/types/mortgage';

const FRED_BASE_URL = 'https://api.stlouisfed.org/fred/series/observations';

const SERIES = {
  MORTGAGE30US: { id: 'MORTGAGE30US', label: '30-Year Fixed' },
  MORTGAGE15US: { id: 'MORTGAGE15US', label: '15-Year Fixed' },
} as const;

async function fetchFredSeries(
  seriesId: string,
  limit = 52
): Promise<FredApiResponse> {
  const apiKey = process.env.FRED_API_KEY;
  if (!apiKey) {
    throw new Error('FRED_API_KEY environment variable is not configured');
  }

  const params = new URLSearchParams({
    series_id: seriesId,
    api_key: apiKey,
    file_type: 'json',
    sort_order: 'desc',
    limit: limit.toString(),
  });

  const response = await fetch(`${FRED_BASE_URL}?${params}`, {
    next: { revalidate: 21600 }, // Cache for 6 hours (data updates weekly on Thursdays)
  });

  if (!response.ok) {
    throw new Error(`FRED API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

function transformToRateData(
  response: FredApiResponse,
  seriesId: string,
  label: string
): MortgageRateData {
  const observations = response.observations
    .map((obs) => ({
      date: obs.date,
      rate: obs.value === '.' ? null : parseFloat(obs.value),
    }))
    .reverse(); // Chronological order for chart

  const validRates = observations.filter((o) => o.rate !== null);
  const currentRate =
    validRates.length > 0 ? validRates[validRates.length - 1].rate : null;
  const previousRate =
    validRates.length > 1 ? validRates[validRates.length - 2].rate : null;

  let change: number | null = null;
  if (currentRate !== null && previousRate !== null) {
    change = Math.round((currentRate - previousRate) * 100) / 100;
  }

  let changeDirection: 'up' | 'down' | 'unchanged' = 'unchanged';
  if (change !== null && change !== 0) {
    changeDirection = change > 0 ? 'up' : 'down';
  }

  return {
    seriesId,
    label,
    currentRate,
    previousRate,
    change,
    changeDirection,
    history: observations,
    lastUpdated: new Date().toISOString(),
  };
}

export async function fetchMortgageRates(): Promise<MortgageRatesResponse> {
  const [thirtyYearRes, fifteenYearRes] = await Promise.all([
    fetchFredSeries(SERIES.MORTGAGE30US.id),
    fetchFredSeries(SERIES.MORTGAGE15US.id),
  ]);

  // Get the most recent observation date from the data
  const mostRecentDate = thirtyYearRes.observations[0]?.date || new Date().toISOString().split('T')[0];

  return {
    rates: {
      thirtyYear: transformToRateData(
        thirtyYearRes,
        SERIES.MORTGAGE30US.id,
        SERIES.MORTGAGE30US.label
      ),
      fifteenYear: transformToRateData(
        fifteenYearRes,
        SERIES.MORTGAGE15US.id,
        SERIES.MORTGAGE15US.label
      ),
    },
    dataDate: mostRecentDate,
    fetchedAt: new Date().toISOString(),
  };
}
