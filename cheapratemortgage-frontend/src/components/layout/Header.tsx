export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-paper)]/95 backdrop-blur-sm border-b border-[var(--color-paper-darker)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="text-xl font-normal tracking-tight group transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-[var(--color-ink)] group-hover:text-[var(--color-accent-dark)]">
              Cheap Rate
            </span>{' '}
            <span className="text-[var(--color-accent)]">Mortgage</span>
          </a>

          <nav className="hidden sm:flex items-center gap-8">
            <a
              href="/calculator"
              className="text-sm font-medium text-[var(--color-ink-light)] hover:text-[var(--color-ink)] transition-colors"
            >
              Calculator
            </a>
            <a
              href="/#rates"
              className="text-sm font-medium text-[var(--color-ink-light)] hover:text-[var(--color-ink)] transition-colors"
            >
              Current Rates
            </a>
            <a
              href="/#tips"
              className="text-sm font-medium text-[var(--color-ink-light)] hover:text-[var(--color-ink)] transition-colors"
            >
              Get Better Rates
            </a>
            <a
              href="/#faq"
              className="text-sm font-medium text-[var(--color-ink-light)] hover:text-[var(--color-ink)] transition-colors"
            >
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
