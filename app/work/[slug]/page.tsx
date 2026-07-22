import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ChevronLeft } from 'lucide-react'

import { SiteFooter } from '../../../components/site-footer'
import { SiteHeader } from '../../../components/site-header'
import { client } from '../../../sanity/client'
import { urlFor } from '../../../sanity/image'
import {
  caseStudyBySlugQuery,
  allCaseSlugsQuery,
} from '../../../sanity/queries'
import type { SanityImage } from '../../../sanity/types'

export const revalidate = 60

interface DesignProcessStep {
  title: string
  description: string
}

interface CaseStudyDetail {
  _id: string
  title: string
  slug: { current: string }
  subtitle?: string
  clientName?: string
  overview?: string
  problemStatement?: string
  solutions?: string[]
  designProcess?: DesignProcessStep[]
  technologies?: string[]
  liveUrl?: string
  projectUrl?: string
  shortDescription?: string
  outcomes?: string
  scopeOfWork?: string[]
  projectType?: string[]
  heroImage?: SanityImage | string
  logo?: SanityImage | string
  images?: Array<SanityImage | string>
  screenshots?: SanityImage[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[]
}

function resolveImageSrc(
  image: SanityImage | string | undefined,
  width: number,
  height: number
): string | undefined {
  if (!image) return undefined
  if (typeof image === 'string') return image
  return urlFor(image).width(width).height(height).url()
}

async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudyDetail | null> {
  const cs = await client.fetch(caseStudyBySlugQuery, { slug })
  return cs as CaseStudyDetail | null
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(allCaseSlugsQuery)
  return slugs.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = await getCaseStudyBySlug(slug)
  if (!cs) return {}

  const previewImage =
    resolveImageSrc(cs.heroImage, 1200, 630) ||
    resolveImageSrc(cs.images?.[0], 1200, 630) ||
    resolveImageSrc(cs.screenshots?.[0], 1200, 630)

  return {
    title: cs.title,
    description: cs.shortDescription || cs.overview,
    alternates: { canonical: `/work/${cs.slug.current}` },
    openGraph: {
      title: `${cs.title} | Sagebrush Web Studio`,
      description: cs.shortDescription || cs.overview,
      images: previewImage
        ? [previewImage]
        : ['/site-title/SagebrushSecondaryLogo-07.png'],
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = await getCaseStudyBySlug(slug)
  if (!cs) notFound()

  const heroSrc =
    resolveImageSrc(cs.heroImage, 1600, 900) ||
    resolveImageSrc(cs.images?.[0], 1600, 900) ||
    resolveImageSrc(cs.screenshots?.[0], 1600, 900)
  const logoSrc = resolveImageSrc(cs.logo, 240, 240)
  const gallery =
    cs.images && cs.images.length > 0
      ? cs.images
      : (cs.screenshots ?? []).slice(1)
  const scopeItems = cs.scopeOfWork ?? []
  const resultsText =
    cs.outcomes ||
    'A stronger narrative, clearer user pathing, and a more conversion-ready web presence.'
  const solutionPoints =
    cs.solutions && cs.solutions.length > 0
      ? cs.solutions
      : cs.scopeOfWork && cs.scopeOfWork.length > 0
        ? cs.scopeOfWork
        : [
            'Strategic messaging',
            'Information architecture',
            'Responsive build',
          ]

  return (
    <main className='bg-sand-50 text-graphite'>
      <section className='relative isolate overflow-hidden bg-[#333520] px-4 pb-16 pt-0 sm:px-6 lg:px-8'>
        {heroSrc && (
          <Image
            src={heroSrc}
            alt={cs.title}
            fill
            priority
            className='object-cover object-center opacity-34'
            sizes='100vw'
          />
        )}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,245,224,0.24),_transparent_42%),linear-gradient(180deg,rgba(21,18,14,0.72)_0%,rgba(34,27,18,0.84)_60%,rgba(34,27,18,0.9)_100%)]' />
        <SiteHeader />
        <div className='relative mx-auto max-w-5xl pt-10 sm:pt-14'>
          <Link
            href='/work'
            className='inline-flex items-center gap-1.5 font-first-rodeo text-[0.68rem] uppercase tracking-[0.3em] text-sand-50/55 transition hover:text-sand-50/90'
          >
            <ChevronLeft className='h-3.5 w-3.5' />
            All work
          </Link>

          <div className='mt-6 flex flex-wrap gap-2'>
            {(cs.projectType ?? []).map(tag => (
              <span
                key={tag}
                className='rounded-full border border-sand-50/20 px-3 py-1 font-first-rodeo text-[0.62rem] uppercase tracking-[0.28em] text-sand-50/70'
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className='mt-5 font-miroa text-4xl uppercase leading-tight tracking-[0.08em] text-sand-50 sm:text-5xl lg:text-[3.5rem]'>
            {cs.title}
          </h1>
          {(cs.clientName || cs.subtitle) && (
            <p className='mt-3 max-w-3xl text-md leading-7 text-sand-50/95 sm:text-base'>
              {cs.subtitle || cs.clientName}
            </p>
          )}

          {logoSrc && (
            <div className='mt-6'>
              <div className='relative h-16 w-16 overflow-hidden rounded-full border border-sand-50/26 bg-sand-50/10'>
                <Image
                  src={logoSrc}
                  alt={`${cs.title} logo`}
                  fill
                  className='object-cover'
                  sizes='4rem'
                />
              </div>
            </div>
          )}

          {(cs.liveUrl || cs.projectUrl) && (
            <Link
              href={cs.liveUrl || cs.projectUrl || '#'}
              target='_blank'
              rel='noreferrer'
              className='mt-8 inline-flex items-center gap-2 rounded-full border border-sand-50/25 bg-sand-50/10 px-5 py-2.5 font-first-rodeo text-[0.68rem] uppercase tracking-[0.28em] text-sand-50 transition hover:border-[#8799a7] hover:bg-[#8799a7]'
            >
              View live site
              <ArrowUpRight className='h-3.5 w-3.5' />
            </Link>
          )}
        </div>
      </section>

      <section className='px-4 pt-12 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-[1.6rem] border border-graphite/10 bg-[#f6f0e2] p-4 sm:p-6'>
            <p className='font-first-rodeo text-[0.78rem] uppercase tracking-[0.34em] text-graphite/55 pb-6'>
              client story
            </p>
            <article className='rounded-[1rem] border border-[#a28b62]/30 bg-[#efe5d2] p-4'>
              <p className='font-first-rodeo text-[0.78rem] uppercase tracking-[0.28em] text-[#6b583a]'>
                the issue
              </p>
              <p className='mt-2 text-lg leading-6 text-graphite/76'>
                {cs.problemStatement || cs.shortDescription}
              </p>
            </article>

            <div className='mx-auto my-3 h-4 border-l-2 border-dashed border-[#a28b62]/50 sm:h-5' />

            <div className='grid gap-3 sm:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] sm:items-center'>
              <article className='rounded-[1rem] border border-[#85938f]/34 bg-[#dce5df] p-4'>
                <p className='font-first-rodeo text-[0.78rem] uppercase tracking-[0.28em] text-[#455550]'>
                  solution
                </p>
                <ul className='mt-2 space-y-2'>
                  {solutionPoints.slice(0, 3).map(point => (
                    <li
                      key={point}
                      className='flex items-start gap-2 text-md leading-6 text-graphite/76'
                    >
                      <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5c6c67]' />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
              <div className='hidden sm:flex items-center justify-center'>
                <span className='block w-full border-t-2 border-dashed border-[#85938f]/55' />
              </div>
              <div className='mx-auto h-4 border-l-2 border-dashed border-[#85938f]/55 sm:hidden' />

              <article className='rounded-[1rem] border border-[#7a9079]/34 bg-[#d8e4d5] p-4'>
                <p className='font-first-rodeo text-[0.78rem] uppercase tracking-[0.28em] text-[#3e5a3c]'>
                  results
                </p>
                <p className='mt-2 text-md leading-6 text-graphite/76'>
                  {resultsText}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_17rem] lg:items-start'>
          <div>
            {cs.overview && (
              <p className='text-base leading-8 text-graphite/80 sm:text-lg'>
                {cs.overview}
              </p>
            )}

            {cs.designProcess && cs.designProcess.length > 0 && (
              <div className='mt-12 rounded-[1.5rem] border border-graphite/10 bg-[#f6f1e7] p-6 sm:p-8'>
                <p className='font-first-rodeo text-[0.8rem] uppercase tracking-[0.34em] text-graphite/55'>
                  design process
                </p>
                <div className='mt-6 space-y-4'>
                  {cs.designProcess.map(step => (
                    <div key={step.title} className='relative pl-6'>
                      <span className='absolute left-0 top-2 h-[calc(100%-0.25rem)] border-l-2 border-dashed border-graphite/20' />
                      <span className='absolute left-0 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full bg-graphite/35' />
                      <h2 className='font-miroa text-xl uppercase leading-tight tracking-[0.06em] text-graphite'>
                        {step.title}
                      </h2>
                      <p className='mt-2 text-md leading-7 text-graphite/80 sm:text-base'>
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {resultsText && (
              <div className='mt-12 rounded-[1.5rem] border border-graphite/10 bg-[#f6f1e7] p-6 sm:p-8'>
                <p className='font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] text-graphite/55'>
                  the outcome
                </p>
                <p className='mt-4 text-lg leading-7 text-graphite/80'>
                  {resultsText}
                </p>
              </div>
            )}
          </div>

          <aside className='space-y-6 lg:sticky lg:top-8'>
            {scopeItems.length > 0 && (
              <div className='rounded-[1.5rem] border border-graphite/10 bg-[#f6f1e7] p-6'>
                <p className='font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] text-graphite/55'>
                  scope of work
                </p>
                <ul className='mt-4 space-y-2.5'>
                  {scopeItems.map((item, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-2.5 text-md leading-6 text-graphite/80'
                    >
                      <span className='mt-2.5 h-1 w-1 shrink-0 rounded-full bg-graphite/35' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(cs.technologies ?? []).length > 0 && (
              <div className='rounded-[1.5rem] border border-graphite/10 bg-[#f6f1e7] p-6'>
                <p className='font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] text-graphite/55'>
                  technologies
                </p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {cs.technologies?.map(tech => (
                    <span
                      key={tech}
                      className='rounded-full border border-graphite/16 bg-sand-50/80 px-3 py-1 font-first-rodeo text-[0.78rem] uppercase tracking-[0.24em] text-graphite/60'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(cs.liveUrl || cs.projectUrl) && (
              <Link
                href={cs.liveUrl || cs.projectUrl || '#'}
                target='_blank'
                rel='noreferrer'
                className='flex items-center justify-between rounded-[1.5rem] border border-graphite/10 bg-[#f6f1e7] p-5 transition hover:border-graphite/22 hover:bg-[#ede5d5]'
              >
                <span className='font-first-rodeo text-[0.68rem] uppercase tracking-[0.3em] text-graphite/65'>
                  View live site
                </span>
                <ArrowUpRight className='h-4 w-4 shrink-0 text-graphite/45' />
              </Link>
            )}
          </aside>
        </div>

        {gallery.length > 0 && (
          <div className='mx-auto mt-16 max-w-5xl'>
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {gallery.map((shot, i) => {
                const src = resolveImageSrc(shot, 800, 500)
                if (!src) return null

                const caption =
                  typeof shot === 'string' ? undefined : shot.caption

                return (
                  <div
                    key={`${src}-${i}`}
                    className='overflow-hidden rounded-[1.25rem] border border-graphite/10'
                  >
                    <Image
                      src={src}
                      alt={caption || `Screenshot ${i + 1}`}
                      width={800}
                      height={500}
                      className='h-auto w-full object-cover'
                    />
                    {caption && (
                      <p className='px-4 py-2 text-[0.7rem] text-graphite/50'>
                        {caption}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  )
}
