'use client';

import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const { login, logout, authenticated, user } = usePrivy();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push('/login');
    };

    return (
        <nav className="border-b bg-card">
            <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-xl font-semibold hover:opacity-80">
                        Ticket Resale Platform
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    {authenticated ? (
                        <>
                            <div className="text-sm text-muted-foreground hidden sm:block">
                                {user?.email?.address || user?.wallet?.address?.slice(0, 6) + '...'}
                            </div>
                            <Link href="/dashboard">
                                <button className="rounded-lg px-4 py-2 text-sm hover:bg-accent">
                                    Dashboard
                                </button>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
                            >
                                Disconnect
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={login}
                            className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
                        >
                            Connect Wallet
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
