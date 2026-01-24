"use client";

import { useTickets } from "@/context/TicketContext";
import Link from "next/link";

export default function MyEventsPage() {
    const { myEvents } = useTickets();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">My Events</h1>
                    <p className="text-muted-foreground">
                        Manage events you have organized
                    </p>
                </div>
                <Link href="/dashboard/events/create">
                    <button className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
                        + Create New Event
                    </button>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {myEvents.map((event) => (
                    <div key={event.id} className="rounded-lg border bg-card p-6 shadow-sm">
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg">{event.eventName}</h3>
                            <p className="text-sm text-muted-foreground">{event.date} • {event.venue}</p>
                        </div>

                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <span className="text-xs text-muted-foreground uppercase">Price</span>
                                <p className="font-medium">${event.price}</p>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                <span className="uppercase">{event.status}</span>
                            </div>
                        </div>

                        <div className="text-xs text-muted-foreground mb-4">
                            Capacity: {event.capacity} • Sold: {event.ticketsSold}
                        </div>

                        <button className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm hover:bg-accent">
                            Manage Event
                        </button>
                    </div>
                ))}

                {myEvents.length === 0 && (
                    <div className="col-span-full rounded-lg border bg-card p-12 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                            <span className="text-xl">📅</span>
                        </div>
                        <h3 className="text-lg font-semibold">No Events Created</h3>
                        <p className="text-muted-foreground mt-2">
                            You haven't organized any events yet.
                        </p>
                        <Link href="/dashboard/events/create" className="inline-block mt-4">
                            <button className="text-primary font-medium hover:underline">
                                Create your first event &rarr;
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
