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

          {/* Services Grid */}
          <div className='mb-16'>
            <h2 className='text-3xl font-playfair font-bold text-desert-800 dark:text-white mb-12 text-center'>
              All Services
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Service 1 */}
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='w-12 h-12 bg-desert-500 rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-3'>
                  Custom Websites
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Tailored web solutions built from the ground up to match your
                  brand and business goals.
                </p>
              </div>

              {/* Service 2 */}
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='w-12 h-12 bg-desert-500 rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-3'>
                  E-commerce Solutions
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Complete online stores with secure payment processing and
                  inventory management.
                </p>
              </div>

              {/* Service 3 */}
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='w-12 h-12 bg-desert-500 rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-3'>
                  Responsive Design
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Mobile-first designs that look great and work perfectly on all
                  devices.
                </p>
              </div>

              {/* Service 4 */}
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='w-12 h-12 bg-desert-500 rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-3'>
                  Performance Optimization
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Fast-loading websites optimized for search engines and user
                  experience.
                </p>
              </div>

              {/* Service 5 */}
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='w-12 h-12 bg-desert-500 rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-3'>
                  Maintenance & Support
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Ongoing website maintenance, updates, and technical support to
                  keep your site running smoothly.
                </p>
              </div>

              {/* Service 6 */}
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='w-12 h-12 bg-desert-500 rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-desert-800 dark:text-white mb-3'>
                  Analytics & SEO
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Data-driven insights and search engine optimization to help
                  your business grow online.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className='text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg'>
            <h2 className='text-2xl md:text-3xl font-playfair font-bold text-desert-800 dark:text-white mb-4'>
              Ready to Start Your Project?
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto'>
              Let's discuss how I can help bring your vision to life with a
              custom web solution that fits your needs and budget.
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
