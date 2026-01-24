// Middleware for route protection
// This will be implemented when authentication is added

export function middleware(request) {
    // TODO: Implement authentication check
    // TODO: Protect dashboard routes
    // TODO: Redirect unauthenticated users to login

    return;
}

// Configure which routes to run middleware on
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
