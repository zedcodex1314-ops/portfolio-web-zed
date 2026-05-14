import { apiFetch } from "@/lib/api";
import type { Education } from "@/types/portfolio";

export const getEducation = (): Promise<Education[]> => apiFetch("/education");
