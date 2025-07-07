import type { Metadata } from 'next'
import Image from 'next/image'
import WorkStyleSelector from '@/components/work-style-selector'

export const metadata: Metadata = {
  title: 'Services | Hannah Trask - Web Developer',
  description:
    'Explore my web development services including custom websites, e-commerce solutions, and digital experiences.',
}

export default function ServicesPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section with Image */}
      <div className='relative h-[60vh] w-full flex items-center'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/sagebrush.jpg'
            alt='Desert landscape with sagebrush'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/50'></div>
        </div>

        <div className='container mx-auto px-4 relative z-10 text-center'>
          <h1 className='text-5xl md:texts-6xl font-playfair font-light text-white mb-6'>
            DESIGN & DEVELOPMENT OFFERINGS
          </h1>
        </div>
      </div>

      <div className='container mx-auto px-4 py-16'>
        <div className='w-full'>
          {/* Work Style Selection Section */}
          <WorkStyleSelector />

          {/* Divider */}
          <div className='w-full h-px bg-desert-300 dark:bg-desert-600 my-16'></div>

          {/* Project Sprints Section */}
          <div id='creative-sprints' className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-desert-50 dark:bg-desert-800 py-16'>
            <div className='container mx-auto px-4'>
              <h2 className='text-4xl md:text-5xl font-playfair font-bold text-desert-800 dark:text-white mb-4 text-center'>
                PROJECT SPRINTS
              </h2>
              <div className='w-full h-px bg-desert-300 dark:bg-desert-600 mb-12'></div>
              <div className='grid md:grid-cols-2 gap-12'>
                <div className='text-center md:text-right md:pr-6'>
                  <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-4'>
                    PERFECT FOR:
                  </h3>
                  <ul className='text-gray-700 dark:text-gray-300 space-y-2 mb-6 text-left inline-block'>
                    <li>• Product launches and announcements</li>
                    <li>• Marketing campaign websites</li>
                    <li>• Event landing pages</li>
                    <li>• Quick website refreshes</li>
                    <li>• Promotional microsites</li>
                  </ul>
                </div>
                <div className='md:border-l border-desert-300 dark:border-desert-600 md:pl-12 border-t md:border-t-0 pt-8 md:pt-0 text-center md:text-left'>
                  <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-4'>
                    WHAT YOU GET:
                  </h3>
                  <ul className='text-gray-700 dark:text-gray-300 space-y-2 mb-6 text-left inline-block'>
                    <li>• 2-4 week turnaround</li>
                    <li>• Custom design and development</li>
                    <li>• Mobile-responsive design</li>
                    <li>• Basic SEO optimization</li>
                    <li>• Content management system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* INCLUSIVE WEBSITE PACKAGES Section */}
          <div id='classic-packages' className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white dark:bg-desert-900 py-16'>
            <div className='container mx-auto px-4'>
              <h2 className='text-4xl md:text-5xl font-playfair font-bold text-desert-800 dark:text-white mb-4 text-center'>
                INCLUSIVE WEBSITE PACKAGES
              </h2>
              <div className='w-full h-px bg-desert-300 dark:bg-desert-600 mb-12'></div>
              <div className='grid md:grid-cols-2 gap-12'>
                <div className='text-center md:text-right md:pr-6'>
                  <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-4'>
                    PERFECT FOR:
                  </h3>
                  <ul className='text-gray-700 dark:text-gray-300 space-y-2 mb-6 text-left inline-block'>
                    <li>• New business websites</li>
                    <li>• Complete brand overhauls</li>
                    <li>• E-commerce platforms</li>
                    <li>• Complex functionality requirements</li>
                    <li>• Long-term digital strategy</li>
                  </ul>
                </div>
                <div className='md:border-l border-desert-300 dark:border-desert-600 md:pl-12 border-t md:border-t-0 pt-8 md:pt-0 text-center md:text-left'>
                  <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-4'>
                    WHAT YOU GET:
                  </h3>
                  <ul className='text-gray-700 dark:text-gray-300 space-y-2 mb-6 text-left inline-block'>
                    <li>• 6-12 week development process</li>
                    <li>• Comprehensive brand strategy</li>
                    <li>• Custom design system</li>
                    <li>• Advanced functionality</li>
                    <li>• Ongoing support and maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='w-full h-px bg-desert-300 dark:bg-desert-600 my-6'></div>

          {/* CTA Section */}
          <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-desert-50 dark:bg-desert-800 py-16'>
            <div className='container mx-auto px-4 text-center'>
              <h2 className='text-4xl md:text-5xl font-playfair font-bold text-desert-800 dark:text-white mb-4'>
                ARE YOU READY?
              </h2>
              <div className='w-full h-px bg-desert-300 dark:bg-desert-600 mb-12'></div>
              <p className='text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto'>
                Let&apos;s discuss how we can help bring your vision to life with
                a custom web solution that fits your needs and budget.
              </p>
              <a
                href='/contact'
                className='inline-block bg-desert-600 hover:bg-desert-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300'
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
