export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="w-full max-w-md space-y-8 p-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Welcome Back</h1>
                    <p className="mt-2 text-muted-foreground">
                        Connect your wallet to continue
                    </p>
                </div>

                <div className="mt-8 space-y-4">
                    {/* Wallet connect button will go here */}
                    <button className="w-full rounded-lg bg-primary px-4 py-3 text-primary-foreground hover:bg-primary/90">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>
    );
}
