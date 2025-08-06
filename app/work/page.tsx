import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProjectsGrid from '@/components/projects-grid'

export const metadata: Metadata = {
  title: 'Work | Sun & Sagebrush Creative',
}

export default function WorkPage() {
  return (
    <>
      <div className='relative h-screen w-full flex items-center overflow-hidden'>
        {/* Hero Section */}
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 z-0 w-full h-[120%]'>
            <Image
              src='/work-background-bison.jpg'
              alt='Creative work and portfolio'
              fill
              priority
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-brand-dustyrose/60'></div>
          </div>

          <div className='container mx-auto px-4 relative z-10 flex items-center justify-center h-full'>
            <h1 className='text-5xl md:text-6xl font-julius-sans-one font-light text-white mb-6'>
              OUR WORK
            </h1>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <ProjectsGrid />

          {/* CTA Section */}
          <div className='text-center mt-16'>
            <h3 className='text-2xl font-julius-sans-one font-bold text-desert-800 dark:text-white mb-4'>
              Ready to get started?
            </h3>
            <Link
              href='/contact'
              className='font-julius-sans-one inline-block bg-desert-600 hover:bg-desert-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300'
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
