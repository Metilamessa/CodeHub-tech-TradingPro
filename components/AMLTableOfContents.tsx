import { ComplianceStatus } from "./ComplianceStatus";
import { NeedAssistance } from "./NeedAssistance";

export function AMLTableOfContents() {
  const sections = [
    { id: "introduction", label: "Overview" },
    { id: "source-of-funds", label: "Source of Funds" },
    { id: "sanctions", label: "Sanctions Screening" },
    { id: "monitoring", label: "Transaction Monitoring" },
    { id: "#", label: "Reporting Obligations" },
  ];

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-32 space-y-6">
        <ComplianceStatus />
        <NeedAssistance />
        <nav className="space-y-2 pl-2">
          <h4 className="text-gray-500 font-bold mb-4 uppercase text-[10px] tracking-[0.2em]">
            Table of Contents
          </h4>
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={section.id}
              className="block text-sm text-gray-400 hover:text-primary transition-colors"
            >
              {index + 1}. {section.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

