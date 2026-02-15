import { MarketsHeader } from "@/components/MarketsHeader";
import { MarketsFooter } from "@/components/MarketsFooter";
import { MarketsHero } from "@/components/MarketsHero";
import { MarketExplorer } from "@/components/MarketExplorer";
import { TrendingInsights } from "@/components/TrendingInsights";
import { FearGreedIndex } from "@/components/FearGreedIndex";
import { TopGainersLosers } from "@/components/TopGainersLosers";
import { EconomicCalendar } from "@/components/EconomicCalendar";

export default function MarketsPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <MarketsHeader />
      <main className="relative">
        <MarketsHero />
        <div className="mx-auto w-full max-w-[1440px] px-6 py-12 space-y-20 relative z-20">
          <MarketExplorer />
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TrendingInsights />
            <FearGreedIndex />
          </section>
          <TopGainersLosers />
          <EconomicCalendar />
        </div>
      </main>
      <MarketsFooter />
    </div>
  );
}



