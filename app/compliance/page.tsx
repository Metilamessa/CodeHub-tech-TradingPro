import { ComplianceHeader } from "@/components/ComplianceHeader";
import { ComplianceFooter } from "@/components/ComplianceFooter";
import { ComplianceHero } from "@/components/ComplianceHero";
import { GlobalPresence } from "@/components/GlobalPresence";
import { PrincipalLicenses } from "@/components/PrincipalLicenses";
import { UserProtections } from "@/components/UserProtections";
import { ComplianceCta } from "@/components/ComplianceCta";

export default function CompliancePage() {
  return (
    <>
      <ComplianceHeader />
      <main className="flex-grow">
        <ComplianceHero />
        <GlobalPresence />
        <PrincipalLicenses />
        <UserProtections />
        <ComplianceCta />
      </main>
      <ComplianceFooter />
    </>
  );
}





