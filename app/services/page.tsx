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
        <div className='max-w-4xl mx-auto'>
          {/* Work Style Selection Section */}
          <WorkStyleSelector />

          {/* Creative Sprints Section */}
          <div id='creative-sprints' className='mb-20'>
            <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg'>
              <h2 className='text-3xl font-playfair font-bold text-desert-800 dark:text-white mb-6 text-center'>
                Creative Sprints
              </h2>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-4'>
                    Perfect for:
                  </h3>
                  <ul className='text-gray-700 dark:text-gray-300 space-y-2 mb-6'>
                    <li>• Product launches and announcements</li>
                    <li>• Marketing campaign websites</li>
                    <li>• Event landing pages</li>
                    <li>• Quick website refreshes</li>
                    <li>• Promotional microsites</li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-4'>
                    What you get:
                  </h3>
                  <ul className='text-gray-700 dark:text-gray-300 space-y-2 mb-6'>
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

          {/* Classic Website Packages Section */}
          <div id='classic-packages' className='mb-20'>
            <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg'>
              <h2 className='text-3xl font-playfair font-bold text-desert-800 dark:text-white mb-6 text-center'>
                Classic Website Packages
              </h2>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-4'>
                    Perfect for:
                  </h3>
                  <ul className='text-gray-700 dark:text-gray-300 space-y-2 mb-6'>
                    <li>• New business websites</li>
                    <li>• Complete brand overhauls</li>
                    <li>• E-commerce platforms</li>
                    <li>• Complex functionality requirements</li>
                    <li>• Long-term digital strategy</li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-4'>
                    What you get:
                  </h3>
                  <ul className='text-gray-700 dark:text-gray-300 space-y-2 mb-6'>
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

          {/* CTA Section */}
          <div className='text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg'>
            <h2 className='text-2xl md:text-3xl font-playfair font-bold text-desert-800 dark:text-white mb-4'>
              ARE YOU READY?
            </h2>
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
  )
}
