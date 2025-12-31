import type { MortgageRatesResponse } from '@/types/mortgage';

interface ComparisonSectionProps {
  rates: MortgageRatesResponse['rates'];
}

export function ComparisonSection({ rates }: ComparisonSectionProps) {
  const loanAmount = 400000;

  const calculateMonthlyPayment = (principal: number, annualRate: number, years: number) => {
    const monthlyRate = annualRate / 100 / 12;
    const numPayments = years * 12;
    if (monthlyRate === 0) return principal / numPayments;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  };

  const thirtyYearRate = rates.thirtyYear.currentRate ?? 7;
  const fifteenYearRate = rates.fifteenYear.currentRate ?? 6.5;

  const thirtyYearPayment = calculateMonthlyPayment(loanAmount, thirtyYearRate, 30);
  const fifteenYearPayment = calculateMonthlyPayment(loanAmount, fifteenYearRate, 15);

  const thirtyYearTotal = thirtyYearPayment * 360;
  const fifteenYearTotal = fifteenYearPayment * 180;

  const thirtyYearInterest = thirtyYearTotal - loanAmount;
  const fifteenYearInterest = fifteenYearTotal - loanAmount;

  const interestSavings = thirtyYearInterest - fifteenYearInterest;

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);

  const comparisonData = [
    { label: 'Interest Rate', thirty: `${thirtyYearRate.toFixed(2)}%`, fifteen: `${fifteenYearRate.toFixed(2)}%` },
    { label: 'Monthly Payment', thirty: formatCurrency(thirtyYearPayment), fifteen: formatCurrency(fifteenYearPayment) },
    { label: 'Total Interest Paid', thirty: formatCurrency(thirtyYearInterest), fifteen: formatCurrency(fifteenYearInterest) },
    { label: 'Total Cost', thirty: formatCurrency(thirtyYearTotal), fifteen: formatCurrency(fifteenYearTotal) },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3">30-Year vs 15-Year Mortgage</h2>
          <p className="text-lg text-[var(--color-ink-light)] max-w-2xl mx-auto">
            Compare monthly payments and total costs on a {formatCurrency(loanAmount)} loan
          </p>
        </div>

        <div className="card overflow-hidden max-w-4xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-[var(--color-paper-dark)] border-b border-[var(--color-paper-darker)]">
            <div className="p-4 sm:p-6" />
            <div className="p-4 sm:p-6 text-center border-l border-[var(--color-paper-darker)]">
              <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
                30-Year Fixed
              </span>
            </div>
            <div className="p-4 sm:p-6 text-center border-l border-[var(--color-paper-darker)]">
              <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
                15-Year Fixed
              </span>
            </div>
          </div>

          {/* Table Body */}
          {comparisonData.map((row, index) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 ${
                index < comparisonData.length - 1 ? 'border-b border-[var(--color-paper-darker)]' : ''
              }`}
            >
              <div className="p-4 sm:p-6 flex items-center">
                <span className="font-medium text-[var(--color-ink)]">{row.label}</span>
              </div>
              <div className="p-4 sm:p-6 text-center border-l border-[var(--color-paper-darker)] flex items-center justify-center">
                <span
                  className="text-lg sm:text-xl text-[var(--color-accent)]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {row.thirty}
                </span>
              </div>
              <div className="p-4 sm:p-6 text-center border-l border-[var(--color-paper-darker)] flex items-center justify-center">
                <span
                  className="text-lg sm:text-xl text-[var(--color-success)]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {row.fifteen}
                </span>
              </div>
            </div>
          ))}

          {/* Savings Highlight */}
          <div className="p-6 sm:p-8 bg-[var(--color-success)]/5 border-t border-[var(--color-success)]/20">
            <div className="text-center">
              <p className="text-sm text-[var(--color-ink-light)] mb-1">
                Interest savings with 15-year term
              </p>
              <p
                className="text-3xl sm:text-4xl text-[var(--color-success)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {formatCurrency(interestSavings)}
              </p>
            </div>
          </div>
        </div>

        {/* Guidance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          <div className="card p-6">
            <h3 className="text-lg mb-2 text-[var(--color-accent)]">Choose 30-Year if...</h3>
            <ul className="space-y-2 text-[var(--color-ink-light)]">
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)]">•</span>
                You need lower monthly payments for cash flow
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)]">•</span>
                You want flexibility to invest the difference
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)]">•</span>
                You plan to refinance or move within 10 years
              </li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-lg mb-2 text-[var(--color-success)]">Choose 15-Year if...</h3>
            <ul className="space-y-2 text-[var(--color-ink-light)]">
              <li className="flex gap-2">
                <span className="text-[var(--color-success)]">•</span>
                You can comfortably afford higher payments
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-success)]">•</span>
                You want to build equity faster
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-success)]">•</span>
                You&apos;re closer to retirement and want to be debt-free
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
