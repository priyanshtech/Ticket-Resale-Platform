export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar will be imported here */}
            <aside className="w-64 border-r bg-card">
                <div className="p-4">
                    <h2 className="text-lg font-semibold">Dashboard</h2>
                </div>
            </aside>

            <div className="flex-1">
                {/* Navbar will be imported here */}
                <header className="border-b bg-card">
                    <div className="flex h-16 items-center px-6">
                        <h1 className="text-xl font-semibold">Ticket Resale Platform</h1>
                    </div>
                </header>

                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
