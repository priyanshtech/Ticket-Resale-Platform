export default function Navbar() {
    return (
        <nav className="border-b bg-card">
            <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-semibold">Ticket Resale Platform</h1>
                </div>

                <div className="flex items-center gap-4">
                    <button className="rounded-lg px-4 py-2 text-sm hover:bg-accent">
                        Profile
                    </button>
                    <button className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
                        Disconnect
                    </button>
                </div>
            </div>
        </nav>
    );
}
