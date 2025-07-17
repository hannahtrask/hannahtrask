import type { Metadata } from 'next'
import Image from 'next/image'
import WorkStyleSelector from '@/components/work-style-selector'
import ProjectSprintsSection from '@/components/project-sprints-section'
import InclusivePackagesSection from '@/components/inclusive-packages-section'
import FAQSection from '@/components/faq-section'
import BrandBanner from '@/components/brand-banner'

export const metadata: Metadata = {
  title: 'Services | Hannah Trask - Web Developer',
  description:
    'Explore my web development services including custom websites, e-commerce solutions, and digital experiences.',
}

export default function ServicesPage() {
  return (
    <>
      <div className='relative h-screen w-full flex items-center overflow-hidden'>
        {/* Hero Section with Image */}
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 z-0 w-full h-[120%]'>
            <Image
              src='/sagebrush.jpg'
              alt='Desert landscape with sagebrush'
              fill
              priority
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-brand-dustyrose/60'></div>
          </div>

          <div className='container mx-auto px-4 relative z-10 flex items-center justify-center h-full'>
            <h1 className='text-5xl md:texts-6xl font-julius-sans-one font-light text-white mb-6'>
              DESIGN & DEVELOPMENT OFFERINGS
            </h1>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 pt-16'>
        <div className='w-full'>
          {/* Work Style Selection Section */}
          <WorkStyleSelector />

          {/* Divider */}
          <div className='w-full h-px bg-desert-300 dark:bg-desert-600 my-16'></div>

          {/* Project Sprints Section */}
          <ProjectSprintsSection />

          {/* INCLUSIVE WEBSITE PACKAGES Section */}
          <InclusivePackagesSection />

          {/* FAQ Section */}
          <FAQSection />

          {/* CTA Section */}
          <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16'>
            <div className='container mx-auto px-4 text-center'>
              <h2 className='text-4xl md:text-5xl font-julius-sans-one font-bold text-desert-800 dark:text-white mb-4'>
                ARE YOU READY?
              </h2>
              <div className='w-full h-px bg-desert-300 dark:bg-desert-600 mb-12'></div>
              <p className='text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto'>
                Let&apos;s discuss how we can help bring your vision to life
                with a custom web solution that fits your needs and budget.
              </p>
              <a
                href='/contact'
                className='inline-block bg-desert-600 hover:bg-desert-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300'
              >
                GET IN TOUCH
              </a>
            </div>
          </div>

          {/* Brand Banner */}
          <BrandBanner />
        </div>
      </div>
    </>
  )
}
