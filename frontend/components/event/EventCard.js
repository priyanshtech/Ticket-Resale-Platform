export default function EventCard({ event }) {
    return (
        <div className="rounded-lg border bg-card transition-shadow hover:shadow-lg">
            <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                {/* Event image will go here */}
                <div className="flex h-full items-center justify-center text-muted-foreground">
                    Event Image
                </div>
            </div>

            <div className="p-6 space-y-4">
                <div>
                    <h3 className="text-lg font-semibold">{event?.name || "Event Name"}</h3>
                    <p className="text-sm text-muted-foreground">
                        {event?.date || "Date TBD"} • {event?.venue || "Venue TBD"}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-xl font-bold">${event?.minPrice || "0.00"}</p>
                    </div>

                    <button className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
                        View Tickets
                    </button>
                </div>
            </div>
        </div>
    );
}
