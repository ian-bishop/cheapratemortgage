import type { MortgageRateData } from '@/types/mortgage';

interface RateCardProps {
  data: MortgageRateData;
  variant: 'primary' | 'secondary';
}

export function RateCard({ data, variant }: RateCardProps) {
  const accentClass =
    variant === 'primary' ? 'text-[var(--color-accent)]' : 'text-[var(--color-success)]';

  const formatRate = (rate: number | null) => {
    if (rate === null) return 'N/A';
    return rate.toFixed(2);
  };

  const formatChange = (change: number | null) => {
    if (change === null) return '';
    const sign = change > 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}`;
  };

  const changeColor =
    data.changeDirection === 'up'
      ? 'text-[var(--color-danger)]'
      : data.changeDirection === 'down'
        ? 'text-[var(--color-success)]'
        : 'text-[var(--color-ink-muted)]';

  const changeIcon =
    data.changeDirection === 'up' ? '↑' : data.changeDirection === 'down' ? '↓' : '';

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-start justify-between mb-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
          {data.label}
        </span>
        {data.change !== null && data.change !== 0 && (
          <span className={`text-sm font-medium ${changeColor} flex items-center gap-1`}>
            <span>{changeIcon}</span>
            <span>{formatChange(data.change)}%</span>
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-1">
        <span
          className={`rate-value text-5xl sm:text-6xl font-normal ${accentClass}`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {formatRate(data.currentRate)}
        </span>
        <span
          className="text-2xl sm:text-3xl text-[var(--color-ink-light)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          %
        </span>
      </div>

      <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
        {data.changeDirection === 'unchanged'
          ? 'No change from last week'
          : `${data.changeDirection === 'up' ? 'Up' : 'Down'} from ${data.previousRate?.toFixed(2)}% last week`}
      </p>
    </div>
  );
}
