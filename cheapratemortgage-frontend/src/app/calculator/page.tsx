import type { Metadata } from 'next';
import { fetchMortgageRates } from '@/lib/fred-api';
import { MortgageCalculator } from '@/components/features/calculator/MortgageCalculator';

export const metadata: Metadata = {
  title: 'Mortgage Calculator | CheapRateMortgage.com',
  description:
    'Free mortgage calculator - estimate your monthly payment, total interest, and loan costs. Calculate payments for 15 and 30-year fixed-rate mortgages.',
  keywords: [
    'mortgage calculator',
    'home loan calculator',
    'monthly payment calculator',
    'mortgage payment estimator',
    'house payment calculator',
  ],
  openGraph: {
    title: 'Mortgage Calculator | CheapRateMortgage.com',
    description:
      'Free mortgage calculator - estimate your monthly payment, total interest, and loan costs.',
    type: 'website',
  },
};

export default async function CalculatorPage() {
  const data = await fetchMortgageRates();
  const currentRate = data.rates.thirtyYear.currentRate;

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-paper)] pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className="text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Mortgage Calculator
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-ink-light)] leading-relaxed">
              Estimate your monthly mortgage payment and see how much home you
              can afford. Adjust the inputs to explore different scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-[var(--color-paper-dark)] py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <MortgageCalculator defaultRate={currentRate} />
        </div>
      </section>

      {/* Current Rates CTA */}
      <section className="bg-[var(--color-paper)] py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[var(--color-ink)]/5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2
                  className="text-xl sm:text-2xl text-[var(--color-ink)] mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Current Average Rates
                </h2>
                <p className="text-[var(--color-ink-light)]">
                  See today&apos;s national average mortgage rates and historical
                  trends.
                </p>
              </div>
              <a
                href="/#rates"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors whitespace-nowrap"
              >
                View Current Rates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-paper-dark)] py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl text-[var(--color-ink)] mb-8 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Understanding Your Mortgage Payment
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-ink)]/5">
              <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[var(--color-accent)] font-bold">P</span>
              </div>
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                Principal
              </h3>
              <p className="text-sm text-[var(--color-ink-light)]">
                The amount you borrow to purchase your home. A larger down
                payment means a smaller principal and lower monthly payments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-ink)]/5">
              <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[var(--color-accent)] font-bold">I</span>
              </div>
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                Interest
              </h3>
              <p className="text-sm text-[var(--color-ink-light)]">
                The cost of borrowing money. Even a small rate difference can
                mean tens of thousands of dollars over the life of your loan.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-ink)]/5">
              <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[var(--color-accent)] font-bold">T</span>
              </div>
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                Loan Term
              </h3>
              <p className="text-sm text-[var(--color-ink-light)]">
                Shorter terms (15 years) have higher monthly payments but save
                significantly on total interest compared to 30-year loans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips CTA */}
      <section className="bg-[var(--color-paper)] py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl text-[var(--color-ink)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Want to Lower Your Rate?
          </h2>
          <p className="text-[var(--color-ink-light)] mb-6 max-w-2xl mx-auto">
            Learn proven strategies to qualify for better mortgage rates and
            save thousands over the life of your loan.
          </p>
          <a
            href="/#tips"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-[var(--color-ink)] text-[var(--color-ink)] font-semibold rounded-lg hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
          >
            Read Our Tips
          </a>
        </div>
      </section>
    </>
  );
}
