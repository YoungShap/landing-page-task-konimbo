"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: "Features", href: "#" },
        { label: "How it works", href: "#" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
            <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5">
                    <span className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500" />
                    <span className="text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                        Brand
                    </span>
                </a>

                {/* Links (desktop) */}
                <div className="hidden items-center gap-8 sm:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA (desktop) */}
                <a
                    href="#"
                    className="hidden items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:inline-flex dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300 dark:focus-visible:outline-neutral-100"
                >
                    Get started
                </a>

                {/* Hamburger (mobile) */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-neutral-700 transition-colors duration-200 hover:bg-neutral-100 sm:hidden dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className={`h-6 w-6 transition-transform duration-300 ease-out motion-reduce:transition-none ${
                            menuOpen ? "rotate-90" : "rotate-0"
                        }`}
                    >
                        {menuOpen ? (
                            <path d="M6 6l12 12M6 18L18 6" />
                        ) : (
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile menu — animates open/closed via grid-rows (0fr -> 1fr) */}
            <div
                id="mobile-menu"
                className={`grid transition-all duration-300 ease-out sm:hidden motion-reduce:transition-none ${
                    menuOpen
                        ? "visible grid-rows-[1fr] opacity-100"
                        : "invisible grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col gap-1 border-t border-neutral-200 px-6 py-4 dark:border-neutral-800">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#"
                            onClick={() => setMenuOpen(false)}
                            className="mt-3 inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
                        >
                            Get started
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
