import { getFeaturedProjects } from "@/lib/services/projects.service";
import type { Project } from "@/types/portfolio";

import { Badge, GlowButton, GlowCard, SectionTitle } from "@/components/ui";

export async function Projects() {
  let projects: Project[] = [];
  try {
    projects = await getFeaturedProjects();
  } catch {}
  projects = [...projects].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionTitle
        id="projects"
        eyebrow="Selected"
        title="Projects"
        subtitle="A few builds where the architecture stays clean and the UI stays loud."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <GlowCard key={p.id} className="p-0">
            <div className="p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-300/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.techStack.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.repoUrl ? (
                  <GlowButton href={p.repoUrl}>Repo</GlowButton>
                ) : null}
                {p.demoUrl ? (
                  <GlowButton href={p.demoUrl}>Demo</GlowButton>
                ) : null}
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
