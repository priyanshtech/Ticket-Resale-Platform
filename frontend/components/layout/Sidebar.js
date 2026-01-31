import Link from "next/link";

export default function Sidebar() {
    const navItems = [
        { href: "/dashboard", label: "Dashboard" },

        { href: "/dashboard/tickets", label: "My Tickets" },
        { href: "/dashboard/buy", label: "Buy Tickets" },
        { href: "/dashboard/sell", label: "Sell Tickets" },
    ];

    return (
        <aside className="w-64 border-r bg-card">
            <div className="p-4">
                <h2 className="text-lg font-semibold">Menu</h2>
            </div>

            <nav className="space-y-1 px-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-4 py-2 text-sm hover:bg-accent"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
