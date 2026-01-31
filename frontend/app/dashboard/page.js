"use client";

import { useTickets } from "@/context/TicketContext";

export default function DashboardPage() {
    const { myTickets } = useTickets();

    const totalTickets = myTickets.length;
    const listedTickets = myTickets.filter(t => t.status === 'listed').length;
    const totalValue = myTickets.reduce((acc, t) => acc + (parseFloat(t.originalPrice) || 0), 0);


    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome to your ticket management dashboard
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-card p-6">
                    <h3 className="font-semibold text-muted-foreground">My Tickets</h3>
                    <p className="mt-2 text-3xl font-bold">{totalTickets}</p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                    <h3 className="font-semibold text-muted-foreground">Listed for Resale</h3>
                    <p className="mt-2 text-3xl font-bold">{listedTickets}</p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                    <h3 className="font-semibold text-muted-foreground">Portfolio Value</h3>
                    <p className="mt-2 text-3xl font-bold">${totalValue.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}
