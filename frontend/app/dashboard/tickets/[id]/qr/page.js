export default function TicketQRPage({ params }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="w-full max-w-md space-y-6 p-8 text-center">
                <h1 className="text-2xl font-bold">Ticket QR Code</h1>
                <p className="text-muted-foreground">Ticket ID: {params.id}</p>

                <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-lg border bg-card">
                    {/* QR Code will be displayed here */}
                    <p className="text-muted-foreground">QR Code Placeholder</p>
                </div>

                <p className="text-sm text-muted-foreground">
                    Show this QR code at the venue entrance
                </p>
            </div>
        </div>
    );
}
