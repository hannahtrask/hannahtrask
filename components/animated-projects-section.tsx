'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects, type Project } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import TechnologyBadge from '@/components/technology-badge'

const categoryDisplayNames = {
  'thoughtful lifestyle brands': 'Thoughtful Lifestyle Brands',
  'small e-commerce businesses': 'Small E-commerce Businesses', 
  'creative studios': 'Creative Studios',
  'values-driven teams': 'Values-Driven Teams',
} as const

const categoryDescriptions = {
  'thoughtful lifestyle brands': 'Mindful brands focused on wellness, sustainability, and authentic living',
  'small e-commerce businesses': 'Independent shops and artisan businesses building community connections',
  'creative studios': 'Artists, photographers, and creative professionals showcasing their craft',
  'values-driven teams': 'Organizations making positive impact through purpose-driven work',
} as const

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <Link
        href={`/project/${project.slug}`}
        className='group block'
      >
        <div className='overflow-hidden transition-all duration-500 hover:-translate-y-1 bg-white border border-gray-200 shadow-sm hover:shadow-lg'>
          <div className='relative h-80 w-full overflow-hidden'>
            <Image
              src={project.coverImage || '/placeholder.svg'}
              alt={project.title}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-105'
            />
            <div className='absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent'>
              <div className='flex items-center gap-2'>
                <TechnologyBadge
                  technology={project.primaryTechnology || project.technologies[0]}
                  variant="primary"
                  size="sm"
                />
              </div>
            </div>
          </div>
          <div className='p-6'>
            <h3 className='text-xl font-light mb-2 text-desert-900 group-hover:text-desert-700 transition-colors'>
              {project.title}
            </h3>
            <p className='text-desert-600 mb-4 line-clamp-2 text-sm leading-relaxed'>
              {project.summary}
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {project.technologies.slice(0, 3).map((tech) => (
                <TechnologyBadge
                  key={tech}
                  technology={tech}
                  variant="default"
                  size="sm"
                />
              ))}
              {project.technologies.length > 3 && (
                <span className='text-xs px-2 py-1 bg-desert-100 text-desert-600 rounded-full font-medium'>
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
            <div className='flex items-center text-desert-600 text-sm font-light group-hover:text-desert-800 transition-colors'>
              View Project{' '}
              <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function CategorySection({ category, categoryProjects }: {
  category: keyof typeof categoryDisplayNames
  categoryProjects: Project[]
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className='mb-16'
    >
      <div className='mb-8'>
        <h3 className='text-2xl font-playfair font-light mb-3 text-desert-800'>
          {categoryDisplayNames[category]}
        </h3>
        <p className='text-desert-600 text-sm max-w-2xl leading-relaxed'>
          {categoryDescriptions[category]}
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {categoryProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default function AnimatedProjectsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1)

  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = []
    }
    acc[project.category].push(project)
    return acc
  }, {} as Record<string, Project[]>)

  return (
    <section id='projects' className='py-20 bg-[#f8f7f4]'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-playfair font-light mb-6 tracking-wide text-[#2d3c35]'>
            Featured Work
          </h2>
          <p className='text-desert-600 max-w-3xl mx-auto leading-relaxed'>
            I specialize in creating websites for{' '}
            <span className='font-medium text-desert-700 bg-desert-50 px-2 py-1 rounded'>
              thoughtful lifestyle brands
            </span>
            ,{' '}
            <span className='font-medium text-desert-700 bg-desert-50 px-2 py-1 rounded'>
              small e-commerce businesses
            </span>
            ,{' '}
            <span className='font-medium text-desert-700 bg-desert-50 px-2 py-1 rounded'>
              creative studios
            </span>
            , and{' '}
            <span className='font-medium text-desert-700 bg-desert-50 px-2 py-1 rounded'>
              values-driven teams
            </span>
            . Each project is crafted with attention to detail and purpose.
          </p>
        </motion.div>

        <div className='space-y-20'>
          {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
            <CategorySection
              key={category}
              category={category as keyof typeof categoryDisplayNames}
              categoryProjects={categoryProjects}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
