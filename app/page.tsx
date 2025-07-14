'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import HeroDescription from '@/components/hero-description'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section with Parallax Background */}
      <div className='relative h-screen w-full flex items-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <motion.div
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
            className='w-full h-[120%]'
          >
            <Image
              src='/desert-roadtrip.jpg'
              alt='A westfalia driving through a beautiful desert landscape.'
              fill
              priority
              className='object-cover'
            />
          </motion.div>
          <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-brand-dustyrose/60'></div>
        </div>

        <div className='container mx-auto px-4 relative z-10 flex items-center justify-center h-full'>
          <div className='text-center'>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3,
              }}
              className='font-julius-sans-one text-4xl md:text-6xl font-light mb-6 tracking-tight text-white drop-shadow-2xl'
            >
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.0,
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                Let your ideas{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.0,
                  delay: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className='font-normal italic pr-2'
              >
                roam
              </motion.span>
            </motion.h1>

            {/* Animated decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className='w-24 h-px bg-gradient-to-r from-transparent via-brand-lavender to-transparent mx-auto'
            />
          </div>
        </div>
      </div>

      {/* Hero Description */}
      <HeroDescription />
    </>
  )
}
