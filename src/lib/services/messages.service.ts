import type { ContactResponse, Message } from "@/types/portfolio";

export async function sendMessage(input: Message): Promise<ContactResponse> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!res.ok) throw new Error(`Message error: ${res.status}`);
  return (await res.json()) as ContactResponse;
}
