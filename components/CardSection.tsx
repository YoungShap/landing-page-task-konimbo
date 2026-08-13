import "./Cards.css";

const features = [
    {
        title: "Lightning fast",
        text: "Optimized at every step so each interaction feels instant. No spinners, no waiting — just flow.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M13 2L4.5 13.5H11L9 22l8.5-11.5H12L13 2z" />
            </svg>
        ),
    },
    {
        title: "Secure by default",
        text: "Encryption and best-practice protection built in from day one, so your data stays yours.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 3v5c0 4.6-3 8.6-7 10-4-1.4-7-5.4-7-10V6l7-3z" />
            </svg>
        ),
    },
    {
        title: "Built to scale",
        text: "From your first user to your millionth, performance and design that grow with you.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2l9 5-9 5-9-5 9-5z" />
                <path d="M3 12l9 5 9-5" />
                <path d="M3 17l9 5 9-5" />
            </svg>
        ),
    },
];

export default function CardsSection() {
    return (
        <section id="features" className="cards">
            <p className="cards-eyebrow">Features</p>
            <h2 className="cards-title">Everything your product needs</h2>
            <p className="cards-subtitle">
                Thoughtfully designed, obsessively engineered. Here is what you get
                out of the box.
            </p>

            <div className="cards-row">
                {features.map((feature) => (
                    <article key={feature.title} className="card">
                        <span className="card-icon">{feature.icon}</span>
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
