export default function QRCodeDisplay({ ticketId, size = 256 }) {
    return (
        <div className="flex flex-col items-center space-y-4">
            <div
                className="flex items-center justify-center rounded-lg border bg-white p-4"
                style={{ width: size, height: size }}
            >
                {/* QR Code library integration will go here */}
                <div className="text-center text-sm text-muted-foreground">
                    <p>QR Code</p>
                    <p className="mt-2 font-mono text-xs">{ticketId}</p>
                </div>
            </div>

            <p className="text-sm text-muted-foreground">
                Ticket ID: {ticketId}
            </p>
        </div>
    );
}
