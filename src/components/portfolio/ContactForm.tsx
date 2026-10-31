import { useState, type FormEvent } from "react";
import { FORM_ENDPOINT } from "@/content/portfolio";

type Fields = { name: string; email: string; subject: string; message: string };
const empty: Fields = { name: "", email: "", subject: "", message: "" };

export function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (!f.subject.trim()) e.subject = "Please add a subject.";
  if (f.message.trim().length < 10) e.message = "Please write a message of at least 10 characters.";
  return e;
}

export function ContactForm() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "unconfigured">("idle");

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length) return;
    if (!FORM_ENDPOINT) return setStatus("unconfigured");
    setStatus("sending");
    try {
      const r = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(f),
      });
      if (!r.ok) throw new Error();
      setStatus("sent");
      setF(empty);
    } catch {
      setStatus("error");
    }
  }

  const field = (k: keyof Fields, label: string, type = "text") => (
    <div className="group">
      <label htmlFor={k} className="eyebrow text-muted-foreground">{label}</label>
      {k === "message" ? (
        <textarea
          id={k} rows={4} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })}
          aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined}
          className="mt-2 w-full resize-none border-b border-input bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary"
        />
      ) : (
        <input
          id={k} type={type} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })}
          autoComplete={k === "name" ? "name" : k === "email" ? "email" : "off"}
          aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined}
          className="mt-2 w-full border-b border-input bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary"
        />
      )}
      {errors[k] && <p id={`${k}-err`} role="alert" className="mt-2 text-xs text-destructive">{errors[k]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        {field("name", "Name")}
        {field("email", "Email", "email")}
      </div>
      {field("subject", "Subject")}
      {field("message", "Message")}
      <button
        type="submit" disabled={status === "sending"}
        className="group inline-flex items-center gap-4 bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:gap-6 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"} <span aria-hidden>→</span>
      </button>
      <div aria-live="polite" className="text-sm">
        {status === "sent" && <p className="text-primary">Thank you — your message has been sent.</p>}
        {status === "error" && <p className="text-destructive">Something went wrong. Please try again or email directly.</p>}
        {status === "unconfigured" && <p className="text-muted-foreground">The contact form isn't connected yet, so your message was not sent. Please reach out by email or LinkedIn instead.</p>}
      </div>
    </form>
  );
}
