export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome to your ticket management dashboard
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-card p-6">
                    <h3 className="font-semibold">My Tickets</h3>
                    <p className="mt-2 text-3xl font-bold">0</p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                    <h3 className="font-semibold">Listed for Resale</h3>
                    <p className="mt-2 text-3xl font-bold">0</p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                    <h3 className="font-semibold">Total Value</h3>
                    <p className="mt-2 text-3xl font-bold">$0</p>
                </div>
            </div>
        </div>
    );
}
