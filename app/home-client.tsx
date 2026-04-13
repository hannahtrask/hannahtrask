'use client'

import Hero from '@/components/hero/hero'
import ContactForm from '@/components/contact/contact-form'
import Typewriter from '@/components/ui/typewriter'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import websiteInAWeekImage from '@/public/page-images/website-in-a-week.png'

export default function HomeClient() {
  return (
    <>
      {/* Home Hero Section */}
      <Hero
        backgroundImage='/hero-images/bison-grand.jpg'
        backgroundImageAlt='Bison graze in front of the Tetons. Photos by Nick Sulzer.'
        enableParallax={true}
        overlayType='custom'
        overlayClassName='absolute inset-0 bg-black/60 dark:bg-black/80'
        animateContent={true}
        titleClassName='text-5xl md:text-7xl mb-6 text-white'
        photoCredit={{
          name: 'Nick Sulzer',
          url: 'https://www.nicksulzer.com/',
        }}
      >
        <div className='relative h-full flex items-center justify-center'>
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
              className='text-lg sm:text-xl md:text-2xl mb-6 text-white leading-tight px-2'
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={2500}
              showCursor={true}
            />
            <p className='text-sm leading-relaxed text-[#ecd9b9]/90 mb-8'>
              web design and development based in Jackson Hole, Wyoming
            </p>
          </div>

          {/* Buttons pinned to bottom of viewport */}
          <div className='absolute bottom-10 left-0 right-0 flex flex-col sm:flex-row items-center justify-center gap-4 px-4'>
            <Link
              href='/contact'
              className='font-first-rodeo inline-flex items-center justify-center gap-2 w-64 px-8 py-3 border border-[#ecd9b9] text-[#ecd9b9] hover:bg-[#ecd9b9] hover:text-brand-sage transition-colors duration-200'
            >
              work with me
            </Link>
            <Link
              href='/services#build-my-website-in-a-week'
              className='font-first-rodeo inline-flex items-center justify-center gap-2 w-64 px-8 py-3 border border-[#ecd9b9] text-[#ecd9b9] hover:bg-[#ecd9b9] hover:text-brand-sage transition-colors duration-200'
            >
              website in a week
            </Link>
          </div>
        </div>
      </Hero>

      {/* Tagline + Services Side by Side */}
      <div className='relative flex flex-col md:flex-row'>
        {/* Tagline Column */}
        <div className='bg-white dark:bg-desert-800 flex-1 px-8 py-12 md:py-16 lg:py-20'>
          <div className='max-w-sm mx-auto text-center'>
            {/* SEO-friendly hidden H2 */}
            <h2 className='sr-only'>
              Sagebrush Web Studio - Jackson Hole Web Development and Web Design
            </h2>
            <h3 className='text-xl md:text-2xl font-bold text-desert-800 dark:text-white'>
              SAGEBRUSH WEB STUDIO
            </h3>
            <div className='w-16 h-px bg-brand-sage mx-auto m-2'></div>
            <p className='text-sm leading-relaxed text-desert-800 dark:text-gray-300'>
              Everything from setup to scaling. Web development, web design, and
              optimization based in Jackson, WY.
            </p>
          </div>
        </div>

        {/* Services Column */}
        <div className='bg-desert-50 dark:bg-desert-900 flex-1 px-8 py-8 md:py-16 lg:py-20'>
          <div className='max-w-lg mx-auto text-center'>
            {/* SEO-friendly hidden H2 */}
            <h2 className='sr-only'>
              Web Development Services in Jackson WY - Squarespace, Shopify,
              WordPress, Wix
            </h2>
            <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-desert-800 dark:text-white leading-tight'>
              Some of what we do
            </h3>

            <div className='w-24 h-px bg-desert-800 dark:bg-desert-600 mx-auto mt-4 mb-6'></div>

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
                    <p className='text-desert-800 dark:text-desert-300 text-xs md:text-sm leading-relaxed'>
                      New websites, redesigns, migrations, and platform
                      transitions.
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <span className='text-desert-800 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <div>
                    <h3 className='text-base md:text-lg font-semibold text-desert-800 dark:text-white mb-2'>
                      Performance & Visibility
                    </h3>
                    <p className='text-desert-800 dark:text-desert-300 text-xs md:text-sm leading-relaxed'>
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
                    <p className='text-desert-800 dark:text-desert-300 text-xs md:text-sm leading-relaxed'>
                      Monthly maintenance, updates, and retainer partnerships.
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <span className='text-desert-800 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <div>
                    <h3 className='text-base md:text-lg font-semibold text-desert-800 dark:text-white mb-2'>
                      Custom Development
                    </h3>
                    <p className='text-desert-800 dark:text-desert-300 text-xs md:text-sm leading-relaxed'>
                      WordPress themes, Shopify stores, internal apps, and
                      automation workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className='text-sm md:text-sm lg:text-md mx-auto text-desert-800 dark:text-white leading-tight pt-6'>
              Not sure if we can help? Reach out, we probably can.
            </p>
            {/* Mobile-only CTA button */}
            <div className='md:hidden mt-6'>
              <Link
                href='#contact'
                className='font-first-rodeo inline-flex items-center justify-center w-full px-8 py-3 border-2 border-brand-sage text-brand-sage hover:bg-brand-sage hover:text-white transition-colors duration-200'
              >
                work with me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA strip — split background centers button on the column divide, desktop only */}
      <div className='relative hidden md:flex'>
        <div className='flex-1 bg-white dark:bg-desert-800 h-18' />
        <div className='flex-1 bg-desert-50 dark:bg-desert-900 h-18' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <Link
            href='#contact'
            className='font-first-rodeo inline-flex items-center justify-center px-10 py-3 border-2 border-brand-sage text-brand-sage bg-white dark:bg-desert-800 hover:bg-brand-sage hover:text-white transition-colors duration-200 shadow-md whitespace-nowrap'
          >
            work with me
          </Link>
        </div>
      </div>

      {/* FAQ Section
      <div className='bg-white dark:bg-desert-900'>
        <FAQSection />
      </div> */}

      {/* Website in a Week Section */}
      <div className='bg-sand-100 dark:bg-desert-800 py-16 px-4 md:px-8'>
        <div className='flex flex-col xl:flex-row min-h-80'>
          {/* Left: copy */}
          <div className='flex-1 px-8 py-16 md:py-20 flex flex-col justify-center'>
            <div className='max-w-sm mx-auto text-center xl:mx-0 xl:ml-auto xl:pr-12 xl:text-left'>
              <h2 className='text-2xl md:text-3xl font-bold text-desert-800 dark:text-white mb-4'>
                Website in a Week
              </h2>
              <div className='w-16 h-px bg-brand-sage mx-auto mb-6 xl:mx-0'></div>
              <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-2'>
                Need a professional site fast?
              </p>
              <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-8'>
                Get a complete, beautiful Squarespace website built for SEO/AIO
                optimization and launched in one week.
              </p>
              <Link
                href='/services#build-my-website-in-a-week'
                className='font-first-rodeo inline-flex items-center gap-2 px-8 py-3 bg-brand-sage hover:bg-brand-sage/90 text-white transition-colors duration-200 mb-8'
              >
                See how it works
                <ArrowRight className='w-4 h-4' />
              </Link>
              <p className='text-xs text-desert-600 dark:text-desert-300'>
                <span className='font-semibold'>Perfect for:</span> Service
                businesses, freelancers, small shops, and anyone who needs to
                launch now, not in 3 months.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div className='flex-1 p-8 md:p-10'>
            <div className='mx-auto w-full max-w-2xl rounded-2xl overflow-hidden shadow-md'>
              <Image
                src={websiteInAWeekImage}
                alt='Web design workspace'
                className='block h-auto w-full object-contain'
              />
            </div>
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
            <h2 className='text-2xl md:text-3xl font-bold text-desert-800 dark:text-white mb-2'>
              Let&apos;s work together
            </h2>

            <p className='text-sm text-desert-800 dark:text-desert-300 max-w-3xl mx-auto leading-relaxed'>
              Get in touch at{' '}
              <Link
                href='mailto:hello@wearesagebrush.com'
                className='text-desert-500 dark:text-desert-200 text-sm max-w-xs hover:text-sand-100 dark:hover:text-gray-200'
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

      {/* Follow Our Work Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-12'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-desert-800 dark:text-white mb-4'>
              Follow our work
            </h2>
            <div className='w-16 h-px bg-brand-sage mx-auto mb-6'></div>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-3'>
              Want to see more?
            </p>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-8'>
              Follow @sagebrushwebstudio on Instagram for behind-the-scenes
              project updates and web design inspiration.
            </p>
            <a
              href='https://www.instagram.com/sagebrushwebstudio/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-first-rodeo inline-flex items-center gap-2 px-8 py-3 bg-brand-sage hover:bg-brand-sage/90 text-white font-medium transition-colors duration-200'
            >
              follow @sagebrushwebstudio
              <ArrowRight className='w-4 h-4' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
