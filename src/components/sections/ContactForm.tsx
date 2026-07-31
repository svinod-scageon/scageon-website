"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { site } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (!message) next.message = "Tell us a little about your project.";
    return next;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    // TODO: wire to a backend (Formspree / Resend / API route).
    // Fallback for now: open the user's mail client with the details.
    try {
      const subject = encodeURIComponent(
        `New enquiry from ${data.get("name")}`
      );
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${
          data.get("company") || "—"
        }\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-border bg-bg p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/12 text-accent-strong">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-[family-name:var(--font-inter-tight)] text-xl font-semibold text-text">
          Thanks — your message is ready to send.
        </h3>
        <p className="mt-2 text-sm text-muted">
          Your email client should have opened. If not, reach us directly at{" "}
          <a href={`mailto:${site.email}`} className="text-accent-strong underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Field label="Name" name="name" error={errors.name} autoComplete="name" />
      <Field
        label="Email"
        name="email"
        type="email"
        error={errors.email}
        autoComplete="email"
        inputMode="email"
      />
      <Field
        label="Company"
        name="company"
        optional
        autoComplete="organization"
      />
      <div>
        <Label htmlFor="message">What&apos;s the project?</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!errors.message}
          className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-text outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="A few lines about your goal, timeline, or the system involved…"
        />
        {errors.message && <ErrorText>{errors.message}</ErrorText>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-white transition-all hover:-translate-y-px hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        Send message
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong. Please email us at {site.email}.
        </p>
      )}
    </form>
  );
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-text">
      {children}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <p role="alert" className="mt-1.5 text-sm text-red-600">
      {children}
    </p>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  optional,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  optional?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {optional && <span className="ml-1 text-muted">(optional)</span>}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-text outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
        {...rest}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
