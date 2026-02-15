"use client";

import { useState, useEffect } from "react";

interface CookieOption {
  id: string;
  title: string;
  description: string;
  required: boolean;
}

export function CookieSettings() {
  const [cookieStates, setCookieStates] = useState<Record<string, boolean>>({
    essential: true, // Always on, cannot be disabled
    performance: false,
    functional: false,
  });

  // Load saved preferences from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cookiePreferences");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCookieStates((prev) => ({
          ...prev,
          ...parsed,
          essential: true, // Always keep essential on
        }));
      } catch (e) {
        // If parsing fails, use defaults
      }
    }
  }, []);

  const cookies: CookieOption[] = [
    {
      id: "essential",
      title: "Essential Cookies",
      description:
        "Required for authentication, security, and core platform functionality.",
      required: true,
    },
    {
      id: "performance",
      title: "Performance & Analytics",
      description:
        "Helps us understand how the platform is used to improve user experience.",
      required: false,
    },
    {
      id: "functional",
      title: "Functional Personalization",
      description:
        "Remembering your layout preferences and terminal configurations.",
      required: false,
    },
  ];

  const toggleCookie = (id: string) => {
    // Essential cookies cannot be toggled
    if (id === "essential") return;

    setCookieStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSave = () => {
    // Save to localStorage (excluding essential as it's always on)
    const preferences = {
      performance: cookieStates.performance,
      functional: cookieStates.functional,
    };
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    
    // Show success message (you could replace this with a toast notification)
    const button = document.querySelector('[data-save-button]') as HTMLElement;
    if (button) {
      const originalText = button.textContent;
      button.textContent = "Saved!";
      button.classList.add("bg-primary/20");
      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove("bg-primary/20");
      }, 2000);
    }
  };

  return (
    <div className="space-y-4">
      {cookies.map((cookie) => {
        const isEnabled = cookieStates[cookie.id];
        const canToggle = !cookie.required;

        return (
          <div
            key={cookie.id}
            className={`flex items-center justify-between p-4 rounded-lg border border-border-dark ${
              cookie.required ? "bg-background-dark" : "bg-background-dark/50"
            }`}
          >
            <div className="flex-1">
              <h4 className="text-white font-bold text-sm">{cookie.title}</h4>
              <p className="text-gray-500 text-xs mt-1">{cookie.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`text-xs font-bold ${
                  cookie.required || isEnabled ? "text-primary" : "text-gray-500"
                }`}
              >
                {cookie.required ? "ALWAYS ON" : isEnabled ? "ON" : "OPTIONAL"}
              </span>
              <button
                onClick={() => toggleCookie(cookie.id)}
                disabled={!canToggle}
                className={`w-12 h-6 rounded-full relative transition-all ${
                  canToggle ? "cursor-pointer" : "cursor-not-allowed"
                } ${
                  isEnabled
                    ? "bg-primary"
                    : "bg-border-dark"
                }`}
                aria-label={`Toggle ${cookie.title}`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                    isEnabled ? "right-1" : "left-1"
                  } ${!isEnabled && !cookie.required ? "bg-gray-500" : ""}`}
                ></div>
              </button>
            </div>
          </div>
        );
      })}
      <button
        data-save-button
        onClick={handleSave}
        className="mt-8 text-primary text-sm font-bold border border-primary/20 px-4 py-2 rounded hover:bg-primary/10 transition-colors"
      >
        Save Cookie Settings
      </button>
    </div>
  );
}

