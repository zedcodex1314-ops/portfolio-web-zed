import { apiFetch } from "@/lib/api";
import type { Experience } from "@/types/portfolio";

export const getExperience = (): Promise<Experience[]> => apiFetch("/experience");
