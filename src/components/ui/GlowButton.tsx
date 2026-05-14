import Link from "next/link";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

type Props = PropsWithChildren<{
  href?: string;
  className?: string;
}>;

export function GlowButton({ href, className, children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-shadow duration-300";
  const chrome =
    "bg-gradient-to-r from-cyan-400/60 via-purple-500/40 to-cyan-400/60 p-[1px] hover:shadow-[0_0_24px_rgba(0,212,255,0.35)]";
  const inner =
    "rounded-full bg-[#0a0a0f]/70 backdrop-blur-md border border-white/10 text-white";

  if (href) {
    return (
      <Link href={href} className={cn(base, chrome, className)}>
        <span className={cn("w-full h-full px-5 py-2", inner)}>{children}</span>
      </Link>
    );
  }

  return (
    <span className={cn(base, chrome, className)}>
      <span className={cn("w-full h-full px-5 py-2", inner)}>{children}</span>
    </span>
  );
}
