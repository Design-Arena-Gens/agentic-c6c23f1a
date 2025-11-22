const FLOW_STEPS = [
  {
    title: "Device Signal Ingestion",
    body: "Biometric unlock, device posture, and signed request bundle are wrapped into a verifiable presentation, hashed locally, and posted to the ingress gateway.",
    detail:
      "Encrypted payload → TLS mutual auth → API gateway → message fan-out to event mesh.",
  },
  {
    title: "Edge Trust Orchestration",
    body: "The trust orchestration engine validates DID signatures, checks revocation status via the credential registry, and evaluates policy via the ABAC engine.",
    detail:
      "Rules evaluate citizen status, credential classes, and service-level entitlements in <40ms.",
  },
  {
    title: "Service Token Minting",
    body: "Signed JWT and short-lived verifiable credentials minted by the credential minting service, using FIPS-validated HSM keys backed by quorum approval.",
    detail:
      "Tokens are tagged with contextual claims (location, risk score, channel) and rolled into the service envelope.",
  },
  {
    title: "Downstream Service Delivery",
    body: "Service bus delivers sanitized attributes to government and private relying parties with full audit trails and citizen consent receipts.",
    detail:
      "Supports REST, gRPC, and event streaming; every transaction anchored in append-only ledger.",
  },
];

export function ArchitectureFlow() {
  return (
    <div className="mt-10 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
      <div className="grid gap-4 md:grid-cols-4 md:gap-6">
        {FLOW_STEPS.map((step, index) => (
          <div
            key={step.title}
            className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6"
          >
            <span className="absolute right-4 top-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
              {`0${index + 1}`}
            </span>
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-200/90">
              {step.body}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cyan-200/80">
              Signal Path
            </p>
            <p className="mt-1 text-sm text-slate-300/80">{step.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
