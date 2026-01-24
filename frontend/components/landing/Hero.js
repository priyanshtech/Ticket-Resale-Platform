export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center sm:py-32 lg:px-8">
                <div className="space-y-8">
                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        Fair Ticket Resale.
                        <br />
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            No Bots. No Scalping.
                        </span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                        NFT-backed tickets with identity verification and capped resale prices.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-primary px-8 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105">
                            <span className="relative">Get Started</span>
                        </button>

                        <button className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 font-medium transition-all hover:bg-accent hover:scale-105">
                            View Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative blur elements */}
            <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        </section>
    );
}
