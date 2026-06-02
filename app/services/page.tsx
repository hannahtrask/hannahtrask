import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/hero/hero'
import WorkShowcaseSection from '@/components/work/work-showcase-section'
import { generateSEOMetadata } from '@/components/seo/seo-head'
import Typewriter from '@/components/ui/typewriter'
import WebsiteInWeekBooking from '@/components/services/website-in-week-booking'
import FAQSection from '@/components/faq-section'
import athenaImage from '@/public/page-images/athena.png'
import canopyImage from '@/public/page-images/canopy.png'
import foggImage from '@/public/page-images/fogg.png'
import willowImage from '@/public/page-images/willow.png'

const websiteInAWeekSamples = [
  {
    name: 'Athena',
    image: athenaImage,
  },
  {
    name: 'Canopy',
    image: canopyImage,
  },
  {
    name: 'Fogg',
    image: foggImage,
  },
  {
    name: 'Willow',
    image: willowImage,
  },
] as const

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
        titleClassName='text-5xl md:text-7xl mb-6 text-white'
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
            className='text-lg sm:text-xl md:text-2xl mb-6 text-white leading-tight px-2'
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2500}
            showCursor={true}
          />

          {/* <h2 className='font-miroa text-xl sm:text-2xl md:text-3xl mb-6 text-[#ecd9b9] leading-tight px-2'>
            Services and Offerings
          </h2> */}
          <p className='text-sm leading-relaxed text-[#ECD9B9]/90'>
            explore what Sagebrush Web Studio can do for you
          </p>
        </div>
      </Hero>

      {/* Introduction Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-10'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-desert-800 dark:text-white mb-6'>
              Direct support from start to finish
            </h2>
            <div className='w-24 h-px bg-brand-sage mx-auto mb-8'></div>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
              Web projects can feel overwhelming. We work with you one-on-one to
              plan, build, and improve your site with clear communication and
              recommendations tailored to your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Website in a Week — featured */}
      <section
        id='build-my-website-in-a-week'
        className='scroll-mt-24 md:scroll-mt-28 bg-gradient-to-b from-desert-100 to-desert-50 dark:from-desert-900 dark:to-desert-950 py-16'
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start mb-8'>
              <div className='text-center lg:text-left'>
                <h2 className='text-3xl md:text-5xl font-bold text-desert-800 dark:text-white mb-4'>
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
                  className='font-first-rodeo inline-flex items-center justify-center rounded-none bg-brand-sage px-6 py-3 text-white text-sm md:text-base font-medium hover:opacity-90'
                >
                  Let&apos;s build it
                </a>
              </div>

              <div className='rounded-xl border border-desert-200 dark:border-desert-700 bg-white/80 dark:bg-desert-800/70 p-6'>
                <h3 className='text-xl font-bold text-desert-800 dark:text-white mb-4'>
                  Is this for me?
                </h3>
                <p className='text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  Small businesses, service providers, creative professionals,
                  and entrepreneurs who need a polished web presence without the
                  months-long timeline.
                </p>

                <h3 className='text-xl font-bold text-desert-800 dark:text-white mb-2'>
                  Timeline
                </h3>
                <p className='text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  One week from your scheduled kick-off to launch-ready.
                </p>

                <h3 className='text-xl font-bold text-desert-800 dark:text-white mb-2'>
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

            <div className='mt-12'>
              <div className='grid grid-cols-2 justify-items-center gap-4 lg:grid-cols-4'>
                {websiteInAWeekSamples.map(sample => (
                  <figure
                    key={sample.name}
                    className='w-full max-w-[11.5rem] bg-[#f7f1e7] p-3 pb-6 shadow-[0_18px_36px_rgba(88,47,14,0.16)] ring-1 ring-[#e4d7c5] sm:max-w-[13rem] lg:max-w-[14rem]'
                  >
                    <div className='h-[19rem] overflow-hidden bg-white shadow-inner sm:h-[20rem] lg:h-[21rem]'>
                      <Image
                        src={sample.image}
                        alt={`${sample.name} website layout example`}
                        className='h-full w-full object-cover object-top'
                        sizes='(min-width: 1024px) 14rem, (min-width: 640px) 13rem, 11.5rem'
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Day — highlighted */}
      <section className='bg-white dark:bg-desert-900 py-12 md:py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto rounded-2xl border-2 border-brand-sage/40 bg-gradient-to-br from-brand-sage/10 via-desert-50 to-white dark:from-brand-sage/20 dark:via-desert-900 dark:to-desert-800 p-8 md:p-10 shadow-[0_20px_50px_rgba(88,47,14,0.12)]'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start'>
              <div className='text-center lg:text-left'>
                <p className='font-first-rodeo text-sm uppercase tracking-[0.2em] text-brand-sage mb-3'>
                  Our newest offering
                </p>
                <h2 className='text-3xl md:text-4xl font-bold text-desert-800 dark:text-white mb-4'>
                  Design Day
                </h2>
                <p className='text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6'>
                  For folks who have a list of website tasks that keep getting
                  pushed down the road. We spend one focused day getting those
                  lingering updates over the finish line.
                </p>
                <p className='text-sm md:text-base font-semibold text-desert-800 dark:text-white mb-8 tracking-wide'>
                  Flat rate at $600
                </p>
                <a
                  href='/contact'
                  className='font-first-rodeo inline-flex items-center justify-center rounded-none bg-brand-sage px-6 py-3 text-white text-sm md:text-base font-medium hover:opacity-90'
                >
                  Book Design Day
                </a>
              </div>

              <div className='rounded-xl border border-desert-200 dark:border-desert-700 bg-white/80 dark:bg-desert-800/70 p-6'>
                <h3 className='text-xl font-bold text-desert-800 dark:text-white mb-4'>
                  What we can tackle
                </h3>
                <ul className='space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed'>
                  <li>Content updates and page clean-up</li>
                  <li>Layout and style polish</li>
                  <li>SEO and AIO tune-ups</li>
                  <li>Small UX and functionality fixes</li>
                  <li>Clear next-step recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider heading for other services */}
      <div className='bg-white dark:bg-desert-900 py-10'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-xl md:text-2xl font-bold text-desert-800 dark:text-white mb-4'>
              Looking for something else?
            </h2>
            <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-6'></div>
            <p className='text-sm text-gray-700 dark:text-gray-300 leading-relaxed'>
              Need something else? <br className='sm:hidden' />
              See our full services below, or{' '}
              <a
                href='/contact'
                className='underline underline-offset-2 hover:text-desert-800 dark:hover:text-white'
              >
                schedule a consultation
              </a>{' '}
              to discuss your project.
            </p>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-8 md:py-10 dark:bg-desert-900 rounded-lg shadow-sm'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          <WorkShowcaseSection
            title='Website Design & Build'
            description='Everything from concept to launch. New websites, redesigns, and full builds—on WordPress, Shopify, Squarespace, or whatever works best for you.'
            startingPrice='$2,500'
            showImage={false}
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
            startingPrice='$2,500'
            showImage={false}
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
            startingPrice='$1,750'
            showImage={false}
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
            startingPrice='$125/hr'
            showImage={false}
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
      <div>
        <FAQSection />
      </div>
    </>
  )
}
