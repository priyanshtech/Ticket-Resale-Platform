export default function Problem() {
    const problems = [
        {
            title: "Bots Buying Tickets Instantly",
            description: "Automated bots purchase tickets in milliseconds, leaving real fans empty-handed.",
            icon: "🤖",
        },
        {
            title: "Inflated Resale Prices",
            description: "Scalpers mark up tickets 500%+, making events unaffordable for genuine fans.",
            icon: "💸",
        },
        {
            title: "Fake or Duplicated QR Codes",
            description: "Counterfeit tickets and QR code duplication lead to fraud and denied entry.",
            icon: "⚠️",
        },
    ];

    return (
        <section className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        The Problem with Ticket Resale
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Current ticketing systems are broken, favoring bots and scalpers over real fans.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/50"
                        >
                            <div className="mb-4 text-5xl">{problem.icon}</div>
                            <h3 className="mb-3 text-xl font-semibold">{problem.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
