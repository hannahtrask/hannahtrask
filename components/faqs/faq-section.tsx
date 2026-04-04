'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Link from 'next/link'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: 'project-minimum',
    question: 'What is your project minimum?',
    answer:
      'I do not have a strict project minimum. I take on full builds, smaller updates, and hourly support based on scope and fit.',
  },
  {
    id: 'platforms',
    question: 'What platforms do you work on for websites?',
    answer:
      'I build and maintain sites on WordPress, Squarespace, Wix, and Shopify. I also create custom WordPress themes and can take on custom web projects when needed.',
  },
  {
    id: 'timeline',
    question: 'How long should I expect my project to take?',
    answer:
      'Most timelines depend on project size, content readiness, and urgency. After a quick discovery call, I will give you a clear timeline and next steps.',
  },
  {
    id: 'getting-started',
    question: 'How do I get started?',
    answer:
      'Reach out through the contact form and we will schedule a quick intro call. We will review your goals, scope, and budget, then move forward with a proposal and contract if it is a good fit.',
  },
  {
    id: 'why-choose-us',
    question: 'Why should I work with Sagebrush Web Studio?',
    answer:
      'You will work directly with me from start to finish. I combine strategy, design, and development to build sites and internal tools that are clear, useful, and built around your business.',
  },
]

function FAQItemComponent({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='border-b border-desert-200 dark:border-desert-700 last:border-b-0'
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full py-6 flex items-center justify-between text-left hover:bg-desert-50 dark:hover:bg-desert-800/50 transition-colors duration-200 px-4 -mx-4 rounded-lg'
      >
        <h3 className='text-lg md:text-xl font-semibold text-desert-800 dark:text-white pr-4'>
          {item.question}
        </h3>
        <div className='flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-desert-100 dark:bg-desert-700 transition-colors duration-200'>
          {isOpen ? (
            <Minus className='w-4 h-4 text-desert-600 dark:text-desert-300' />
          ) : (
            <Plus className='w-4 h-4 text-desert-600 dark:text-desert-300' />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='overflow-hidden'
          >
            <div className='pb-6 px-4 -mx-4'>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-desert-50 dark:bg-desert-800 py-16'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-4'>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-6'></div>
          <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            Got questions? We've got answers. Here are some of the most common
            questions we receive about our services.
          </p>
        </motion.div>

        <div className='max-w-4xl mx-auto'>
          <div className='bg-white dark:bg-desert-900 rounded-lg shadow-sm p-8'>
            {faqItems.map((item, index) => (
              <FAQItemComponent key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='text-center mt-12'
        >
          <p className='text-gray-600 dark:text-gray-300 mb-6'>
            Ready to get started?
          </p>
          <p className='text-gray-600 dark:text-gray-300 mb-6'>
            Get in touch at{' '}
            <Link
              href='mailto:hello@wearesagebrush.com'
              className='text-desert-600 dark:text-desert-200 hover:underline'
            >
              hello@wearesagebrush.com
            </Link>{' '}
            or fill out the form below. I typically respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
