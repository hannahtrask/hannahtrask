'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type ParallaxHeroImageProps = {
  src: string
  alt: string
  priority?: boolean
  sizes?: string
  className?: string
  speed?: number
  maxOffset?: number
}

export function ParallaxHeroImage({
  src,
  alt,
  priority = false,
  sizes = '100vw',
  className = 'object-cover object-center',
  speed = 0.18,
  maxOffset = 120,
}: ParallaxHeroImageProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (reduceMotion) return

    let ticking = false

    const update = () => {
      const next = Math.min(window.scrollY * speed, maxOffset)
      setOffset(next)
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed, maxOffset])

  return (
    <div
      aria-hidden='true'
      className='absolute inset-0 will-change-transform'
      style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.12)` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
      />
    </div>
  )
}
