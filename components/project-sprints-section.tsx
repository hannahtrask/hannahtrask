'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface SprintOption {
  id: string
  title: string
  description: string
  bestFor: string
  features: string[]
  timeline: string
  imageUrl: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

const sprintOptions: SprintOption[] = [
  {
    id: 'one-page-website',
    title: 'One Page Website',
    description:
      'Perfect for those that need a simple, elegant online presence. Get everything you need on a single, beautifully designed page that tells your story and converts visitors.',
    bestFor:
      'Service-based businesses or individuals that need a page to share their offerings and add a professional touch to their web presence.',
    features: [
      'Single page design',
      'Mobile responsive',
      'Contact form integration',
      'Basic SEO optimization',
    ],
    timeline: '2-4 days',
    imageUrl: '/website-homepage.jpg',
    imageAlt: 'One page website design illustration',
    imagePosition: 'left',
  },
  {
    id: 'design-day',
    title: 'Design Day',
    description:
      'Need something done quickly? Our intensive design day gets you a complete website design and development in just one focused session. Perfect for urgent launches.',
    bestFor:
      'Those with tight deadlines who need both a set of assets (think logos, color palettes, and typography) and a single page website solution delivered in one intensive session.',
    features: [
      'One day intensive session',
      'Single page, mobile responsive website',
      'Brand kit: logo, color palette and typography selection',
    ],
    timeline: '1 day',
    imageUrl: '/web-design.jpg',
    imageAlt: 'Design day intensive session illustration',
    imagePosition: 'right',
  },
  {
    id: 'website-in-a-week',
    title: 'Website in a Week',
    description:
      'The perfect balance of speed and quality. Get a fully custom, multi-page website designed and developed in just one week, without compromising on design or functionality.',
    bestFor:
      'Growing businesses and organizations that need a comprehensive multi-page website with custom functionality and professional design.',
    features: [
      'Multi-page website',
      'Advanced functionality — think custom forms, image galleries, and more',
      'SEO optimization',
    ],
    timeline: '1 week',
    imageUrl: '/website-mockup.jpg',
    imageAlt: 'Website in a week development illustration',
    imagePosition: 'left',
  },
]

function SprintOptionCard({
  option,
  index,
}: {
  option: SprintOption
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-0'
    >
      <div
        className={`flex flex-col ${option.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      >
        {/* Image Section */}
        <motion.div
          initial={{
            opacity: 0,
            x: option.imagePosition === 'left' ? -100 : 100,
          }}
          animate={
            isVisible
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: option.imagePosition === 'left' ? -100 : 100 }
          }
          transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
          className='md:w-1/2 w-full'
        >
          <Image
            src={option.imageUrl}
            alt={option.imageAlt}
            width={800}
            height={600}
            className='object-cover w-full h-64 md:h-full'
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{
            opacity: 0,
            x: option.imagePosition === 'left' ? 100 : -100,
          }}
          animate={
            isVisible
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: option.imagePosition === 'left' ? 100 : -100 }
          }
          transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
          className='md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-desert-800'
        >
          <h3 className='text-2xl md:text-3xl font-julius-sans-one font-bold text-desert-800 dark:text-white mb-4'>
            {option.title}
          </h3>
          <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
            {option.description}
          </p>

          <div className='mb-6'>
            <h4 className='text-lg font-semibold text-desert-800 dark:text-white mb-2'>
              Best for:
            </h4>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed italic'>
              {option.bestFor}
            </p>
          </div>

          <div className='mb-6'>
            <h4 className='text-lg font-semibold text-desert-800 dark:text-white mb-3'>
              What's included:
            </h4>
            <ul className='text-gray-700 dark:text-gray-300 space-y-2'>
              {option.features.map((feature, featureIndex) => (
                <li key={featureIndex} className='flex items-center'>
                  <span className='text-desert-600 mr-2'>•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6'>
            <div className='mb-4 sm:mb-0'>
              <span className='text-sm font-medium text-desert-600 dark:text-desert-400 uppercase tracking-wide'>
                Timeline
              </span>
              <p className='text-lg font-semibold text-desert-800 dark:text-white'>
                {option.timeline}
              </p>
            </div>
          </div>

          <a
            href='/contact'
            className='inline-block bg-desert-600 hover:bg-desert-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-fit'
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ProjectSprintsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div id='creative-sprints'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-12'
      >
        <h2 className='text-4xl md:text-5xl font-julius-sans-one font-bold text-desert-800 dark:text-white mb-4'>
          PROJECT SPRINTS
        </h2>
        <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-6'></div>
        <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
          Fast-track your project with our sprint options. Perfect for those
          that need quality results quickly.
        </p>
      </motion.div>

      <div className='space-y-0'>
        {sprintOptions.map((option, index) => (
          <SprintOptionCard key={option.id} option={option} index={index} />
        ))}
      </div>
    </div>
  )
}
