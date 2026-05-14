type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | Record<string, boolean>
  | ClassValue[];

function toClassNames(value: ClassValue): string[] {
  if (!value) return [];
  if (typeof value === "string" || typeof value === "number") return [`${value}`];
  if (Array.isArray(value)) return value.flatMap(toClassNames);
  return Object.entries(value)
    .filter(([, enabled]) => Boolean(enabled))
    .map(([className]) => className);
}

export function cn(...values: ClassValue[]): string {
  return values.flatMap(toClassNames).join(" ");
}
