"use client";

import { useTickets } from "@/context/TicketContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function DashboardPage() {
    const { myTickets } = useTickets();

    const totalTickets = myTickets.length;
    const listedTickets = myTickets.filter(t => t.status === 'listed').length;
    const totalValue = myTickets.reduce((acc, t) => acc + (parseFloat(t.originalPrice) || 0), 0);

    // Mock Data for Visualizations
    const categoryData = [
        { name: 'Concerts', value: myTickets.filter(t => t.eventName.includes('Music') || t.eventName.includes('Tour')).length + 1 },
        { name: 'Sports', value: myTickets.filter(t => t.eventName.includes('NBA') || t.eventName.includes('Game')).length + 1 },
        { name: 'Tech', value: myTickets.filter(t => t.eventName.includes('Tech') || t.eventName.includes('Conf')).length + 1 },
    ];

    const valueHistoryData = [
        { month: 'Jan', value: 200 },
        { month: 'Feb', value: 450 },
        { month: 'Mar', value: 400 },
        { month: 'Apr', value: 800 },
        { month: 'May', value: 1200 },
        { month: 'Jun', value: totalValue > 1200 ? totalValue : 1500 },
    ];

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

            {/* Visualizations */}
            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6">
                    <h3 className="mb-4 font-semibold">Asset Distribution</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={categoryData}>
                                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                                <XAxis dataKey="name" fontSize={12} />
                                <YAxis fontSize={12} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    cursor={{ fill: 'transparent' }}
                                />
                                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="rounded-lg border bg-card p-6">
                    <h3 className="mb-4 font-semibold">Portfolio Value Trend</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={valueHistoryData}>
                                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                                <XAxis dataKey="month" fontSize={12} />
                                <YAxis fontSize={12} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
