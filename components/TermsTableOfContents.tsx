"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { id: "user-agreement", label: "1. User Agreement" },
  { id: "eligibility", label: "2. Eligibility" },
  { id: "trading-rules", label: "3. Trading Rules" },
  { id: "fees", label: "4. Fees & Payments" },
  { id: "liability", label: "5. Liability & Risk" },
  { id: "termination", label: "6. Account Termination" },
  { id: "governing-law", label: "7. Governing Law" },
];

export function TermsTableOfContents() {
  const [activeSection, setActiveSection] = useState("user-agreement");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:block w-64 shrink-0 self-start">

      <div className="sticky top-28 space-y-6">
          <p className="text-xs font-bold text-[#eaecef] uppercase tracking-widest">
            On this page
          </p>

          <nav className="flex flex-col gap-3 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`transition-all duration-200 ${
                    isActive
                      ? "text-primary font-bold translate-x-1"
                      : "text-[#848e9c] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-12 p-6 rounded-xl bg-surface-dark border border-border-dark">
            <h4 className="text-[#eaecef] font-bold mb-2">Legal Inquiry?</h4>
            <p className="text-xs text-[#848e9c] mb-4">
              Our compliance team is available for clarification on any terms.
            </p>
            <a
              className="inline-flex items-center gap-2 text-primary text-xs font-bold hover:gap-3 transition-all"
              href="mailto:legal@tradepro.com"
            >
              contact@tradepro.com
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
      </div>
    </aside>
  );
}
