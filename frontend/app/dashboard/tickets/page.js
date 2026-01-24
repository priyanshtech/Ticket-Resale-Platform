"use client";

import { useTickets } from "@/context/TicketContext";
import TicketStatus from "@/components/ticket/TicketStatus";
import Link from "next/link"; // Ensure Link is imported

export default function TicketsPage() {
    const { myTickets } = useTickets();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">My Tickets</h1>
                <p className="text-muted-foreground">
                    View and manage all your tickets
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {myTickets.map((ticket) => (
                    <div key={ticket.id} className="rounded-lg border bg-card p-6 shadow-sm">
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg">{ticket.eventName}</h3>
                            <p className="text-sm text-muted-foreground">{ticket.date}</p>
                            <p className="text-sm text-muted-foreground">{ticket.venue}</p>
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <span className="text-xs text-muted-foreground uppercase">Seat</span>
                                <p className="font-medium">{ticket.seat}</p>
                            </div>
                            <TicketStatus status={ticket.status} />
                        </div>

                        <Link href={`/dashboard/tickets/${ticket.id}/qr`}>
                            <button className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm hover:bg-accent">
                                View QR Code
                            </button>
                        </Link>
                    </div>
                ))}

                {myTickets.length === 0 && (
                    <div className="col-span-full rounded-lg border bg-card p-12 text-center text-muted-foreground">
                        No tickets found
                    </div>
                )}
            </div>
        </div>
    );
}
