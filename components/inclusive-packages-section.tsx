'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface PackageOption {
  id: string
  title: string
  description: string
  features: string[]
  timeline: string
  imageUrl: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

const packageOptions: PackageOption[] = [
  {
    id: 'web-design-ecommerce-standard',
    title: 'Web Design: Ecommerce & Standard',
    description:
      'Comprehensive website solutions that grow with your business. From simple business websites to complex e-commerce platforms, we create digital experiences that convert visitors into customers.',
    features: [
      'Custom design system',
      'E-commerce functionality',
      'Content management system',
      'SEO optimization',
      'Performance optimization',
      'Mobile responsive design',
      'Analytics integration',
      'Security features',
      'Payment gateway integration',
      'Inventory management',
      'Customer account portal',
      'Ongoing support & maintenance',
    ],
    timeline: '6-12 weeks',
    imageUrl: '/desert-roadtrip.jpg',
    imageAlt: 'Comprehensive web design and ecommerce illustration',
    imagePosition: 'right',
  },
]

function PackageOptionCard({
  option,
  index,
}: {
  option: PackageOption
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
          <p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed'>
            {option.description}
          </p>

          <div className='mb-6'>
            <h4 className='text-lg font-semibold text-desert-800 dark:text-white mb-3'>
              What's included:
            </h4>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              {option.features.map((feature, featureIndex) => (
                <div key={featureIndex} className='flex items-start'>
                  <span className='text-desert-600 mr-2 mt-1'>•</span>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
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

export default function InclusivePackagesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div id='classic-packages' className='mt-0'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-12 mt-0'
      >
        <h2 className='text-4xl mt-12 md:text-5xl font-julius-sans-one font-bold text-desert-800 dark:text-white mb-4'>
          INCLUSIVE WEBSITE PACKAGES
        </h2>
        <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-6'></div>
        <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
          Comprehensive solutions for businesses ready to invest in a complete
          digital transformation.
        </p>
      </motion.div>

      <div className='space-y-0'>
        {packageOptions.map((option, index) => (
          <PackageOptionCard key={option.id} option={option} index={index} />
        ))}
      </div>
    </div>
  )
}
