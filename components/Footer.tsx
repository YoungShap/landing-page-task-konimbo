const footerLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#HowItWorks" },
    { label: "Contact", href: "#contact" },
];

const socials = [
    {
        label: "X",
        href: "#",
        path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231z",
    },
    {
        label: "GitHub",
        href: "#",
        path: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z",
    },
    {
        label: "LinkedIn",
        href: "#",
        path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z",
    },
];

export default function Footer() {
    return (
        <footer className="relative isolate overflow-hidden bg-[linear-gradient(to_bottom,#1d222c,#141821)] dark:bg-none">
            {/* Gradient hairline + soft glow instead of a plain border */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,#6366f1,#a855f7,#0ea5e9,transparent)] dark:bg-[linear-gradient(to_right,transparent,rgba(99,102,241,0.6),rgba(168,85,247,0.6),rgba(14,165,233,0.6),transparent)]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-10 bg-[linear-gradient(to_right,transparent,rgba(99,102,241,0.5),rgba(168,85,247,0.5),rgba(14,165,233,0.5),transparent)] opacity-60 blur-2xl dark:opacity-25"
            />
            {/* Light mode only: one restrained indigo glow behind the centre, no colour blobs */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-40 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-3xl dark:hidden"
            />

            {/* 3-column grid on sm+ so the links group is truly page-centred (matches the centred copyright below) */}
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-6 pt-10 pb-6 sm:grid sm:grid-cols-3 sm:items-center dark:py-10">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 sm:justify-self-start">
                    <span className="h-5 w-5 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500" />
                    <span className="text-sm font-bold tracking-tight text-neutral-50">
                        Brand
                    </span>
                </a>

                {/* Page links */}
                <div className="flex items-center gap-6 sm:justify-self-center">
                    {footerLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm tracking-wide text-neutral-400 transition-colors duration-200 hover:text-neutral-50 dark:tracking-normal dark:hover:text-neutral-100 dark:hover:[text-shadow:0_0_12px_rgba(168,85,247,0.8)]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Socials */}
                <div className="flex items-center gap-1 sm:justify-self-end">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 ring-1 ring-white/10 transition-all duration-200 hover:bg-white/5 hover:text-neutral-50 hover:ring-white/20 dark:ring-0 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:hover:shadow-[0_0_16px_rgba(168,85,247,0.4)]"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-4 w-4"
                                aria-hidden="true"
                            >
                                <path d={social.path} />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>

            {/* Light mode only: hairline rule above the copyright */}
            <div aria-hidden="true" className="mx-auto h-px w-full max-w-6xl bg-white/5 dark:hidden" />
            <p className="w-full pt-4 pb-6 text-center text-xs text-neutral-500 dark:pt-0 dark:text-neutral-400">
                © {new Date().getFullYear()} Brand. All rights reserved.
            </p>
        </footer>
    );
}
