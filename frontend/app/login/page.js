'use client';

import { usePrivy } from '@privy-io/react-auth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const { login, authenticated, ready, user } = usePrivy();
    const router = useRouter();

    useEffect(() => {
        if (ready && authenticated) {
            router.push('/dashboard');
        }
    }, [ready, authenticated, router]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="w-full max-w-md space-y-8 p-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Welcome Back</h1>
                    <p className="mt-2 text-muted-foreground">
                        {authenticated
                            ? `Signed in as ${user?.email?.address || user?.wallet?.address.slice(0, 6) || "User"}`
                            : "Connect your wallet to manage tickets"}
                    </p>
                </div>

                <div className="mt-8 space-y-4">
                    {authenticated ? (
                        <div className="space-y-4">
                            <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center text-sm">
                                Login successful! Redirecting...
                            </div>
                            <button
                                onClick={() => router.push('/dashboard')}
                                className="w-full rounded-lg bg-green-600 px-4 py-3 text-white hover:bg-green-700 font-medium transition-transform active:scale-95"
                            >
                                Go to Dashboard
                            </button>
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={() => login({ onComplete: () => router.push('/dashboard') })}
                                className="w-full rounded-lg bg-primary px-4 py-3 text-primary-foreground hover:bg-primary/90 font-medium transition-transform active:scale-95"
                            >
                                Connect Wallet
                            </button>
                            <p className="text-center text-sm text-muted-foreground">
                                Sign in with Email, Google, or Wallet
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
