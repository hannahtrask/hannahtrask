import Image from 'next/image'
import { Mountain, Code, Heart } from 'lucide-react'

export const metadata = {
  title: 'About | Hannah Catherine Trask',
  description:
    'Learn more about Hannah, a creative web developer with a passion for the outdoors and crafting beautiful digital experiences.',
}

export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[60vh] w-full flex items-center'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/roadtrip.jpg'
            alt='A view of the Colorado River in the Grand Canyon.'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/50 backdrop-blur-[.5px]'></div>
        </div>

        <div className='container mx-auto px-4 relative z-10 text-center'>
          <h1 className='text-5xl md:text-6xl font-playfair font-light text-white mb-6'>
            ABOUT
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className='bg-[#f8f7f4] dark:bg-desert-900 topo-pattern'>
        <div className='container mx-auto px-4 pt-8 pb-0'>
          <div className='max-w-8xl mx-auto'>
            {/* Alpenglow Studio Introduction Section */}
            <div className='bg-white dark:bg-desert-800 p-8 md:p-12 shadow-sm mb-16'>
              <div className='text-center mb-12'>
                <h2 className='text-3xl md:text-4xl font-playfair font-light mb-6 text-desert-800 dark:text-desert-100'>
                  ALPENGLOW STUDIO
                </h2>
                <p className='text-xl leading-relaxed mb-2 font-light text-gray-800 dark:text-gray-200 max-w-4xl mx-auto'>
                  We&apos;re creatives with a passion for crafting and honing
                  beautiful and functional digital experiences.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div>
                  <p className='text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300 mb-6'>
                    In our web development and design work, we specialize in
                    working with{' '}
                    <span className='font-medium text-desert-700 dark:text-desert-200 bg-desert-50 dark:bg-desert-700 px-2 py-1 rounded'>
                      thoughtful lifestyle brands
                    </span>
                    ,{' '}
                    <span className='font-medium text-desert-700 dark:text-desert-200 bg-desert-50 dark:bg-desert-700 px-2 py-1 rounded'>
                      small e-commerce businesses
                    </span>
                    ,{' '}
                    <span className='font-medium text-desert-700 dark:text-desert-200 bg-desert-50 dark:bg-desert-700 px-2 py-1 rounded'>
                      creative studios
                    </span>
                    , and{' '}
                    <span className='font-medium text-desert-700 dark:text-desert-200 bg-desert-50 dark:bg-desert-700 px-2 py-1 rounded'>
                      values-driven teams
                    </span>
                    .
                  </p>

                  <p className='text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300'>
                    We believe that great digital experiences come from
                    understanding your unique story and translating that into
                    thoughtful design and development that truly serves your
                    goals.
                  </p>
                </div>

                <div className='relative h-96 w-full overflow-hidden rounded-sm group'>
                  <Image
                    src='/me-climbing.jpg'
                    alt='Hannah white water rafting'
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Team Section */}
        <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white dark:bg-desert-800'>
          <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]'>
            {/* Text Side */}
            <div className='flex items-center p-8 md:p-16 lg:p-20'>
              <div className='max-w-lg mx-auto lg:mx-0'>
                <h2 className='text-3xl md:text-4xl font-playfair font-light mb-2 text-desert-800 dark:text-desert-100 tracking-wide'>
                  HANNAH CATHERINE TRASK
                </h2>
                <p className='text-lg font-light text-desert-600 dark:text-desert-300 mb-8'>
                  Founder, Designer, Web Developer
                </p>

                <p className='text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300'>
                  When I&apos;m not at work, you&apos;ll find me exploring my
                  now home in Jackson Wyoming. You can probably find me on the
                  whitewater on the Snake River, riding single-track downhill
                  trails on my mountain bike on Teton Pass, or climbing in the
                  gym or on any of the local crags. These daily adventures
                  aren&apos;t just hobbies to me; they're fundamental to my
                  experience of life. They fuel my creativity and show me that
                  the best solutions often come from stepping away from the
                  screen and finding inspiration in the natural world.
                </p>
              </div>
            </div>

            {/* Image Side */}
            <div className='relative h-[50vh] lg:h-auto'>
              <Image
                src='/me-rafting.jpg'
                alt='Hannah rock climbing'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/20'></div>
            </div>
          </div>
        </div>

        <div className='bg-[#f8f7f4] dark:bg-desert-900 topo-pattern'>
          <div className='container mx-auto px-4 py-16'>
            <div className='max-w-4xl mx-auto'>
              {/* Skills & Approach Section */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
                <div className='bg-white dark:bg-desert-800 p-8 shadow-sm text-center'>
                  <div className='w-16 h-16 bg-desert-100 dark:bg-desert-700 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <Code className='h-8 w-8 text-desert-600 dark:text-desert-300' />
                  </div>
                  <h3 className='text-xl font-light mb-4 text-desert-800 dark:text-desert-100'>
                    Technical Experience
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 font-light leading-relaxed'>
                    We have a strong understanding of how the web works and know
                    how to find the best way to implement solutions tailored to
                    you.
                  </p>
                </div>

                <div className='bg-white dark:bg-desert-800 p-8 shadow-sm text-center'>
                  <div className='w-16 h-16 bg-desert-100 dark:bg-desert-700 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <Heart className='h-8 w-8 text-desert-600 dark:text-desert-300' />
                  </div>
                  <h3 className='text-xl font-light mb-4 text-desert-800 dark:text-desert-100'>
                    You-Centered Work
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 font-light leading-relaxed'>
                    Every project starts with understanding what your goals are.
                    We communicate early and often to ensure that the final
                    product not only looks great but also meets your specific
                    needs and objectives.
                  </p>
                </div>

                <div className='bg-white dark:bg-desert-800 p-8 shadow-sm text-center'>
                  <div className='w-16 h-16 bg-desert-100 dark:bg-desert-700 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <Mountain className='h-8 w-8 text-desert-600 dark:text-desert-300' />
                  </div>
                  <h3 className='text-xl font-light mb-4 text-desert-800 dark:text-desert-100'>
                    Adventure Inspired
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 font-light leading-relaxed'>
                    Our love for adventure means we understand when it&apos;s
                    time to focus and get into a flow state. Working together
                    we&apos;ll make a plan and I&apos;ll get the job done for
                    you well and on time, no matter what.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
