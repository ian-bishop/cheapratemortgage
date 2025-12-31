export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="inline-block text-xl mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-[var(--color-paper)]">Cheap Rate</span>{' '}
              <span className="text-[var(--color-accent)]">Mortgage</span>
            </a>
            <p className="text-sm text-[var(--color-paper)]/70 leading-relaxed">
              Track current mortgage rates and learn how to secure the best rate
              for your home loan.
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-paper)]/50 mb-4">
              Site Map
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm text-[var(--color-paper)]/70 hover:text-[var(--color-paper)] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/calculator"
                  className="text-sm text-[var(--color-paper)]/70 hover:text-[var(--color-paper)] transition-colors"
                >
                  Mortgage Calculator
                </a>
              </li>
              <li>
                <a
                  href="/#rates"
                  className="text-sm text-[var(--color-paper)]/70 hover:text-[var(--color-paper)] transition-colors"
                >
                  Current Rates
                </a>
              </li>
              <li>
                <a
                  href="/#tips"
                  className="text-sm text-[var(--color-paper)]/70 hover:text-[var(--color-paper)] transition-colors"
                >
                  How to Get Better Rates
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="text-sm text-[var(--color-paper)]/70 hover:text-[var(--color-paper)] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Data Source */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-paper)]/50 mb-4">
              Data Source
            </h4>
            <p className="text-sm text-[var(--color-paper)]/70 leading-relaxed">
              Mortgage rate data from the Freddie Mac Primary Mortgage Market
              Survey (PMMS), accessed via{' '}
              <a
                href="https://fred.stlouisfed.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                FRED
              </a>
              , Federal Reserve Bank of St. Louis.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-paper)]/10 mb-8" />

        {/* Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-xs text-[var(--color-paper)]/50">
          <p className="max-w-2xl">
            Rates shown are weekly national averages and are not offers to lend.
            Actual rates may vary based on credit score, loan amount, property
            type, and other factors. This site is for informational purposes
            only.
          </p>
          <p className="whitespace-nowrap">
            &copy; {new Date().getFullYear()} Cheap Rate Mortgage
          </p>
        </div>
      </div>
    </footer>
  );
}
