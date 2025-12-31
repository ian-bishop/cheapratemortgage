import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Cheap Rate Mortgage',
  description: 'Important disclaimers for CheapRateMortgage.com - We are not a mortgage broker or lender. Information is for educational purposes only.',
};

export default function DisclaimerPage() {
  return (
    <main className="bg-[var(--color-paper)] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1
          className="text-3xl sm:text-4xl text-[var(--color-ink)] mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Disclaimer
        </h1>

        <div className="prose prose-lg max-w-none text-[var(--color-ink)]">
          {/* Primary Disclaimer Box */}
          <section className="mb-10 p-6 bg-[var(--color-danger)]/10 border-l-4 border-[var(--color-danger)] rounded-r-lg">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              We Are Not a Mortgage Broker or Lender
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4 font-semibold">
              CheapRateMortgage.com is NOT a mortgage broker, mortgage lender, bank, credit union,
              or financial institution of any kind.
            </p>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              We do not offer mortgages, accept loan applications, process mortgage requests, or
              connect borrowers with lenders. We are an informational website only.
            </p>
          </section>

          {/* Educational Purpose Box */}
          <section className="mb-10 p-6 bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] rounded-r-lg">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              For Educational Purposes Only
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              All information provided on this website, including but not limited to mortgage rates,
              calculations, articles, and guides, is for <strong className="text-[var(--color-ink)]">
              general educational and informational purposes only</strong>.
            </p>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              Nothing on this website constitutes, or is intended to constitute, financial advice,
              legal advice, investment advice, or any other professional advice. You should not
              act or refrain from acting based solely on the information contained on this website.
            </p>
          </section>

          {/* Rate Data Disclaimer */}
          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              About Our Rate Data
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              The mortgage rates displayed on CheapRateMortgage.com are sourced from the{' '}
              <strong className="text-[var(--color-ink)]">
                Freddie Mac Primary Mortgage Market Survey (PMMS)
              </strong>, accessed through the Federal Reserve Economic Data (FRED) database maintained
              by the Federal Reserve Bank of St. Louis.
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2 mt-6">
              Important Rate Information:
            </h3>
            <ul className="list-disc pl-6 text-[var(--color-ink-light)] space-y-2 mb-4">
              <li>
                <strong className="text-[var(--color-ink)]">Weekly National Averages:</strong> The rates
                shown are weekly national averages, not real-time quotes
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Not Offers to Lend:</strong> These rates are
                not offers to lend and do not represent rates you will receive from any lender
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Subject to Change:</strong> Mortgage rates
                change frequently, sometimes multiple times per day
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Individual Rates Vary:</strong> Your actual
                rate will depend on many factors including credit score, down payment, loan amount,
                property type, property location, loan type, and the specific lender
              </li>
            </ul>
          </section>

          {/* Professional Advice Disclaimer */}
          <section className="mb-10 p-6 bg-[var(--color-success)]/10 border-l-4 border-[var(--color-success)] rounded-r-lg">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Consult Licensed Professionals
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              Before making any mortgage or financial decisions, we strongly recommend that you:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-ink-light)] space-y-2">
              <li>Consult with a licensed mortgage loan officer or mortgage broker</li>
              <li>Speak with a qualified financial advisor</li>
              <li>Review terms with a real estate attorney when appropriate</li>
              <li>Shop multiple lenders to compare actual rate offers</li>
              <li>Carefully review all loan documents before signing</li>
            </ul>
          </section>

          {/* Calculator Disclaimer */}
          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Mortgage Calculator Disclaimer
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              Our mortgage calculator provides estimates for educational purposes only. Actual loan
              payments may differ due to:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-ink-light)] space-y-2 mb-4">
              <li>Property taxes (which vary by location)</li>
              <li>Homeowners insurance requirements</li>
              <li>Private mortgage insurance (PMI) if applicable</li>
              <li>HOA fees or condo fees</li>
              <li>Closing costs and fees</li>
              <li>Interest rate adjustments (for variable-rate loans)</li>
            </ul>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              Calculator results should not be used as the basis for financial decisions. Obtain
              an official loan estimate from a licensed lender for accurate payment information.
            </p>
          </section>

          {/* No Guarantees */}
          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              No Guarantees
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              While we strive to provide accurate and up-to-date information, we make no
              representations or warranties of any kind, express or implied, about:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-ink-light)] space-y-2 mb-4">
              <li>The accuracy, reliability, or completeness of any information</li>
              <li>The availability of any particular mortgage rate</li>
              <li>The suitability of any information for your specific situation</li>
              <li>The results you may obtain from using our tools or information</li>
            </ul>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              Use of this website and reliance on any information is at your own risk.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Limitation of Liability
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              CheapRateMortgage.com, United Internet Ventures, and their owners, employees, and
              affiliates shall not be held liable for any damages, losses, or expenses arising
              from your use of this website or decisions made based on information obtained from
              this website. This includes, but is not limited to, any direct, indirect, incidental,
              consequential, or punitive damages.
            </p>
          </section>

          {/* Affiliate Disclosure */}
          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Affiliate Disclosure
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              This website may contain affiliate links or advertising in the future. If we do
              include affiliate links, we will disclose them clearly. Any compensation received
              will not influence the information we provide or the rates we display, as our rate
              data comes directly from the Federal Reserve.
            </p>
          </section>

          {/* Operator Information */}
          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Website Operator
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              CheapRateMortgage.com is operated by{' '}
              <a
                href="https://unitedinternetventures.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                United Internet Ventures
              </a>.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Questions
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              If you have questions about this disclaimer, please{' '}
              <a
                href="https://unitedinternetventures.com/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                contact United Internet Ventures
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
