export default function ResellTicketPage({ params }) {
    return (
        <div className="mx-auto max-w-2xl space-y-6 py-8">
            <div>
                <h1 className="text-3xl font-bold">Resell Ticket</h1>
                <p className="text-muted-foreground">
                    List your ticket for resale
                </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Ticket ID</label>
                        <input
                            type="text"
                            value={params.id}
                            disabled
                            className="mt-1 w-full rounded-lg border bg-muted px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Resale Price</label>
                        <input
                            type="number"
                            placeholder="Enter price"
                            className="mt-1 w-full rounded-lg border bg-background px-4 py-2"
                        />
                    </div>

                    <button className="w-full rounded-lg bg-primary px-4 py-3 text-primary-foreground hover:bg-primary/90">
                        List for Resale
                    </button>
                </div>
            </div>
        </div>
    );
}
