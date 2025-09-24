'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface HeroProps {
  backgroundImage: string
  backgroundImageAlt: string
  title: string
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
  animateContent?: boolean
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
  animateContent = true,
}: HeroProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (!enableParallax) return

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [enableParallax])

  // Default overlay styles based on type
  const getOverlayClassName = () => {
    if (overlayClassName) return overlayClassName
    
    switch (overlayType) {
      case 'gradient':
        return 'absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-brand-dustyrose/60'
      case 'dark':
        return 'absolute inset-0 bg-black/50 backdrop-blur-[1px]'
      case 'light':
        return 'absolute inset-0 bg-white/20'
      case 'custom':
        return ''
      default:
        return 'absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-brand-dustyrose/60'
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
    <div className={`relative h-screen w-full flex items-center overflow-hidden ${className}`}>
      <div className='absolute inset-0 z-0'>
        {enableParallax ? (
          <motion.div
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
            className='w-full h-[120%]'
          >
            <Image
              src={backgroundImage}
              alt={backgroundImageAlt}
              fill
              priority
              className='object-cover'
            />
          </motion.div>
        ) : (
          <div className='w-full h-[120%]'>
            <Image
              src={backgroundImage}
              alt={backgroundImageAlt}
              fill
              priority
              className='object-cover'
            />
          </div>
        )}
        <div className={getOverlayClassName()}></div>
      </div>

      {/* Hero content */}
      <div className={`container mx-auto px-4 relative z-10 ${containerClassName} ${getContentAlignmentClasses()}`}>
        {children ? (
          children
        ) : (
          <div className='text-white'>
            {subtitle && (
              <motion.span
                initial={animateContent ? { opacity: 0, y: 30 } : {}}
                animate={animateContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={getDefaultSubtitleClasses()}
              >
                {subtitle}
              </motion.span>
            )}
            
            <motion.h1
              initial={animateContent ? { opacity: 0, y: 50 } : {}}
              animate={animateContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: animateContent ? (subtitle ? 0.3 : 0.1) : 0 }}
              className={getDefaultTitleClasses()}
            >
              {title}
            </motion.h1>
            
            {description && (
              <motion.p
                initial={animateContent ? { opacity: 0, y: 30 } : {}}
                animate={animateContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={getDefaultDescriptionClasses()}
              >
                {description}
              </motion.p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
