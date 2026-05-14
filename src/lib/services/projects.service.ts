import { apiFetch } from "@/lib/api";
import type { Project } from "@/types/portfolio";

export const getProjects = (): Promise<Project[]> => apiFetch("/projects");

export const getFeaturedProjects = async (): Promise<Project[]> => {
  try {
    return await apiFetch<Project[]>("/projects/featured");
  } catch {
    try {
      const all = await apiFetch<Project[]>("/projects");
      return all.filter((p) => p.featured);
    } catch {
      return [];
    }
  }
};

export const getProjectById = (id: string): Promise<Project> =>
  apiFetch(`/projects/${id}`);
