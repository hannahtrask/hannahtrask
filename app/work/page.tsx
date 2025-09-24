import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/hero'
import ProjectsGrid from '@/components/projects-grid'

export const metadata: Metadata = {
  title: 'Work | SAGEBRUSH CREATIVE',
}

export default function WorkPage() {
  return (
    <>
      <Hero
        backgroundImage='/work-background-bison.jpg'
        backgroundImageAlt='Creative work and portfolio'
        title='OUR WORK'
        titleClassName='text-5xl md:text-6xl font-julius-sans-one font-light text-white mb-6'
      />
      {/* Projects Section */}
      <div className='bg-desert-50 dark:bg-desert-900 pb-16'>
        <ProjectsGrid />

        {/* CTA Section */}
        <div className='container mx-auto px-4'>
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
