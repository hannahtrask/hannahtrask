import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ChevronLeft } from 'lucide-react'
import { PortableText } from '@portabletext/react'

import { SiteFooter } from '../../../components/site-footer'
import { SiteHeader } from '../../../components/site-header'
import { client } from '../../../sanity/client'
import { urlFor } from '../../../sanity/image'
import {
  caseStudyBySlugQuery,
  allCaseSlugsQuery,
} from '../../../sanity/queries'
import type { CaseStudy } from '../../../sanity/types'

export const revalidate = 60

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
  const cs: CaseStudy | null = await client.fetch(caseStudyBySlugQuery, {
    slug,
  })
  if (!cs) return {}
  return {
    title: cs.title,
    description: cs.shortDescription,
    alternates: { canonical: `/work/${cs.slug.current}` },
    openGraph: {
      title: `${cs.title} | Sagebrush Web Studio`,
      description: cs.shortDescription,
      images: cs.screenshots?.[0]
        ? [urlFor(cs.screenshots[0]).width(1200).height(630).url()]
        : ['/site-title/SagebrushSecondaryLogo-07.png'],
    },
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const portableTextComponents = {
  block: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ children }: any) => (
      <h2 className='mt-10 font-miroa text-2xl uppercase leading-tight tracking-[0.06em] text-graphite sm:text-3xl'>
        {children}
      </h2>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ children }: any) => (
      <h3 className='mt-8 font-miroa text-xl uppercase leading-tight tracking-[0.06em] text-graphite'>
        {children}
      </h3>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normal: ({ children }: any) => (
      <p className='mt-5 text-sm leading-7 text-graphite/80 sm:text-base'>
        {children}
      </p>
    ),
  },
  marks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target='_blank'
        rel='noreferrer noopener'
        className='underline decoration-graphite/30 hover:decoration-graphite'
      >
        {children}
      </a>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strong: ({ children }: any) => (
      <strong className='font-semibold text-graphite'>{children}</strong>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    em: ({ children }: any) => <em>{children}</em>,
  },
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs: CaseStudy | null = await client.fetch(caseStudyBySlugQuery, {
    slug,
  })
  if (!cs) notFound()

  return (
    <main className='bg-sand-50 text-graphite'>
      {/* Dark hero header */}
      <section className='relative overflow-hidden bg-[#333520] px-4 pb-16 pt-0 sm:px-6 lg:px-8'>
        <SiteHeader />
        <div className='relative mx-auto max-w-4xl pt-10 sm:pt-14'>
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
          <p className='mt-3 font-first-rodeo text-[0.75rem] uppercase tracking-[0.3em] text-sand-50/55'>
            {cs.clientName}
          </p>

          {cs.projectUrl && (
            <Link
              href={cs.projectUrl}
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

      {/* Cover image — bleeds up from dark hero */}
      {cs.screenshots?.[0] && (
        <div className='bg-[#333520] px-4 pb-0 sm:px-6 lg:px-8'>
          <div className='relative mx-auto max-w-4xl overflow-hidden rounded-t-[2rem] shadow-[0_-8px_40px_rgba(61,45,28,0.28)]'>
            <Image
              src={urlFor(cs.screenshots[0]).width(1200).height(750).url()}
              alt={cs.screenshots[0].caption ?? cs.title}
              width={1200}
              height={750}
              className='h-auto w-full object-cover'
              priority
            />
          </div>
        </div>
      )}

      {/* Body + sidebar */}
      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1fr_17rem] lg:items-start'>
          {/* Main content */}
          <div>
            {cs.shortDescription && (
              <p className='text-base leading-8 text-graphite/80 sm:text-lg'>
                {cs.shortDescription}
              </p>
            )}
            {cs.body?.length > 0 && (
              <div className='mt-2'>
                <PortableText
                  value={cs.body}
                  components={portableTextComponents}
                />
              </div>
            )}
            {cs.outcomes && (
              <div className='mt-12 rounded-[1.5rem] border border-graphite/10 bg-[#f6f1e7] p-6 sm:p-8'>
                <p className='font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] text-graphite/55'>
                  outcomes &amp; results
                </p>
                <p className='mt-4 text-sm leading-7 text-graphite/80 sm:text-base'>
                  {cs.outcomes}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className='space-y-6 lg:sticky lg:top-8'>
            {(cs.scopeOfWork ?? []).length > 0 && (
              <div className='rounded-[1.5rem] border border-graphite/10 bg-[#f6f1e7] p-6'>
                <p className='font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] text-graphite/55'>
                  scope of work
                </p>
                <ul className='mt-4 space-y-2.5'>
                  {cs.scopeOfWork.map((item, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-2.5 text-sm leading-6 text-graphite/80'
                    >
                      <span className='mt-2.5 h-1 w-1 shrink-0 rounded-full bg-graphite/35' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {cs.projectUrl && (
              <Link
                href={cs.projectUrl}
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

        {/* Additional screenshots */}
        {(cs.screenshots ?? []).length > 1 && (
          <div className='mx-auto mt-16 max-w-4xl'>
            <p className='font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] text-graphite/50'>
              screenshots
            </p>
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {cs.screenshots.slice(1).map((shot, i) => (
                <div
                  key={i}
                  className='overflow-hidden rounded-[1.25rem] border border-graphite/10'
                >
                  <Image
                    src={urlFor(shot).width(800).height(500).url()}
                    alt={shot.caption ?? `Screenshot ${i + 2}`}
                    width={800}
                    height={500}
                    className='h-auto w-full object-cover'
                  />
                  {shot.caption && (
                    <p className='px-4 py-2 text-[0.7rem] text-graphite/50'>
                      {shot.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  )
}
