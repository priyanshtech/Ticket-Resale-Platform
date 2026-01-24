export default function TicketsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">My Tickets</h1>
                <p className="text-muted-foreground">
                    View and manage all your tickets
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Ticket cards will be rendered here */}
                <div className="rounded-lg border bg-card p-6 text-center text-muted-foreground">
                    No tickets found
                </div>
            </div>
        </div>
    );
}
