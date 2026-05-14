import { cn } from "@/lib/cn";

type Props = {
  children: string;
  className?: string;
};

export function Badge({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200",
        className
      )}
    >
      {children}
    </span>
  );
}
