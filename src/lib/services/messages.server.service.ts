import "server-only";

import { apiFetch } from "@/lib/api";
import type { Message } from "@/types/portfolio";

export const getMessages = (): Promise<Message[]> => apiFetch("/messages");
