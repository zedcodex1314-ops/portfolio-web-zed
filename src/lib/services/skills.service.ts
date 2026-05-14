import { apiFetch } from "@/lib/api";
import type { Skill } from "@/types/portfolio";

export const getSkills = (): Promise<Skill[]> => apiFetch("/skills");
