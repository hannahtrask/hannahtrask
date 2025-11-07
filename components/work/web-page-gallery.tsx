'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { client } from '@/sanity/client'
import { urlFor } from '@/sanity/utils/imageUrlBuilder'
import { SanityDocument } from 'next-sanity'

const PROJECTS_WITH_WEBPAGE_QUERY = `*[_type == "project" && defined(webpageImage)] {
  _id,
  title,
  slug,
  webpageImage,
  description
} | order(_createdAt desc)`

interface Project {
  _id: string
  title: string
  slug: { current: string }
  webpageImage: any
  description: string
}

export default function WebPageGallery() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    async function fetchProjects() {
      try {
        const fetchedProjects = await client.fetch<Project[]>(
          PROJECTS_WITH_WEBPAGE_QUERY
        )
        setProjects(fetchedProjects)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-sage-100 to-sage-200 dark:from-sage-800 dark:to-sage-900 py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center'>
            <div className='animate-pulse text-desert-600 dark:text-desert-400'>
              Loading web pages...
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (projects.length === 0) {
    return null
  }

  return (
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
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-6'>
            Recent Web Pages
          </h2>
          <div className='w-24 h-px bg-desert-600 dark:bg-desert-400 mx-auto mb-8'></div>
          <p className='text-lg text-desert-700 dark:text-desert-300 max-w-2xl mx-auto leading-relaxed'>
            Take a peek at some of our recent web page designs and developments
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={isMobile ? {} : { opacity: 0, x: -100, scale: 0.9 }}
              animate={
                isMobile
                  ? {}
                  : isVisible
                    ? { opacity: 1, x: 0, scale: 1 }
                    : { opacity: 0, x: -100, scale: 0.9 }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className='group'
            >
              <Link href={`/project/${project.slug.current}`}>
                <div className='relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2'>
                  <div className='relative max-w-sm mx-auto'>
                    <Image
                      src={urlFor(project.webpageImage).url()}
                      alt={`${project.title} website preview`}
                      width={3022}
                      height={5772}
                      className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700'
                    />

                    {/* Overlay with project info */}
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-end'>
                      <div className='p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500'>
                        <h3 className='text-xl font-cormorant-sc font-bold mb-2'>
                          {project.title}
                        </h3>
                        <p className='text-sm opacity-90 line-clamp-2'>
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='text-center mt-16'
          >
            <Link
              href='/work'
              className='inline-flex items-center px-8 py-3 bg-desert-600 hover:bg-desert-700 text-white font-medium rounded-lg transition-colors duration-300'
            >
              View All Projects
              <svg
                className='ml-2 w-4 h-4'
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
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}
