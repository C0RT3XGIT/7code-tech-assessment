'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'
import Cookies from 'js-cookie'

type Props = {
  labels: {
    en: string
    ro: string
  }
}

export default function LanguageSwitcher({ labels }: Props) {
  const pathname = usePathname()

  const switchLanguage = useCallback((locale: string) => {
    Cookies.set('NEXT_LOCALE', locale, { expires: 365 })
  }, [])

  const getNewPath = (locale: string) => {
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex gap-4">
      <Link href={getNewPath('en')} onClick={() => switchLanguage('en')}>
        {labels.en}
      </Link>
      <Link href={getNewPath('ro')} onClick={() => switchLanguage('ro')}>
        {labels.ro}
      </Link>
    </div>
  )
}