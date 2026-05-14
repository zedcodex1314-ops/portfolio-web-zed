import { getProfile } from "@/lib/services/profile.service";
import type { Profile } from "@/types/portfolio";

import { GlowCard } from "@/components/ui/GlowCard";
import { MatrixRain } from "@/components/sections/MatrixRain";
import { HeroTyping } from "@/components/sections/HeroTyping";

export async function Hero() {
  let profile: Profile | null = null;
  try {
    profile = await getProfile();
  } catch {}
  if (!profile) return null;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <MatrixRain />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.10),transparent_55%),radial-gradient(circle_at_30%_70%,rgba(123,47,255,0.12),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-24">
        <GlowCard className="p-0">
          <div className="relative px-6 py-12 sm:px-10 sm:py-14">
            <HeroTyping profile={profile} />
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
