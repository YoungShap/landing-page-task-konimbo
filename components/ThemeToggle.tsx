"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    // Default is dark (ignores the OS preference). If the user has toggled before,
    // their saved choice wins. The pre-paint script in app/layout.tsx applies the same rule.
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        let saved: string | null = null;
        try {
            saved = localStorage.getItem("theme");
        } catch {}
        const dark = saved !== "light";
        document.documentElement.classList.toggle("dark", dark);
        setIsDark(dark);
    }, []);

    function toggleTheme() {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        try {
            localStorage.setItem("theme", next ? "dark" : "light");
        } catch {}
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-neutral-700 transition-all duration-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]!"
        >
            {/* Sun when dark (click = go light), moon when light */}
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="h-5 w-5"
            >
                {isDark ? (
                    <path d="M12 3v2m0 14v2M5.6 5.6l1.4 1.4m9.9 9.9l1.4 1.4M3 12h2m14 0h2M5.6 18.4l1.4-1.4m9.9-9.9l1.4-1.4M12 8a4 4 0 100 8 4 4 0 000-8z" />
                ) : (
                    <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
                )}
            </svg>
        </button>
    );
}
