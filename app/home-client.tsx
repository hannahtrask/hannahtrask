'use client'

import Hero from '@/components/hero/hero'
import ContactForm from '@/components/contact/contact-form'
import FAQSection from '@/components/faqs/faq-section'
import Typewriter from '@/components/ui/typewriter'
import Link from 'next/link'

export default function HomeClient() {
  return (
    <>
      {/* Home Hero Section */}
      <Hero
        backgroundImage='/hero-images/western-backdrop.jpg'
        backgroundImageAlt='A highway somewhere in the American West.'
        overlayType='custom'
        overlayClassName='absolute inset-0 bg-black/60 dark:bg-black/80'
        animateContent={true}
        titleClassName='text-5xl md:text-7xl font-cormorant-sc mb-6 text-white'
      >
        <div className='text-center text-white px-4 py-8 sm:px-6 md:px-8'>
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
          <p className='text-sm leading-relaxed text-white/90'>
            web design and development for searchers, makers and dreamers
          </p>
        </div>
      </Hero>

      {/* Meet Hannah Section */}
      <div className='bg-white dark:bg-desert-800 pt-10'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              {/* Image */}
              <div className='order-2 lg:order-1'>
                <div className='relative'>
                  <img
                    src='/HANNAH_TRASK.png'
                    alt='Hannah Trask - Founder of Sagebrush Creative'
                    className='w-full h-auto object-cover'
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className='order-1 lg:order-2 space-y-6'>
                <h3 className='text-xl md:text-2xl font-cormorant-sc font-bold text-desert-800 dark:text-white'>
                  ABOUT SAGEBRUSH
                </h3>
                <div className='w-16 h-px bg-brand-sage'></div>
                <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300'>
                  Hey, I&apos;m Hannah, the founder and owner of Sagebrush
                  Studio. My passion is helping locals, creatives, and
                  community-driven businesses establish a strong online presence
                  so they can focus on their work.
                  <br />
                  <br />I have 5+ years of experience in web development and
                  specialize in creating and enhancing websites that not only
                  look beautiful but also are intuitive and easy to use, work
                  for your business and engage your audience.
                </p>
                <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300'>
                  When I'm not coding, building websites or writing, you&apos;ll
                  find me exploring outside, learning a new thing or teaching at
                  a local yoga studio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-desert-50 dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-lg md:text-xl lg:text-2xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-4 leading-tight'>
              Sagebrush Studio helps locals, creatives, and community-driven
              businesses establish a strong online presence.
            </h2>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300'>
              I handle individual pages and minor tweaks to full website builds.
            </p>
            <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-12'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left'>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <div>
                    <h3 className='text-base md:text-lg font-semibold text-desert-800 dark:text-white mb-2'>
                      Web Design + Development
                    </h3>
                    <p className='text-desert-600 dark:text-desert-300 text-xs md:text-sm leading-relaxed'>
                      Website overhauls and tweaks to building custom websites
                      on Squarespace, Wix, Shopify, Wordpress, and sometimes
                      custom HTML/CSS/JavaScript.
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <div>
                    <h3 className='text-base md:text-lg font-semibold text-desert-800 dark:text-white mb-2'>
                      E-commerce Solutions
                    </h3>
                    <p className='text-desert-600 dark:text-desert-300 text-xs md:text-sm leading-relaxed'>
                      With over three years of professional experience in the
                      e-commerce space and more than 5 in the web development
                      world, I know Shopify can be a bear to navigate.
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
                      Technical Consulting + Migrations
                    </h3>
                    <p className='text-desert-600 dark:text-desert-300 text-xs md:text-sm leading-relaxed'>
                      Whether you need help with a plugin, domains, migrating,
                      hosting, SEO, or custom code, I&apos;ll give you the tools
                      and will educate you every step of the way so you can feel
                      empowered to manage your web presence.
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <div>
                    <h3 className='text-base md:text-lg font-semibold text-desert-800 dark:text-white mb-2'>
                      Personal Dashboard + Internal Applications
                    </h3>
                    <p className='text-desert-600 dark:text-desert-300 text-xs md:text-sm leading-relaxed'>
                      Custom dashboards and internal applications to help you
                      run your business more efficiently. Built so you can be in
                      control, personalized to your business so you can focus on
                      what you do best, which is your work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='bg-white dark:bg-desert-900'>
        <FAQSection />
      </div>

      {/* Contact Section */}
      <div
        id='contact'
        className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white dark:bg-desert-900 py-16'
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-6'>
                LET'S WORK TOGETHER
              </h2>
              <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-8'></div>
              <p className='text-sm text-desert-600 dark:text-desert-300 max-w-2xl mx-auto leading-relaxed'>
                Want to talk more about what you need? Shoot me an email at{' '}
                <Link
                  href='mailto:hello@wearesagebrush.com'
                  className='text-desert-100 dark:text-desert-200 text-sm max-w-xs hover:text-sand-500 dark:hover:text-gray-200'
                >
                  hello@wearesagebrush.com
                </Link>{' '}
                or fill out the form below and I&apos;ll get in touch within
                24-48 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
