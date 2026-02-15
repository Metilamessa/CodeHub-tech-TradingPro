import { HelpCenterHeader } from "@/components/HelpCenterHeader";
import { HelpCenterFooter } from "@/components/HelpCenterFooter";
import { HelpCenterHero } from "@/components/HelpCenterHero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { PromotedArticles } from "@/components/PromotedArticles";
import { HelpCenterSidebar } from "@/components/HelpCenterSidebar";
import { HelpCenterCta } from "@/components/HelpCenterCta";

export default function HelpCenterPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 min-h-screen">
      <HelpCenterHeader />
      <main>
        <HelpCenterHero />
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-8">Browse by Category</h3>
              <CategoryGrid />
              <PromotedArticles />
            </div>
            {/* Sidebar Navigation */}
            <HelpCenterSidebar />
          </div>
        </section>
        <HelpCenterCta />
      </main>
      <HelpCenterFooter />
    </div>
  );
}

