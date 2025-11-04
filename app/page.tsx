'use client'

import Hero from '@/components/hero/hero'
import ContactForm from '@/components/contact/contact-form'
import { motion } from 'framer-motion'
import AboutSection from '@/components/about-section'
import FAQSection from '@/components/faqs/faq-section'

export default function Home() {
  return (
    <>
      {/* Home Hero Section */}
      <Hero
        backgroundImage='/hero-images/western-backdrop.jpg'
        backgroundImageAlt='A highway somewhere in the American West.'
        title='HOME'
        overlayType='custom'
        overlayClassName='absolute inset-0 bg-black/60 dark:bg-black/80'
        animateContent={true}
        titleClassName='text-5xl md:text-7xl font-cormorant-sc mb-6 text-white'
      >
        <div className='text-center text-white px-4 py-8 sm:px-6 md:px-8'>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-cormorant-sc mb-4 sm:mb-6 text-white leading-tight px-2'
          >
            let your ideas roam
          </motion.h1>
        </div>
      </Hero>

      <div className='bg-white dark:bg-desert-900'>
        <AboutSection />
      </div>

      {/* Services Section */}
      <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-8'>
              OFFERINGS
            </h2>
            <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-12'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left'>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    Custom Website Design & Development
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    E-commerce Solutions (Shopify, WooCommerce)
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    WordPress, Wix, & Squarespace Development
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    App and plug-in installation
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    Branding and brand identity
                  </span>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    Website Redesigns & Refreshes
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    SEO Optimization
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    Ongoing Website Maintenance
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    Help with SSL certifications, domain DNS, and managing
                    nameservers
                  </span>
                </div>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <span className='text-gray-700 dark:text-gray-300 text-base md:text-lg'>
                    Anything else: think migrating subscribers, setting up email
                    hosting, or troubleshooting website issues
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id='contact-form' className='bg-desert-50 dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <ContactForm />
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </>
  )
}
