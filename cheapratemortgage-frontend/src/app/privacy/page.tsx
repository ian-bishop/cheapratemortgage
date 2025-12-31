import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cheap Rate Mortgage',
  description: 'Privacy Policy for CheapRateMortgage.com - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-[var(--color-paper)] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1
          className="text-3xl sm:text-4xl text-[var(--color-ink)] mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-[var(--color-ink-light)] mb-12">
          Last updated: December 31, 2025
        </p>

        <div className="prose prose-lg max-w-none text-[var(--color-ink)]">
          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Introduction
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              CheapRateMortgage.com (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is operated by United Internet Ventures.
              This Privacy Policy explains how we collect, use, and protect information when you visit our website.
            </p>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              We are committed to protecting your privacy. This website is an informational resource
              and does not collect personal financial information such as credit scores, income details,
              or loan applications.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Information We Collect
            </h2>

            <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2 mt-6">
              Analytics Data
            </h3>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              We use Google Analytics to understand how visitors use our website. This service may collect:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-ink-light)] space-y-2 mb-4">
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or search terms</li>
              <li>General geographic location (country/region level)</li>
              <li>Browser type and device information</li>
              <li>Anonymous usage patterns</li>
            </ul>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              This data is aggregated and anonymized. We do not collect personally identifiable
              information through our analytics.
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2 mt-6">
              Cookies
            </h3>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              Our website uses cookies to enable analytics functionality. Cookies are small text files
              stored on your device. You can control cookie settings through your browser preferences.
              Disabling cookies may affect your experience on our site.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Information We Do Not Collect
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              We want to be clear about what we do not collect:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-ink-light)] space-y-2">
              <li>Personal financial information (credit scores, income, debt)</li>
              <li>Social Security numbers or government IDs</li>
              <li>Bank account or credit card information</li>
              <li>Loan applications or mortgage details</li>
              <li>Names, addresses, or contact information (unless you contact us directly)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Third-Party Services
            </h2>

            <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2 mt-6">
              Google Analytics
            </h3>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              We use Google Analytics to analyze website traffic. Google&apos;s privacy policy can be found at{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                policies.google.com/privacy
              </a>.
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2 mt-6">
              FRED API (Federal Reserve Economic Data)
            </h3>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              We retrieve mortgage rate data from the Federal Reserve Bank of St. Louis FRED API.
              This is a one-way data feed—no user information is shared with this service.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              How We Use Information
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              The limited information we collect is used to:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-ink-light)] space-y-2">
              <li>Understand how visitors use our website</li>
              <li>Improve our content and user experience</li>
              <li>Identify and fix technical issues</li>
              <li>Analyze traffic patterns and trends</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Your Rights
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your data, including:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-ink-light)] space-y-2 mb-4">
              <li>The right to know what data we collect</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt out of analytics tracking</li>
            </ul>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              To exercise these rights or ask questions about our privacy practices, please{' '}
              <a
                href="https://unitedinternetventures.com/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                contact us
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Data Security
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              We implement reasonable security measures to protect any data collected. However,
              no method of transmission over the internet is 100% secure. Since we do not collect
              sensitive personal or financial information, the risk to your privacy is minimal.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Children&apos;s Privacy
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              Our website is not intended for children under 13 years of age. We do not knowingly
              collect information from children under 13.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Changes to This Policy
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated revision date. We encourage you to review this policy periodically.
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
              If you have questions about this Privacy Policy, please{' '}
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
