"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { site } from "@/lib/site";

/**
 * Sends submissions to NEXT_PUBLIC_FORM_ENDPOINT (Formspree, Getform, Basin…).
 * If no endpoint is configured yet, it opens the visitor's email app with the
 * details filled in, so no enquiry is lost.
 */
type Props = {
  title?: string;
  titleId?: string;
  intro?: string;
  subject: string;
  submitLabel: string;
  successMessage: string;
  children: ReactNode;
};

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

export default function LeadForm({ title, titleId, intro, subject, submitLabel, successMessage, children }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err" | "mailto">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (!endpoint) {
      const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: subject, ...data }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className="form-card" noValidate={false}>
      {title && <h3 id={titleId}>{title}</h3>}
      {intro && <p>{intro}</p>}
      <div className="form-grid" style={{ marginTop: title ? "1.25rem" : 0 }}>{children}</div>
      <div style={{ marginTop: "1.5rem" }}>
        <button type="submit" className="btn btn--navy" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : submitLabel}
        </button>
      </div>
      <div aria-live="polite">
        {status === "ok" && <p className="form-status form-status--ok">{successMessage}</p>}
        {status === "mailto" && (
          <p className="form-status form-status--ok">
            Your email app should now open with your details filled in. Press send to complete your request.
          </p>
        )}
        {status === "err" && (
          <p className="form-status form-status--err">
            Your details weren't sent. Check your connection and try again, or email us at {site.email}.
          </p>
        )}
      </div>
    </form>
  );
}
