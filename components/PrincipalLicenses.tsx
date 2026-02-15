"use client";

import { useState } from "react";
import { LicenseCard } from "./LicenseCard";

export function PrincipalLicenses() {
  const [filter, setFilter] = useState("all");

  const licenses = [
    {
      badge: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZXh3GSpDOTAmdKreHqDHqZBJisNjz7gen08sm8k9EesYp3tegQ2CbQ_hdpmz6hbSmW-mm-LqbuQB6BrT1CZ5j7SboRamJ0kBBVDLmJkiJSp-kl5gFLrA3s9_S29tCsoZuZnyoVTHnetgWCN2qY6ISz13vBY1DVdttI8-_zaa4Zarl-D-087rN7IXQmroTbXDEQm-pfL7Eynhg4pK8F-ev0lamDeeWsAHqfjPljLxRQ3eM4fhreRGtpfucXYhuIYOJQLTNPhXzGdE",
      badgeAlt: "FCA Badge",
      status: "active" as const,
      title: "FCA - United Kingdom",
      description:
        "Financial Conduct Authority (FCA). License No. 883291. Regulated for brokerage and custodial activities under the FSMA framework.",
      features: [
        "Client Money Protection (CASS)",
        "FSCS Compensation Eligible",
      ],
      region: "europe",
    },
    {
      badge: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4XQCs6aYcxVhOa2ZSlxgHMgCQr8K-YCMt7LqM5n9dt1-iAZcumTrkiBV2eh739ZqQ61ZmIokOHTHCK0yIf9u-XC7dz5x8WmUIRv_wk5FBu1_XGmKCPeySbIvFQBFoz0y1b77ikOWg-3cO7DXq4_-o8FLegXVmI_ZYID5QcnArr1ge3q7H_0KFGJvNXE1F_ZHp4V-YVeqB62yeS-njySKcszRc6Q1lc0SW0dV403Q3D3abhARXhK_sfhrPWZye6VE1K44j8MErQVc",
      badgeAlt: "CySEC Badge",
      status: "active" as const,
      title: "CySEC - European Union",
      description:
        "Cyprus Securities and Exchange Commission. License No. 412/22. Authorised CIF providing investment services across the EEA.",
      features: ["MiFID II Compliance", "Investor Compensation Fund (ICF)"],
      region: "europe",
    },
    {
      icon: "account_balance",
      status: "active" as const,
      title: "ASIC - Australia",
      description:
        "Australian Securities and Investments Commission. AFSL No. 592201. Regulated for financial product advice and dealings.",
      features: [
        "Segregated Client Accounts",
        "Professional Indemnity Insurance",
      ],
      region: "asia-pacific",
    },
    {
      icon: "currency_exchange",
      status: "in-progress" as const,
      title: "MAS - Singapore",
      description:
        "Monetary Authority of Singapore. Capital Markets Services (CMS) license application pending under the Securities and Futures Act.",
      features: [
        "Major Payment Institution Scope",
        "Digital Asset Services Approval",
      ],
      registryText: "Public Consultation",
      disabled: true,
      region: "asia-pacific",
    },
    {
      icon: "security",
      status: "active" as const,
      title: "FinCEN - USA",
      description:
        "Registered as a Money Services Business (MSB). Registration No. 31000219900222. Compliant with Bank Secrecy Act (BSA) rules.",
      features: [
        "Anti-Money Laundering (AML) Program",
        "KYC & Enhanced Due Diligence",
      ],
      region: "all",
    },
    {
      icon: "location_city",
      status: "active" as const,
      title: "FSRA - ADGM",
      description:
        "Abu Dhabi Global Market. Financial Services Permission (FSP) No. 200055. Regulated for Multi-Lateral Trading Facility (MTF).",
      features: [
        "Virtual Asset Framework",
        "Capital Adequacy Oversight",
      ],
      region: "all",
    },
  ];

  const filteredLicenses =
    filter === "all"
      ? licenses
      : licenses.filter((license) => license.region === filter);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Our Principal Licenses</h2>
            <p className="text-gray-400">
              Detailed overview of our regulatory status and the legal
              protections afforded to our institutional partners in each
              jurisdiction.
            </p>
          </div>
          <div className="flex gap-2">
            {["All Regions", "Europe", "Asia-Pacific"].map((region) => {
              const filterValue =
                region === "All Regions"
                  ? "all"
                  : region.toLowerCase().replace("-", "-");
              const isActive = filter === filterValue;
              return (
                <button
                  key={region}
                  onClick={() => setFilter(filterValue)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors border ${
                    isActive
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-surface-dark border-border-dark hover:bg-border-dark text-gray-400"
                  }`}
                >
                  {region}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLicenses.map((license) => (
            <LicenseCard key={license.title} {...license} />
          ))}
        </div>
      </div>
    </section>
  );
}




