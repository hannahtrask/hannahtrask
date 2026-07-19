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
  title: 'Work',
  description:
    'Case studies and past projects from Sagebrush Web Studio — custom builds, nonprofit redesigns, and full-scope web projects.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work | Sagebrush Web Studio',
    description: 'Case studies and past projects from Sagebrush Web Studio.',
    images: ['/site-title/SagebrushSecondaryLogo-07.png'],
  },
}

export default async function WorkPage() {
  const caseStudies: CaseStudyListItem[] =
    await client.fetch(allCaseStudiesQuery)

  const featured = caseStudies.find(cs => cs.featured) ?? caseStudies[0]
  const rest = caseStudies.filter(cs => cs._id !== featured?._id)

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
              {/* Featured */}
              {featured && (
                <div className='mb-12'>
                  <p className='mb-4 font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] text-graphite/55'>
                    featured
                  </p>
                  <Link
                    href={`/work/${featured.slug.current}`}
                    className='group relative block overflow-hidden rounded-[2rem] bg-[#333520] transition hover:shadow-[0_24px_60px_rgba(61,45,28,0.26)]'
                  >
                    <div className='grid lg:grid-cols-2'>
                      {featured.coverImage ? (
                        <div className='relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[420px]'>
                          <Image
                            src={urlFor(featured.coverImage)
                              .width(900)
                              .height(600)
                              .url()}
                            alt={featured.title}
                            fill
                            className='object-cover transition duration-500 group-hover:scale-[1.02]'
                            sizes='(min-width: 1024px) 50vw, 100vw'
                          />
                        </div>
                      ) : (
                        <div className='aspect-[4/3] bg-[#2a2d1e] lg:aspect-auto lg:min-h-[420px]' />
                      )}
                      <div className='flex flex-col justify-center p-8 sm:p-10 lg:p-12'>
                        <div className='flex flex-wrap gap-2'>
                          {(featured.projectType ?? []).map(tag => (
                            <span
                              key={tag}
                              className='rounded-full border border-sand-50/20 px-3 py-1 font-first-rodeo text-[0.62rem] uppercase tracking-[0.28em] text-sand-50/70'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className='mt-5 font-miroa text-3xl uppercase leading-tight tracking-[0.06em] text-sand-50 sm:text-4xl'>
                          {featured.title}
                        </h2>
                        <p className='mt-2 font-first-rodeo text-[0.72rem] uppercase tracking-[0.28em] text-sand-50/55'>
                          {featured.clientName}
                        </p>
                        <p className='mt-5 text-sm leading-7 text-sand-50/78'>
                          {featured.shortDescription}
                        </p>
                        <span className='mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-sand-50/25 bg-sand-50/10 px-5 py-2.5 font-first-rodeo text-[0.68rem] uppercase tracking-[0.28em] text-sand-50 transition group-hover:border-[#8799a7] group-hover:bg-[#8799a7]'>
                          Read case study
                          <ArrowUpRight className='h-3.5 w-3.5' />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Rest grid */}
              {rest.length > 0 && (
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                  {rest.map(cs => (
                    <Link
                      key={cs._id}
                      href={`/work/${cs.slug.current}`}
                      className='group flex flex-col overflow-hidden rounded-[1.5rem] border border-graphite/10 bg-[#f6f1e7] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(61,45,28,0.16)]'
                    >
                      {cs.coverImage ? (
                        <div className='relative aspect-[16/10] overflow-hidden'>
                          <Image
                            src={urlFor(cs.coverImage)
                              .width(600)
                              .height(375)
                              .url()}
                            alt={cs.title}
                            fill
                            className='object-cover transition duration-500 group-hover:scale-[1.03]'
                            sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                          />
                        </div>
                      ) : (
                        <div className='aspect-[16/10] bg-[#e8e0cf]' />
                      )}
                      <div className='flex flex-1 flex-col p-6'>
                        <div className='flex flex-wrap gap-1.5'>
                          {(cs.projectType ?? []).slice(0, 3).map(tag => (
                            <span
                              key={tag}
                              className='rounded-full border border-graphite/15 px-2.5 py-0.5 font-first-rodeo text-[0.58rem] uppercase tracking-[0.24em] text-graphite/60'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className='mt-3 font-miroa text-xl uppercase leading-tight tracking-[0.06em] text-graphite'>
                          {cs.title}
                        </h3>
                        <p className='mt-1 font-first-rodeo text-[0.65rem] uppercase tracking-[0.26em] text-graphite/50'>
                          {cs.clientName}
                        </p>
                        <p className='mt-3 line-clamp-3 flex-1 text-sm leading-7 text-graphite/72'>
                          {cs.shortDescription}
                        </p>
                        <span className='mt-5 inline-flex items-center gap-1.5 font-first-rodeo text-[0.65rem] uppercase tracking-[0.26em] text-graphite/55 transition group-hover:text-graphite'>
                          Read more
                          <ArrowUpRight className='h-3 w-3' />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
