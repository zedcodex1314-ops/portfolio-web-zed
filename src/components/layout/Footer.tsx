export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-zinc-400">
        <p>
          <span className="text-white">zed</span>
          <span className="text-cyan-300">Codex</span> — dark mode by design.
        </p>
        <p className="text-xs text-zinc-500">
          Built with Next.js, Tailwind, and neon restraint.
        </p>
      </div>
    </footer>
  );
}
