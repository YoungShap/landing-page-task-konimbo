"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const spyPaused = useRef(false);
    const settleTimer = useRef<number | undefined>(undefined);

    const navLinks = [
        { label: "Home", href: "#" },
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#HowItWorks" },
        { label: "Contact", href: "#contact" },
    ];

    // Scrollspy: highlight the link of the section currently in view.
    // Paused during click-initiated smooth scrolls so the clicked link
    // stays highlighted instead of flickering through passed sections;
    // resumes only once scroll events stop arriving (scroll settled).
    useEffect(() => {
        function computeActive() {
            const line = window.innerHeight * 0.35;
            let current = "Home";
            for (const link of navLinks) {
                const id = link.href.slice(1);
                if (!id) continue;
                const section = document.getElementById(id);
                if (section && section.getBoundingClientRect().top <= line) {
                    current = link.label;
                }
            }
            setActiveLink(current);
        }
        function onScroll() {
            if (spyPaused.current) {
                window.clearTimeout(settleTimer.current);
                settleTimer.current = window.setTimeout(() => {
                    spyPaused.current = false;
                    computeActive();
                }, 150);
                return;
            }
            computeActive();
        }
        computeActive();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.clearTimeout(settleTimer.current);
        };
    }, []);

    function handleLinkClick(label: string) {
        setActiveLink(label);
        spyPaused.current = true;
        // If no scroll follows (already at the section), just resume shortly
        window.clearTimeout(settleTimer.current);
        settleTimer.current = window.setTimeout(() => (spyPaused.current = false), 300);
    }

    return (
        <header className="sticky top-0 z-50 border-b border-indigo-950/10 bg-[#f4f3fa]/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
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
                            onClick={() => handleLinkClick(link.label)}
                            className={`text-sm font-medium transition-colors duration-200 ${activeLink === link.label
                                    ? "text-neutral-900 dark:text-neutral-50 dark:[text-shadow:0_0_14px_rgba(168,85,247,0.9)]"
                                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right side: theme toggle + CTA (desktop) + hamburger (mobile) */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />

                    <a
                        href="#"
                        className="hidden items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:inline-flex dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300 dark:focus-visible:outline-neutral-100"
                    >
                        Get started
                    </a>

                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-neutral-700 transition-all duration-200 hover:bg-neutral-100 sm:hidden dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]!"
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            className={`h-6 w-6 transition-transform duration-300 ease-out motion-reduce:transition-none ${menuOpen ? "rotate-90" : "rotate-0"
                                }`}
                        >
                            {menuOpen ? (
                                <path d="M6 6l12 12M6 18L18 6" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile menu — animates open/closed via grid-rows (0fr -> 1fr) */}
            <div
                id="mobile-menu"
                className={`absolute inset-x-0 top-16 grid border-b border-indigo-950/10 bg-[#f4f3fa]/90 backdrop-blur transition-all duration-300 ease-out sm:hidden motion-reduce:transition-none dark:border-neutral-800 dark:bg-neutral-950/90 ${menuOpen
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
                                onClick={() => {
                                    handleLinkClick(link.label);
                                    setMenuOpen(false);
                                }}
                                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${activeLink === link.label
                                        ? "text-neutral-900 dark:text-neutral-50 dark:[text-shadow:0_0_14px_rgba(168,85,247,0.9)]"
                                        : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#"
                            onClick={() => setMenuOpen(false)}
                            className="mt-3 inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
                        >
                            Get started
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
