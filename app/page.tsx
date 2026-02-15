import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { PowerUsersSection } from "@/components/PowerUsersSection";
import { CtaSection } from "@/components/CtaSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <PowerUsersSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}


