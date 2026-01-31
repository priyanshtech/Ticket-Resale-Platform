"use client";

import { useTickets } from "@/context/TicketContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TicketStatus from "@/components/ticket/TicketStatus";

export default function SellPage() {
    const { myTickets, addTicketToMarket } = useTickets();
    const router = useRouter();

    // State
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [resalePrice, setResalePrice] = useState("");
    const [validationState, setValidationState] = useState("idle"); // idle, validating, success
    const [progress, setProgress] = useState(0);

    const handleListClick = (ticket) => {
        setSelectedTicket(ticket);
        setResalePrice(""); // Reset price
    };

    const handleConfirmListing = (e) => {
        e.preventDefault();
        setValidationState("validating");

        // Timer simulation
        let timer = 0;
        const interval = setInterval(() => {
            timer += 100;
            const totalTime = 5000;
            const percent = Math.min((timer / totalTime) * 100, 100);

            setProgress(percent);

            if (timer >= totalTime) {
                clearInterval(interval);
                setValidationState("success");

                addTicketToMarket(selectedTicket.id, resalePrice);

                setTimeout(() => {
                    router.push("/dashboard/buy");
                }, 1500);
            }
        }, 100);
    };

    // Validation Overlay
    if (validationState === "validating" || validationState === "success") {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                <div className="w-full max-w-md space-y-6 rounded-lg border bg-card p-8 shadow-lg text-center">
                    {validationState === "validating" ? (
                        <>
                            <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                            <h2 className="text-2xl font-bold">Validating Listing...</h2>
                            <div className="space-y-4 text-sm text-muted-foreground text-left px-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span>Converting ticket to NFT...</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse delay-75"></div>
                                    <span>Checking price cap compliance...</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse delay-150"></div>
                                    <span>Generating smart contract listing...</span>
                                </div>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary mt-4">
                                <div
                                    className="h-full bg-primary transition-all duration-100 ease-linear"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">Listing Successful!</h2>
                            <p className="text-muted-foreground">Your ticket is now live on the marketplace.</p>
                        </>
                    )}
                </div>
            </div>
        );
    }

    // Modal for Setting Price
    if (selectedTicket && validationState === "idle") {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
                <div className="w-full max-w-lg rounded-lg border bg-card shadow-lg flex flex-col max-h-[90vh]">
                    <div className="p-6 border-b">
                        <h2 className="text-2xl font-bold">List Ticket for Resale</h2>
                    </div>

                    <div className="p-6 space-y-6 overflow-y-auto">
                        {/* Ticket Details Summary */}
                        <div className="rounded-lg bg-muted/50 p-4 space-y-3">
                            <div>
                                <h3 className="font-semibold">{selectedTicket.eventName}</h3>
                                <p className="text-sm text-muted-foreground">{selectedTicket.date} • {selectedTicket.venue}</p>
                            </div>
                            <div className="flex gap-8 text-sm">
                                <div>
                                    <span className="text-xs uppercase text-muted-foreground font-semibold">Seat</span>
                                    <p>{selectedTicket.seat}</p>
                                </div>
                                <div>
                                    <span className="text-xs uppercase text-muted-foreground font-semibold">Original Price</span>
                                    <p>${selectedTicket.originalPrice}</p>
                                </div>
                            </div>
                        </div>

                        <form id="listing-form" onSubmit={handleConfirmListing} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Set Resale Price ($)</label>
                                <input
                                    type="number"
                                    required
                                    min="0"
                                    max={selectedTicket.originalPrice * 1.5}
                                    value={resalePrice}
                                    onChange={(e) => setResalePrice(e.target.value)}
                                    placeholder="0.00"
                                    className="w-full rounded-md border bg-background px-3 py-2 text-lg font-bold"
                                />
                                <p className="text-xs text-green-600">
                                    Price Cap: Max ${(selectedTicket.originalPrice * 1.5).toFixed(2)} (150%)
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="p-6 border-t flex gap-3">
                        <button
                            onClick={() => setSelectedTicket(null)}
                            className="flex-1 rounded-lg border bg-background px-4 py-2 hover:bg-accent"
                        >
                            Cancel
                        </button>
                        <button
                            form="listing-form"
                            type="submit"
                        >
                            Convert Ticket to NFT and Sell
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Main View: List of My Tickets
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Sell Tickets</h1>
                <p className="text-muted-foreground">
                    Select a ticket from your wallet to list on the marketplace.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {myTickets.filter(t => t.status === 'active').map((ticket) => (
                    <div key={ticket.id} className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-all">
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg line-clamp-1">{ticket.eventName}</h3>
                            <p className="text-sm text-muted-foreground">{ticket.date}</p>
                            <p className="text-sm text-muted-foreground line-clamp-1">{ticket.venue}</p>
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <span className="text-xs text-muted-foreground uppercase">Original Price</span>
                                <p className="font-medium">${ticket.originalPrice}</p>
                            </div>
                            <TicketStatus status={ticket.status} />
                        </div>

                        <button
                            onClick={() => handleListClick(ticket)}
                            className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                        >
                            Convert to NFT and Sell
                        </button>
                    </div>
                ))}

                {myTickets.filter(t => t.status === 'active').length === 0 && (
                    <div className="col-span-full rounded-lg border bg-card p-12 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                            <span className="text-xl">🎫</span>
                        </div>
                        <h3 className="text-lg font-semibold">No Sellable Tickets</h3>
                        <p className="text-muted-foreground mt-2">
                            You don't have any active tickets to sell right now.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
