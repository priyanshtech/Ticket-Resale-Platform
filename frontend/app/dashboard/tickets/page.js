"use client";

import { useTickets } from "@/context/TicketContext";
import TicketStatus from "@/components/ticket/TicketStatus";
import Link from "next/link"; // Ensure Link is imported
import { useState } from "react";

export default function TicketsPage() {
    const { myTickets, connectBookMyShow, isBookMyShowConnected } = useTickets();
    const [isLoading, setIsLoading] = useState(false);

    const handleConnect = () => {
        setIsLoading(true);
        setTimeout(() => {
            connectBookMyShow();
            setIsLoading(false);
        }, 5000);
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">My Tickets</h1>
                <p className="text-muted-foreground">
                    View and manage all your tickets
                </p>

                {!isBookMyShowConnected && (
                    <div className="mt-4">
                        {isLoading ? (
                            <div className="flex items-center gap-3 text-muted-foreground bg-muted/20 px-4 py-2 rounded-lg border w-fit">
                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                                <span className="font-medium">Connecting to BookMyShow... (Please wait)</span>
                            </div>
                        ) : (
                            <button
                                onClick={handleConnect}
                                className="bg-[#E50914] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#b00710] transition-colors flex items-center gap-2"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 7H13V11H17V13H13V17H11V13H7V11H11V7Z" fill="currentColor" />
                                </svg>
                                Connect Account to BookMyShow
                            </button>
                        )}
                    </div>
                )}
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
