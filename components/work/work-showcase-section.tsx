'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useEffect, useState } from 'react'

interface WorkShowcaseSectionProps {
  title: string
  description: string
  features: string[]
  imageSrc: string
  imageAlt: string
  imagePosition: 'left' | 'right'
  backgroundColor: string
  textColor: string
  accentColor: string
  index: number
}

export default function WorkShowcaseSection({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  imagePosition,
  backgroundColor,
  textColor,
  accentColor,
  index,
}: WorkShowcaseSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Don't animate until we know if it's mobile or not
  const shouldAnimate = isMobile === false

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: imagePosition === 'left' ? -100 : 100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      x: imagePosition === 'left' ? 100 : -100,
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const featureVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6 + i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  return (
    <div
      className={`relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ${backgroundColor} py-20`}
    >
      {/* Decorative SVG noise filter for texture */}
      <svg
        className='absolute inset-0 w-full h-full opacity-10'
        style={{ filter: 'contrast(170%) brightness(1000%)' }}
      >
        <filter id={`noise-${index}`}>
          <feTurbulence baseFrequency='0.65' numOctaves='3' result='noise' />
          <feColorMatrix in='noise' type='saturate' values='0' />
        </filter>
        <rect
          width='100%'
          height='100%'
          fill={accentColor}
          filter={`url(#noise-${index})`}
        />
      </svg>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          {/* Image Section */}
          <motion.div
            initial={shouldAnimate ? 'hidden' : 'visible'}
            animate={
              shouldAnimate ? (isVisible ? 'visible' : 'hidden') : 'visible'
            }
            variants={imageVariants}
            className={`relative ${imagePosition === 'right' ? 'lg:col-start-2' : ''}`}
          >
            <div className='relative overflow-hidden shadow-2xl'>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className='w-full h-auto object-cover transition-transform duration-700 hover:scale-105'
                priority={index === 0}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={shouldAnimate ? 'hidden' : 'visible'}
            animate={
              shouldAnimate ? (isVisible ? 'visible' : 'hidden') : 'visible'
            }
            variants={textVariants}
            className={`${imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}
          >
            <div className='max-w-xl'>
              <h2
                className={`text-4xl md:text-5xl font-cormorant-sc font-bold ${textColor} mb-6 leading-tight`}
              >
                {title}
              </h2>

              <div
                className={`w-24 h-px bg-current opacity-60 mb-8`}
                style={{ color: accentColor }}
              ></div>

              <p
                className={`text-lg leading-relaxed ${textColor} opacity-90 mb-8`}
              >
                {description}
              </p>

              <div className='space-y-4'>
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={shouldAnimate ? 'hidden' : 'visible'}
                    animate={
                      shouldAnimate
                        ? isVisible
                          ? 'visible'
                          : 'hidden'
                        : 'visible'
                    }
                    variants={featureVariants}
                    custom={i}
                    className='flex items-start space-x-3'
                  >
                    <div
                      className='w-2 h-2 rounded-full mt-2 flex-shrink-0'
                      style={{ backgroundColor: accentColor }}
                    ></div>
                    <span className={`${textColor} opacity-85 leading-relaxed`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
