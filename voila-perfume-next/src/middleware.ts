import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // Redirect unauthenticated users from protected routes
    if (!token && pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Redirect non-admin users from admin routes
    if (token?.role !== 'admin' && pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/admin/:path*', '/profile/:path*'],
};