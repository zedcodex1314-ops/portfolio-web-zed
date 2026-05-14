"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { cn } from "@/lib/cn";

type Props = PropsWithChildren<{
  className?: string;
}>;

export function GlowCard({ children, className }: Props) {
  const { ref, isVisible } = useFadeInOnScroll<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "group relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-400/60 via-purple-500/40 to-cyan-400/60",
        className
      )}
    >
      <div className="rounded-2xl bg-[#0a0a0f]/70 backdrop-blur-md border border-white/10 shadow-[0_0_0_1px_rgba(0,212,255,0.12)] transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(0,212,255,0.22)]">
        {children}
      </div>
    </motion.div>
  );
}
