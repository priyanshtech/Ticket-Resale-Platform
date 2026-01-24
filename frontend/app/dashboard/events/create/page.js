"use client";

import { useTickets } from "@/context/TicketContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateEventPage() {
    const { createEvent } = useTickets();
    const router = useRouter();

    const [formData, setFormData] = useState({
        eventName: "",
        date: "",
        venue: "",
        capacity: "",
        price: "",
        description: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createEvent(formData);
        router.push("/dashboard/events");
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Create New Event</h1>
                <p className="text-muted-foreground">
                    Launch a new event and issue NFT tickets
                </p>
            </div>

            <form onSubmit={handleSubmit} className="rounded-lg border bg-card p-8 shadow-sm space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Event Name</label>
                    <input
                        name="eventName"
                        required
                        value={formData.eventName}
                        onChange={handleChange}
                        placeholder="e.g. Summer Music Festival"
                        className="w-full rounded-md border bg-background px-3 py-2"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Date & Time</label>
                        <input
                            name="date"
                            type="datetime-local"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full rounded-md border bg-background px-3 py-2"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Venue</label>
                        <input
                            name="venue"
                            required
                            value={formData.venue}
                            onChange={handleChange}
                            placeholder="e.g. Central Park"
                            className="w-full rounded-md border bg-background px-3 py-2"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Total Capacity</label>
                        <input
                            name="capacity"
                            type="number"
                            required
                            min="1"
                            value={formData.capacity}
                            onChange={handleChange}
                            placeholder="e.g. 5000"
                            className="w-full rounded-md border bg-background px-3 py-2"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Ticket Price ($)</label>
                        <input
                            name="price"
                            type="number"
                            required
                            min="0"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="0.00"
                            className="w-full rounded-md border bg-background px-3 py-2"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                        name="description"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your event..."
                        className="w-full rounded-md border bg-background px-3 py-2"
                    />
                </div>

                <div className="pt-4 flex gap-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="flex-1 rounded-lg border bg-background px-4 py-3 hover:bg-accent"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex-1 rounded-lg bg-primary px-4 py-3 text-primary-foreground hover:bg-primary/90"
                    >
                        Create Event
                    </button>
                </div>
            </form>
        </div>
    );
}
