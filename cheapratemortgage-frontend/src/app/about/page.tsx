import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Cheap Rate Mortgage',
  description: 'Learn about CheapRateMortgage.com - Our mission to help you track and understand mortgage rates.',
};

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-paper)] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1
          className="text-3xl sm:text-4xl text-[var(--color-ink)] mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          About Cheap Rate Mortgage
        </h1>

        <div className="prose prose-lg max-w-none text-[var(--color-ink)]">
          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Mission
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              CheapRateMortgage.com was created with a simple goal: to help everyday people
              track and understand mortgage rates without the complexity and sales pressure
              often found on mortgage industry websites.
            </p>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              We believe that access to clear, accurate mortgage rate information is essential
              for making one of life&apos;s biggest financial decisions. Whether you&apos;re a first-time
              homebuyer, looking to refinance, or simply keeping an eye on the market, we provide
              the data you need in a straightforward, easy-to-understand format.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What We Offer
            </h2>
            <ul className="list-disc pl-6 text-[var(--color-ink-light)] space-y-3">
              <li>
                <strong className="text-[var(--color-ink)]">Current Rate Tracking</strong> — Weekly national average
                mortgage rates for 30-year and 15-year fixed-rate mortgages, updated every Thursday.
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Historical Trends</strong> — See how rates have changed
                over time to understand market patterns and timing.
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Mortgage Calculator</strong> — Estimate your monthly
                payments based on loan amount, interest rate, and term.
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Educational Content</strong> — Tips and guides to help
                you understand what affects mortgage rates and how to secure a better rate.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Data Source
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              We source our mortgage rate data from the{' '}
              <a
                href="https://fred.stlouisfed.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                Federal Reserve Economic Data (FRED)
              </a>{' '}
              database, maintained by the Federal Reserve Bank of St. Louis.
            </p>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              Specifically, we display data from the{' '}
              <strong className="text-[var(--color-ink)]">Freddie Mac Primary Mortgage Market Survey (PMMS)</strong>,
              which has been tracking mortgage rates since 1971. This survey provides reliable,
              widely-cited weekly averages of mortgage rates offered to qualified borrowers nationwide.
            </p>
          </section>

          <section className="mb-10 p-6 bg-[var(--color-paper-dark)] rounded-lg">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Important Notice
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              <strong className="text-[var(--color-ink)]">
                CheapRateMortgage.com is not a mortgage broker, lender, or financial institution.
              </strong>
            </p>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              We do not offer mortgages, collect loan applications, or provide personalized
              financial advice. The information on this website is for educational and
              informational purposes only.
            </p>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              The rates displayed are weekly national averages and may not reflect the rates
              available to you. Your actual rate will depend on your credit score, loan amount,
              down payment, property type, location, and other factors. Always consult with
              licensed mortgage professionals before making financial decisions.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Who We Are
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
              </a>
              , a company focused on building useful, informative websites that help people
              make better decisions.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contact Us
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              Have questions, feedback, or suggestions? We&apos;d love to hear from you.{' '}
              <a
                href="https://unitedinternetventures.com/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                Contact us through United Internet Ventures
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
