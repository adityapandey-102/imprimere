"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  brand: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  brand: "",
  message: "",
};

function FloatingField({
  id,
  label,
  value,
  error,
  textarea,
  onChange,
}: {
  id: keyof FormState;
  label: string;
  value: string;
  error?: string;
  textarea?: boolean;
  onChange: (field: keyof FormState, value: string) => void;
}) {
  const baseClassName =
    "peer w-full rounded-[1rem] border bg-white px-5 pb-4 pt-7 text-sm outline-none transition duration-300 placeholder:text-transparent";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(event) => onChange(id, event.target.value)}
          placeholder={label}
          className={cn(
            baseClassName,
            error
              ? "border-accent/70 focus:border-accent"
              : "border-border focus:border-text/35",
          )}
        />
      ) : (
        <input
          id={id}
          value={value}
          onChange={(event) => onChange(id, event.target.value)}
          placeholder={label}
          className={cn(
            baseClassName,
            error
              ? "border-accent/70 focus:border-accent"
              : "border-border focus:border-text/35",
          )}
        />
      )}
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-5 top-4 origin-left text-xs uppercase tracking-[0.18em] text-text/48 transition duration-200",
          value && "-translate-y-1 scale-95",
        )}
      >
        {label}
      </label>
      {error ? <p className="mt-2 text-xs text-accent">{error}</p> : null}
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const prefersReducedMotion = useReducedMotion();

  const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

  const canSubmit = useMemo(
    () =>
      form.name.trim() &&
      form.email.trim() &&
      isValidEmail(form.email) &&
      form.message.trim(),
    [form],
  );

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please add your name.";
    }
    if (!form.email.trim() || !isValidEmail(form.email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Please share a short project note.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("loading");
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setStatus("success");
    setForm(initialState);
    window.setTimeout(() => setStatus("idle"), 2200);
  };

  return (
    <section id="contact" className="section-blend section-space">
      <div className="site-container">
        <div className="soft-panel grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <ScrollReveal className="space-y-6">
            <span className="eyebrow bg-white/80">Contact / Conversion</span>
            <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
              Let&apos;s build the packaging system that makes your brand look bolder and operate smarter.
            </h2>
            <p className="text-base leading-8 text-text/72">
              Share your beverage, dine-in, delivery, or specialty packaging
              brief and we can discuss supply, sustainability, branding, and
              logistics in one conversation.
            </p>
            <div className="rounded-[1rem] border border-border/80 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-text/45">
                Best For
              </p>
              <p className="mt-2 font-serif text-3xl">Hospitality, Retail, Delivery</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <FloatingField
                  id="name"
                  label="Name"
                  value={form.name}
                  error={errors.name}
                  onChange={handleChange}
                />
                <FloatingField
                  id="email"
                  label="Email"
                  value={form.email}
                  error={errors.email}
                  onChange={handleChange}
                />
              </div>
              <FloatingField
                id="brand"
                label="Brand"
                value={form.brand}
                error={errors.brand}
                onChange={handleChange}
              />
              <FloatingField
                id="message"
                label="Project Brief"
                value={form.message}
                error={errors.message}
                textarea
                onChange={handleChange}
              />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button className="min-w-[11rem]" disabled={!canSubmit || status === "loading"}>
                  {status === "loading"
                    ? "Sending..."
                    : status === "success"
                      ? "Sent"
                      : "Start the conversation"}
                </Button>
                <motion.div
                  initial={false}
                  animate={
                    status === "success" && !prefersReducedMotion
                      ? { opacity: [0, 1], y: [10, 0] }
                      : { opacity: status === "success" ? 1 : 0.7, y: 0 }
                  }
                  className="text-sm text-text/65"
                >
                  {status === "success"
                    ? "Message sent successfully."
                    : "We’ll follow up with a tailored next step."}
                </motion.div>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
