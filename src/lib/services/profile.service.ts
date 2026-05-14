import { apiFetch } from "@/lib/api";
import type { Profile } from "@/types/portfolio";

export const getProfile = (): Promise<Profile> => apiFetch("/profile");
