import { getSkills } from "@/lib/services/skills.service";
import type { Skill } from "@/types/portfolio";

import { GlowCard, SectionTitle } from "@/components/ui";

function groupByCategory(skills: Skill[]) {
  const map = new Map<string, Skill[]>();
  for (const s of skills) {
    const key = s.category || "other";
    map.set(key, [...(map.get(key) ?? []), s]);
  }
  return Array.from(map.entries());
}

export async function Skills() {
  let skills: Skill[] = [];
  try {
    skills = await getSkills();
  } catch {}
  skills = [...skills].sort((a, b) => a.sortOrder - b.sortOrder);

  const groups = groupByCategory(skills);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionTitle
        id="skills"
        eyebrow="Stack"
        title="Skills"
        subtitle="Tools I trust when the build has to survive real traffic."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {groups.map(([category, items]) => (
          <GlowCard key={category} className="p-0">
            <div className="p-6 sm:p-7">
              <h3 className="text-sm font-semibold tracking-wide text-white">
                {category}
              </h3>
              <ul className="mt-4 space-y-3">
                {items.map((s) => (
                  <li key={s.id} className="flex items-center justify-between">
                    <span className="text-sm text-zinc-200">{s.name}</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={`${s.id}-${i}`}
                          className={
                            i < s.level
                              ? "h-1.5 w-3 rounded-full bg-cyan-300/70"
                              : "h-1.5 w-3 rounded-full bg-white/10"
                          }
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
