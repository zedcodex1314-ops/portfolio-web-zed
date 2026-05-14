import Link from "next/link";

import { cn } from "@/lib/cn";

const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-baseline gap-1 font-semibold">
          <span className="text-white">zed</span>
          <span className="text-cyan-300">Codex</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-white",
                "hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.4)]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
