import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Hero from '@/components/hero/hero'
import { generateSEOMetadata } from '@/components/seo/seo-head'
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from '@/sanity/lib/caseStudies'
import { urlFor } from '@/sanity/utils/imageUrlBuilder'
import CaseStudyContent from '@/components/case-studies/case-study-content'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 60 // Revalidate every 60 seconds

export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs()
  return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return generateSEOMetadata({
      title: 'Case Study not found',
      description: 'The requested case study could not be found.',
    })
  }

  const heroImageUrl = caseStudy.heroImage
    ? urlFor(caseStudy.heroImage).width(1200).url()
    : undefined

  return generateSEOMetadata({
    title: `${caseStudy.title} - Case Study`,
    description: caseStudy.overview,
    url: `/case-studies/${slug}`,
    image: heroImageUrl,
    keywords: [
      caseStudy.title,
      'case study',
      'web design',
      'web development',
      ...(caseStudy.technologies || []),
    ],
  })
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  const heroImageUrl = urlFor(caseStudy.heroImage).width(1920).url()

  return (
    <>
      <Hero
        backgroundImage={heroImageUrl}
        backgroundImageAlt={`${caseStudy.title} hero image`}
        overlayType='custom'
        overlayClassName='absolute inset-0 bg-black/60 dark:bg-black/80'
        animateContent={true}
        titleClassName='text-5xl md:text-7xl font-cormorant-sc mb-6 text-white'
      >
        <div className='text-center'>
          <p className='text-sm md:text-base uppercase tracking-widest text-white/80 mb-4'>
            Case Study
          </p>
          <h1 className='text-4xl md:text-6xl font-cormorant-sc mb-4 text-white'>
            {caseStudy.title}
          </h1>
          <p className='text-lg md:text-xl text-white/90 max-w-2xl mx-auto'>
            {caseStudy.subtitle}
          </p>
        </div>
      </Hero>

      <CaseStudyContent caseStudy={caseStudy} />
    </>
  )
}
