'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CaseStudy } from '@/data/case-studies'

interface CaseStudyGridProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section className='bg-white dark:bg-desert-950 py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {caseStudies.map(study => (
            <motion.div key={study.slug} variants={itemVariants}>
              <Link
                href={`/case-studies/${study.slug}`}
                className='group block'
              >
                <div className='relative bg-desert-50 dark:bg-desert-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
                  {/* Hero Image */}
                  <div className='relative h-48 overflow-hidden'>
                    <Image
                      src={study.heroImage}
                      alt={study.heroImageAlt}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                  </div>

                  {/* Logo Overlay */}
                  <div className='absolute top-4 left-4 bg-white dark:bg-desert-800 rounded-lg p-3 shadow-md'>
                    <div className='relative w-16 h-16'>
                      <Image
                        src={study.logo}
                        alt={study.logoAlt}
                        fill
                        className='object-contain'
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-6'>
                    <h3 className='text-xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-2 group-hover:text-brand-sage transition-colors'>
                      {study.title}
                    </h3>
                    <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
                      {study.subtitle}
                    </p>
                    <p className='text-sm text-gray-700 dark:text-gray-300 line-clamp-3'>
                      {study.overview}
                    </p>

                    {/* Technologies */}
                    {study.technologies && (
                      <div className='mt-4 flex flex-wrap gap-2'>
                        {study.technologies.slice(0, 3).map(tech => (
                          <span
                            key={tech}
                            className='text-xs px-2 py-1 bg-brand-sage/20 text-brand-sage dark:bg-brand-sage/30 dark:text-brand-sage rounded-full'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* View Project Link */}
                    <div className='mt-6 flex items-center text-brand-sage font-medium text-sm group-hover:translate-x-2 transition-transform'>
                      <span>View Case Study</span>
                      <svg
                        className='w-4 h-4 ml-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
