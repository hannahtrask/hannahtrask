import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { ParallaxHeroImage } from '../../components/parallax-hero-image'
import { SiteFooter } from '../../components/site-footer'
import { SiteHeader } from '../../components/site-header'
import { TypewriterTitle } from '../../components/typewriter-title'
import { client } from '../../sanity/client'
import { urlFor } from '../../sanity/image'
import { allCaseStudiesQuery } from '../../sanity/queries'
import type { CaseStudyListItem } from '../../sanity/types'

export const revalidate = 60

export const metadata: Metadata = {
  title: {
    absolute: 'Work | Sagebrush Web Studio',
  },
  description:
    'Case studies and past projects from Sagebrush Web Studio — custom builds, nonprofit redesigns, and full-scope web projects.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work | Sagebrush Web Studio',
    description: 'Case studies and past projects from Sagebrush Web Studio.',
    images: ['/site-title/SagebrushSecondaryLogo-07.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work | Sagebrush Web Studio',
    description: 'Case studies and past projects from Sagebrush Web Studio.',
    images: ['/site-title/SagebrushSecondaryLogo-07.png'],
  },
}

export default async function WorkPage() {
  const caseStudies: CaseStudyListItem[] =
    await client.fetch(allCaseStudiesQuery)

  return (
    <main className='bg-sand-50 text-graphite'>
      {/* Hero */}
      <section className='relative isolate min-h-[62svh] overflow-hidden'>
        <ParallaxHeroImage
          src='/hero-images/western-backdrop.jpg'
          alt='Western landscape'
          sizes='100vw'
          className='object-cover object-center'
          speed={0.16}
        />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,245,224,0.26),_transparent_40%),linear-gradient(180deg,rgba(21,18,14,0.44)_0%,rgba(34,27,18,0.22)_42%,rgba(236,217,185,0.96)_100%)]' />
        <SiteHeader />
        <div className='relative z-10 mx-auto flex min-h-[62svh] max-w-7xl flex-col items-center justify-start px-4 pb-16 pt-32 text-center sm:px-6 sm:pt-36 lg:px-8 lg:pt-40'>
          <p className='font-first-rodeo text-[0.9rem] uppercase tracking-[0.38em] text-sand-50/90'>
            case studies
          </p>
          <TypewriterTitle
            text='The Work'
            className='mt-6 max-w-3xl font-miroa text-4xl uppercase leading-[0.9] tracking-[0.08em] text-sand-50 sm:text-5xl lg:text-[4.5rem]'
            speedMs={85}
          />
          <p className='mt-6 max-w-2xl text-sm leading-7 text-graphite/80 sm:text-base'>
            Real projects, real clients, real results.
          </p>
        </div>
        <div className='absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-sand-50 via-sand-50/90 to-transparent' />
      </section>

      {/* Content */}
      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          {caseStudies.length === 0 ? (
            <div className='py-24 text-center'>
              <p className='font-first-rodeo text-[0.8rem] uppercase tracking-[0.38em] text-graphite/50'>
                coming soon
              </p>
              <p className='mx-auto mt-4 max-w-md text-sm leading-7 text-graphite/60'>
                Case studies are on the way. In the meantime,{' '}
                <Link
                  href='/#contact'
                  className='underline hover:text-graphite'
                >
                  reach out directly
                </Link>{' '}
                to hear about past work.
              </p>
            </div>
          ) : (
            <>
              <div className='mb-8'>
                <p className='font-first-rodeo text-[0.74rem] uppercase tracking-[0.34em] text-graphite/56'>
                  case studies
                </p>
                <h2 className='mt-3 font-miroa text-3xl uppercase tracking-[0.08em] text-graphite sm:text-4xl'>
                  starting from a need
                </h2>
              </div>

              <div className='space-y-8'>
                {caseStudies.map(cs => {
                  const problemText =
                    cs.problemStatement ||
                    cs.overview ||
                    cs.shortDescription ||
                    'The brand needed stronger positioning and a clearer digital story.'
                  const solutionText = cs.solutions?.length
                    ? cs.solutions.slice(0, 2).join(' + ')
                    : cs.scopeOfWork?.length
                      ? cs.scopeOfWork.slice(0, 2).join(' + ')
                      : 'A focused design and development sprint aligned to business goals.'
                  const resultsText =
                    cs.outcomes ||
                    'A clearer website experience and better conversion-ready structure.'

                  return (
                    <Link
                      key={cs._id}
                      href={`/work/${cs.slug.current}`}
                      className='group block overflow-hidden rounded-[1.9rem] border border-graphite/10 bg-[#f3ecde] p-5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(61,45,28,0.16)] sm:p-6 lg:p-8'
                    >
                      <div className='grid gap-6 lg:grid-cols-[1.05fr_1.4fr] lg:items-start'>
                        <div>
                          {cs.heroImage ? (
                            <div className='relative aspect-[4/3] overflow-hidden rounded-[1.2rem] border border-graphite/10'>
                              <Image
                                src={urlFor(cs.heroImage)
                                  .width(700)
                                  .height(520)
                                  .url()}
                                alt={cs.title}
                                fill
                                className='object-cover transition duration-500 group-hover:scale-[1.02]'
                                sizes='(min-width: 1024px) 30vw, 100vw'
                              />
                            </div>
                          ) : (
                            <div className='aspect-[4/3] rounded-[1.2rem] border border-graphite/10 bg-[#e2d6be]' />
                          )}
                          <div className='mt-4 flex flex-wrap gap-1.5'>
                            {(cs.projectType ?? []).slice(0, 3).map(tag => (
                              <span
                                key={tag}
                                className='rounded-full border border-graphite/16 bg-sand-50/70 px-2.5 py-0.5 font-first-rodeo text-[0.58rem] uppercase tracking-[0.24em] text-graphite/58'
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className='flex flex-wrap items-center gap-x-3 gap-y-2'>
                            {cs.featured && (
                              <span className='rounded-full border border-[#8b7651]/35 bg-[#8b7651]/10 px-3 py-1 font-first-rodeo text-[0.58rem] uppercase tracking-[0.28em] text-[#5f5136]'>
                                featured
                              </span>
                            )}
                            <span className='font-first-rodeo text-[0.66rem] uppercase tracking-[0.28em] text-graphite/52'>
                              {cs.clientName}
                            </span>
                          </div>
                          <h3 className='mt-2 font-miroa text-2xl uppercase leading-tight tracking-[0.06em] text-graphite sm:text-3xl'>
                            {cs.title}
                          </h3>
                          {cs.subtitle && (
                            <p className='mt-2 text-sm leading-6 text-graphite/68'>
                              {cs.subtitle}
                            </p>
                          )}

                          <div className='mt-6'>
                            <article className='rounded-[1rem] border border-[#a28b62]/30 bg-[#efe5d2] p-4'>
                              <p className='font-first-rodeo text-[0.58rem] uppercase tracking-[0.28em] text-[#6b583a]'>
                                the issue
                              </p>
                              <p className='mt-2 text-sm leading-6 text-graphite/76'>
                                {problemText}
                              </p>
                            </article>

                            <div className='mx-auto my-3 h-4 border-l-2 border-dashed border-[#a28b62]/50 sm:h-5' />

                            <div className='grid gap-3 sm:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] sm:items-center'>
                              <article className='rounded-[1rem] border border-[#85938f]/34 bg-[#dce5df] p-4'>
                                <p className='font-first-rodeo text-[0.58rem] uppercase tracking-[0.28em] text-[#455550]'>
                                  solution
                                </p>
                                <p className='mt-2 text-sm leading-6 text-graphite/76'>
                                  {solutionText}
                                </p>
                              </article>
                              <div className='hidden sm:flex items-center justify-center'>
                                <span className='block w-full border-t-2 border-dashed border-[#85938f]/55' />
                              </div>
                              <div className='sm:hidden mx-auto h-4 border-l-2 border-dashed border-[#85938f]/55' />

                              <article className='rounded-[1rem] border border-[#7a9079]/34 bg-[#d8e4d5] p-4'>
                                <p className='font-first-rodeo text-[0.58rem] uppercase tracking-[0.28em] text-[#3e5a3c]'>
                                  results
                                </p>
                                <p className='mt-2 text-sm leading-6 text-graphite/76'>
                                  {resultsText}
                                </p>
                              </article>
                            </div>
                          </div>

                          <span className='mt-6 inline-flex items-center gap-2 font-first-rodeo text-[0.64rem] uppercase tracking-[0.28em] text-graphite/58 transition group-hover:text-graphite'>
                            Open full case study
                            <ArrowUpRight className='h-3.5 w-3.5' />
                          </span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
