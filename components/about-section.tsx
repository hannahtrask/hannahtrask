'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.3)

  return (
    <div className='bg-desert-50 dark:bg-desert-900 relative'>
      <div>
        <div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className='shadow-sm'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center'>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className='px-6 py-8 md:px-8 lg:px-16 lg:py-2'
              >
                <p className='text-base lg:text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300 mb-4 lg:mb-6'>
                  We specialize in web development and design for food & bev,
                  adventure brands, and small businesses.
                </p>

                <p className='text-base lg:text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300'>
                  Great digital experiences come from understanding{' '}
                  <em>your</em> goals and translating them into a thoughtful web
                  presence. If you already have a web presence and need some
                  help with an intimidating web task, we'll do that too.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                className='relative w-full overflow-hidden group'
              >
                <Image
                  src='/hero-images/hay.jpg'
                  alt='Hay truck driving away'
                  width={800}
                  height={600}
                  className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent dark:from-black/70'></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
