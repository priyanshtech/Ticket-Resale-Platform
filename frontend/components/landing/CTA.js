export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-24 sm:py-32">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Stop Scalping.
                        <br />
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Start Fair Access.
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Built for fans, not bots.
                    </p>

                    <div className="mt-10 flex items-center justify-center">
                        <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-lg bg-primary px-12 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105">
                            <span className="relative">Launch App</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative blur elements */}
            <div className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-1/3 bottom-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        </section>
    );
}
