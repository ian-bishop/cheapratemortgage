const tips = [
  {
    number: '01',
    title: 'Boost Your Credit Score',
    description:
      'Lenders reserve the best rates for borrowers with scores of 740+. Pay down credit card balances, dispute errors on your credit report, and avoid opening new accounts before applying.',
    highlight: '740+ score = best rates',
  },
  {
    number: '02',
    title: 'Save for a Larger Down Payment',
    description:
      'Putting down 20% or more eliminates private mortgage insurance (PMI) and often qualifies you for better rates. Even going from 10% to 15% down can make a difference.',
    highlight: '20% down = no PMI',
  },
  {
    number: '03',
    title: 'Shop Multiple Lenders',
    description:
      'Get quotes from at least 3-5 lenders including banks, credit unions, and online lenders. Rate differences of 0.25-0.5% are common and can save you thousands over the life of the loan.',
    highlight: 'Compare 3-5 lenders',
  },
  {
    number: '04',
    title: 'Consider Buying Points',
    description:
      'Paying discount points upfront (1 point = 1% of loan amount) can lower your rate by 0.25%. This makes sense if you plan to stay in the home long enough to recoup the cost.',
    highlight: '1 point = ~0.25% rate reduction',
  },
  {
    number: '05',
    title: 'Time Your Rate Lock',
    description:
      'Once you find a good rate, lock it in. Rate locks typically last 30-60 days. Watch market trends, but don\'t try to time the bottom perfectly—rates can move quickly.',
    highlight: 'Lock when comfortable',
  },
  {
    number: '06',
    title: 'Choose the Right Loan Term',
    description:
      '15-year mortgages have lower rates than 30-year loans (typically 0.5-0.75% less). If you can afford the higher payment, you\'ll save significantly on interest over time.',
    highlight: '15-year = lower rate',
  },
];

export function TipsSection() {
  return (
    <section id="tips" className="py-16 sm:py-20 section-alt">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3">How to Get the Best Mortgage Rate</h2>
          <p className="text-lg text-[var(--color-ink-light)] max-w-2xl mx-auto">
            Small rate differences add up to big savings. A 0.5% lower rate on a
            $400,000 loan saves over $40,000 in interest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {tips.map((tip) => (
            <div
              key={tip.number}
              className="card p-6 sm:p-8 group hover:translate-y-[-2px]"
            >
              <div className="flex gap-4 sm:gap-6">
                <span
                  className="text-3xl sm:text-4xl font-normal text-[var(--color-accent)] opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {tip.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl mb-2 text-[var(--color-ink)]">
                    {tip.title}
                  </h3>
                  <p className="text-[var(--color-ink-light)] text-sm sm:text-base mb-3">
                    {tip.description}
                  </p>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-dark)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full">
                    {tip.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
