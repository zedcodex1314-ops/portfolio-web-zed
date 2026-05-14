"use client";

import type { Message } from "@/types/portfolio";

type Props = {
  form: Message;
  status: "idle" | "sending" | "sent" | "error";
  onChange: (next: Message) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export function ContactForm({ form, status, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-4 max-w-xl">
      <input
        value={form.name}
        onChange={(e) => onChange({ ...form, name: e.target.value })}
        placeholder="Name"
        className="h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-300/40"
        required
      />
      <input
        value={form.email}
        onChange={(e) => onChange({ ...form, email: e.target.value })}
        placeholder="Email"
        type="email"
        className="h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-300/40"
        required
      />
      <input
        value={form.subject}
        onChange={(e) => onChange({ ...form, subject: e.target.value })}
        placeholder="Subject"
        className="h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-300/40"
        required
      />
      <textarea
        value={form.body}
        onChange={(e) => onChange({ ...form, body: e.target.value })}
        placeholder="Message"
        rows={5}
        className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-300/40"
        required
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 rounded-full bg-cyan-400/15 border border-cyan-300/25 text-sm text-white hover:bg-cyan-400/20 hover:shadow-[0_0_24px_rgba(0,212,255,0.25)] disabled:opacity-60 transition-shadow"
      >
        {status === "sending"
          ? "Sending..."
          : status === "sent"
            ? "Sent"
            : "Send Message"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-purple-300">
          Transmission failed. Try again.
        </p>
      ) : null}
    </form>
  );
}
