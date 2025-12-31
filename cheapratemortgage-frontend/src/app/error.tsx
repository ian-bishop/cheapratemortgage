'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-12" role="alert">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Unable to load mortgage rates
      </h2>
      <p className="text-gray-600 mb-6">
        We&apos;re having trouble fetching the latest rates. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
