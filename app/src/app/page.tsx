import { ArchitectureFlow } from "@/components/architecture-flow";
import { CitizenChannelGrid } from "@/components/citizen-channel-grid";
import { HeroSection } from "@/components/hero-section";
import { OperationsDashboard } from "@/components/operations-dashboard";
import { PlatformCoreGrid } from "@/components/platform-core-grid";
import { SectionHeading } from "@/components/section-heading";
import { SecurityStack } from "@/components/security-stack";

export default function Home() {
  return (
    <div className="space-y-24">
      <HeroSection />

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Unified Experience"
          title="One codebase, three channels, zero compromises"
          description="Deliver a consistent identity experience across mobile, responsive web, and kiosk endpoints. Every channel inherits the same security guarantees, device trust posture, and consent flows."
          anchorId="citizen-apps"
        />
        <CitizenChannelGrid />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Trust Conveyor"
          title="Signal routing from device to relying party"
          description="Each authentication request travels through deterministic stages that validate citizen proofing, evaluate policy, mint service-specific credentials, and log evidence for auditors."
        />
        <ArchitectureFlow />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Composable Core"
          title="Platform services that orchestrate national scale identity"
          description="Decouple trust orchestration, credential issuance, and integration gateway responsibilities. Every component publishes telemetry and policy hooks to keep the program governable."
          anchorId="platform-core"
        />
        <PlatformCoreGrid />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Defense in Depth"
          title="Security envelopes for citizens, services, and data"
          description="Hardening starts at the device, extends through the trust fabric, and terminates inside the encrypted vault. Compliance attestations and audit trails are a by-product of every transaction."
          anchorId="security"
        />
        <SecurityStack />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Continuous Command"
          title="Operating AtlasID across SOC, enrollment, and developer teams"
          description="Switch perspectives to see how operations leads, enrollment managers, and integration teams observe live metrics, enforce guardrails, and respond to signals in under a minute."
          anchorId="operations"
        />
        <OperationsDashboard />
      </section>
    </div>
  );
}
