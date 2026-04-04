'use client'

import Hero from '@/components/hero/hero'
import ContactForm from '@/components/contact/contact-form'
import Typewriter from '@/components/ui/typewriter'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomeClient() {
  return (
    <>
      {/* Home Hero Section */}
      <Hero
        backgroundImage='/hero-images/bison-grand.jpg'
        backgroundImageAlt='Bison graze in front of the Tetons. Photos by Nick Sulzer.'
        overlayType='custom'
        overlayClassName='absolute inset-0 bg-black/60 dark:bg-black/80'
        animateContent={true}
        titleClassName='text-5xl md:text-7xl font-cormorant-sc mb-6 text-white'
        photoCredit={{
          name: 'Nick Sulzer',
          url: 'https://www.nicksulzer.com/',
        }}
      >
        <div className='text-center text-white px-4 py-8 sm:px-6 md:px-8'>
          {/* SEO-friendly hidden H1 */}
          <h1 className='sr-only'>
            Hannah Trask - Jackson WY Web Developer & Designer | Sagebrush
            Studio Web Development
          </h1>
          <Typewriter
            lines={[
              'web development',
              'web design',
              'migrations',
              'internal applications',
              'technical consulting',
            ]}
            className='text-lg sm:text-xl md:text-2xl font-cormorant-sc mb-6 text-white leading-tight px-2'
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2500}
            showCursor={true}
          />
          <p className='text-sm leading-relaxed text-white/90 mb-8'>
            web design and development based in Jackson Hole, Wyoming
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center gap-2 w-64 px-8 py-3 bg-brand-sage hover:bg-brand-sage/90 text-white transition-colors duration-200'
            >
              work with me
            </Link>
            <Link
              href='/services#build-my-website-in-a-week'
              className='inline-flex items-center justify-center gap-2 w-64 px-8 py-3 bg-brand-sage hover:bg-brand-sage/90 text-white transition-colors duration-200'
            >
              website in a week
            </Link>
          </div>
        </div>
      </Hero>

      {/* Tagline */}
      <div className='bg-white dark:bg-desert-800'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            {/* SEO-friendly hidden H2 */}
            <h2 className='sr-only'>
              Sagebrush Web Studio - Jackson Hole Web Development and Web Design
            </h2>

            <div className='container mx-auto px-4 py-12 md:py-16 lg:py-20'>
              <div className='max-w-4xl mx-auto text-center'>
                <h3 className='text-xl md:text-2xl font-cormorant-sc font-bold text-desert-800 dark:text-white'>
                  SAGEBRUSH WEB STUDIO
                </h3>
                <div className='w-16 h-px bg-brand-sage mx-auto m-2'></div>
                <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300'>
                  Everything from setup to scaling. Web development, web design,
                  and optimization based in Jackson, WY.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-desert-50 dark:bg-desert-900 py-8'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            {/* SEO-friendly hidden H2 */}
            <h2 className='sr-only'>
              Web Development Services in Jackson WY - Squarespace, Shopify,
              WordPress, Wix
            </h2>
            <p className='text-lg md:text-xl lg:text-2xl font-cormorant-sc font-bold text-desert-800 dark:text-white leading-tight'>
              Some of what we do
            </p>
            <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-6'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left'>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <div>
                    <h3 className='text-base md:text-lg font-semibold text-desert-800 dark:text-white mb-2'>
                      Web Strategy & Setup
                    </h3>
                    <p className='text-desert-600 dark:text-desert-300 text-xs md:text-sm leading-relaxed'>
                      New websites, redesigns, migrations, and platform
                      transitions.
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <div>
                    <h3 className='text-base md:text-lg font-semibold text-desert-800 dark:text-white mb-2'>
                      Performance & Visibility
                    </h3>
                    <p className='text-desert-600 dark:text-desert-300 text-xs md:text-sm leading-relaxed'>
                      SEO optimization, Core Web Vitals improvements, and
                      AI-ready content structure.
                    </p>
                  </div>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <div>
                    <h3 className='text-base md:text-lg font-semibold text-desert-800 dark:text-white mb-2'>
                      Ongoing Support
                    </h3>
                    <p className='text-desert-600 dark:text-desert-300 text-xs md:text-sm leading-relaxed'>
                      Monthly maintenance, updates, and retainer partnerships.
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <div>
                    <h3 className='text-base md:text-lg font-semibold text-desert-800 dark:text-white mb-2'>
                      Custom Development
                    </h3>
                    <p className='text-desert-600 dark:text-desert-300 text-xs md:text-sm leading-relaxed'>
                      WordPress themes, Shopify stores, internal apps, and
                      automation workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4 pt-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <p className='text-sm md:text-sm lg:text-md mx-auto text-desert-800 dark:text-white leading-tight'>
              Not sure if we can help? Reach out, we probably can.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section
      <div className='bg-white dark:bg-desert-900'>
        <FAQSection />
      </div> */}

      {/* Website in a Week Section */}
      <div className='bg-white dark:bg-desert-800 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-4'>
              Website in a Week
            </h2>
            <div className='w-16 h-px bg-brand-sage mx-auto mb-6'></div>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-2'>
              Need a professional site fast?
            </p>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-8'>
              A complete Squarespace website built and launched in one week.{' '}
              <span className='font-semibold text-desert-800 dark:text-white'>
                $1500. No upfront costs.
              </span>
            </p>
            <Link
              href='/services#build-my-website-in-a-week'
              className='inline-flex items-center gap-2 px-8 py-3 bg-brand-sage hover:bg-brand-sage/90 text-white font-medium transition-colors duration-200 mb-10'
            >
              See how it works
              <ArrowRight className='w-4 h-4' />
            </Link>
            <p className='text-xs text-desert-600 dark:text-desert-300 mt-8'>
              <span className='font-semibold'>Perfect for:</span> Service
              businesses, freelancers, small shops, and anyone who needs to
              launch now, not in 3 months.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id='contact'
        className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white dark:bg-desert-900 py-16'
      >
        <div className='px-4 sm:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-6'>
              Let&apos;s work together
            </h2>
            <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-8'></div>
            <p className='text-sm text-desert-600 dark:text-desert-300 max-w-2xl mx-auto leading-relaxed'>
              Get in touch at{' '}
              <Link
                href='mailto:hello@wearesagebrush.com'
                className='text-desert-100 dark:text-desert-200 text-sm max-w-xs hover:text-sand-500 dark:hover:text-gray-200'
              >
                hello@wearesagebrush.com
              </Link>{' '}
              or fill out the form below. Typical response time is within 24
              hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  )
}
