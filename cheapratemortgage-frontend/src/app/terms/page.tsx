import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Cheap Rate Mortgage',
  description: 'Terms of Service for CheapRateMortgage.com - Please read these terms carefully before using our website.',
};

export default function TermsPage() {
  return (
    <main className="bg-[var(--color-paper)] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1
          className="text-3xl sm:text-4xl text-[var(--color-ink)] mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Terms of Service
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
              Agreement to Terms
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              By accessing or using CheapRateMortgage.com (&quot;the Website&quot;), operated by United Internet Ventures
              (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use the Website.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Description of Service
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              CheapRateMortgage.com provides mortgage rate information, educational content, and
              mortgage calculation tools for informational purposes only.
            </p>
            <p className="text-[var(--color-ink-light)] leading-relaxed font-semibold">
              We are not a mortgage broker, lender, bank, or financial institution. We do not
              offer mortgages, process loan applications, or provide personalized financial advice.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Use of Information
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              The mortgage rate data and other information provided on this Website is for general
              informational and educational purposes only. This information:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-ink-light)] space-y-2 mb-4">
              <li>Should not be construed as financial, legal, or professional advice</li>
              <li>Does not constitute an offer or solicitation for any mortgage or financial product</li>
              <li>May not reflect current rates available to you from any lender</li>
              <li>Should not be the sole basis for any financial decision</li>
            </ul>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              Always consult with qualified mortgage professionals, financial advisors, and/or
              attorneys before making financial decisions.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Accuracy of Information
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              We strive to provide accurate and up-to-date information. Our mortgage rate data
              is sourced from the Federal Reserve Economic Data (FRED) database, specifically
              the Freddie Mac Primary Mortgage Market Survey.
            </p>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              However, we make no warranties or representations regarding the accuracy, completeness,
              timeliness, or reliability of any information on this Website. Rates are weekly national
              averages and are subject to change. Your actual rate may vary significantly based on
              individual circumstances.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Intellectual Property
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              The content, design, graphics, and other materials on this Website are owned by or
              licensed to United Internet Ventures and are protected by copyright and other
              intellectual property laws.
            </p>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              You may view and print content from this Website for personal, non-commercial use only.
              You may not reproduce, distribute, modify, or create derivative works from our content
              without prior written permission.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Third-Party Links
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              This Website may contain links to third-party websites. These links are provided for
              convenience only. We do not endorse, control, or assume responsibility for the content,
              privacy policies, or practices of any third-party websites. Your use of third-party
              websites is at your own risk.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Limitation of Liability
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
              To the fullest extent permitted by law, United Internet Ventures and its affiliates,
              officers, employees, and agents shall not be liable for any direct, indirect, incidental,
              consequential, or punitive damages arising from:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-ink-light)] space-y-2 mb-4">
              <li>Your use of or inability to use this Website</li>
              <li>Any information or content obtained from this Website</li>
              <li>Any decisions made based on information from this Website</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Any errors, omissions, or inaccuracies in the content</li>
            </ul>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              This limitation applies regardless of the legal theory on which the claim is based,
              including negligence.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Disclaimer of Warranties
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              This Website is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind,
              either express or implied, including but not limited to implied warranties of merchantability,
              fitness for a particular purpose, or non-infringement. We do not warrant that the Website
              will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Indemnification
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              You agree to indemnify and hold harmless United Internet Ventures and its affiliates,
              officers, employees, and agents from any claims, damages, losses, or expenses (including
              reasonable attorney fees) arising from your use of this Website or violation of these
              Terms of Service.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Changes to Terms
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be
              effective immediately upon posting to this page. Your continued use of the Website
              after changes are posted constitutes acceptance of the modified terms. We encourage
              you to review these terms periodically.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Governing Law
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the
              laws of the United States, without regard to conflicts of law principles.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Severability
            </h2>
            <p className="text-[var(--color-ink-light)] leading-relaxed">
              If any provision of these Terms of Service is found to be invalid or unenforceable,
              the remaining provisions shall continue in full force and effect.
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
              If you have questions about these Terms of Service, please{' '}
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
