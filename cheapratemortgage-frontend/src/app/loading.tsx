export default function Loading() {
  return (
    <div role="status" aria-label="Loading mortgage rates">
      {/* Hero Section Skeleton */}
      <section className="py-16 sm:py-24 bg-[var(--color-paper-dark)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="h-12 w-80 bg-[var(--color-paper-darker)] rounded animate-pulse mx-auto mb-4" />
            <div className="h-6 w-96 bg-[var(--color-paper-darker)] rounded animate-pulse mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="card p-8 h-40 animate-pulse" />
            <div className="card p-8 h-40 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Chart Section Skeleton */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="h-8 w-48 bg-[var(--color-paper-dark)] rounded animate-pulse mx-auto mb-3" />
            <div className="h-5 w-64 bg-[var(--color-paper-dark)] rounded animate-pulse mx-auto" />
          </div>
          <div className="card h-96 animate-pulse" />
        </div>
      </section>
    </div>
  );
}
