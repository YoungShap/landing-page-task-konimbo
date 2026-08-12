"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

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
      event.currentTarget.reset();
    } else {
      setStatus("Something went wrong.");
    }
  }

  return (
    <main id="contact" className="mx-auto flex min-h-screen w-full max-w-lg scroll-mt-16 flex-col justify-center px-6 py-16">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <input
          name="name"
          type="text"
          placeholder="Full name"
          required
          className="w-full rounded-lg border border-neutral-300 bg-transparent px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 dark:border-neutral-700 dark:focus:border-neutral-300 dark:focus:ring-neutral-300/10"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-lg border border-neutral-300 bg-transparent px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 dark:border-neutral-700 dark:focus:border-neutral-300 dark:focus:ring-neutral-300/10"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          className="min-h-32 w-full resize-y rounded-lg border border-neutral-300 bg-transparent px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 dark:border-neutral-700 dark:focus:border-neutral-300 dark:focus:ring-neutral-300/10"
        />

        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900/30 focus:ring-offset-2 active:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
        >
          Send
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
          {status}
        </p>
      )}
    </main>
  );
}