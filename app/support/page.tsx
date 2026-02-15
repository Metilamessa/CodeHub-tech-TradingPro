import { SupportHeader } from "@/components/SupportHeader";
import { SupportFooter } from "@/components/SupportFooter";
import { SupportBreadcrumb } from "@/components/SupportBreadcrumb";
import { SupportArticle } from "@/components/SupportArticle";
import { SupportSidebar } from "@/components/SupportSidebar";

export default function SupportPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <SupportHeader />
      <main className="max-w-[1280px] mx-auto px-6 py-8 flex-grow">
        <SupportBreadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <SupportArticle />
          </div>
          <SupportSidebar />
        </div>
      </main>
      <SupportFooter />
    </div>
  );
}



