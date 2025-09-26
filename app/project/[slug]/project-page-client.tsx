'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Hero from '@/components/hero/hero'
import { SanityDocument, SanityImageAssetDocument } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/utils/imageUrlBuilder'

export default function ProjectPageClient({
  project,
}: {
  project: SanityDocument
}) {
  return (
    <div className='min-h-screen'>
      {/* Full-screen Hero Section */}
      <Hero
        backgroundImage={urlFor(project.heroImage).url()}
        backgroundImageAlt={project.title}
        contentAlignment='bottom'
        overlayType='custom'
        overlayClassName='absolute inset-0 bg-black/40 dark:bg-black/70'
        titleClassName='text-5xl md:text-7xl font-cormorant-sc mb-6'
        subtitleClassName='text-lg font-medium text-white/90 uppercase tracking-wide mb-4 block'
        descriptionClassName='text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed'
        containerClassName='pb-16'
      />

      {/* Project Details Section */}
      <ProjectDetailsSection project={project} />

      {/* Tools Section */}
      <TechnologySection project={project} />

      {/* Webpage Screenshot Section */}
      {project.webpageImage && <WebpageSection project={project} />}

      {/* Additional Images Section */}
      <ImagesSection project={project} />
    </div>
  )
}

function ProjectDetailsSection({ project }: { project: SanityDocument }) {
  const { ref, isVisible } = useScrollAnimation(0.3)

  return (
    <div className='bg-white dark:bg-desert-900 py-10'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-8'>
            {project.title}
          </h2>
          <p className='text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            {project.description}
          </p>
        </motion.div>
      </div>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          {/* Text content - slides in from left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className='lg:w-1/2'
          >
            <h2 className='text-4xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-8'>
              Overview
            </h2>
            <div className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 prose prose-lg max-w-none'>
              <PortableText
                value={project.fullDescription}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                        {children}
                      </p>
                    ),
                  },
                }}
              />
            </div>
            <div className='space-y-4'>
              <div>
                <h3 className='text-xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-2'>
                  Category
                </h3>
                <p className='text-gray-700 dark:text-gray-300'>
                  {project.category}
                </p>
              </div>
              <div>
                <h3 className='text-xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-2'>
                  See it live
                </h3>
                <a
                  href={project.websiteUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-desert-600 dark:text-desert-300 hover:text-desert-800 dark:hover:text-desert-100 transition-colors duration-300 font-medium'
                >
                  {project.title}'s site
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image - slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='w-full lg:w-1/2'
          >
            <div className='relative w-full overflow-hidden'>
              <Image
                src={urlFor(project.additionalImages[0]).url()}
                alt={`${project.title} detail`}
                width={800}
                height={600}
                className='w-full h-auto object-cover'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function WebpageSection({ project }: { project: SanityDocument }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  if (!project.webpageImage) return null

  return (
    <div className='bg-desert-50 dark:bg-desert-800 py-5'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex justify-center'
        >
          <div className='relative max-w-md w-full overflow-hidden shadow-2xl'>
            <Image
              src={urlFor(project.webpageImage).url()}
              alt={`${project.title} website preview`}
              width={3022}
              height={5772}
              className='w-full h-auto object-cover hover:scale-105 transition-transform duration-700'
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function TechnologySection({ project }: { project: SanityDocument }) {
  const { ref, isVisible } = useScrollAnimation(0.3)

  return (
    <div className=' py-6'>
      <div className='container mx-auto px-4 flex justify-center'>
        {/* Text content - slides in from right */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='flex flex-wrap gap-2 justify-center'>
            {project.technologies.map((tech: string, index: number) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isVisible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-desert-600 text-white px-4 py-2 rounded-lg font-medium'
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function ImagesSection({ project }: { project: SanityDocument }) {
  const { ref, isVisible } = useScrollAnimation(0.3)

  return (
    <div className='bg-white dark:bg-desert-900 py-10'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        ></motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
          {project.additionalImages.map(
            (item: SanityImageAssetDocument, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className='relative w-full max-w-[400px] aspect-square overflow-hidden'
              >
                <Image
                  src={urlFor(item).url()}
                  alt={`${project.title} gallery ${index + 1}`}
                  fill
                  className='object-cover hover:scale-105 transition-transform duration-700'
                />
              </motion.div>
            )
          )}
        </div>

        {/* Back to Work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='text-center mt-16'
        >
          <Link
            href='/work'
            className='inline-block bg-desert-600 hover:bg-desert-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300'
          >
            View More Projects
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
