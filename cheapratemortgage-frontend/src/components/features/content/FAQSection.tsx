import { Accordion } from '@/components/ui/Accordion';

const faqItems = [
  {
    question: 'What factors affect mortgage rates?',
    answer:
      'Mortgage rates are influenced by several factors: the Federal Reserve\'s monetary policy, inflation rates, economic conditions, the bond market (especially 10-year Treasury yields), and your personal factors like credit score, down payment, loan amount, and property type. Rates can change daily based on market conditions.',
  },
  {
    question: 'How often do mortgage rates change?',
    answer:
      'Mortgage rates can change multiple times per day based on market conditions. The rates shown on this site are weekly averages from the Freddie Mac Primary Mortgage Market Survey, which is released every Thursday. For real-time rates, you\'ll need to check with individual lenders.',
  },
  {
    question: 'What\'s the difference between interest rate and APR?',
    answer:
      'The interest rate is the cost of borrowing the principal loan amount. The APR (Annual Percentage Rate) includes the interest rate plus other costs like origination fees, discount points, and mortgage insurance. APR gives you a more complete picture of your total borrowing cost and is useful for comparing loan offers.',
  },
  {
    question: 'Should I wait for rates to drop before buying?',
    answer:
      'Timing the market is difficult and often counterproductive. While waiting for lower rates, home prices may rise, offsetting any rate savings. If you can afford a home now and plan to stay for several years, buying sooner often makes sense. You can always refinance later if rates drop significantly.',
  },
  {
    question: 'What credit score do I need for a mortgage?',
    answer:
      'Minimum credit score requirements vary by loan type: Conventional loans typically require 620+, FHA loans accept 580+ (or 500 with 10% down), and VA loans have no set minimum but most lenders want 620+. However, for the best rates, aim for 740 or higher. Each 20-point increase can improve your rate.',
  },
  {
    question: 'What is PMI and how can I avoid it?',
    answer:
      'Private Mortgage Insurance (PMI) is required on conventional loans when you put down less than 20%. It protects the lender if you default. PMI typically costs 0.5-1% of your loan amount annually. To avoid it, make a 20% down payment, choose a VA or USDA loan (if eligible), or ask about lender-paid PMI options.',
  },
  {
    question: 'Fixed-rate vs adjustable-rate mortgage: which is better?',
    answer:
      'Fixed-rate mortgages offer payment stability—your rate never changes. Adjustable-rate mortgages (ARMs) start with lower rates but can increase after the initial period (usually 5, 7, or 10 years). ARMs may make sense if you plan to move or refinance before the rate adjusts. In most cases, fixed-rate loans are safer for long-term homeowners.',
  },
  {
    question: 'How much house can I afford?',
    answer:
      'A common guideline is that your monthly housing costs (including mortgage, taxes, insurance) shouldn\'t exceed 28% of your gross monthly income, and total debt payments shouldn\'t exceed 36%. However, lenders may approve you for more. Consider your full financial picture—emergency fund, retirement savings, and lifestyle—before deciding.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 section-alt">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-3">Frequently Asked Questions</h2>
          <p className="text-lg text-[var(--color-ink-light)]">
            Common questions about mortgages and rates
          </p>
        </div>

        <div className="card p-6 sm:p-8">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
