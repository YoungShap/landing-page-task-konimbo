"use client";

import {  useState } from "react";
import type { FormEvent } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Something went wrong.");
    }
  }

  const fieldClasses =
    "w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm placeholder:text-neutral-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-950/40 dark:placeholder:text-neutral-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20";

  const labelClasses =
    "text-sm font-medium text-neutral-700 dark:text-neutral-300";

  return (
    <main id="contact" className="relative isolate mx-auto flex min-h-screen w-full max-w-xl scroll-mt-16 flex-col justify-center px-6 py-16">
      {/* Soft glow behind the card */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-300/30 via-purple-300/20 to-sky-300/30 blur-3xl dark:from-indigo-500/15 dark:via-purple-500/10 dark:to-sky-500/15"
      />
      <h1 className="mt-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Contact Us
      </h1>
      <p className="mx-auto mb-10 mt-3 max-w-md text-center leading-relaxed text-neutral-600 dark:text-neutral-400">
        Have a question or an idea? Drop us a line, we usually reply within a
        day.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-xl shadow-neutral-900/5 backdrop-blur sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/80 dark:shadow-black/20"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className={labelClasses}>
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              required
              className={fieldClasses}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              required
              className={fieldClasses}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us what's on your mind..."
            required
            className={`min-h-32 resize-y ${fieldClasses}`}
          />
        </div>

        <button
          type="submit"
          className="mt-1 w-full rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:ring-offset-2 active:brightness-95 dark:focus:ring-offset-neutral-900 dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.55)]!"
        >
          Send
        </button>
      </form>

      {status && (
        <p className="mt-5 text-center text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {status}
        </p>
      )}
    </main>
  );
}