export default function Solution() {
    const solutions = [
        {
            title: "NFT-Based Ticket Ownership",
            description: "Each ticket is a unique, verifiable NFT tied to your identity, eliminating counterfeits.",
            icon: "🎫",
        },
        {
            title: "Price-Capped Resale",
            description: "Smart contracts enforce maximum resale prices, preventing scalper exploitation.",
            icon: "🔒",
        },
        {
            title: "One-Time Dynamic QR Verification",
            description: "QR codes are generated on-demand and consumed at entry, preventing duplication.",
            icon: "✓",
        },
    ];

    return (
        <section className="bg-muted/30 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Our Solution
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Blockchain-powered ticketing that puts fans first and eliminates scalping.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/50"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                                {solution.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-semibold">{solution.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {solution.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
