'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projects, type Project } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import TechnologyBadge from '@/components/technology-badge'
// import { defineQuery } from 'groq'
// import { sanityFetch } from '@/app/sanity/live'

const categoryDisplayNames = {
  'thoughtful lifestyle brands': 'Thoughtful Lifestyle Brands',
  'small e-commerce businesses': 'Small E-commerce Businesses',
  'creative studios': 'Creative Studios',
  'values-driven teams': 'Values-Driven Teams',
  'outdoor-industry': 'Outdoor Industry',
} as const

const categoryDescriptions = {
  'thoughtful lifestyle brands':
    'Brands of any kind that value life in the real world, away from the screen.',
  'small e-commerce businesses':
    "Small businesses are beacons of hope in a world of big box stores. Let's get yours live and looking great :)",
  'creative studios':
    "Videographers, editors, artists, photographers, you name it. I'll showcase your craft",
  'outdoor-industry':
    'Businesses in the outdoor industry, providing gear, services, and experiences for outdoor enthusiasts.',
  'values-driven teams':
    'Organizations that strive to make positive change through policy, education, and advocacy. You name it, I want to help you.',
} as const

// TODO THIS IS GOING TO BE WHERE ALL THE PORTFOLIO ITEMS ARE BUT IT IS NOT CURRENTLY LIVE
// const PROJECT_QUERY = defineQuery(`*[
//   _type == "portfolioItem"
// ]`);
//
// const { data: portfolioItems } = await sanityFetch({query: PROJECT_QUERY})
//
// console.log('portfolioItems', portfolioItems)
// TODO TODO TODO!!!!

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { ref, isVisible } = useScrollAnimation(0.2)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'
    >
      <div
        ref={cardRef}
        className='relative h-[70vh] overflow-hidden bg-white dark:bg-desert-800 shadow-lg group cursor-pointer'
      >
        {/* Parallax Background Image */}
        <motion.div
          style={{ y: imageY }}
          className='absolute inset-0 w-full h-[120%]'
        >
          <Image
            src={project.coverImage || '/placeholder.svg'}
            alt={project.title}
            fill
            className='object-cover transition-transform duration-700 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
        </motion.div>

        {/* Content Overlay */}
        <Link
          href={`/project/${project.slug}`}
          className='absolute inset-0 z-10'
        >
          <motion.div
            style={{ y: contentY }}
            className='absolute bottom-0 left-0 right-0'
          >
            <div className='container mx-auto px-8 py-12 text-white'>
              {/* Primary Technology Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className='mb-4'
              >
                <TechnologyBadge
                  technology={
                    project.primaryTechnology || project.technologies[0]
                  }
                  variant='primary'
                  size='md'
                />
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                className='text-3xl md:text-4xl font-playfair font-light mb-4 leading-tight'
              >
                {project.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                className='text-lg text-gray-200 mb-6 max-w-2xl leading-relaxed'
              >
                {project.summary}
              </motion.p>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
                className='flex flex-wrap gap-2 mb-6'
              >
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isVisible
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + 1.1 + techIndex * 0.1,
                    }}
                  >
                    <TechnologyBadge
                      technology={tech}
                      variant='overlay'
                      size='sm'
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Arrow Link */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 + 1.3 }}
                className='flex items-center text-white group-hover:text-gray-200 transition-colors'
              >
                <span className='text-lg font-light mr-3'>View Project</span>
                <ArrowRight className='h-6 w-6 transition-transform group-hover:translate-x-2' />
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  )
}

function ParallaxCategorySection({
  category,
  categoryProjects,
}: {
  category: keyof typeof categoryDisplayNames
  categoryProjects: Project[]
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className='mb-20'
    >
      <div className='mb-12 text-center'>
        <h3 className='text-3xl md:text-4xl font-playfair font-light mb-4 text-desert-800 dark:text-desert-100'>
          {categoryDisplayNames[category]}
        </h3>
        <p className='text-desert-600 dark:text-desert-300 max-w-2xl mx-auto leading-relaxed'>
          {categoryDescriptions[category]}
        </p>
      </div>

      <div className='space-y-8'>
        {categoryProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1)

  // Group projects by category
  const projectsByCategory = projects.reduce(
    (acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = []
      }
      acc[project.category].push(project)
      return acc
    },
    {} as Record<string, Project[]>
  )

  return (
    <section id='projects' className='py-20 bg-[#f8f7f4] dark:bg-desert-900'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-playfair font-light mb-8 tracking-wide text-desert-800 dark:text-desert-100'>
            Featured Clients
          </h2>
          <p className='text-xl text-desert-600 dark:text-desert-300 max-w-4xl mx-auto leading-relaxed'>
            We specialize in creating and buffing up websites for{' '}
            <span className='font-medium text-desert-700 dark:text-desert-200 bg-desert-50 dark:bg-desert-800 px-3 py-1 rounded-full'>
              thoughtful lifestyle brands
            </span>
            ,{' '}
            <span className='font-medium text-desert-700 dark:text-desert-200 bg-desert-50 dark:bg-desert-800 px-3 py-1 rounded-full'>
              small e-commerce businesses
            </span>
            ,{' '}
            <span className='font-medium text-desert-700 dark:text-desert-200 bg-desert-50 dark:bg-desert-800 px-3 py-1 rounded-full'>
              creative studios & individuals
            </span>
            , and{' '}
            <span className='font-medium text-desert-700 dark:text-desert-200 bg-desert-50 dark:bg-desert-800 px-3 py-1 rounded-full'>
              values-driven teams
            </span>
            . Mostly, I love working with clients who are passionate about what
            they do, and who prioritize real authentic connection! If that
            sounds like you, let's chat. We have the skills for you to get your
            real world business into the digital realm.
          </p>
        </motion.div>

        <div className='space-y-32'>
          {Object.entries(projectsByCategory).map(
            ([category, categoryProjects]) => (
              <ParallaxCategorySection
                key={category}
                category={category as keyof typeof categoryDisplayNames}
                categoryProjects={categoryProjects}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}
