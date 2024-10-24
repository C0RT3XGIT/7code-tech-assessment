import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ROUTES } from './utils/constants/routes'

const locales = ['en', 'ro']
const defaultLocale = locales[0]


export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isRootPath = pathname === '/'

  if (isRootPath) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${ROUTES.HOME}`, request.url))
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || defaultLocale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

// Specify which routes this middleware should run for
export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
  
