import Image from 'next/image'
import { Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/contact-form'

export const metadata = {
  title: 'Contact | Hannah Catherine Trask',
  description:
    'Get in touch to discuss your next web development project. I specialize in creating beautiful, functional websites for outdoor industry and adventure businesses.',
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
            Get In Touch
          </h1>
          <p className='text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed'>
            Ready to turn your vision into reality? Let's discuss your project
            and create something extraordinary together.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='bg-[#f8f7f4] dark:bg-desert-900 topo-pattern'>
        <div className='container mx-auto px-4 py-16'>
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

            {/* Additional Information */}
            <div className='bg-white p-8 md:p-12 shadow-sm mt-16'>
              <div className='max-w-3xl mx-auto text-center'>
                <h2 className='text-3xl font-playfair font-light text-desert-800 mb-6'>
                  What to Expect
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left'>
                  <div>
                    <h3 className='font-medium text-desert-700 mb-3'>
                      Initial Consultation
                    </h3>
                    <p className='text-gray-600 font-light leading-relaxed text-sm'>
                      We&apos;ll talk about your goals and what you need.
                      <br />
                      Style changes? Design recommendations? Is your SEO not up
                      to snuff? Do you need to implement a technical Shopify App
                      into your online store? Are you migrating from Squarespace
                      to Wordpress? Anything web or website, we can chat in this
                      free call. I&apos;ll provide some insight and
                      recommendations, and then I&apos;ll get to work.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-medium text-desert-700 mb-3'>
                      Project Proposal
                    </h3>
                    <p className='text-gray-600 font-light leading-relaxed text-sm'>
                      This doesn&apos;t need to be a call, but it can be!
                      I&apos;ll send you a proposal with a detailed breakdown of
                      the project, including timelines, deliverables, and
                      estimated cost. This is a no commitment proposal, so no
                      stress if you decide it&apos;s not a good fit or if you
                      need to change the scope of the project.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-medium text-desert-700 mb-3'>
                      Collaborative Process
                    </h3>
                    <p className='text-gray-600 font-light leading-relaxed text-sm'>
                      First and foremost I&apos;m a communicator! You&apos;ll
                      receive regular and frequent updates, and we&apos;ll work
                      together to ensure everything is on track. We can discuss
                      the frequency at which you&apos;d like to receive updates,
                      and I&apos;ll tailor my workflow to your needs.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-medium text-desert-700 mb-3'>
                      Launch & Support
                    </h3>
                    <p className='text-gray-600 font-light leading-relaxed text-sm'>
                      I make sure to test thoroughly everything I deliver, but
                      I&apos;ll also be available to help with any post-launch
                      support you may need or want for a time period we will
                      determine in the project proposal stage.
                    </p>
                  </div>
                </div>

                <div className='mt-8 pt-8 border-t border-desert-100'>
                  <p className='text-gray-600 font-light leading-relaxed'>
                    <strong className='text-desert-700'>
                      Specializing in:
                    </strong>{' '}
                    Wordpress, Squarespace, Shopify, and more.
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
