'use client'

import Hero from '@/components/hero/hero'
import ContactForm from '@/components/contact/contact-form'
import AboutSection from '@/components/about-section'
import FAQSection from '@/components/faqs/faq-section'
import Typewriter from '@/components/ui/typewriter'

export default function HomeClient() {
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
          <Typewriter
            lines={[
              'web development',
              'web design',
              'migrations',
              'internal applications',
              'technical consulting',
            ]}
            className='text-xl sm:text-xl md:text-2xl lg:text-4xl font-cormorant-sc mb-4 sm:mb-6 text-white leading-tight px-2'
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2500}
            showCursor={true}
          />
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
                  <div>
                    <h3 className='text-lg md:text-xl font-semibold text-desert-800 dark:text-white mb-2'>
                      Web Design + Development
                    </h3>
                    <p className='text-desert-600 dark:text-desert-300 text-sm md:text-base leading-relaxed'>
                      Custom websites that capture your story. What are you
                      trying to communicate to convert visitors into customers?
                      From concept to launch, we create responsive,
                      user-friendly experiences.
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <div>
                    <h3 className='text-lg md:text-xl font-semibold text-desert-800 dark:text-white mb-2'>
                      E-commerce Solutions
                    </h3>
                    <p className='text-desert-600 dark:text-desert-300 text-sm md:text-base leading-relaxed'>
                      Powerful online stores built to represent who you are. We
                      build custom e-commerce stores that are optimized for
                      conversion and built to grow with you.
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
                    <h3 className='text-lg md:text-xl font-semibold text-desert-800 dark:text-white mb-2'>
                      Technical Consulting + Migrations
                    </h3>
                    <p className='text-desert-600 dark:text-desert-300 text-sm md:text-base leading-relaxed'>
                      We take the intimidation out of web tasks. Whether you
                      need help with a plugin, domains, migrating, hosting, SEO,
                      or custom code, we&apos;ve got you covered.
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1 text-base md:text-lg'>
                    •
                  </span>
                  <div>
                    <h3 className='text-lg md:text-xl font-semibold text-desert-800 dark:text-white mb-2'>
                      Personal Dashboard + Internal Applications
                    </h3>
                    <p className='text-desert-600 dark:text-desert-300 text-sm md:text-base leading-relaxed'>
                      Custom dashboards and internal applications to help you
                      run your business more efficiently. Built so you can be in
                      control and do what you do best. Have an idea? Let&apos;s
                      build it.
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
      <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-8'>
                LET'S WORK TOGETHER
              </h2>
              <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-8'></div>
              <p className='text-lg text-desert-600 dark:text-desert-300 max-w-2xl mx-auto leading-relaxed'>
                Ready to bring your vision to life? Let&apos;s discuss your
                project and create something amazing together.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
