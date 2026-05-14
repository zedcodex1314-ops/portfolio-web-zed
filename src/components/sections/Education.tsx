import { getEducation } from "@/lib/services/education.service";
import type { Education as EducationItem } from "@/types/portfolio";

import { GlowCard, SectionTitle } from "@/components/ui";

export async function Education() {
  let items: EducationItem[] = [];
  try {
    items = await getEducation();
  } catch {}
  items = [...items].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionTitle
        id="education"
        eyebrow="Training"
        title="Education"
        subtitle="Foundations that make the neon possible."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((e) => (
          <GlowCard key={e.id} className="p-0">
            <div className="p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-white">
                {e.degree} · {e.field}
              </h3>
              <p className="text-sm text-zinc-300/80">{e.institution}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-cyan-300/80">
                {e.startDate} — {e.endDate}
              </p>
              <p className="mt-5 text-sm text-zinc-300/80">{e.description}</p>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
