const SECURITY_LAYERS = [
  {
    name: "Citizen Identity Layer",
    controls: [
      "Device posture scoring with jailbreak/root detection and hardware attestation",
      "Risk-adaptive MFA with biometrics, passkeys, and step-up authorization",
      "Consent receipts hashed into tamper-evident ledger per ISO/IEC 18013-5",
    ],
  },
  {
    name: "Trust Fabric Layer",
    controls: [
      "Decentralized identifier registry with real-time revocation sweeps",
      "Policy decision point (PDP) built on ABAC + contextual RBAC overlays",
      "Dynamic data minimization filters for each relying party integration",
    ],
  },
  {
    name: "Data Vault Layer",
    controls: [
      "Multi-region sharded Postgres with transparent data encryption (TDE)",
      "Field-level encryption using HSM backed envelope keys and quorum rotation",
      "Immutable audit log with Merkle hashing and streaming to SIEM/Lakehouse",
    ],
  },
];

export function SecurityStack() {
  return (
    <div className="grid gap-6 md:grid-cols-3" id="security">
      {SECURITY_LAYERS.map((layer) => (
        <section
          key={layer.name}
          className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-6 shadow-2xl"
        >
          <h3 className="text-lg font-semibold text-cyan-200">{layer.name}</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-200/90">
            {layer.controls.map((control) => (
              <li key={control} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-cyan-400" />
                <span>{control}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
