"use client";

import { useEffect, useRef } from "react";
import "./HowItWorks.css";

const plans = [
    {
        name: "Starter",
        price: "$50",
        blurb: "For getting off the ground",
        features: ["1 project", "Basic analytics", "Community support", "1 GB storage"],
        featured: false,
        premium: false,
    },
    {
        name: "Pro",
        price: "$100",
        blurb: "For growing teams",
        features: [
            "Unlimited projects",
            "Advanced analytics",
            "Priority support",
            "50 GB storage",
            "Custom domain",
        ],
        featured: true,
        premium: false,
    },
    {
        name: "Enterprise",
        price: "$280",
        blurb: "For serious scale",
        features: [
            "Everything in Pro",
            "Dedicated account manager",
            "SSO & advanced security",
            "Unlimited storage",
            "Custom integrations",
        ],
        featured: false,
        premium: true,
    },
];

export default function HowItWorks() {
    const rowRef = useRef<HTMLDivElement>(null);

    // Mobile carousel: start centered on the featured (Pro) plan
    useEffect(() => {
        const row = rowRef.current;
        if (!row) return;

        function center() {
            if (!row) return;
            const featured = row.querySelector<HTMLElement>(".plan--featured");
            if (!featured || row.scrollWidth <= row.clientWidth) return;
            row.scrollLeft =
                row.scrollLeft +
                (featured.getBoundingClientRect().left -
                    row.getBoundingClientRect().left) -
                (row.clientWidth - featured.clientWidth) / 2;
        }

        const raf = requestAnimationFrame(center);
        window.addEventListener("resize", center);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", center);
        };
    }, []);

    return (
        <section id="HowItWorks" className="plans">
            <p className="plans-eyebrow">How It Works</p>
            <h2 className="plans-title">Pick the plan that fits</h2>
            <p className="plans-subtitle">
                Start small, upgrade when you grow — no hidden fees, cancel anytime.
            </p>

            <div className="plans-row" ref={rowRef}>
                {plans.map((plan) => (
                    <article
                        key={plan.name}
                        className={`plan${plan.featured ? " plan--featured" : ""}${plan.premium ? " plan--premium" : ""}`}
                    >
                        {plan.featured && <span className="plan-badge">Most popular</span>}
                        <h3>{plan.name}</h3>
                        <p className="plan-blurb">{plan.blurb}</p>
                        <p className="plan-price">
                            {plan.price}
                            <span> /mo</span>
                        </p>
                        <ul>
                            {plan.features.map((feature) => (
                                <li key={feature}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M4 12.5l5 5L20 6.5" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className="plan-cta">
                            Choose {plan.name}
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}
