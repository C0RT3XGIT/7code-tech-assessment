import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ROUTES } from './utils/constants/routes'
import { i18n } from './i18n-config'


export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const locales = i18n.locales.map((locale) => locale.locale)
  const isRootPath = pathname === '/'

  if (isRootPath) {
    return NextResponse.redirect(new URL(`/${i18n.defaultLocale}${ROUTES.HOME}`, request.url))
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || i18n.defaultLocale
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
  
