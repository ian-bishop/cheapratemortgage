'use client';

import { useState, useMemo } from 'react';
import type { MortgageRatePoint } from '@/types/mortgage';

interface RateChartProps {
  thirtyYear: MortgageRatePoint[];
  fifteenYear: MortgageRatePoint[];
}

interface HoveredPoint {
  x: number;
  y: number;
  date: string;
  rate: number;
  series: '30-Year' | '15-Year';
}

// Colors from design system
const COLORS = {
  thirtyYear: '#c9a227', // accent gold
  fifteenYear: '#2d6a4f', // success green
  grid: '#e8e6e1',
  text: '#718096',
  tooltip: '#1a1f2e',
};

export function RateChart({ thirtyYear, fifteenYear }: RateChartProps) {
  const [hoveredPoint, setHoveredPoint] = useState<HoveredPoint | null>(null);

  const width = 800;
  const height = 380;
  const padding = { top: 30, right: 30, bottom: 50, left: 55 };

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const {
    thirtyYearPath,
    fifteenYearPath,
    yTicks,
    xTicks,
    thirtyYearPoints,
    fifteenYearPoints,
  } = useMemo(() => {
    const validThirty = thirtyYear.filter((p) => p.rate !== null);
    const validFifteen = fifteenYear.filter((p) => p.rate !== null);

    const allRates = [...validThirty, ...validFifteen].map((p) => p.rate as number);
    const minRate = Math.floor(Math.min(...allRates) - 0.5);
    const maxRate = Math.ceil(Math.max(...allRates) + 0.5);

    const xScale = (index: number, total: number) =>
      padding.left + (index / Math.max(total - 1, 1)) * chartWidth;

    const yScale = (rate: number) =>
      padding.top + chartHeight - ((rate - minRate) / (maxRate - minRate)) * chartHeight;

    const generatePath = (points: MortgageRatePoint[]) => {
      const valid = points.filter((p) => p.rate !== null);
      if (valid.length === 0) return '';

      return valid
        .map((point, i) => {
          const x = xScale(i, valid.length);
          const y = yScale(point.rate as number);
          return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        })
        .join(' ');
    };

    const yTicks: { value: number; y: number }[] = [];
    for (let rate = minRate; rate <= maxRate; rate += 0.5) {
      yTicks.push({ value: rate, y: yScale(rate) });
    }

    const allDates = validThirty.length > 0 ? validThirty : validFifteen;
    const xTicks: { date: string; x: number }[] = [];
    for (let i = 0; i < allDates.length; i += 10) {
      xTicks.push({
        date: allDates[i].date,
        x: xScale(i, allDates.length),
      });
    }

    const thirtyYearPoints = validThirty.map((p, i) => ({
      x: xScale(i, validThirty.length),
      y: yScale(p.rate as number),
      date: p.date,
      rate: p.rate as number,
    }));

    const fifteenYearPoints = validFifteen.map((p, i) => ({
      x: xScale(i, validFifteen.length),
      y: yScale(p.rate as number),
      date: p.date,
      rate: p.rate as number,
    }));

    return {
      thirtyYearPath: generatePath(validThirty),
      fifteenYearPath: generatePath(validFifteen),
      yTicks,
      xTicks,
      thirtyYearPoints,
      fifteenYearPoints,
    };
  }, [thirtyYear, fifteenYear, chartWidth, chartHeight, padding.left, padding.top]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
  };

  return (
    <section className="pt-4 pb-10 sm:pt-6 sm:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="mb-3">Rate Trends</h2>
          <p className="text-[var(--color-ink-light)]">
            52-week historical mortgage rate averages
          </p>
        </div>

        <div className="card p-4 sm:p-6">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto"
            aria-label="Mortgage rate trends over the past 52 weeks"
            role="img"
          >
            {/* Y-axis grid lines and labels */}
            {yTicks.map((tick) => (
              <g key={tick.value}>
                <line
                  x1={padding.left}
                  y1={tick.y}
                  x2={width - padding.right}
                  y2={tick.y}
                  stroke={COLORS.grid}
                  strokeWidth="1"
                />
                <text
                  x={padding.left - 12}
                  y={tick.y}
                  textAnchor="end"
                  dominantBaseline="middle"
                  fontSize="12"
                  fill={COLORS.text}
                  fontFamily="var(--font-body)"
                >
                  {tick.value.toFixed(1)}%
                </text>
              </g>
            ))}

            {/* X-axis labels */}
            {xTicks.map((tick, i) => (
              <text
                key={i}
                x={tick.x}
                y={height - padding.bottom + 24}
                textAnchor="middle"
                fontSize="11"
                fill={COLORS.text}
                fontFamily="var(--font-body)"
              >
                {formatDate(tick.date)}
              </text>
            ))}

            {/* 30-Year line */}
            <path
              d={thirtyYearPath}
              fill="none"
              stroke={COLORS.thirtyYear}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 15-Year line */}
            <path
              d={fifteenYearPath}
              fill="none"
              stroke={COLORS.fifteenYear}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Hover targets for 30-Year */}
            {thirtyYearPoints.map((point, i) => (
              <circle
                key={`thirty-${i}`}
                cx={point.x}
                cy={point.y}
                r="10"
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredPoint({ ...point, series: '30-Year' })}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            ))}

            {/* Hover targets for 15-Year */}
            {fifteenYearPoints.map((point, i) => (
              <circle
                key={`fifteen-${i}`}
                cx={point.x}
                cy={point.y}
                r="10"
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredPoint({ ...point, series: '15-Year' })}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            ))}

            {/* Hovered point indicator */}
            {hoveredPoint && (
              <>
                {/* Vertical line */}
                <line
                  x1={hoveredPoint.x}
                  y1={padding.top}
                  x2={hoveredPoint.x}
                  y2={height - padding.bottom}
                  stroke={COLORS.grid}
                  strokeWidth="1"
                  strokeDasharray="4,4"
                />
                <circle
                  cx={hoveredPoint.x}
                  cy={hoveredPoint.y}
                  r="6"
                  fill={hoveredPoint.series === '30-Year' ? COLORS.thirtyYear : COLORS.fifteenYear}
                  stroke="white"
                  strokeWidth="2"
                />
                {/* Tooltip */}
                <g
                  transform={`translate(${Math.min(Math.max(hoveredPoint.x, 65), width - 65)}, ${
                    hoveredPoint.y - 55
                  })`}
                >
                  <rect
                    x="-60"
                    y="-10"
                    width="120"
                    height="50"
                    rx="6"
                    fill={COLORS.tooltip}
                  />
                  <text
                    textAnchor="middle"
                    y="8"
                    fontSize="11"
                    fill="#718096"
                    fontFamily="var(--font-body)"
                  >
                    {new Date(hoveredPoint.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </text>
                  <text
                    textAnchor="middle"
                    y="28"
                    fontSize="16"
                    fill="white"
                    fontWeight="600"
                    fontFamily="var(--font-display)"
                  >
                    {hoveredPoint.rate.toFixed(2)}%
                  </text>
                </g>
              </>
            )}
          </svg>

          {/* Legend */}
          <div className="flex justify-center gap-8 mt-6 pt-4 border-t border-[var(--color-paper-darker)]">
            <div className="flex items-center gap-2">
              <span
                className="w-4 h-1 rounded-full"
                style={{ backgroundColor: COLORS.thirtyYear }}
              />
              <span className="text-sm text-[var(--color-ink-light)]">30-Year Fixed</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-4 h-1 rounded-full"
                style={{ backgroundColor: COLORS.fifteenYear }}
              />
              <span className="text-sm text-[var(--color-ink-light)]">15-Year Fixed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
