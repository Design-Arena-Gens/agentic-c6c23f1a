import Link from "next/link";

const HERO_STATS = [
  { label: "Citizens Onboarded", value: "52M+" },
  { label: "Relying Parties", value: "480+" },
  { label: "Avg Auth Latency", value: "38ms" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900/60 to-slate-950/80 px-8 py-20 shadow-2xl">
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />
      <div className="absolute -right-24 bottom-4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative grid gap-12 md:grid-cols-[2fr_1fr] md:items-center">
        <div className="space-y-6 text-balance">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            A national digital identity fabric that travels with every citizen
          </h1>
          <p className="text-lg leading-relaxed text-slate-200">
            AtlasID unifies biometric wallets, browser access, and service desk
            kiosks into a single trust platform. Every authentication flows
            through zero-trust pipelines, producing verifiable credentials that
            relying parties can adopt without deep integration rewrites.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#citizen-apps"
              className="rounded-full border border-cyan-400/50 bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/30 hover:text-white"
            >
              Explore citizen channels
            </Link>
            <Link
              href="/playbooks"
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Implementation playbooks
            </Link>
          </div>
        </div>
        <div className="space-y-6 rounded-2xl border border-white/10 bg-slate-950/50 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
            Ops snapshot
          </h2>
          <ul className="space-y-4 text-sm text-slate-200">
            {HERO_STATS.map((stat) => (
              <li
                key={stat.label}
                className="flex items-baseline justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="text-xs uppercase tracking-widest text-slate-400">
                  {stat.label}
                </span>
                <span className="text-xl font-semibold text-white">
                  {stat.value}
                </span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 p-4 text-xs leading-relaxed text-cyan-100">
            Platform built with layered trust anchors, self-sovereign
            credentials, and instant compliance reporting across ministries.
          </div>
        </div>
      </div>
    </section>
  );
}
