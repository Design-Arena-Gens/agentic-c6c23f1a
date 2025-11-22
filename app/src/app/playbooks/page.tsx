import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AtlasID Deployment Playbooks",
  description:
    "Implementation lenses for pilot, nationwide launch, and continuous evolution of the AtlasID digital identity platform.",
};

const PLAYBOOKS = [
  {
    name: "Pilot Foundation (90 days)",
    objectives: [
      "Launch sandbox stack with synthetic population and relying party simulators.",
      "Distribute pilot wallets to 10k citizens with mobile + web parity.",
      "Instrument zero-trust policy guardrails and ledger-based consent receipts.",
    ],
    deliverables: [
      "Reference integrations (Tax, Social Services, Health)",
      "Offline credential capsules with geo-fence controls",
      "Pilot SOC dashboard with anomaly playbooks",
    ],
  },
  {
    name: "Nationwide Rollout (180 days)",
    objectives: [
      "Scale trust orchestration mesh across two active-active regions.",
      "Enable assisted enrollment kiosks with hardware integrations certified.",
      "Digitally sign every credential with HSM secured master keys and rotation policy.",
    ],
    deliverables: [
      "Relying party self-serve portal with automated due diligence",
      "Data residency partitions and jurisdiction-aware policy bundles",
      "CI/CD pipeline with security attestations (SLSA Level 3+)",
    ],
  },
  {
    name: "Continuous Evolution (ongoing)",
    objectives: [
      "Roll out behavioral biometrics and continuous phishing resistance.",
      "Enable privacy-preserving analytics through differential privacy views.",
      "Automate disaster recovery drills with verifiable recovery proofs.",
    ],
    deliverables: [
      "Annual compliance packages (GDPR, ISO 27001, NIST 800-63)",
      "Developer reliability scorecards with golden path testing",
      "Citizen trust portal for transparency and redress workflows",
    ],
  },
];

export default function PlaybooksPage() {
  return (
    <div className="space-y-12 py-12">
      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
        <div className="flex flex-col gap-3 text-balance">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
            Delivery Roadmap
          </span>
          <h1 className="text-4xl font-semibold text-white">
            Deployment playbooks that keep AtlasID production-ready
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
            Use these phased playbooks to de-risk implementation: pilot with
            analytics-first instrumentation, expand nationally with hardened
            policies, and evolve the trust fabric continuously.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-600/20"
          >
            Return to architecture overview
          </Link>
          <a
            href="mailto:identity-office@example.org"
            className="rounded-full border border-cyan-400/50 bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/30 hover:text-white"
          >
            Engage delivery office
          </a>
        </div>
      </section>

      <div className="space-y-8">
        {PLAYBOOKS.map((playbook) => (
          <article
            key={playbook.name}
            className="grid gap-6 rounded-3xl border border-white/10 bg-slate-950/50 p-8 shadow-2xl md:grid-cols-2 md:items-start"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                {playbook.name}
              </h2>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  Objectives
                </p>
                <ul className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-slate-200">
                  {playbook.objectives.map((objective) => (
                    <li key={objective} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                Critical Deliverables
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-slate-100">
                {playbook.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
