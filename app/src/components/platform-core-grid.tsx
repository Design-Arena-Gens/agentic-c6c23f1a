const SERVICES = [
  {
    name: "Trust Orchestration Engine",
    description:
      "Policy-driven flows for authentication, authorization, and consent. Combines ABAC, RBAC overlays, and real-time risk scoring from machine learning models.",
    interfaces: ["GraphQL mutations", "EventMesh streams", "Policy DSL (Rego)"],
  },
  {
    name: "Credential Services",
    description:
      "Manages issuance, revocation, and lifecycle of digital IDs (DIDComm, mDL, Verifiable Credentials). Integrates with national registries and PKI roots.",
    interfaces: ["DIDComm v2", "OpenID4VCI", "ICAO LDS bridge"],
  },
  {
    name: "Integration Gateway",
    description:
      "Unified API gateway for government relying parties and private sector relying parties. Enforces schema validation, quota management, and consent enforcement.",
    interfaces: ["REST (OpenAPI)", "gRPC", "Async Jobs API"],
  },
  {
    name: "Ledger & Evidence Store",
    description:
      "Immutable append-only ledger for audit trails, consent receipts, and evidence artifacts. Supports zero-knowledge proof attestation for selective disclosure.",
    interfaces: ["Streaming API (Kafka)", "Forensics API", "SIEM Connectors"],
  },
];

export function PlatformCoreGrid() {
  return (
    <div
      id="platform-core"
      className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl md:grid-cols-2"
    >
      {SERVICES.map((service) => (
        <article
          key={service.name}
          className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-6"
        >
          <h3 className="text-xl font-semibold text-white">{service.name}</h3>
          <p className="text-sm leading-relaxed text-slate-200/90">
            {service.description}
          </p>
          <div className="mt-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
              Interfaces
            </p>
            <ul className="mt-2 flex flex-wrap gap-2 text-xs font-semibold text-cyan-100">
              {service.interfaces.map((iface) => (
                <li
                  key={iface}
                  className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1"
                >
                  {iface}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
