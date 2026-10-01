"use client";

import { teamInfo } from "@/lib/data/social";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const body = `From: ${name} (${email})\n\n${message}`;
    const mailto = `mailto:${teamInfo.email}?subject=${encodeURIComponent(
      subject || `Message from ${name} via ARCTURUS site`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink-50">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-sm text-white focus:border-orange-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-50">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-sm text-white focus:border-orange-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-ink-50">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-sm text-white focus:border-orange-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-50">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-sm text-white focus:border-orange-400"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-orange-400">
          {error}
        </p>
      )}
      {sent && (
        <p role="status" className="text-sm font-medium text-blue-300">
          Your email client should now be open with your message ready to send. If it didn&apos;t
          open, email us directly at {teamInfo.email}.
        </p>
      )}

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-sm bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink-950 transition-colors hover:bg-orange-600"
      >
        Send Message
      </button>
      <p className="text-xs text-ink-300">
        Submitting opens your email client addressed to {teamInfo.email} with your message
        pre-filled.
      </p>
    </form>
  );
}
