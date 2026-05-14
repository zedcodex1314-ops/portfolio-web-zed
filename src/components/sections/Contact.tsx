"use client";

import { GlowCard, SectionTitle } from "@/components/ui";
import { ContactForm } from "@/components/sections/ContactForm";
import { sendMessage } from "@/lib/services/messages.service";
import type { Message } from "@/types/portfolio";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState<Message>({
    name: "",
    email: "",
    subject: "",
    body: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendMessage(form);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", body: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionTitle
        id="contact"
        eyebrow="Ping"
        title="Contact"
        subtitle="Send a message. No spam. No noise. Just signal."
      />

      <GlowCard className="mt-10 p-0">
        <div className="p-6 sm:p-7">
          <ContactForm
            form={form}
            status={status}
            onChange={setForm}
            onSubmit={onSubmit}
          />
        </div>
      </GlowCard>
    </section>
  );
}
