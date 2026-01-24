"use client";

import { useTickets } from "@/context/TicketContext";
import TicketStatus from "@/components/ticket/TicketStatus";

export default function BuyPage() {
    const { marketTickets } = useTickets();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Buy Tickets</h1>
                <p className="text-muted-foreground">
                    Purchase verified resale tickets.
                </p>
            </div>

            {/* Filter/Search Bar Placeholder */}
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full max-w-sm rounded-lg border bg-background px-4 py-2"
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {marketTickets.map((ticket) => (
                    <div key={ticket.id} className="rounded-lg border bg-card p-6 shadow-sm">
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg">{ticket.eventName}</h3>
                            <p className="text-sm text-muted-foreground">{ticket.date}</p>
                            <p className="text-sm text-muted-foreground">{ticket.venue}</p>
                        </div>

                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <span className="text-xs text-muted-foreground uppercase">Resale Price</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold">${ticket.resalePrice}</span>
                                    {ticket.originalPrice && (
                                        <span className="text-sm text-muted-foreground line-through">${ticket.originalPrice}</span>
                                    )}
                                </div>
                            </div>
                            {/* Verified Badge */}
                            <div className="flex items-center gap-1 text-[10px] font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">
                                <span>✓ VERIFIED</span>
                            </div>
                        </div>

                        <button className="w-full rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
                            Buy Now
                        </button>
                    </div>
                ))}

                {marketTickets.length === 0 && (
                    <div className="col-span-full rounded-lg border bg-card p-12 text-center">
                        <p className="text-muted-foreground">No tickets currently listed for sale.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
