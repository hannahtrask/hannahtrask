'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface PhotoCredit {
  name: string
  url?: string
}

interface HeroProps {
  backgroundImage: string
  backgroundImageAlt: string
  title?: string
  subtitle?: string
  description?: string
  contentAlignment?: 'center' | 'bottom' | 'custom'
  enableParallax?: boolean
  overlayType?: 'gradient' | 'dark' | 'light' | 'custom'
  overlayClassName?: string
  children?: React.ReactNode
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  descriptionClassName?: string
  containerClassName?: string
  photoCredit?: PhotoCredit
  priority?: boolean
}

export default function Hero({
  backgroundImage,
  backgroundImageAlt,
  title,
  subtitle,
  description,
  contentAlignment = 'center',
  enableParallax = false,
  overlayType = 'gradient',
  overlayClassName,
  children,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  descriptionClassName = '',
  containerClassName = '',
  photoCredit,
  priority = false,
}: HeroProps) {
  const [scrollY, setScrollY] = useState(0)
  const [shouldParallax, setShouldParallax] = useState(false)

  useEffect(() => {
    if (!enableParallax || typeof window === 'undefined') {
      setShouldParallax(current => (current ? false : current))
      return
    }

    const safeMatch = (query: string) => {
      try {
        return window.matchMedia(query).matches
      } catch {
        return false
      }
    }

    const prefersReducedMotion = safeMatch('(prefers-reduced-motion: reduce)')
    const hasCoarsePointer = safeMatch('(pointer: coarse)')
    const isSmallViewport = window.innerWidth < 1024

    const nextShouldParallax =
      !prefersReducedMotion && !hasCoarsePointer && !isSmallViewport
    setShouldParallax(current =>
      current === nextShouldParallax ? current : nextShouldParallax
    )
  }, [enableParallax])

  useEffect(() => {
    if (!shouldParallax || typeof window === 'undefined') return

    let frameId: number | null = null

    const handleScroll = () => {
      if (frameId !== null) return

      frameId = window.requestAnimationFrame(() => {
        const nextScrollY = window.scrollY
        setScrollY(current => (current === nextScrollY ? current : nextScrollY))
        frameId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [shouldParallax])

  // Default overlay styles based on type
  const getOverlayClassName = () => {
    if (overlayClassName) return overlayClassName

    switch (overlayType) {
      case 'gradient':
        return 'absolute inset-0 bg-gradient-to-b from-[#c56f53]/[0.78] via-[#33352a]/[0.86] to-[#33352a]/[0.92] dark:from-[#c56f53]/[0.82] dark:via-[#33352a]/[0.90] dark:to-[#33352a]/[0.94]'
      case 'dark':
        return 'absolute inset-0 bg-[#33352a]/[0.84] dark:bg-[#33352a]/[0.90] backdrop-blur-[1px]'
      case 'light':
        return 'absolute inset-0 bg-white/20'
      case 'custom':
        return ''
      default:
        return 'absolute inset-0 bg-gradient-to-b from-[#c56f53]/[0.78] via-[#33352a]/[0.86] to-[#33352a]/[0.92] dark:from-[#c56f53]/[0.82] dark:via-[#33352a]/[0.90] dark:to-[#33352a]/[0.94]'
    }
  }

  // Content alignment classes
  const getContentAlignmentClasses = () => {
    switch (contentAlignment) {
      case 'center':
        return 'flex items-center justify-center h-full text-center'
      case 'bottom':
        return 'flex items-end h-full pb-16'
      case 'custom':
        return 'h-full'
      default:
        return 'flex items-center justify-center h-full text-center'
    }
  }

  // Default title classes
  const getDefaultTitleClasses = () => {
    if (titleClassName) return titleClassName
    return 'text-5xl md:text-6xl font-julius-sans-one font-light text-white mb-6'
  }

  // Default subtitle classes
  const getDefaultSubtitleClasses = () => {
    if (subtitleClassName) return subtitleClassName
    return 'text-lg font-medium text-white/90 uppercase tracking-wide mb-4 block'
  }

  // Default description classes
  const getDefaultDescriptionClasses = () => {
    if (descriptionClassName) return descriptionClassName
    return 'text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed'
  }

  return (
    <div
      className={`relative min-h-[100svh] md:min-h-screen w-full flex items-center overflow-hidden ${className}`}
    >
      <div className='absolute inset-0 z-0'>
        {shouldParallax ? (
          <div
            style={{
              transform: `translateY(${scrollY * 0.25}px)`,
            }}
            className='w-full h-[120%]'
          >
            <Image
              src={backgroundImage}
              alt={backgroundImageAlt}
              fill
              priority={priority}
              sizes='100vw'
              className='object-cover'
            />
          </div>
        ) : (
          <div className='w-full h-[120%]'>
            <Image
              src={backgroundImage}
              alt={backgroundImageAlt}
              fill
              priority={priority}
              sizes='100vw'
              className='object-cover'
            />
          </div>
        )}
        <div className={getOverlayClassName()}></div>
      </div>

      {/* Hero content */}
      <div
        className={`container mx-auto px-4 pt-24 sm:pt-28 md:pt-0 relative z-10 ${containerClassName} ${getContentAlignmentClasses()}`}
      >
        {children ? (
          children
        ) : (
          <div className='text-white'>
            {subtitle && (
              <span className={getDefaultSubtitleClasses()}>{subtitle}</span>
            )}

            <h1 className={getDefaultTitleClasses()}>{title}</h1>

            {description && (
              <p className={getDefaultDescriptionClasses()}>{description}</p>
            )}
          </div>
        )}
      </div>

      {/* Photo Credit */}
      {photoCredit && (
        <div className='absolute bottom-2 right-2 z-20'>
          <span className='text-[10px] text-white/70'>
            Photo by{' '}
            {photoCredit.url ? (
              <a
                href={photoCredit.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/70 hover:text-white/90 underline'
              >
                {photoCredit.name}
              </a>
            ) : (
              photoCredit.name
            )}
          </span>
        </div>
      )}
    </div>
  )
}
