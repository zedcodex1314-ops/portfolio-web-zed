import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionTitle({ id, eyebrow, title, subtitle, className }: Props) {
  return (
    <header id={id} className={cn("space-y-3", className)}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        <span className="text-white">{title}</span>
        <span className="text-cyan-300">.</span>
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm sm:text-base text-zinc-300/80">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
