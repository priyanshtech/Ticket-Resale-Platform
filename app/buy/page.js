export default function BuyTicketsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Buy Tickets</h1>
                <p className="text-muted-foreground">
                    Browse available tickets for resale
                </p>
            </div>

            <div className="space-y-4">
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Search events..."
                        className="flex-1 rounded-lg border bg-background px-4 py-2"
                    />
                    <button className="rounded-lg bg-primary px-6 py-2 text-primary-foreground hover:bg-primary/90">
                        Search
                    </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {/* Event cards will be rendered here */}
                    <div className="rounded-lg border bg-card p-6 text-center text-muted-foreground">
                        No tickets available
                    </div>
                </div>
            </div>
        </div>
    );
}
