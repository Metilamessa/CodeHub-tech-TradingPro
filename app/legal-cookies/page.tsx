import { LegalHeader } from "@/components/LegalHeader";
import { CookieFooter } from "@/components/CookieFooter";
import { CookieHero } from "@/components/CookieHero";
import { CookieTableOfContents } from "@/components/CookieTableOfContents";
import { CookieContent } from "@/components/CookieContent";

export default function CookiePolicyPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <LegalHeader />
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-20">
        <CookieHero />
        <div className="flex flex-col lg:flex-row gap-16">
          <CookieTableOfContents />
          <CookieContent />
        </div>
      </main>
      <CookieFooter />
    </div>
  );
}



