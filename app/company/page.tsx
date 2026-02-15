import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrivacyHero } from "@/components/PrivacyHero";
import { PrivacyTableOfContents } from "@/components/PrivacyTableOfContents";
import { PrivacySection } from "@/components/PrivacySection";
import { CookieSettings } from "@/components/CookieSettings";
import { PrivacyCta } from "@/components/PrivacyCta";

export default function CompanyPage() {
  return (
    <>
      <Header activeLink="company" />
      <main className="flex-1">
        <PrivacyHero />
        <div className="py-20 bg-background-dark">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row gap-16">
              <PrivacyTableOfContents />
              <div className="lg:w-3/4 policy-content">
                <PrivacySection
                  id="collection"
                  number="01"
                  title="Data Collection"
                >
                  <p className="text-gray-400 leading-relaxed mb-4">
                    We collect information necessary to provide
                    institutional-grade trading services, comply with regulatory
                    requirements (KYC/AML), and ensure the security of our
                    network. This includes:
                  </p>
                  <ul className="space-y-3 mb-8 ml-4">
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>Identity Information:</strong> Name,
                        government-issued identification, and corporate
                        documentation for institutional entities.
                      </span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>Contact Information:</strong> Professional email
                        addresses, phone numbers, and registered business
                        addresses.
                      </span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>Financial Information:</strong> Bank account
                        details, source of funds documentation, and wallet
                        addresses for settlement.
                      </span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>Technical Information:</strong> IP addresses,
                        device identifiers, and platform interaction logs for
                        security monitoring.
                      </span>
                    </li>
                  </ul>
                </PrivacySection>

                <PrivacySection
                  id="usage"
                  number="02"
                  title="Use of Information"
                >
                  <p className="text-gray-400 leading-relaxed mb-4">
                    TradePro uses the collected data for the following essential
                    purposes:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <div className="bg-surface-dark p-6 rounded-xl border border-border-dark">
                      <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">
                          analytics
                        </span>{" "}
                        Service Optimization
                      </h4>
                      <p className="text-xs text-gray-400 mb-0">
                        Improving our low-latency engines and matching
                        algorithms based on usage patterns.
                      </p>
                    </div>
                    <div className="bg-surface-dark p-6 rounded-xl border border-border-dark">
                      <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">
                          policy
                        </span>{" "}
                        Compliance
                      </h4>
                      <p className="text-xs text-gray-400 mb-0">
                        Meeting legal obligations regarding Anti-Money
                        Laundering and Counter-Terrorist Financing.
                      </p>
                    </div>
                  </div>
                </PrivacySection>

                <PrivacySection
                  id="storage"
                  number="03"
                  title="Storage & Protection"
                >
                  <p className="text-gray-400 leading-relaxed mb-4">
                    We utilize multi-layer encryption and air-gapped storage for
                    sensitive data. Our security measures include:
                  </p>
                  <ul className="space-y-3 mb-8 ml-4">
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>AES-256 encryption for all data at rest.</span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>TLS 1.3 encryption for data in transit.</span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Mandatory multi-factor authentication (MFA) for all
                        administrative access.
                      </span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Regular third-party security audits and penetration
                        testing.
                      </span>
                    </li>
                  </ul>
                </PrivacySection>

                <PrivacySection
                  id="cookies"
                  number="04"
                  title="Cookies & Tracking"
                  className="mt-16 bg-surface-dark p-8 rounded-2xl border border-border-dark"
                >
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Manage your tracking preferences. Some cookies are
                    essential for the operation and security of the TradePro
                    terminal.
                  </p>
                  <CookieSettings />
                </PrivacySection>

                <PrivacySection
                  id="sharing"
                  number="05"
                  title="Third-Party Sharing"
                  className="mt-16"
                >
                  <p className="text-gray-400 leading-relaxed mb-4">
                    We do not sell user data to third parties. Sharing only
                    occurs with:
                  </p>
                  <ul className="space-y-3 mb-8 ml-4">
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Regulatory bodies when legally compelled or required by
                        law.
                      </span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Infrastructure partners (e.g., data centers) under
                        strict non-disclosure agreements.
                      </span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Verification services for automated KYC/AML processing.
                      </span>
                    </li>
                  </ul>
                </PrivacySection>

                <PrivacySection id="rights" number="06" title="Your Rights">
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Depending on your jurisdiction, you have the right to:
                  </p>
                  <ul className="space-y-3 mb-8 ml-4">
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Access and export your personal data in a readable
                        format.
                      </span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Request the correction of inaccurate or incomplete
                        information.
                      </span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Request the erasure of data where no legal ground for
                        retention exists.
                      </span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Withdraw consent for optional data processing at any
                        time.
                      </span>
                    </li>
                  </ul>
                </PrivacySection>
              </div>
            </div>
          </div>
        </div>
        <PrivacyCta />
      </main>
      <Footer />
    </>
  );
}

