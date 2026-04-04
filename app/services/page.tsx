import type { Metadata } from 'next'
import Hero from '@/components/hero/hero'
import WorkShowcaseSection from '@/components/work/work-showcase-section'
import { generateSEOMetadata } from '@/components/seo/seo-head'
import Typewriter from '@/components/ui/typewriter'
import WebsiteInWeekBooking from '@/components/services/website-in-week-booking'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Work - Jackson WY Web Design Portfolio',
  description:
    'Explore our portfolio of web design and development projects from Sagebrush Web Studio in Jackson, Wyoming. We build websites for outdoor industry businesses, e-commerce ventures, and adventure-focused brands in Jackson Hole and beyond.',
  keywords: [
    'Jackson WY web design portfolio',
    'Jackson Hole web developer work',
    'Wyoming web design projects',
    'portfolio',
    'web design projects',
    'web development work',
    'outdoor industry websites',
    'e-commerce projects',
  ],
  url: '/work',
  type: 'website',
})

export default function WorkPage() {
  return (
    <>
      <Hero
        backgroundImage='/hero-images/elk-background.jpg'
        backgroundImageAlt='Bison lingering in a field in front of mountains'
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
            Web Design & Development Services in Jackson WY | Sagebrush Web
            Studio by Hannah Trask
          </h1>
          <Typewriter
            lines={[
              'technical consulting',
              'web development and design',
              'monthly maintenance',
              'internal applications',
              'e-commerce solutions',
            ]}
            className='text-lg sm:text-xl md:text-2xl font-cormorant-sc mb-6 text-white leading-tight px-2'
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2500}
            showCursor={true}
          />
          <p className='text-sm leading-relaxed text-white/90'>
            services and offerings
          </p>
        </div>
      </Hero>

      {/* Introduction Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-10'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-6'>
              Direct support from start to finish
            </h2>
            <div className='w-24 h-px bg-brand-sage mx-auto mb-8'></div>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
              Web projects can feel overwhelming. I work with you one-on-one to
              plan, build, and improve your site with clear communication and
              recommendations tailored to your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Website in a Week — featured */}
      <section
        id='build-my-website-in-a-week'
        className='bg-gradient-to-b from-desert-100 to-desert-50 dark:from-desert-900 dark:to-desert-950 py-16'
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start mb-8'>
              <div className='text-center lg:text-left'>
                <h2 className='text-3xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-4'>
                  Website in a Week
                </h2>
                <p className='text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6'>
                  A complete, professional website built on Squarespace. For
                  those ready to establish or refresh their online presence
                  fast.
                </p>
                <p className='text-sm md:text-base font-semibold text-desert-800 dark:text-white mb-8 tracking-wide'>
                  $1500 &nbsp;|&nbsp; 1 Week &nbsp;|&nbsp; Launch-Ready
                </p>
                <a
                  href='#book-website-in-a-week'
                  className='inline-flex items-center justify-center rounded-none bg-brand-sage px-6 py-3 text-white text-sm md:text-base font-medium hover:opacity-90 transition-opacity'
                >
                  Let&apos;s build it
                </a>
              </div>

              <div className='rounded-xl border border-desert-200 dark:border-desert-700 bg-white/80 dark:bg-desert-800/70 p-6'>
                <h3 className='text-xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-4'>
                  Is this for me?
                </h3>
                <p className='text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  Small businesses, service providers, creative professionals,
                  and entrepreneurs who need a polished web presence without the
                  months-long timeline.
                </p>

                <h3 className='text-xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-2'>
                  Timeline
                </h3>
                <p className='text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  One week from your scheduled kick-off to launch-ready.
                </p>

                <h3 className='text-xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-2'>
                  Investment
                </h3>
                <p className='text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2'>
                  $1500 total.
                </p>
                <p className='text-sm font-medium text-desert-800 dark:text-desert-100 leading-relaxed'>
                  No money is paid upfront. Payment is split as 50% by the date
                  of your kick-off call and 50% at project completion.
                </p>
              </div>
            </div>

            <div id='book-website-in-a-week'>
              <WebsiteInWeekBooking />
            </div>
          </div>
        </div>
      </section>

      {/* Divider heading for other services */}
      <div className='bg-white dark:bg-desert-900 py-10'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-xl md:text-2xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-4'>
              Looking for something else? Here&apos;s what else we do
            </h2>
            <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-6'></div>
            <p className='text-sm text-gray-700 dark:text-gray-300 leading-relaxed'>
              Need something else? <br className='sm:hidden' />
              See our full services below, or{' '}
              <a
                href='/contact'
                className='underline underline-offset-2 hover:text-desert-800 dark:hover:text-white transition-colors'
              >
                schedule a consultation
              </a>{' '}
              to discuss your project.
            </p>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-8 md:py-10 bg-white dark:bg-desert-900 rounded-lg shadow-sm'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          <WorkShowcaseSection
            title='Website Design & Build'
            description='Everything from concept to launch. New websites, redesigns, and full builds—on WordPress, Shopify, Squarespace, or whatever works best for you.'
            showImage={false}
            features={[
              'Strategy and planning',
              'Custom design and development',
              'On-page SEO and performance',
              'Mobile-friendly and accessible',
              'Content setup and training',
              'Launch support',
            ]}
            imageSrc='/page-images/workspace-image.jpg'
            imageAlt='Modern website development showcase'
            imagePosition='left'
            backgroundColor='bg-gradient-to-br from-brand-brown/10 to-brand-olive/10 dark:from-brand-brown/20 dark:to-brand-olive/20'
            textColor='text-desert-800 dark:text-white'
            accentColor='#7F492E'
            index={0}
          />

          {/* Technical Consulting & Migrations */}
          <WorkShowcaseSection
            title='Shopify & E-Commerce'
            description='Build or improve your online store. Full setup, customization, and optimization to sell smoothly.'
            showImage={false}
            features={[
              'Store setup and theme customization',
              'Product and collection management',
              'Payment and shipping configuration',
              'App integrations and automations',
              'Conversion optimization',
              'Ongoing maintenance',
            ]}
            imageSrc='/hero-images/wolf.jpg'
            imageAlt='E-commerce website showcase'
            imagePosition='right'
            backgroundColor='bg-gradient-to-br from-brand-brown/10 to-brand-olive/10 dark:from-brand-brown/20 dark:to-brand-olive/20'
            textColor='text-desert-800 dark:text-white'
            accentColor='#B295C1'
            index={1}
          />

          {/* Personal Dashboards & Internal Applications */}
          <WorkShowcaseSection
            title='Internal Apps & Automations'
            description='Custom tools to streamline your operations. Dashboards, workflows, Zapier automations, and integrations that cut manual work.'
            showImage={false}
            features={[
              'Internal dashboards and portals',
              'Workflow automation and integrations',
              'Form builders and data collection',
              'API connections and custom logic',
              'Role-based access and security',
              'Ongoing support and updates',
            ]}
            imageSrc='/hero-images/western-backdrop.jpg'
            imageAlt='Brand identity design showcase'
            imagePosition='left'
            backgroundColor='bg-gradient-to-tr from-brand-sage/10 to-brand-olive/10 dark:from-brand-sage/20 dark:to-brand-sage/20'
            textColor='text-desert-800 dark:text-white'
            accentColor='#CD9493'
            index={2}
          />

          {/* Small Business Solutions */}
          <WorkShowcaseSection
            title='Maintenance & Technical Support'
            description="Hourly support for updates, fixes, migrations, and ongoing care. Don't want a full rebuild? This is for you."
            showImage={false}
            features={[
              'Content updates and design tweaks',
              'Plugin and integration troubleshooting',
              'Platform migrations and domain changes',
              'Speed and SEO optimization',
              'Monthly retainer options',
              'On-demand hourly support',
            ]}
            imageSrc='/hero-images/tetons-backdrop.jpg'
            imageAlt='Small business website showcase'
            imagePosition='right'
            backgroundColor='bg-gradient-to-bl from-brand-sage/10 to-brand-olive/10 dark:from-brand-sage/20 dark:to-brand-olive/20'
            textColor='text-desert-800 dark:text-white'
            accentColor='#9D9B86'
            index={3}
          />
        </div>
      </div>
    </>
  )
}
