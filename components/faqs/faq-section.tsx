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
      "I don't have a project minimum, but work within reason. I work with clients of all sizes and budgets, so don't be afraid to reach out because you don't think you can afford it or your project is too small. There is no such thing and I am here to work with you! I also am happy to come up with payment plans for your investment.",
  },
  {
    id: 'platforms',
    question: 'What platforms do you work on for websites?',
    answer:
      "I specialize in Wordpress, Squarespace, Shopify, and Wix. In special cases, I can build custom websites using modern web technologies including React, Next.js, and custom HTML/CSS/JavaScript. We'll work together to choose the best tools based on your specific needs and long-term goals.",
  },
  {
    id: 'timeline',
    question: 'How long should I expect my project to take?',
    answer:
      "Project timelines vary based on complexity and scope, so it's hard to say in a general sense. I take into account project urgency, scope, and complexity to determine a reasonable timeline.",
  },
  {
    id: 'getting-started',
    question: 'How do I get started?',
    answer:
      "The first thing you\'ll want to do is reach out through my contact form and we can schedule a time to meet up in person or virtually. You won't be charged anything until we've BOTH signed a contract and you are 100% ready to move forward! When we meet, we'll discuss your project goals, timeline, and budget to determine the best approach. After contracts are signed, you'll be asked to submit a deposit (typically 50% of the total fee) to secure your project, and I'll get started right away.",
  },
  {
    id: 'why-choose-us',
    question: 'Why should I work with Sagebrush Studio?',
    answer:
      "I bring a unique combination of technical expertise and creativity to my work. I'm inspired by my connection to the wild spaces around Jackson, WY and in the intermountain West. You will get personalized attention, direct communication (with a REAL human), and website and work completed that truly reflect your business's personality and values.",
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
            Still have questions? We'd love to hear from you.
          </p>
          <Link
            href='mailto:hello@wearesagebrush.com'
            className='text-desert-600 dark:text-desert-200 hover:underline'
          >
            hello@wearesagebrush.com
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
