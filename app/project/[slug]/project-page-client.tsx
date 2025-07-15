'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface ProjectPageClientProps {
  project: any
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  return (
    <div className='min-h-screen'>
      {/* Full-screen Hero Section */}
      <div className='relative h-screen w-full flex items-end'>
        <div className='absolute inset-0 z-0'>
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/30'></div>
        </div>

        {/* Back button */}
        <Link
          href='/work'
          className='absolute top-8 left-8 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-desert-800 p-3 rounded-full transition-all duration-300 hover:scale-110'
        >
          <ArrowLeft className='w-6 h-6' />
        </Link>

        {/* Hero content */}
        <div className='container mx-auto px-4 relative z-10 pb-16'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-white'
          >
            <span className='text-lg font-medium text-white/90 uppercase tracking-wide mb-4 block'>
              {project.category}
            </span>
            <h1 className='text-5xl md:text-7xl font-julius-sans-one font-light mb-6'>
              {project.title}
            </h1>
            <p className='text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed'>
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Project Details Section */}
      <ProjectDetailsSection project={project} />

      {/* Tools Section */}
      <TechnologySection project={project} />

      {/* Additional Images Section */}
      <ImagesSection project={project} />
    </div>
  )
}

function ProjectDetailsSection({ project }: { project: any }) {
  const { ref, isVisible } = useScrollAnimation(0.3)

  return (
    <div className='bg-white dark:bg-desert-900 py-20'>
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
            <h2 className='text-4xl md:text-5xl font-julius-sans-one font-bold text-desert-800 dark:text-white mb-8'>
              Project Overview
            </h2>
            <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8'>
              {project.fullDescription}
            </p>
            <div className='space-y-4'>
              <div>
                <h3 className='text-xl font-julius-sans-one font-bold text-desert-800 dark:text-white mb-2'>
                  Category
                </h3>
                <p className='text-gray-700 dark:text-gray-300'>
                  {project.category}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image - slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='lg:w-1/2'
          >
            <div className='relative h-96 w-full overflow-hidden'>
              <Image
                src={project.additionalImages[0]}
                alt={`${project.title} detail`}
                fill
                className='object-cover'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function TechnologySection({ project }: { project: any }) {
  const { ref, isVisible } = useScrollAnimation(0.3)

  return (
    <div className='bg-desert-50 dark:bg-desert-800 py-20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row-reverse items-center gap-16'>
          {/* Text content - slides in from right */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            className='lg:w-1/2'
          >
            <h2 className='text-4xl md:text-5xl font-julius-sans-one font-bold text-desert-800 dark:text-white mb-8'>
              Tools
            </h2>
            <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8'>
              This project was built using modern technologies and best
              practices to ensure optimal performance, scalability, and user
              experience.
            </p>
            <div className='flex flex-wrap gap-3'>
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

          {/* Image - slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='lg:w-1/2'
          >
            <div className='relative h-96 w-full overflow-hidden'>
              <Image
                src={project.additionalImages[1]}
                alt={`${project.title} technology`}
                fill
                className='object-cover'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function ImagesSection({ project }: { project: any }) {
  const { ref, isVisible } = useScrollAnimation(0.3)

  return (
    <div className='bg-white dark:bg-desert-900 py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-julius-sans-one font-bold text-desert-800 dark:text-white mb-8'>
            Project Gallery
          </h2>
          <p className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
            A closer look at the design details and user experience elements
            that make this project unique.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {project.additionalImages.map((image: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className='relative h-80 w-full overflow-hidden'
            >
              <Image
                src={image}
                alt={`${project.title} gallery ${index + 1}`}
                fill
                className='object-cover hover:scale-105 transition-transform duration-700'
              />
            </motion.div>
          ))}
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
