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
              'small business websites',
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

      <section className='bg-desert-100 dark:bg-desert-900 py-5'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto flex flex-col items-center justify-between gap-3 border-desert-200 dark:border-desert-700 dark:bg-desert-800/90 p-4 md:p-5'>
            <p className='text-sm md:text-base text-desert-800 dark:text-white font-medium text-center sm:text-left'>
              Need a site this month? Let&apos;s get it done in a week.
            </p>
            <a
              href='#build-my-website-in-a-week'
              className='inline-flex items-center justify-center rounded-md bg-brand-sage px-5 py-2.5 text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap'
            >
              Book it
            </a>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-4 py-8 md:py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {/* Web Development Showcase */}
          <WorkShowcaseSection
            title='Website Builds: WordPress, Wix, Squarespace'
            description='Need a new site or a serious refresh? I design and build clear, modern websites on WordPress, Wix, and Squarespace, including custom WordPress themes.'
            showImage={false}
            features={[
              'New websites and full redesigns',
              'Custom WordPress theme development',
              'WordPress, Wix, and Squarespace setup',
              'Mobile-friendly layouts',
              'On-page SEO and performance basics',
              'Easy handoff so you can edit your own content',
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
            title='Shopify and E-commerce Setup'
            description='I build and improve Shopify stores that are simple to manage and ready to sell, from storefront setup to checkout flow improvements.'
            showImage={false}
            features={[
              'Shopify store setup and theme customization',
              'Product, collection, and navigation setup',
              'Payment and shipping configuration',
              'App integrations and workflow setup',
              'Conversion-focused page updates',
              'Store cleanup and maintenance support',
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
            title='Internal Apps and Dashboards'
            description='Custom internal tools to help your business run smoother, cut manual work, and keep key information in one place.'
            showImage={false}
            features={[
              'Internal dashboards tailored to your workflow',
              'Role-based access and secure logins',
              'Forms, automations, and process tracking',
              'Reports and data visualization',
              'Integrations with third-party tools and APIs',
              'Ongoing improvements as your business grows',
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
            title='Hourly Support, Fixes, and Migrations'
            description='Already have a site? Hire me hourly for updates, troubleshooting, migrations, and ongoing technical support without a full rebuild.'
            showImage={false}
            features={[
              'WordPress, Wix, Squarespace, and Shopify fixes',
              'Content edits and design updates',
              'Platform migrations and domain changes',
              'Plugin and integration troubleshooting',
              'Speed and SEO tune-ups',
              'Flexible hourly retainers',
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

      <section
        id='build-my-website-in-a-week'
        className='bg-gradient-to-b from-desert-100 to-desert-50 dark:from-desert-900 dark:to-desert-950 py-12 md:py-8'
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-8 md:mb-10'>
              <h2 className='text-3xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-4'>
                Build my website in a week
              </h2>
              <p className='text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                A complete, professional website built on Squarespace. For those
                ready to establish or refresh their online presence fast.
              </p>
              <div className='mt-6'>
                <a
                  href='#book-website-in-a-week'
                  className='inline-flex items-center justify-center rounded-md bg-brand-sage px-6 py-3 text-white text-sm md:text-base font-medium hover:opacity-90 transition-opacity'
                >
                  Okay, let&apos;s do it
                </a>
              </div>
            </div>

            <div className='max-w-3xl mx-auto mb-8'>
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
                  No money is paid upfront. Payment is split as 50% before your
                  kick-off call and 50% at project completion.
                </p>
              </div>
            </div>

            <div id='book-website-in-a-week'>
              <WebsiteInWeekBooking />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
