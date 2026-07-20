import Image from 'next/image'

import { urlFor } from '../sanity/image'
import type { Testimonial } from '../sanity/types'

interface Props {
  testimonials: Testimonial[]
}

export function TestimonialStrip({ testimonials }: Props) {
  if (!testimonials?.length) return null

  return (
    <section className='bg-brand-sand px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <p className='text-center font-first-rodeo text-[0.8rem] uppercase tracking-[0.38em] text-graphite/60'>
          from clients
        </p>
        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map(t => (
            <div
              key={t._id}
              className='flex flex-col gap-5 rounded-[1.5rem] border border-graphite/12 bg-sand-50/60 p-6 shadow-sm'
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
