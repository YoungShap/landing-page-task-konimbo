"use client";

import { useState } from "react";
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
    "w-full rounded-xl text-white border border-white/10 bg-white/5 px-4 py-2.5 text-sm placeholder:text-neutral-400 transition-colors hover:border-white/20 dark:border-neutral-700 dark:bg-neutral-950/40 dark:placeholder:text-neutral-500 dark:hover:border-neutral-700 focus:border-indigo-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 dark:focus:border-indigo-400 dark:focus:bg-neutral-950/40 dark:focus:ring-indigo-400/20";

  const labelClasses =
    "text-md font-medium text-neutral-200 dark:text-neutral-100";

  return (
    <main id="contact" className="relative isolate mx-auto flex min-h-screen w-full max-w-xl scroll-mt-16 flex-col justify-center px-6 py-16">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 hidden h-[26rem] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-sky-500/15 blur-3xl dark:block"
      />
      <p className="text-center text-lg font-semibold tracking-[0.1em] uppercase text-[#6366f1] m-2">Let's Get in Touch</p>
      <h1 className="mt-2 text-center text-[#383838] dark:text-[#ebeaea] text-3xl font-bold tracking-tight sm:text-4xl">
        Contact Us
      </h1>
      <p className="mx-auto mb-10 mt-3 max-w-md text-center leading-relaxed text-neutral-600 dark:text-neutral-400">
        Have a question or an idea? Drop us a line, we usually reply within a
        day.
      </p>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-3 top-16 -bottom-2 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/45 via-fuchsia-500/36 to-sky-500/45 blur-2xl sm:inset-x-2 sm:top-12 sm:-bottom-3 sm:from-indigo-500/52 sm:via-fuchsia-500/44 sm:to-sky-500/52 dark:hidden"
        />

      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-[#8621b14e] bg-[#1d222c] p-6 shadow-[0_0_52px_-8px_rgba(139,92,246,0.38),0_18px_40px_-16px_rgba(30,27,75,0.5),0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur sm:p-8 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-sky-500 dark:border-neutral-800 dark:bg-neutral-900/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_16px_36px_-14px_rgba(0,0,0,0.75)]"
      >
        <div className="flex justify-center">
          <span
            aria-hidden="true"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 text-white shadow-lg shadow-purple-500/30"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </span>
        </div>

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
      </div>

      {status && (
        <p className="mt-5 text-center text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {status}
        </p>
      )}
    </main>
  );
}