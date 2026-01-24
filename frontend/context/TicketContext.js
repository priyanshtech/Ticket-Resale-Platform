"use client";

import { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export function TicketProvider({ children }) {
    // Initial "My Tickets" (Simulated user wallet)
    const [myTickets, setMyTickets] = useState([
        {
            id: "101",
            eventName: "The Weeknd: After Hours Tour",
            date: "2026-06-15 19:00",
            venue: "SoFi Stadium, LA",
            seat: "Section 104, Row 12, Seat 5",
            originalPrice: 250,
            status: "active",
        },
        {
            id: "102",
            eventName: "TechCrunch Disrupt 2026",
            date: "2026-09-20 09:00",
            venue: "Moscone Center, SF",
            seat: "General Admission",
            originalPrice: 800,
            status: "active",
        },
        {
            id: "103",
            eventName: "NBA Finals: Game 4",
            date: "2026-06-10 19:30",
            venue: "Chase Center",
            seat: "Courtside B, Seat 12",
            originalPrice: 1500,
            status: "active",
        }
    ]);

    // Initial "Marketplace" tickets (Starts empty for demo)
    const [marketTickets, setMarketTickets] = useState([]);

    // Initial "My Events" (for organizers)
    const [myEvents, setMyEvents] = useState([]);

    const addTicketToMarket = (ticketOrId, resalePrice) => {
        let ticketToMove;

        // Check if input is a string (ID from existing list) or object (Manual Form)
        if (typeof ticketOrId === 'string') {
            ticketToMove = myTickets.find(t => t.id === ticketOrId);
            // Remove from My Tickets
            setMyTickets(prev => prev.map(t =>
                t.id === ticketOrId ? { ...t, status: 'listed' } : t
            ));
        } else {
            // It's a manual entry
            ticketToMove = ticketOrId;
            // Optionally add to "My Tickets" as listed so it feels persistent
            setMyTickets(prev => [...prev, { ...ticketToMove, status: 'listed' }]);
        }

        if (!ticketToMove) return;

        // 2. Add to Market
        const newListing = {
            ...ticketToMove,
            resalePrice: parseFloat(resalePrice),
            seller: "You",
            listedAt: new Date().toISOString(),
        };
        setMarketTickets(prev => [newListing, ...prev]);
    };

    const createEvent = (eventData) => {
        const newEvent = {
            ...eventData,
            id: Date.now().toString(),
            status: 'upcoming',
            ticketsSold: 0
        };
        setMyEvents(prev => [...prev, newEvent]);
    };

    return (
        <TicketContext.Provider value={{ myTickets, marketTickets, addTicketToMarket, myEvents, createEvent }}>
            {children}
        </TicketContext.Provider>
    );
}

export function useTickets() {
    return useContext(TicketContext);
}
