export default function VerifyPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="w-full max-w-md space-y-6 p-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Verify Ticket</h1>
                    <p className="mt-2 text-muted-foreground">
                        Scan QR code to verify ticket authenticity
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-lg border bg-card">
                        {/* QR Scanner will go here */}
                        <p className="text-muted-foreground">QR Scanner Placeholder</p>
                    </div>

                    <div className="rounded-lg border bg-card p-4">
                        <h3 className="font-semibold">Verification Status</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Scan a ticket to verify
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
