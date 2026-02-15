import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InstitutionalHero } from "@/components/InstitutionalHero";
import { Tier1LiquiditySection } from "@/components/Tier1LiquiditySection";
import { VIPServicesSection } from "@/components/VIPServicesSection";
import { SecuritySection } from "@/components/SecuritySection";
import { AdvancedAPISection } from "@/components/AdvancedAPISection";
import { InstitutionalCta } from "@/components/InstitutionalCta";

export default function InstitutionalPage() {
  return (
    <>
      <Header activeLink="institutional" />
      <main className="flex-1">
        <InstitutionalHero />
        <Tier1LiquiditySection />
        <VIPServicesSection />
        <SecuritySection />
        <AdvancedAPISection />
        <InstitutionalCta />
      </main>
      <Footer />
    </>
  );
}

