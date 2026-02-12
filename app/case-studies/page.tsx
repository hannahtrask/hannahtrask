import type { Metadata } from 'next'
import Hero from '@/components/hero/hero'
import { generateSEOMetadata } from '@/components/seo/seo-head'
import Typewriter from '@/components/ui/typewriter'
import { getAllCaseStudies } from '@/sanity/lib/caseStudies'
import CaseStudyGrid from '@/components/case-studies/case-study-grid'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Case Studies',
  description:
    'Explore detailed case studies of web design and development projects by Sagebrush Web Studio. See how we solve real problems for outdoor industry businesses, e-commerce ventures, and creative brands.',
  url: '/case-studies',
  keywords: [
    'web design case studies',
    'web development portfolio',
    'project showcase',
    'client work examples',
  ],
})

export const revalidate = 60 // Revalidate every 60 seconds

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies()
  return (
    <>
      <Hero
        backgroundImage='/hero-images/tetons-sunlight.jpg'
        photoCredit={{
          name: 'Nick Sulzer',
          url: 'https://www.nicksulzer.com/',
        }}
        backgroundImageAlt='The Tetons in the sunlight with aspen trees in the foreground. Photo by Nick Sulzer'
        overlayType='custom'
        overlayClassName='absolute inset-0 bg-black/60 dark:bg-black/80'
        animateContent={true}
        titleClassName='text-5xl md:text-7xl font-cormorant-sc mb-6 text-white'
      >
        <div className='text-center text-white px-4 py-8 sm:px-6 md:px-8'>
          {/* SEO-friendly hidden H1 */}
          <h1 className='sr-only'>
            Case Studies - Web Design & Development Projects | Sagebrush Web
            Studio
          </h1>
          <Typewriter
            lines={['case studies', 'client projects', 'success stories']}
            className='text-lg sm:text-xl md:text-2xl font-cormorant-sc mb-6 text-white leading-tight px-2'
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2500}
            showCursor={true}
          />
          <p className='text-sm leading-relaxed text-white/90'>
            real projects, real solutions
          </p>
        </div>
      </Hero>

      {/* Introduction Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-6'>
              Featured Projects
            </h2>
            <div className='w-24 h-px bg-brand-sage mx-auto mb-8'></div>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
              Each project is a unique collaboration. Click on a project below
              to dive deep into the challenges, solutions, and creative process
              behind each website.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <CaseStudyGrid caseStudies={caseStudies} />
    </>
  )
}
