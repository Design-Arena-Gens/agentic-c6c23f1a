const CHANNELS = [
  {
    title: "Mobile Wallet",
    description:
      "Biometric unlock with offline-ready credential vault. Uses device secure enclave, auto-rotates refresh tokens, and surfaces dynamic QR codes for verifiers.",
    capabilities: [
      "FaceID/Fingerprint + fallback PIN",
      "Encrypted credential capsules for offline proofing",
      "Push-to-enroll and instant re-issuance workflows",
    ],
    gradient: "from-cyan-400/90 via-sky-500/60 to-blue-500/40",
  },
  {
    title: "Responsive Web",
    description:
      "Full-featured portal accessible from any browser. Supports contextual MFA prompts and WebAuthn security keys, with graceful degradation to OTP.",
    capabilities: [
      "Session co-presence detection & device binding",
      "Adaptive MFA challenges (WebAuthn, Passkey, OTP)",
      "Progressive web app mode for kiosks and shared devices",
    ],
    gradient: "from-emerald-400/80 via-teal-500/60 to-green-500/40",
  },
  {
    title: "Kiosk & Service Desk",
    description:
      "Touch-friendly kiosk app for enrollment hubs and border checkpoints. Works with smart scanners, supports assisted enrolment and paper fallback.",
    capabilities: [
      "Hardware integration: MRZ/ICAO scanners, NFC readers",
      "Operator co-signing for assisted enrollments",
      "Real-time queue sync & auditing for every transaction",
    ],
    gradient: "from-violet-400/80 via-purple-500/60 to-fuchsia-500/40",
  },
];

export function CitizenChannelGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3" id="citizen-apps">
      {CHANNELS.map((channel) => (
        <article
          key={channel.title}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur transition hover:border-white/20 hover:bg-white/10"
        >
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${channel.gradient} opacity-20`}
          />
          <h3 className="text-xl font-semibold text-white">{channel.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-200/90">
            {channel.description}
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-200/90">
            {channel.capabilities.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
