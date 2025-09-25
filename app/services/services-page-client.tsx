'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FAQSection from '@/components/faqs/faq-section'

export default function ServicesPageClient() {
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
              src='/hero-images/workspace.jpg'
              alt='Creative workspace and services'
              fill
              priority
              className='object-cover'
            />
          </motion.div>
          <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-brand-dustyrose/60 dark:from-black/60 dark:via-black/75 dark:to-black/80'></div>
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
                OUR{' '}
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
                SERVICES
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

      {/* Services List Section */}
      <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-8'>
              WHAT SAGEBRUSH CREATIVE OFFERS
            </h2>
            <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-12'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left'>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    Custom Website Design & Development
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    E-commerce Solutions (Shopify, WooCommerce)
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    WordPress, Wix, & Squarespace Development
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    App and plug-in installation
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    Branding and brand identity
                  </span>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    Website Redesigns & Refreshes
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    SEO Optimization
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    Ongoing Website Maintenance
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    Help with SSL certifications, domain DNS, and managing
                    nameservers
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    Anything else: think migrating subscribers, setting up email
                    hosting, or troubleshooting website issues
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </>
  )
}
