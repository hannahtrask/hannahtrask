import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/hero/hero'
import Typewriter from '@/components/ui/typewriter'
import { generateSEOMetadata } from '@/components/seo/seo-head'

export const metadata: Metadata = generateSEOMetadata({
  title: 'About - Sagebrush Web Studio',
  description:
    'Learn about Sagebrush Web Studio, based in Jackson, Wyoming. We build thoughtful websites for local businesses, creative teams, and growing brands.',
  keywords: [
    'about Sagebrush Web Studio',
    'Jackson WY web design about',
    'Wyoming web developer about',
    'web studio mission',
    'Jackson Hole web designer',
  ],
  url: '/about',
  type: 'website',
})

export default function AboutPage() {
  return (
    <>
      <Hero
        backgroundImage='/hero-images/tetons-sunlight.jpg'
        backgroundImageAlt='The Tetons lit by sunlight'
        titleClassName='text-5xl md:text-7xl mb-6 text-white'
        photoCredit={{
          name: 'Nick Sulzer',
          url: 'https://www.nicksulzer.com/',
        }}
        priority={true}
      >
        <div className='relative h-full flex items-center justify-center pb-28 sm:pb-24 md:pb-20'>
          <div className='text-center text-white px-4 py-8 sm:px-6 md:px-8'>
            <h1 className='sr-only'>
              About Sagebrush Web Studio - Jackson WY Web Design and Development
            </h1>

            <Typewriter
              lines={['about us', 'based in jackson wy']}
              className='text-lg sm:text-xl md:text-2xl mb-6 text-white leading-tight px-2'
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={2500}
              showCursor={true}
            />

            <p className='text-sm leading-relaxed text-[#ecd9b9]/90'>
              our vision & mission
            </p>
          </div>
        </div>
      </Hero>

      <div className='bg-desert-50 dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-desert-800 dark:text-white mb-6'>
              Our Vision & Mission
            </h2>
            <div className='w-24 h-px bg-brand-sage mx-auto mb-8'></div>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
              We help businesses build websites that are trustworthy, feel
              clear, useful, and grounded in their goals.
            </p>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-6'>
              Your website is often where you make your first impression and
              where customers decide whether or not they are going to work with
              you. Our work blends strategy, design, and development so your
              site can support real growth without feeling complicated.
            </p>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-6'>
              We&apos;ll help you build an online presence that feels like a
              natural extension of your business and your values.
            </p>
          </div>
        </div>
      </div>

      <div className='bg-white dark:bg-desert-800 py-14'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='flex justify-center'>
              <div className='flex flex-col items-center text-center'>
                <div className='relative h-72 w-72 overflow-hidden rounded-full bg-gradient-to-br from-brand-sage/20 to-brand-brown/20 shadow-md md:h-80 md:w-80'>
                  <Image
                    src='/hannah.JPG'
                    alt='Hannah Trask'
                    fill
                    className='object-cover'
                    sizes='(min-width: 768px) 20rem, 18rem'
                  />
                </div>
                <p className='mt-4 text-lg font-semibold text-desert-800 dark:text-white'>
                  Hannah Trask
                </p>
                <p className='text-sm text-gray-700 dark:text-gray-300'>
                  founder and web designer/developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
