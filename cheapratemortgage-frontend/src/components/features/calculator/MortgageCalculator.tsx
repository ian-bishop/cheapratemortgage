'use client';

import { useState, useMemo } from 'react';

interface CalculatorResults {
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  loanAmount: number;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCurrencyPrecise(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function MortgageCalculator({ defaultRate }: { defaultRate?: number | null }) {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [usePercent, setUsePercent] = useState(true);
  const [interestRate, setInterestRate] = useState(defaultRate || 6.85);
  const [loanTerm, setLoanTerm] = useState(30);

  const results = useMemo<CalculatorResults>(() => {
    const actualDownPayment = usePercent
      ? homePrice * (downPaymentPercent / 100)
      : downPayment;
    const principal = homePrice - actualDownPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (principal <= 0 || interestRate <= 0) {
      return {
        monthlyPayment: 0,
        totalInterest: 0,
        totalCost: 0,
        loanAmount: 0,
      };
    }

    // Monthly payment formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalCost = monthlyPayment * numberOfPayments;
    const totalInterest = totalCost - principal;

    return {
      monthlyPayment,
      totalInterest,
      totalCost,
      loanAmount: principal,
    };
  }, [homePrice, downPayment, downPaymentPercent, usePercent, interestRate, loanTerm]);

  const handleHomePriceChange = (value: number) => {
    setHomePrice(value);
    if (usePercent) {
      setDownPayment(value * (downPaymentPercent / 100));
    }
  };

  const handleDownPaymentChange = (value: number) => {
    setDownPayment(value);
    setDownPaymentPercent((value / homePrice) * 100);
  };

  const handleDownPaymentPercentChange = (value: number) => {
    setDownPaymentPercent(value);
    setDownPayment(homePrice * (value / 100));
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calculator Inputs */}
      <div className="space-y-6">
        {/* Home Price */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-ink)] mb-2">
            Home Price
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-ink-light)]">
              $
            </span>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => handleHomePriceChange(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border border-[var(--color-ink)]/10 rounded-lg bg-white text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
              min={0}
              step={10000}
            />
          </div>
          <input
            type="range"
            value={homePrice}
            onChange={(e) => handleHomePriceChange(Number(e.target.value))}
            min={50000}
            max={2000000}
            step={10000}
            className="w-full mt-2 accent-[var(--color-accent)]"
          />
        </div>

        {/* Down Payment */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-[var(--color-ink)]">
              Down Payment
            </label>
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => setUsePercent(false)}
                className={`px-2 py-1 rounded ${
                  !usePercent
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'bg-[var(--color-paper-dark)] text-[var(--color-ink-light)]'
                }`}
              >
                $
              </button>
              <button
                onClick={() => setUsePercent(true)}
                className={`px-2 py-1 rounded ${
                  usePercent
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'bg-[var(--color-paper-dark)] text-[var(--color-ink-light)]'
                }`}
              >
                %
              </button>
            </div>
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-ink-light)]">
              {usePercent ? '%' : '$'}
            </span>
            <input
              type="number"
              value={usePercent ? downPaymentPercent : downPayment}
              onChange={(e) =>
                usePercent
                  ? handleDownPaymentPercentChange(Number(e.target.value))
                  : handleDownPaymentChange(Number(e.target.value))
              }
              className="w-full pl-8 pr-4 py-3 border border-[var(--color-ink)]/10 rounded-lg bg-white text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
              min={0}
              max={usePercent ? 100 : homePrice}
              step={usePercent ? 1 : 5000}
            />
          </div>
          <input
            type="range"
            value={usePercent ? downPaymentPercent : downPayment}
            onChange={(e) =>
              usePercent
                ? handleDownPaymentPercentChange(Number(e.target.value))
                : handleDownPaymentChange(Number(e.target.value))
            }
            min={0}
            max={usePercent ? 50 : homePrice * 0.5}
            step={usePercent ? 1 : 5000}
            className="w-full mt-2 accent-[var(--color-accent)]"
          />
          {!usePercent && (
            <p className="text-xs text-[var(--color-ink-light)] mt-1">
              {downPaymentPercent.toFixed(1)}% of home price
            </p>
          )}
          {usePercent && (
            <p className="text-xs text-[var(--color-ink-light)] mt-1">
              {formatCurrency(downPayment)}
            </p>
          )}
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-ink)] mb-2">
            Interest Rate
          </label>
          <div className="relative">
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full pl-4 pr-8 py-3 border border-[var(--color-ink)]/10 rounded-lg bg-white text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
              min={0}
              max={15}
              step={0.01}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-ink-light)]">
              %
            </span>
          </div>
          <input
            type="range"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            min={1}
            max={12}
            step={0.01}
            className="w-full mt-2 accent-[var(--color-accent)]"
          />
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-ink)] mb-2">
            Loan Term
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setLoanTerm(30)}
              className={`py-3 px-4 rounded-lg border-2 transition-all ${
                loanTerm === 30
                  ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-ink)]'
                  : 'border-[var(--color-ink)]/10 text-[var(--color-ink-light)] hover:border-[var(--color-ink)]/30'
              }`}
            >
              30 Years
            </button>
            <button
              onClick={() => setLoanTerm(15)}
              className={`py-3 px-4 rounded-lg border-2 transition-all ${
                loanTerm === 15
                  ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-ink)]'
                  : 'border-[var(--color-ink)]/10 text-[var(--color-ink-light)] hover:border-[var(--color-ink)]/30'
              }`}
            >
              15 Years
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-[var(--color-ink)] text-[var(--color-paper)] rounded-2xl p-6 sm:p-8">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-paper)]/50 mb-6">
          Your Estimated Payment
        </h3>

        {/* Monthly Payment - Hero */}
        <div className="mb-8">
          <p className="text-sm text-[var(--color-paper)]/70 mb-1">
            Monthly Payment (P&I)
          </p>
          <p
            className="text-5xl sm:text-6xl font-bold text-[var(--color-accent)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {formatCurrencyPrecise(results.monthlyPayment)}
          </p>
        </div>

        {/* Breakdown */}
        <div className="space-y-4 pt-6 border-t border-[var(--color-paper)]/10">
          <div className="flex justify-between">
            <span className="text-[var(--color-paper)]/70">Loan Amount</span>
            <span className="font-semibold">{formatCurrency(results.loanAmount)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-paper)]/70">Total Interest</span>
            <span className="font-semibold">{formatCurrency(results.totalInterest)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-paper)]/70">Total Cost of Loan</span>
            <span className="font-semibold">{formatCurrency(results.totalCost)}</span>
          </div>
        </div>

        {/* PMI Warning */}
        {downPaymentPercent < 20 && (
          <div className="mt-6 p-4 bg-[var(--color-paper)]/10 rounded-lg">
            <p className="text-sm text-[var(--color-paper)]/80">
              <strong>Note:</strong> With less than 20% down, you may need to pay
              Private Mortgage Insurance (PMI), which is not included in this
              estimate.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
