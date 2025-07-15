import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProjectsGrid from '@/components/projects-grid'

export const metadata: Metadata = {
  title: 'Work | Sun & Sagebrush Creative',
}



export default function WorkPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[60vh] w-full flex items-center'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/work-background-bison.jpg'
            alt='Creative work and portfolio'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/50'></div>
        </div>

        <div className='container mx-auto px-4 relative z-10 text-center'>
          <h1 className='text-5xl md:text-6xl font-julius-sans-one font-light text-white mb-6'>
            OUR WORK
          </h1>
        </div>
      </div>

      {/* Projects Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <ProjectsGrid />

          {/* CTA Section */}
          <div className='text-center mt-16'>
            <h3 className='text-2xl font-julius-sans-one font-bold text-desert-800 dark:text-white mb-4'>
              Ready to start your project?
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto'>
              Let's discuss how we can bring your vision to life with thoughtful design and development.
            </p>
            <Link
              href='/contact'
              className='inline-block bg-desert-600 hover:bg-desert-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300'
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
