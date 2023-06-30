import { AuthContext } from '@/context/AuthContext';
import { NextResponse } from 'next/server';
import React from 'react';

export function middleware(request) {
  const context = React.createContext(AuthContext);

  const { user } = context;

  if (user) {
    return NextResponse.redirect(new URL('/post-blog', request.url));
  } else {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: '/post-blog',
};
