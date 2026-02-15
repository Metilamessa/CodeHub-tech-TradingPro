"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface LicenseCardProps {
  badge?: string;
  badgeAlt?: string;
  icon?: string | React.ReactNode;
  status: "active" | "in-progress";
  title: string;
  description: string;
  features: string[];
  registryLink?: string;
  registryText?: string;
  disabled?: boolean;
}

export function LicenseCard({
  badge,
  badgeAlt,
  icon,
  status,
  title,
  description,
  features,
  registryLink,
  registryText = "Official Registry",
  disabled = false,
}: LicenseCardProps) {
  // Initialize with all clickable features selected by default
  const [selectedFeatures, setSelectedFeatures] = useState<Set<number>>(() => {
    const initial = new Set<number>();
    features.forEach((feature, index) => {
      if (
        feature === "Segregated Client Accounts" ||
        feature === "Professional Indemnity Insurance"
      ) {
        initial.add(index);
      }
    });
    return initial;
  });

  const toggleFeature = (index: number) => {
    setSelectedFeatures((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const statusConfig = {
    active: {
      bg: "bg-green-500/10",
      text: "text-green-500",
      label: "Active",
    },
    "in-progress": {
      bg: "bg-blue-500/10",
      text: "text-blue-500",
      label: "In Progress",
    },
  };

  const config = statusConfig[status];

  return (
    <div className="group bg-surface-dark border border-border-dark rounded-2xl p-8 badge-glow transition-all hover:-translate-y-1">
      <div className="flex justify-between items-start mb-8">
        <div className="w-16 h-16 bg-background-dark border border-border-dark rounded-xl flex items-center justify-center p-3">
          {badge ? (
            <Image
              alt={badgeAlt || "License Badge"}
              src={badge}
              width={64}
              height={64}
              className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          ) : icon ? (
            <div className="w-full h-full bg-primary/20 rounded flex items-center justify-center text-primary">
              {typeof icon === "string" ? (
                <span className="material-symbols-outlined text-3xl">
                  {icon}
                </span>
              ) : (
                <div className="text-primary">{icon}</div>
              )}
            </div>
          ) : null}
        </div>
        <span
          className={`px-2 py-1 ${config.bg} ${config.text} text-[10px] font-bold uppercase rounded`}
        >
          {config.label}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">{description}</p>
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => {
          const isInProgress = status === "in-progress";
          const isClickable = !isInProgress && (
            feature === "Segregated Client Accounts" ||
            feature === "Professional Indemnity Insurance"
          );
          const isSelected = selectedFeatures.has(index);

          return (
            <div
              key={index}
              className={`flex items-center gap-3 text-xs ${
                isClickable
                  ? "cursor-pointer hover:text-white transition-colors"
                  : ""
              } ${isSelected ? "text-white" : "text-gray-400"}`}
              onClick={() => isClickable && toggleFeature(index)}
            >
              <span
                className={`material-symbols-outlined text-sm transition-all ${
                  isInProgress
                    ? "text-gray-600"
                    : isSelected
                    ? "text-primary scale-110"
                    : "text-primary"
                }`}
              >
                {isInProgress
                  ? "hourglass_empty"
                  : isSelected
                  ? "check_circle"
                  : "radio_button_unchecked"}
              </span>
              {feature}
            </div>
          );
        })}
      </div>
      {disabled ? (
        <div className="flex items-center justify-between group/link text-sm font-bold text-white/50 cursor-not-available">
          {registryText}{" "}
          <span className="material-symbols-outlined text-sm">lock</span>
        </div>
      ) : (
        <Link
          href={registryLink || "#"}
          className="flex items-center justify-between group/link text-sm font-bold text-white hover:text-primary transition-colors"
        >
          {registryText}{" "}
          <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">
            open_in_new
          </span>
        </Link>
      )}
    </div>
  );
}





