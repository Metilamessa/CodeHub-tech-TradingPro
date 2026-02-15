"use client";

import { useState, useEffect } from "react";

export function PrivacyTableOfContents() {
  const [activeSection, setActiveSection] = useState("collection");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "collection",
        "usage",
        "storage",
        "cookies",
        "sharing",
        "rights",
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

  const sections = [
    { id: "collection", label: "Data Collection" },
    { id: "usage", label: "Use of Information" },
    { id: "storage", label: "Storage & Protection" },
    { id: "cookies", label: "Cookies & Tracking" },
    { id: "sharing", label: "Third-Party Sharing" },
    { id: "rights", label: "Your Rights" },
  ];

  return (
    <aside className="lg:w-1/4 hidden lg:block">
      <div className="sticky top-32">
        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 text-center">
          CONTENTS
        </h4>
        <nav className="space-y-1">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setActiveSection(section.id)}
                className={`block py-2 text-sm transition-colors ${
                  isActive
                    ? "text-primary border-l-[3px] border-primary pl-4 font-medium"
                    : "text-gray-500 pl-4"
                }`}
              >
                {index + 1}. {section.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

