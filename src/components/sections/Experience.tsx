import { getExperience } from "@/lib/services/experience.service";
import type { Experience as ExperienceItem } from "@/types/portfolio";

import { GlowCard, SectionTitle } from "@/components/ui";

export async function Experience() {
  let items: ExperienceItem[] = [];
  try {
    items = await getExperience();
  } catch {}
  items = [...items].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionTitle
        id="experience"
        eyebrow="Field Logs"
        title="Experience"
        subtitle="Systems shipped, incidents avoided, and teams unblocked."
      />

      <div className="mt-10 grid gap-6">
        {items.map((x) => (
          <GlowCard key={x.id} className="p-0">
            <div className="p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">{x.role}</h3>
                  <p className="text-sm text-zinc-300/80">{x.company}</p>
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
                  {x.startDate} — {x.current ? "Present" : (x.endDate ?? "—")}
                </p>
              </div>
              <p className="mt-5 text-sm text-zinc-300/80">{x.description}</p>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
