import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === '/') {
    return NextResponse.redirect(new URL('/docs/home', req.url));
  }

  return NextResponse.next();
}