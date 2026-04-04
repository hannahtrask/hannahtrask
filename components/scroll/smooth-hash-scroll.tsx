'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

function scrollToHash() {
  if (typeof window === 'undefined' || !window.location.hash) return

  const hash = decodeURIComponent(window.location.hash.slice(1))
  const target = document.getElementById(hash)
  if (!target) return

  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

export default function SmoothHashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const onHashChange = () => scrollToHash()
    const timeoutId = window.setTimeout(scrollToHash, 80)

    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [pathname])

  return null
}
