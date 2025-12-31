import { fetchMortgageRates } from '@/lib/fred-api';
import { RateSummary } from '@/components/features/mortgage-rates/RateSummary';
import { RateChart } from '@/components/features/mortgage-rates/RateChart';
import { TipsSection } from '@/components/features/content/TipsSection';
import { ComparisonSection } from '@/components/features/content/ComparisonSection';
import { FAQSection } from '@/components/features/content/FAQSection';

export default async function HomePage() {
  const data = await fetchMortgageRates();

  return (
    <>
      <RateSummary rates={data.rates} dataDate={data.dataDate} />

      <RateChart
        thirtyYear={data.rates.thirtyYear.history}
        fifteenYear={data.rates.fifteenYear.history}
      />

      <TipsSection />

      <ComparisonSection rates={data.rates} />

      <FAQSection />
    </>
  );
}
