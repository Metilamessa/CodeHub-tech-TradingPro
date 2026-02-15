"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieTableOfContents() {
  const [activeSection, setActiveSection] = useState("what-are-cookies");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "what-are-cookies",
        "how-we-use-them",
        "essential-cookies",
        "performance-cookies",
        "marketing-cookies",
        "managing-preferences",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "what-are-cookies", label: "1. What are Cookies" },
    { id: "how-we-use-them", label: "2. How we use them" },
    { id: "essential-cookies", label: "3. Essential Cookies" },
    { id: "performance-cookies", label: "4. Performance Cookies" },
    { id: "marketing-cookies", label: "5. Marketing Cookies" },
    { id: "managing-preferences", label: "6. Managing Preferences" },
  ];

  return (
    <aside className="lg:w-64 shrink-0">
      <div className="sticky top-28 space-y-6">
        <p className="text-xs font-bold text-[#eaecef] uppercase tracking-widest">
          On this page
        </p>
        <nav className="flex flex-col gap-4 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </Link>
          ))}
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
            contact@tradepro.com{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}



