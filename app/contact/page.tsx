'use client'

import Image from 'next/image'
import { Mail, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import ContactForm from '@/components/contact-form'

export default function ContactPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section with Background Image */}
      <div className='relative h-screen w-full flex items-center overflow-hidden'>
        <div className='absolute inset-0 z-0 w-full h-[120%]'>
          <Image
            src='/map.jpg'
            alt='Hannah on a mountain bike in Bend Oregon.'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/50 backdrop-blur-[1px]'></div>
        </div>

        {/* Hero Content */}
        <div className='container mx-auto px-4 relative z-10 text-center'>
          <h1 className='text-5xl md:text-6xl font-julius-sans-one font-light mb-6 text-white'>
            GET IN TOUCH
          </h1>
        </div>
      </div>

      {/* How It Works Section - Full Width */}
      <div className='w-full bg-white dark:bg-desert-800'>
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[600px]'>
          {/* Content Side */}
          <div className='flex items-center justify-center p-8 md:p-16'>
            <div className='max-w-lg'>
              <h2 className='text-4xl md:text-5xl font-playfair font-light text-desert-800 dark:text-desert-100 mb-8'>
                HOW IT WORKS
                <span className='block text-lg font-montserrat font-normal text-gray-600 dark:text-gray-300 mt-2'>
                  the easy version ;)
                </span>
              </h2>

              <ul className='space-y-4 text-gray-700 dark:text-gray-300'>
                <li className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1'>
                    •
                  </span>
                  <span>FILL OUT THE CONTACT FORM BELOW</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1'>
                    •
                  </span>
                  <span>
                    WE'LL TOUCH BASE AND THEN SEND YOU A MORE DETAILED PROJECT
                    QUESTIONNAIRE
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1'>
                    •
                  </span>
                  <span>
                    WE CHAT TO FIGURE OUT THE PERFECT DELIVERABLE FOR YOU
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1'>
                    •
                  </span>
                  <span>
                    COMPLETE YOUR PROJECT SCOPE & SUBMIT A DEPOSIT TO SECURE
                    YOUR PROJECT
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1'>
                    •
                  </span>
                  <span>DESIGN & DEVELOPMENT TIME!</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1'>
                    •
                  </span>
                  <span>LAUNCH</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Side */}
          <motion.div
            className='relative h-[400px] lg:h-full overflow-hidden group cursor-pointer'
            initial={{ opacity: 0, x: 200, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Image
              src='/workspace.jpg'
              alt='Workspace and sage brush'
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className='bg-desert-50 dark:bg-desert-900'>
        <div className='container mx-auto px-4 py-8'>
          <div className='max-w-6xl mx-auto'>
            {/* Contact Information Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
              <div className='bg-white dark:bg-desert-800 p-6 shadow-sm text-center'>
                <div className='w-12 h-12 bg-desert-100 dark:bg-desert-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Mail className='h-6 w-6 text-desert-600 dark:text-desert-300' />
                </div>
                <h3 className='font-julius-sans-one text-lg text-desert-800 dark:text-desert-100 mb-2'>
                  Email
                </h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>
                  hello@sunsagebrushcreative.com
                </p>
              </div>

              <div className='bg-white dark:bg-desert-800 p-6 shadow-sm text-center'>
                <div className='w-12 h-12 bg-desert-100 dark:bg-desert-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <MapPin className='h-6 w-6 text-desert-600 dark:text-desert-300' />
                </div>
                <h3 className='font-julius-sans-one text-lg text-desert-800 dark:text-desert-100 mb-2'>
                  Location
                </h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>
                  Remote & On-site
                  <br />
                  Jackson, Wyoming
                </p>
              </div>

              <div className='bg-white dark:bg-desert-800 p-6 shadow-sm text-center'>
                <div className='w-12 h-12 bg-desert-100 dark:bg-desert-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Clock className='h-6 w-6 text-desert-600 dark:text-desert-300' />
                </div>
                <h3 className='font-julius-sans-one text-lg text-desert-800 dark:text-desert-100 mb-2'>
                  Response Time
                </h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>
                  Usually within 24 hours
                  <br />
                  Monday - Friday
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className='bg-desert-50 dark:bg-desert-900'>
        <div className='container mx-auto px-4 py-8'>
          <div className='max-w-6xl mx-auto'>
            {/* Additional Information */}
            <div className='bg-white p-6 md:p-12 shadow-sm mt-16'>
              <div className='max-w-3xl mx-auto text-center'>
                <p className='text-gray-600 font-light leading-relaxed'>
                  <strong className='text-desert-700'>Specializing in:</strong>{' '}
                  Wordpress, Squarespace, Shopify, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
