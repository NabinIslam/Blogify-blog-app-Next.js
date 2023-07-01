import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const { user } = useContext(AuthContext);

  const path = request.nextUrl.pathname;

  const publicPath = path === '/login' || path === '/register';

  if (!user) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/post-blog', '/my-posts'],
};
