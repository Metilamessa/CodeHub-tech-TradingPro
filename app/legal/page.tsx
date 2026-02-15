import { LegalHeader } from "@/components/LegalHeader";
import { LegalFooter } from "@/components/LegalFooter";
import { TermsHero } from "@/components/TermsHero";
import { TermsTableOfContents } from "@/components/TermsTableOfContents";
import { TermsContent } from "@/components/TermsContent";

export default function LegalPage() {
  return (
    <div className="relative flex  flex-col">
      <LegalHeader />
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-20">
        <TermsHero />
        <div className="flex flex-col lg:flex-row gap-16">
          <TermsTableOfContents />
          <TermsContent />
        </div>
      </main>
      <LegalFooter />
    </div>
  );
}



