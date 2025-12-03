'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { urlFor } from '@/sanity/utils/imageUrlBuilder'

interface Project {
  _id: string
  title: string
  slug: { current: string }
  webpageImage: any
  description: string
}

interface WebPageGalleryClientProps {
  projects: Project[]
}

export default function WebPageGalleryClient({
  projects,
}: WebPageGalleryClientProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-sage-100 to-sage-200 dark:from-sage-800 dark:to-sage-900 py-20'>
        {/* Decorative SVG noise filter for texture */}
        <svg
          className='absolute inset-0 w-full h-full opacity-10'
          style={{ filter: 'contrast(170%) brightness(1000%)' }}
        >
          <filter id='webpage-noise'>
            <feTurbulence baseFrequency='0.65' numOctaves='3' result='noise' />
            <feColorMatrix in='noise' type='saturate' values='0' />
          </filter>
          <rect
            width='100%'
            height='100%'
            fill='#9d9b86'
            filter='url(#webpage-noise)'
          />
        </svg>

        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            ref={ref}
            initial={
              shouldAnimate ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }
            }
            animate={
              shouldAnimate && isVisible
                ? { opacity: 1, y: 0 }
                : shouldAnimate
                  ? { opacity: 0, y: 50 }
                  : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-6'>
              Recent Clients
            </h2>
          </motion.div>

          {/* Navigation Buttons */}
          <div className='flex justify-center gap-4 mb-8'>
            <button
              onClick={scrollLeft}
              className='p-3 rounded-full bg-desert-200 dark:bg-desert-700 hover:bg-desert-300 dark:hover:bg-desert-600 transition-colors duration-300 shadow-lg'
              aria-label='Scroll left'
            >
              <svg
                className='w-6 h-6 text-desert-800 dark:text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className='p-3 rounded-full bg-desert-200 dark:bg-desert-700 hover:bg-desert-300 dark:hover:bg-desert-600 transition-colors duration-300 shadow-lg'
              aria-label='Scroll right'
            >
              <svg
                className='w-6 h-6 text-desert-800 dark:text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>

          {/* Horizontal Scrollable Gallery */}
          <div
            ref={scrollContainerRef}
            className='flex gap-8 overflow-x-auto scrollbar-hide pb-4 px-4 scroll-smooth'
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={
                  shouldAnimate
                    ? { opacity: 0, x: -100, scale: 0.9 }
                    : { opacity: 1, x: 0, scale: 1 }
                }
                animate={
                  shouldAnimate
                    ? isVisible
                      ? { opacity: 1, x: 0, scale: 1 }
                      : { opacity: 0, x: -100, scale: 0.9 }
                    : { opacity: 1, x: 0, scale: 1 }
                }
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className='group flex-shrink-0 w-80 md:w-96'
              >
                <div className='relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 cursor-pointer'>
                  <div className='relative'>
                    {project.webpageImage ? (
                      <Image
                        src={urlFor(project.webpageImage).url()}
                        alt={`${project.title} website preview`}
                        width={3022}
                        height={5772}
                        className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700'
                        onError={e => {
                          console.error(
                            'Image failed to load:',
                            e,
                            project.title,
                            project.webpageImage
                          )
                        }}
                      />
                    ) : (
                      <div className='w-full aspect-[3022/5772] bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
                        <span className='text-gray-500'>
                          No image available
                        </span>
                      </div>
                    )}

                    {/* Overlay with project info */}
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500 flex items-start'>
                      <div className='p-6 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
                        <h3 className='text-xl font-cormorant-sc font-bold mb-2'>
                          {project.title}
                        </h3>
                        <p className='text-sm opacity-90 line-clamp-3'>
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
