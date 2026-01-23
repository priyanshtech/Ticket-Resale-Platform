export default function Flow() {
    const steps = [
        {
            number: "01",
            title: "Buy Ticket",
            description: "Purchase your ticket through our verified platform with identity verification.",
        },
        {
            number: "02",
            title: "Ticket Minted as NFT",
            description: "Your ticket is minted as a unique NFT and stored securely in your wallet.",
        },
        {
            number: "03",
            title: "Resell Within Allowed Price",
            description: "If plans change, resell your ticket at a fair, capped price enforced by smart contracts.",
        },
        {
            number: "04",
            title: "Scan QR at Gate",
            description: "At the venue, scan your dynamic QR code. The ticket is consumed and cannot be reused.",
        },
    ];

    return (
        <section className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A simple, secure flow from purchase to entry.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-4xl">
                    <div className="relative">
                        {/* Connection line */}
                        <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary lg:block" />

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="relative flex gap-8">
                                    {/* Step number circle */}
                                    <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                                        <span className="text-xl font-bold text-primary">{step.number}</span>
                                    </div>

                                    {/* Step content */}
                                    <div className="flex-1 rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50">
                                        <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
