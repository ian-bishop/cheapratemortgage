import type { MortgageRatesResponse } from '@/types/mortgage';
import { RateCard } from './RateCard';

interface RateSummaryProps {
  rates: MortgageRatesResponse['rates'];
  dataDate: string;
}

export function RateSummary({ rates, dataDate }: RateSummaryProps) {
  const formatDate = (dateString: string) => {
    // dataDate is YYYY-MM-DD format from FRED
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section
      id="rates"
      className="relative pt-12 pb-6 sm:pt-16 sm:pb-8 grain-overlay overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, var(--color-paper-dark) 0%, var(--color-paper) 100%)',
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
          opacity: 0.3,
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="mb-4 animate-fade-in-up">
            Find Your Best{' '}
            <span className="text-[var(--color-accent)]">Mortgage Rate</span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-ink-light)] max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            Track weekly averages and learn how to secure the lowest rate for
            your home loan. A 0.5% difference can save you tens of thousands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
          <RateCard data={rates.thirtyYear} variant="primary" />
          <RateCard data={rates.fifteenYear} variant="secondary" />
        </div>

        <p className="text-center text-sm text-[var(--color-ink-muted)] mt-6 animate-fade-in-up animate-delay-300">
          Data from Freddie Mac PMMS • Week of {formatDate(dataDate)}
        </p>
      </div>
    </section>
  );
}
