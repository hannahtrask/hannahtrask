'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { urlFor } from '../sanity/image'
import type { Testimonial } from '../sanity/types'

interface Props {
  testimonials: Testimonial[]
}

export function TestimonialStrip({ testimonials }: Props) {
  const visibleCount = 2
  const testimonialCount = testimonials?.length ?? 0
  const maxStartIndex = Math.max(0, testimonialCount - visibleCount)

  const [currentIndex, setCurrentIndex] = useState(0)
  const isAtStart = currentIndex === 0
  const isAtEnd = currentIndex >= maxStartIndex

  if (!testimonialCount) return null

  const goPrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev))
  }

  const goNext = () => {
    setCurrentIndex(prev => (prev < maxStartIndex ? prev + 1 : prev))
  }

  return (
    <section className='bg-brand-sand px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='relative'>
          <p className='text-center font-first-rodeo text-[0.8rem] uppercase tracking-[0.38em] text-graphite/60'>
            from clients
          </p>
          <div className='mt-4 flex items-center justify-center gap-2 sm:absolute sm:right-0 sm:top-1/2 sm:mt-0 sm:-translate-y-1/2'>
            <button
              type='button'
              aria-label='Scroll testimonials left'
              onClick={goPrev}
              disabled={isAtStart}
              className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-graphite/20 bg-sand-50/80 text-graphite transition hover:border-[#8b7651] hover:text-[#8b7651] disabled:cursor-not-allowed disabled:opacity-35'
            >
              <ChevronLeft className='h-5 w-5' />
            </button>
            <button
              type='button'
              aria-label='Scroll testimonials right'
              onClick={goNext}
              disabled={isAtEnd}
              className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-graphite/20 bg-sand-50/80 text-graphite transition hover:border-[#8b7651] hover:text-[#8b7651] disabled:cursor-not-allowed disabled:opacity-35'
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div>
        </div>

        <div className='mx-auto mt-10 w-full max-w-3xl max-w-full overflow-hidden'>
          <div
            className='flex w-full transition-transform duration-500 ease-out'
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map(t => (
              <div key={t._id} className='w-1/2 shrink-0 px-1'>
                <article className='flex min-h-[17.5rem] flex-col gap-5 rounded-[1.5rem] border border-graphite/12 bg-sand-50/60 p-6 shadow-sm sm:min-h-[16rem]'>
                  <p className='flex-1 text-sm leading-7 text-graphite/82'>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className='flex items-center gap-3'>
                    {t.headshot && (
                      <div className='relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-graphite/15'>
                        <Image
                          src={urlFor(t.headshot).width(80).height(80).url()}
                          alt={t.headshot.alt ?? `Headshot of ${t.name}`}
                          fill
                          className='object-cover'
                        />
                      </div>
                    )}
                    <div>
                      <p className='font-first-rodeo text-[0.68rem] uppercase tracking-[0.28em] text-graphite/80'>
                        {t.name}
                      </p>
                      {(t.role || t.company) && (
                        <p className='mt-0.5 font-first-rodeo text-[0.62rem] uppercase tracking-[0.24em] text-graphite/50'>
                          {[t.role, t.company].filter(Boolean).join(' / ')}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
