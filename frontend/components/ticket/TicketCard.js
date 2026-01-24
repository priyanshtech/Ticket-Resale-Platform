export default function TicketCard({ ticket }) {
    return (
        <div className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-lg">
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold">{ticket?.eventName || "Event Name"}</h3>
                    <p className="text-sm text-muted-foreground">
                        {ticket?.date || "Date TBD"}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="text-xl font-bold">${ticket?.price || "0.00"}</p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">Seat</p>
                        <p className="font-semibold">{ticket?.seat || "N/A"}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
                        View QR
                    </button>
                    <button className="flex-1 rounded-lg border px-4 py-2 text-sm hover:bg-accent">
                        Resell
                    </button>
                </div>
            </div>
        </div>
    );
}
