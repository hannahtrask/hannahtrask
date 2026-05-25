'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

function scrollToHash(lastHandledHashRef: { current: string }) {
  if (typeof window === 'undefined' || !window.location.hash) return

  let hash = ''
  try {
    hash = decodeURIComponent(window.location.hash.slice(1))
  } catch {
    return
  }

  if (!hash) return
  if (lastHandledHashRef.current === hash) return

  const target = document.getElementById(hash)
  if (!target) return

  lastHandledHashRef.current = hash

  const useSmoothBehavior = !window.matchMedia('(pointer: coarse)').matches

  requestAnimationFrame(() => {
    target.scrollIntoView({
      behavior: useSmoothBehavior ? 'smooth' : 'auto',
      block: 'start',
    })
  })
}

export default function SmoothHashScroll() {
  const pathname = usePathname()
  const lastHandledHashRef = useRef('')

  useEffect(() => {
    const onHashChange = () => {
      // Allow navigation to same hash after URL changes.
      lastHandledHashRef.current = ''
      scrollToHash(lastHandledHashRef)
    }

    const timeoutId = window.setTimeout(() => {
      lastHandledHashRef.current = ''
      scrollToHash(lastHandledHashRef)
    }, 80)

    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [pathname])

  return null
}
