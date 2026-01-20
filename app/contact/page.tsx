import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/hero/hero'
import ContactForm from '@/components/contact/contact-form'
import { generateSEOMetadata } from '@/components/seo/seo-head'
import Typewriter from '@/components/ui/typewriter'
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
} from '@/components/ui/social-icons'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact - Sagebrush Studio',
  description:
    'Get in touch with Sagebrush Studio for web design and development services in Jackson, Wyoming. Fill out our inquiry form or reach out directly via email.',
  keywords: [
    'contact Sagebrush Studio',
    'Jackson WY web designer contact',
    'Wyoming web development inquiry',
    'hire web developer Jackson Hole',
  ],
  url: '/contact',
  type: 'website',
})

export default function ContactPage() {
  return (
    <>
      <Hero
        backgroundImage='/hero-images/wolf.jpg'
        backgroundImageAlt='A wolf faces a man in the Tetons.'
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
          <Typewriter
            lines={['get in touch', "let's work together", 'say hello']}
            className='text-lg sm:text-xl md:text-2xl font-cormorant-sc mb-6 text-white leading-tight px-2'
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2500}
            showCursor={true}
          />
          <p className='text-sm leading-relaxed text-white/90'>
            let&apos;s connect
          </p>
        </div>
      </Hero>

      {/* Contact Information Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-6'>
              Let&apos;s Work Together
            </h2>
            <div className='w-24 h-px bg-brand-sage mx-auto mb-8'></div>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8'>
              Based in Jackson, WY. Available for remote and on-site work.
              <br />
              Want to talk more about what you need? Shoot me an email or fill
              out the form below and I&apos;ll get in touch within 24-48 hours.
            </p>

            {/* Contact Details */}
            <div className='mb-8'>
              <Link
                href='mailto:hello@wearesagebrush.com'
                className='text-desert-600 dark:text-desert-300 hover:text-desert-800 dark:hover:text-white text-lg font-medium transition-colors'
              >
                hello@wearesagebrush.com
              </Link>
            </div>

            {/* Social Links */}
            <div className='flex justify-center space-x-6'>
              <Link
                href='https://github.com/hannahtrask'
                className='text-desert-600 dark:text-desert-300 hover:text-desert-800 dark:hover:text-white transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon size={24} />
                <span className='sr-only'>GitHub</span>
              </Link>
              <Link
                href='https://www.linkedin.com/in/hannahtrask/'
                className='text-desert-600 dark:text-desert-300 hover:text-desert-800 dark:hover:text-white transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInIcon size={24} />
                <span className='sr-only'>LinkedIn</span>
              </Link>
              <Link
                href='https://www.instagram.com/sagebrush.dev'
                className='text-desert-600 dark:text-desert-300 hover:text-desert-800 dark:hover:text-white transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <InstagramIcon size={24} />
                <span className='sr-only'>Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className='bg-white dark:bg-desert-800 py-10 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
        <div className='px-4 sm:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-2'>
              Get in touch
            </h2>
            <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto'></div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  )
}
