"use client";

import { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export function TicketProvider({ children }) {
    // Initial "My Tickets" (Simulated user wallet)
    // Starts empty until BMS connection
    const [myTickets, setMyTickets] = useState([]);

    // Initial "Marketplace" tickets (Starts empty for demo)
    const [marketTickets, setMarketTickets] = useState([]);

    // Initial "My Events" (for organizers)
    const [myEvents, setMyEvents] = useState([]);

    const [isBookMyShowConnected, setIsBookMyShowConnected] = useState(false);

    const connectBookMyShow = () => {
        setIsBookMyShowConnected(true);

        const originalDummyTickets = [
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
        ];

        const dummyBookMyShowTickets = [
            {
                id: "bms-1",
                eventName: "Alan Walker: Walker World Your",
                date: "2026-10-15 20:00",
                venue: "DY Patil Stadium, Mumbai",
                seat: "Standing Pen A",
                originalPrice: 2500,
                status: "active",
                source: "bookmyshow",
                isNft: false
            },
            {
                id: "bms-2",
                eventName: "Coldplay: Music of the Spheres",
                date: "2026-11-20 19:30",
                venue: "Narendra Modi Stadium, Ahmedabad",
                seat: "Level 2, Block C, Row 15",
                originalPrice: 4500,
                status: "active",
                source: "bookmyshow",
                isNft: false
            }
        ];

        setMyTickets(prev => [...prev, ...originalDummyTickets, ...dummyBookMyShowTickets]);
    };

    const addTicketToMarket = async (ticketOrId, resalePrice) => {
        let ticketToMove;

        // Check if input is a string (ID from existing list) or object (Manual Form)
        if (typeof ticketOrId === 'string') {
            ticketToMove = myTickets.find(t => t.id === ticketOrId);
        } else {
            // It's a manual entry
            ticketToMove = ticketOrId;
        }

        if (!ticketToMove) return;

        try {
            // 1. Connect to Wallet (Metamask/Localhost) - SIMULATED
            // if (!window.ethereum) {
            //     alert("Please install Metamask or a Web3 wallet!");
            //     return;
            // }

            // const walletClient = createWalletClient({
            //     chain: hardhat,
            //     transport: custom(window.ethereum)
            // });

            // const [account] = await walletClient.getAddresses();

            // 2. Interact with Smart Contract - SIMULATED
            // console.log("Minting ticket to:", account);

            // Generate a fake Token URI (In real app, upload to IPFS)
            const tokenURI = `https://api.ticketresale.com/metadata/${ticketToMove.id}`;

            // const hash = await walletClient.writeContract({
            //     address: ContractConfig.address,
            //     abi: ContractConfig.abi,
            //     functionName: 'mintTicket',
            //     args: [account, tokenURI],
            //     account
            // });

            console.log("Simulating Transaction...");
            const hash = "0x" + Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(""); // Fake hash

            console.log("Transaction Hash:", hash);

            // Wait for confirmation - SIMULATED
            // const publicClient = createPublicClient({
            //     chain: hardhat,
            //     transport: http()
            // });

            // await publicClient.waitForTransactionReceipt({ hash });
            await new Promise(resolve => setTimeout(resolve, 2000)); // Fake delay
            console.log("Transaction Confirmed!");

            // 3. Update UI (Optimistic or after intent)
            const finalTicketState = {
                ...ticketToMove,
                isNft: true,
                status: 'listed'
            };

            // Update My Tickets: Mark as listed
            if (typeof ticketOrId === 'string') {
                setMyTickets(prev => prev.map(t =>
                    t.id === ticketOrId ? finalTicketState : t
                ));
            } else {
                setMyTickets(prev => [...prev, finalTicketState]);
            }

            // 4. Add to Market
            const newListing = {
                ...finalTicketState,
                resalePrice: parseFloat(resalePrice),
                seller: "You", // In real app, derived from address
                listedAt: new Date().toISOString(),
                txHash: hash
            };
            setMarketTickets(prev => [newListing, ...prev]);

        } catch (error) {
            console.error("Blockchain Error:", error);
            alert("Transaction failed: " + error.message);
        }
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
        <TicketContext.Provider value={{ myTickets, marketTickets, addTicketToMarket, myEvents, createEvent, connectBookMyShow, isBookMyShowConnected }}>
            {children}
        </TicketContext.Provider>
    );
}

export function useTickets() {
    return useContext(TicketContext);
}
