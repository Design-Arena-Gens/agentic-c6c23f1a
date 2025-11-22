import Link from "next/link";

const navLinks: { label: string; href: string }[] = [
  { label: "Overview", href: "/" },
  { label: "Citizen Apps", href: "/#citizen-apps" },
  { label: "Platform Core", href: "/#platform-core" },
  { label: "Security", href: "/#security" },
  { label: "Operations", href: "/#operations" },
];

export function TopNav() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white transition hover:text-cyan-300"
        >
          AtlasID Platform
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/playbooks"
          className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-white"
        >
          Deployment Playbooks
        </Link>
      </div>
    </header>
  );
}
