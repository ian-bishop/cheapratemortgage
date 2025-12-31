// FRED API Response Types
export interface FredObservation {
  realtime_start: string;
  realtime_end: string;
  date: string;
  value: string; // FRED returns values as strings, can be "." for missing
}

export interface FredApiResponse {
  realtime_start: string;
  realtime_end: string;
  observation_start: string;
  observation_end: string;
  units: string;
  output_type: number;
  file_type: string;
  order_by: string;
  sort_order: string;
  count: number;
  offset: number;
  limit: number;
  observations: FredObservation[];
}

// Internal Application Types
export interface MortgageRatePoint {
  date: string;
  rate: number | null;
}

export interface MortgageRateData {
  seriesId: string;
  label: string;
  currentRate: number | null;
  previousRate: number | null;
  change: number | null;
  changeDirection: 'up' | 'down' | 'unchanged';
  history: MortgageRatePoint[];
  lastUpdated: string;
}

export interface MortgageRatesResponse {
  rates: {
    thirtyYear: MortgageRateData;
    fifteenYear: MortgageRateData;
  };
  dataDate: string; // Most recent observation date from FRED
  fetchedAt: string;
}
