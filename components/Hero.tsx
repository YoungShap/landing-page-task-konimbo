export default function Hero() {
    return (
        <section className="relative isolate flex min-h-[85dvh] flex-col items-center justify-center overflow-hidden px-6 py-24 sm:py-32">
            {/* Background: soft radial glows + fine grid, both theme-aware */}
            <div aria-hidden="true" className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[32rem] w-[52rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-br from-indigo-300/40 via-purple-200/30 to-transparent blur-3xl dark:from-indigo-500/20 dark:via-purple-500/10" />
                <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-500/10" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
            </div>

            <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
                {/* Announcement badge */}
                <a
                    href="#"
                    className="group mb-8 inline-flex cursor-pointer items-center gap-2 rounded-full border border-neutral-200 bg-white/60 py-1.5 pl-4 pr-3 text-sm text-neutral-600 shadow-sm backdrop-blur transition-colors duration-200 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-neutral-100"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75 motion-reduce:animate-none" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                    </span>
                    Now in early access
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>

                {/* Headline */}
                <h1 className="text-balance text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl dark:text-neutral-50">
                    Everything you need to{" "}
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                        launch with confidence
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl dark:text-neutral-400">
                    A beautifully crafted platform that takes you from idea to launch,
                    fast. <br></br>Focus on what matters — we take care of the rest.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                    <a
                        href="#"
                        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-neutral-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-700 hover:shadow-xl hover:shadow-neutral-900/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 motion-reduce:hover:translate-y-0 sm:w-auto dark:bg-neutral-100 dark:text-neutral-900 dark:shadow-black/30 dark:hover:bg-neutral-300 dark:focus-visible:outline-neutral-100"
                    >
                        Get started free
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="inline-flex w-full cursor-pointer items-center justify-center rounded-xl border border-neutral-300 bg-white/60 px-7 py-3.5 text-sm font-semibold text-neutral-700 backdrop-blur transition-colors duration-200 hover:border-neutral-400 hover:bg-white hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 sm:w-auto dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
                    >
                        See how it works
                    </a>
                </div>

                {/* Social proof */}
                <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
                    <div className="flex -space-x-2.5">
                        <span className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-rose-400 to-orange-300 dark:border-neutral-950" />
                        <span className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-indigo-400 to-sky-300 dark:border-neutral-950" />
                        <span className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-teal-300 dark:border-neutral-950" />
                        <span className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-fuchsia-300 dark:border-neutral-950" />
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-[10px] font-semibold text-neutral-600 dark:border-neutral-950 dark:bg-neutral-800 dark:text-neutral-300">
                            2k+
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 sm:items-start">
                        <div
                            className="flex gap-0.5 text-amber-400"
                            role="img"
                            aria-label="Rated 5 out of 5 stars"
                        >
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    aria-hidden="true"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ))}
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            Trusted by 2,000+ early users
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
