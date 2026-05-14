export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) throw new Error("Missing NEXT_PUBLIC_API_URL");

  const normalizedBase = baseUrl.replace(/\/$/, "");
  const res = await fetch(`${normalizedBase}/api${path}`, {
    next: { revalidate: 60 },
    ...options,
  });

  if (!res.ok) throw new Error(`API error: ${res.status} ${path}`);
  return (await res.json()) as T;
}
