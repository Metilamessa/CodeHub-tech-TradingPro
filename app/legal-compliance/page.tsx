import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AMLHero } from "@/components/AMLHero";
import { VerificationLifecycle } from "@/components/VerificationLifecycle";
import { AMLTableOfContents } from "@/components/AMLTableOfContents";
import { AMLSection } from "@/components/AMLSection";

export default function LegalCompliancePage() {
  return (
    <>
      <Header activeLink="legal & compliance" />
      <main className="flex-1 bg-background-dark py-12 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <AMLHero />
          <VerificationLifecycle />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AMLSection
                id="introduction"
                number="1"
                title="Overview of AML Compliance"
              >
                <p>
                  TradePro is committed to maintaining the highest standards of
                  Anti-Money Laundering (AML) and Counter-Terrorist Financing
                  (CTF) compliance. This policy outlines our procedures for
                  identifying and mitigating risks associated with money
                  laundering, terrorist financing, and other financial crimes.
                </p>
                <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg mb-8">
                  <p className="text-primary text-sm font-medium italic mb-0">
                    "TradePro operates in strict adherence to FATF (Financial
                    Action Task Force) recommendations and local regulatory
                    requirements in all operating jurisdictions."
                  </p>
                </div>
              </AMLSection>

              <AMLSection
                id="source-of-funds"
                number="2"
                title="Source of Funds (SoF) Requirements"
              >
                <p>
                  For high-volume institutional accounts, TradePro requires
                  comprehensive documentation regarding the source of funds and
                  source of wealth. This includes but is not limited to:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <svg
                      className="text-primary text-sm mt-1 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    <span className="text-gray-400">
                      Audited financial statements for corporate entities.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="text-primary text-sm mt-1 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    <span className="text-gray-400">
                      Proof of capital gains from previous investment cycles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="text-primary text-sm mt-1 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    <span className="text-gray-400">
                      Bank logs showing legitimate fiat-to-crypto pathways.
                    </span>
                  </li>
                </ul>
              </AMLSection>

              <AMLSection
                id="sanctions"
                number="3"
                title="Sanctions Screening"
              >
                <p>
                  All users and entities are screened against global sanctions
                  lists in real-time. This includes OFAC (US), HM Treasury (UK),
                  UN Security Council, and EU Consolidated Lists. Any matches
                  will result in immediate account restriction and reporting to
                  relevant authorities.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-surface-dark border border-border-dark rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-primary text-lg">
                        search
                      </span>
                      <div className="text-white font-bold">
                        Watchlist Screening
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Cross-referenced every 24 hours.
                    </div>
                  </div>
                  <div className="p-4 bg-surface-dark border border-border-dark rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-primary text-lg">
                        location_on
                      </span>
                      <div className="text-white font-bold">
                        Geographic Blocking
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      IP monitoring for restricted regions.
                    </div>
                  </div>
                </div>
              </AMLSection>

              <AMLSection
                id="monitoring"
                number="4"
                title="Transaction Monitoring"
              >
                <p>
                  TradePro utilizes advanced chain-analysis tools to monitor all
                  incoming and outgoing blockchain transactions. We assign risk
                  scores to every address based on its historical exposure to
                  darknet markets, mixers, or known illicit actors.
                </p>
                <div className="flex items-center gap-4 bg-surface-dark border border-border-dark p-4 rounded-xl mb-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">
                      analytics
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-bold">
                      Automated Heuristics
                    </div>
                    <p className="text-xs text-gray-500 mb-0">
                      Algorithms flag unusual frequency, volume spikes, or
                      "smurfing" patterns instantly.
                    </p>
                  </div>
                </div>
              </AMLSection>
            </div>
            <AMLTableOfContents />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

