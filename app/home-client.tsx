'use client'

import Hero from '@/components/hero/hero'
import ContactForm from '@/components/contact/contact-form'
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
                <h3 className='text-3xl md:text-4xl font-cormorant-sc font-bold text-desert-800 dark:text-white'>
                  Meet Hannah
                </h3>
                <div className='w-16 h-px bg-brand-sage'></div>
                <p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
                  Hey, I&apos;m Hannah, the founder and owner of Sagebrush
                  Creative. My passions lie in empowering people to pursue their
                  dreams, businesses, and personal goals. I believe we can bring
                  connection and community back in the digital age by acting
                  with intention, authenticity, and honesty. I specialize in
                  creating websites that not only look beautiful but also tell
                  your unique story for your business and <strong>your</strong>{' '}
                  vision.
                </p>
                <p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
                  When I'm not coding, building websites or writing, you&apos;ll
                  find me exploring outside, learning a new thing, at one of our
                  local yoga studios, or trying out a new pasta recipe I saw on
                  Instagram.
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
                      I build custom websites on Squarespace, Wix, Shopify,
                      Wordpress, and sometimes custom HTML/CSS/JavaScript. Every
                      project is different, and I&apos;ll work with you to land
                      on exactly what you need. Have an existing website that
                      needs help? I do that too.
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
                      With over three years of professional experience in the
                      e-commerce space, I know Shopify can be a bear to
                      navigate. That&apos;s why I&apos;m here, whether you need
                      help installing a new app on your store or need a fresh
                      Shopify presence.
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
                      I&apos;ll take the intimidation out of web tasks. Whether
                      you need help with a plugin, domains, migrating, hosting,
                      SEO, or custom code, I&apos;ve got you covered and will
                      educate you every step of the way so you can feel
                      empowered to manage your web presence.
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
                      control and personalized to your business so you can focus
                      on what you do best, which if your work! Have an idea?
                      Let&apos;s build it.
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
                Want to talk more about what you need? Fill out the form below
                and we&apos;ll get in touch within 24-48 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
