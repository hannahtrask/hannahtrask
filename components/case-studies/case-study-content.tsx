'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SanityCaseStudy } from '@/sanity/types/caseStudy'
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react'
import CaseStudyGallery from './case-study-gallery'

interface CaseStudyContentProps {
  caseStudy: SanityCaseStudy
}

export default function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  return (
    <div className='bg-white dark:bg-desert-950'>
      {/* Back Link */}
      <div className='container mx-auto px-4 py-8'>
        <Link
          href='/case-studies'
          className='inline-flex items-center text-brand-sage hover:text-brand-sage/80 transition-colors'
        >
          <ArrowLeft className='w-4 h-4 mr-2' />
          <span>Back to Case Studies</span>
        </Link>
      </div>

      {/* Project Summary Section */}
      <motion.section
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='bg-desert-50 dark:bg-desert-900 py-10 md:py-14'
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='bg-white dark:bg-desert-950 rounded-xl p-6 md:p-8 shadow-sm'
            >
              <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-4'>
                Overview
              </h2>
              <div className='w-16 h-px bg-brand-sage mb-6'></div>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                {caseStudy.overview}
              </p>
              {caseStudy.liveUrl && (
                <a
                  href={caseStudy.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center mt-6 text-brand-sage hover:text-brand-sage/80 transition-colors font-medium'
                >
                  <span>Visit live site</span>
                  <ExternalLink className='w-4 h-4 ml-2' />
                </a>
              )}
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className='bg-white dark:bg-desert-950 rounded-xl p-6 md:p-8 shadow-sm'
            >
              <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-4'>
                The challenge
              </h2>
              <div className='w-16 h-px bg-brand-sage mb-6'></div>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                {caseStudy.problemStatement}
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='bg-white dark:bg-desert-950 rounded-xl p-6 md:p-8 shadow-sm'
            >
              <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-4'>
                Solutions
              </h2>
              <div className='w-16 h-px bg-brand-sage mb-6'></div>
              <ul className='space-y-3'>
                {caseStudy.solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className='flex items-start'
                  >
                    <CheckCircle className='w-5 h-5 text-brand-sage mt-0.5 mr-3 flex-shrink-0' />
                    <span className='text-gray-700 dark:text-gray-300'>
                      {solution}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                <>
                  <div className='w-12 h-px bg-brand-sage/70 my-6'></div>
                  <h3 className='text-lg font-semibold text-desert-800 dark:text-white mb-3'>
                    Technologies
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {caseStudy.technologies.map(tech => (
                      <span
                        key={tech}
                        className='px-3 py-1.5 bg-desert-50 dark:bg-desert-800 text-desert-800 dark:text-white rounded-full shadow-sm text-xs font-medium'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className='bg-white dark:bg-desert-950 rounded-xl p-6 md:p-8 shadow-sm'
            >
              <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-4'>
                The process
              </h2>
              <div className='w-16 h-px bg-brand-sage mb-6'></div>
              <div className='space-y-5'>
                {caseStudy.designProcess.map((step, index) => (
                  <div
                    key={index}
                    className='relative pl-8 border-l-2 border-brand-sage'
                  >
                    <div className='absolute -left-3 top-0 w-6 h-6 bg-brand-sage rounded-full flex items-center justify-center text-white text-sm font-bold'>
                      {index + 1}
                    </div>
                    <h3 className='text-lg font-semibold text-desert-800 dark:text-white mb-1'>
                      {step.title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </motion.section>

      {/* Project Gallery Section */}
      {caseStudy.images && caseStudy.images.length > 0 && (
        <motion.section
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='bg-desert-50 dark:bg-desert-900 py-16'
        >
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-6'>
                Project Gallery
              </h2>
              <div className='w-16 h-px bg-brand-sage mb-12'></div>
              <CaseStudyGallery images={caseStudy.images} />
            </div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <section className='bg-brand-sage py-16'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-white/90 mb-8 max-w-2xl mx-auto'>
            Let&apos;s work together!
          </p>
          <Link
            href='/contact'
            className='inline-block bg-white text-brand-sage px-8 py-3 rounded-lg font-medium hover:bg-desert-50 transition-colors'
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
