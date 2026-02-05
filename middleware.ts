import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './app/i18n/routing';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle specific invalid path redirect
  if (pathname.includes('/noticias/impacto')) {
    const locale = pathname.startsWith('/en') ? 'en' : 'pt';
    return NextResponse.redirect(new URL(`/${locale}/impacto`, request.url));
  }

  return handleI18nRouting(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the last locale for all
    // requests, even if they don't match a locale prefix
    '/(pt|en)/:path*',

    // Enable redirects for pathnames without a locale prefix
    // (e.g. /about -> /en/about)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
