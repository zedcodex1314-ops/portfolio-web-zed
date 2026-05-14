"use client";

import Link from "next/link";

import { useTypingEffect } from "@/hooks/useTypingEffect";
import { cn } from "@/lib/cn";
import type { Profile } from "@/types/portfolio";

type Props = {
  profile: Profile;
};

export function HeroTyping({ profile }: Props) {
  const typed = useTypingEffect("CODE. LEARN. EVOLVE.", {
    speedMs: 70,
    pauseMs: 900,
  });

  const socials = [
    { label: "GitHub", href: profile.githubUrl },
    { label: "LinkedIn", href: profile.linkedinUrl },
    { label: "Website", href: profile.websiteUrl },
  ].filter((s) => Boolean(s.href));

  return (
    <div className="relative z-10">
      <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">
        {profile.title}
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
        {profile.name}
      </h1>
      <p className="mt-4 text-zinc-300/80 max-w-xl">{profile.bio}</p>
      <p className="mt-2 text-sm text-zinc-400">{profile.location}</p>
      <p className="mt-6 font-mono text-cyan-200">
        <span className="text-cyan-300/70">{"// "}</span>
        {typed}
        <span
          className={cn("ml-1 inline-block w-[10px] bg-cyan-300/70", "h-5")}
        >
          {" "}
        </span>
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="#projects"
          className="rounded-full bg-cyan-400/15 border border-cyan-300/25 px-6 py-2 text-sm text-white hover:bg-cyan-400/20 hover:shadow-[0_0_24px_rgba(0,212,255,0.25)] transition-shadow"
        >
          View Projects
        </Link>
        <Link
          href="#contact"
          className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-zinc-200 hover:text-white hover:border-cyan-300/30 transition-colors"
        >
          Contact
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
        {socials.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(123,47,255,0.45)] transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
