import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Map | Cheap Rate Mortgage',
  description: 'Complete site map for CheapRateMortgage.com - Find all pages including mortgage rates, calculator, and resources.',
};

export default function SitemapPage() {
  const mainPages = [
    { href: '/', title: 'Home', description: 'Current mortgage rates and market overview' },
    { href: '/calculator', title: 'Mortgage Calculator', description: 'Calculate your monthly mortgage payments' },
  ];

  const homePageSections = [
    { href: '/#rates', title: 'Current Rates', description: '30-year and 15-year fixed mortgage rate data' },
    { href: '/#tips', title: 'How to Get Better Rates', description: 'Tips for securing a lower mortgage rate' },
    { href: '/#faq', title: 'FAQ', description: 'Frequently asked questions about mortgage rates' },
  ];

  const legalPages = [
    { href: '/about', title: 'About Us', description: 'Learn about CheapRateMortgage.com and our mission' },
    { href: '/privacy', title: 'Privacy Policy', description: 'How we handle your data and privacy' },
    { href: '/terms', title: 'Terms of Service', description: 'Terms and conditions for using this website' },
    { href: '/disclaimer', title: 'Disclaimer', description: 'Important disclaimers about mortgage information' },
  ];

  const externalLinks = [
    { href: 'https://unitedinternetventures.com/#contact', title: 'Contact Us', description: 'Get in touch with United Internet Ventures' },
  ];

  return (
    <main className="bg-[var(--color-paper)] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1
          className="text-3xl sm:text-4xl text-[var(--color-ink)] mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Site Map
        </h1>

        <p className="text-[var(--color-ink-light)] leading-relaxed mb-12">
          A complete overview of all pages available on CheapRateMortgage.com.
        </p>

        {/* Main Pages */}
        <section className="mb-10">
          <h2
            className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Main Pages
          </h2>
          <ul className="space-y-4">
            {mainPages.map((page) => (
              <li key={page.href}>
                <a
                  href={page.href}
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors font-medium"
                >
                  {page.title}
                </a>
                <p className="text-sm text-[var(--color-ink-light)] mt-1">
                  {page.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Home Page Sections */}
        <section className="mb-10">
          <h2
            className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Home Page Sections
          </h2>
          <ul className="space-y-4">
            {homePageSections.map((page) => (
              <li key={page.href}>
                <a
                  href={page.href}
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors font-medium"
                >
                  {page.title}
                </a>
                <p className="text-sm text-[var(--color-ink-light)] mt-1">
                  {page.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Legal & Information */}
        <section className="mb-10">
          <h2
            className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Legal &amp; Information
          </h2>
          <ul className="space-y-4">
            {legalPages.map((page) => (
              <li key={page.href}>
                <a
                  href={page.href}
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors font-medium"
                >
                  {page.title}
                </a>
                <p className="text-sm text-[var(--color-ink-light)] mt-1">
                  {page.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* External Links */}
        <section className="mb-10">
          <h2
            className="text-xl sm:text-2xl text-[var(--color-ink)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            External Links
          </h2>
          <ul className="space-y-4">
            {externalLinks.map((page) => (
              <li key={page.href}>
                <a
                  href={page.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors font-medium"
                >
                  {page.title}
                  <span className="text-xs ml-1">↗</span>
                </a>
                <p className="text-sm text-[var(--color-ink-light)] mt-1">
                  {page.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* XML Sitemap Reference */}
        <section className="p-4 bg-[var(--color-paper-dark)] rounded-lg">
          <p className="text-sm text-[var(--color-ink-light)]">
            <strong className="text-[var(--color-ink)]">For search engines:</strong>{' '}
            View our{' '}
            <a
              href="/sitemap.xml"
              className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
            >
              XML Sitemap
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
