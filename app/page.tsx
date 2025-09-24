'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/hero/hero'
import HeroDescription from '@/components/hero/hero-description'
import AboutSection from '@/components/about-section'

export default function Home() {
  return (
    <>
      {/* Hero Section with Parallax Background */}
      <Hero
        backgroundImage='/hero-images/western-backdrop.jpg'
        backgroundImageAlt='A beautiful western backdrop with a cowgirl. By Taylor Brandon.'
        title=''
        enableParallax={true}
        animateContent={false}
      >
        <div className='text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3,
            }}
            className='font-cormorant-sc text-4xl md:text-6xl font-light mb-6 tracking-tight text-white drop-shadow-2xl'
          >
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.0,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className='font-cormorant-sc'
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
              className='font-cormorant-sc font-normal italic pr-2'
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
      </Hero>

      {/* Hero Description */}
      <HeroDescription />

      {/* About Section */}
      <AboutSection />
    </>
  )
}
