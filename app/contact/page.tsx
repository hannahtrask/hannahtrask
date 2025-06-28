import Image from 'next/image'
import { Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/contact-form'

export const metadata = {
  title: 'Contact | Alpenglow Studio',
  description:
    'Get in touch to discuss your next web development project. We specialize in creating beautiful, functional websites for outdoor industry and adventure businesses.',
}

export default function ContactPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section with Background Image */}
      <div className='relative h-[60vh] w-full flex items-center'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/map.jpg'
            alt='Hannah on a mountain bike in Bend Oregon.'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/50 backdrop-blur-[1px]'></div>
        </div>

        {/* Hero Content */}
        <div className='container mx-auto px-4 relative z-10 text-center'>
          <h1 className='text-5xl md:text-6xl font-playfair font-light mb-6 text-white'>
            GET IN TOUCH
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className='bg-[#f8f7f4] dark:bg-desert-900 topo-pattern'>
        <div className='container mx-auto px-4 py-8'>
          <div className='max-w-6xl mx-auto'>
            {/* Contact Information Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
              <div className='bg-white dark:bg-desert-800 p-6 shadow-sm text-center'>
                <div className='w-12 h-12 bg-desert-100 dark:bg-desert-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Mail className='h-6 w-6 text-desert-600 dark:text-desert-300' />
                </div>
                <h3 className='font-playfair text-lg text-desert-800 dark:text-desert-100 mb-2'>
                  Email
                </h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>
                  sunandsagebrushllc@gmail.com
                </p>
              </div>

              <div className='bg-white dark:bg-desert-800 p-6 shadow-sm text-center'>
                <div className='w-12 h-12 bg-desert-100 dark:bg-desert-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <MapPin className='h-6 w-6 text-desert-600 dark:text-desert-300' />
                </div>
                <h3 className='font-playfair text-lg text-desert-800 dark:text-desert-100 mb-2'>
                  Location
                </h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>
                  Remote & On-site
                  <br />
                  Jackson, Wyoming
                </p>
              </div>

              <div className='bg-white dark:bg-desert-800 p-6 shadow-sm text-center'>
                <div className='w-12 h-12 bg-desert-100 dark:bg-desert-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Clock className='h-6 w-6 text-desert-600 dark:text-desert-300' />
                </div>
                <h3 className='font-playfair text-lg text-desert-800 dark:text-desert-100 mb-2'>
                  Response Time
                </h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>
                  Usually within 24 hours
                  <br />
                  Monday - Friday
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>

      {/* How It Works Section - Full Width */}
      <div className='w-full bg-white dark:bg-desert-800'>
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[600px]'>
          {/* Content Side */}
          <div className='flex items-center justify-center p-8 md:p-16'>
            <div className='max-w-lg'>
              <h2 className='text-4xl md:text-5xl font-playfair font-light text-desert-800 dark:text-desert-100 mb-8'>
                HOW IT WORKS
                <span className='block text-lg font-montserrat font-normal text-gray-600 dark:text-gray-300 mt-2'>
                  the easy version ;)
                </span>
              </h2>

              <ul className='space-y-4 text-gray-700 dark:text-gray-300'>
                <li className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1'>
                    •
                  </span>
                  <span>FILL OUT THE CONTACT FORM ABOVE</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1'>
                    •
                  </span>
                  <span>WE CHAT TO FIGURE OUT THE PERFECT PACKAGE FOR YOU</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1'>
                    •
                  </span>
                  <span>
                    COMPLETE YOUR PROJECT SCOPE & SUBMIT A DEPOSIT TO SECURE
                    YOUR PROJECT
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1'>
                    •
                  </span>
                  <span>FILL OUT PROJECT QUESTIONNAIRE</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1'>
                    •
                  </span>
                  <span>DESIGN & DEVELOPMENT TIME!</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-desert-600 dark:text-desert-400 mr-3 mt-1'>
                    •
                  </span>
                  <span>LAUNCH</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Side */}
          <div className='relative h-[400px] lg:h-full'>
            <Image
              src='/me-climbing.jpg'
              alt='Hannah climbing outdoors'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className='bg-[#f8f7f4] dark:bg-desert-900 topo-pattern'>
        <div className='container mx-auto px-4 py-8'>
          <div className='max-w-6xl mx-auto'>
            {/* Additional Information */}
            <div className='bg-white p-6 md:p-12 shadow-sm mt-16'>
              <div className='max-w-3xl mx-auto text-center'>
                <p className='text-gray-600 font-light leading-relaxed'>
                  <strong className='text-desert-700'>Specializing in:</strong>{' '}
                  Wordpress, Squarespace, Shopify, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
