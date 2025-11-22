import Link from "next/link";

const FOOTER_LINKS = [
  {
    label: "Architecture Doc",
    href: "https://example.org/architecture",
  },
  {
    label: "Governance & Policy",
    href: "https://example.org/policy",
  },
  {
    label: "OpenAPI Spec",
    href: "/api/atlas-id-openapi.json",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-sm text-slate-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="max-w-xl text-balance leading-relaxed">
          AtlasID is a composable digital identity trust fabric spanning mobile,
          web, kiosks, and service integrations. Built for nations that need
          instant enrollment, resilient authentication, and privacy-first
          credential sharing.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 font-medium text-cyan-200 transition hover:bg-cyan-500/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
