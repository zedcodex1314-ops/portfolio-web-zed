const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carlos-vladimir-mamani-yangali-745739288/",
  },
  {
    label: "GitHub",
    href: "https://github.com/zedcodex1314-ops",
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-10 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p>
            <span className="text-white">zed</span>
            <span className="text-cyan-300">Codex</span> - dark mode by design.
          </p>
          <p className="text-xs text-zinc-500">
            Built with Next.js, Tailwind, and neon restraint.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-300 transition-all hover:border-cyan-300/30 hover:text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.18)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
