import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CalendarDays, Mail } from 'lucide-react'

import { SiteFooter } from '../../components/site-footer'
import { SiteHeader } from '../../components/site-header'

const coreServices = [
  {
    name: 'Squarespace',
    description: 'Fast launches with a clean process and a polished finish.',
  },
  {
    name: 'Wix',
    description: 'Simple websites built so you can update them confidently.',
  },
  {
    name: 'WordPress',
    description:
      'Flexible systems for blogs, resources, and content libraries.',
  },
  {
    name: 'Shopify',
    description:
      'Product pages and storefronts that feel clear and trustworthy.',
  },
  {
    name: 'Custom',
    description: 'Tailored builds when off-the-shelf options are not enough.',
  },
  {
    name: 'Support',
    description:
      'Light updates and maintenance after launch to keep things fresh.',
  },
]

export default function ServicesPage() {
  return (
    <main className='bg-sand-50 text-graphite'>
      <section className='relative isolate min-h-[84svh] overflow-hidden'>
        <Image
          src='/hero-images/western-backdrop.jpg'
          alt='Western landscape background'
          fill
          priority
          sizes='100vw'
          className='object-cover object-center'
        />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,245,224,0.26),_transparent_40%),linear-gradient(180deg,rgba(21,18,14,0.44)_0%,rgba(34,27,18,0.22)_42%,rgba(236,217,185,0.96)_100%)]' />

        <SiteHeader />

        <div className='relative z-10 mx-auto flex min-h-[84svh] max-w-7xl flex-col items-center justify-start px-4 pb-20 pt-32 text-center sm:px-6 sm:pt-36 lg:px-8 lg:pt-40'>
          <p className='font-first-rodeo text-[0.9rem] uppercase tracking-[0.38em] text-sand-50/90'>
            services
          </p>
          <h1 className='mt-6 max-w-5xl font-miroa text-4xl uppercase leading-[0.9] tracking-[0.08em] text-sand-50 sm:text-5xl lg:text-[5.2rem]'>
            Build Options That Fit Your Timeline
          </h1>
          <p className='mt-6 max-w-3xl text-sm leading-7 text-graphite/80 sm:text-base'>
            Choose a focused sprint or a full website build. Every service is
            designed to give you a site that feels authentic, clear, and ready
            to grow.
          </p>

          <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row'>
            <Link
              href='#website-in-a-week'
              className='inline-flex items-center gap-2 rounded-full border border-graphite/30 bg-graphite px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-sand-50 transition hover:-translate-y-0.5 hover:border-[#8799a7] hover:bg-[#8799a7]'
            >
              Website In A Week
              <ArrowUpRight className='h-4 w-4' />
            </Link>
            <Link
              href='#design-day'
              className='inline-flex items-center gap-2 rounded-full border border-graphite/20 bg-sand-50/55 px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-graphite backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#8799a7] hover:bg-[#8799a7] hover:text-sand-50'
            >
              Design Day
              <CalendarDays className='h-4 w-4' />
            </Link>
            <Link
              href='mailto:hello@wearesagebrush.com?subject=sagebrush%20web%20studio%20inquiry'
              className='inline-flex items-center gap-2 rounded-full border border-graphite/20 bg-sand-50/55 px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-graphite backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#8799a7] hover:bg-[#8799a7] hover:text-sand-50'
            >
              I need something else
              <Mail className='h-4 w-4' />
            </Link>
          </div>
        </div>

        <div className='absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-sand-50 via-sand-50/90 to-transparent' />
      </section>

      <section
        id='website-in-a-week'
        className='bg-sand-50 px-4 py-24 sm:px-6 lg:px-8'
      >
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
          <div>
            <p className='font-first-rodeo text-[0.8rem] uppercase tracking-[0.4em] text-graphite/60'>
              something new
            </p>
            <h2 className='mt-4 font-miroa text-4xl uppercase leading-tight tracking-[0.08em] text-graphite sm:text-5xl'>
              Website in a Week
            </h2>
            <div className='mt-7 space-y-5 text-sm leading-7 text-graphite/78 sm:text-base'>
              <p>
                A streamlined one-week website build for businesses that need
                momentum now. Strategy, copy direction, and design all happen in
                one focused push.
              </p>
              <p>
                You walk away with a polished, launch-ready site and a clear
                structure you can actually maintain.
              </p>
            </div>
            <Link
              href='https://wearesagebrush.hbportal.co/public/69bd6a27c9854d0024e71b92'
              className='mt-8 inline-flex items-center gap-2 rounded-full border border-graphite/25 bg-graphite px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-sand-50 transition hover:-translate-y-0.5 hover:border-[#8799a7] hover:bg-[#8799a7]'
            >
              book this
              <ArrowUpRight className='h-4 w-4' />
            </Link>
          </div>

          <div className='relative mx-auto w-full max-w-[36rem] overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(61,45,28,0.22)]'>
            <Image
              src='/page-images/website-in-a-week.png'
              alt='Sunlit mountain scene'
              width={1600}
              height={1067}
              sizes='(min-width: 1024px) 40vw, 100vw'
              className='h-auto w-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-tr from-[#2d2317]/50 via-transparent to-transparent' />
          </div>
        </div>
      </section>

      <section
        id='design-day'
        className='bg-[#c9bea8] px-4 py-24 sm:px-6 lg:px-8'
      >
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
          {/* <div className='order-2 lg:order-1'>
                        <div className='relative mx-auto aspect-[1.08] w-full max-w-[34rem] overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(61,45,28,0.22)]'>
                            <Image
                                src='/page-images/horse-riding.png'
                                alt='Rider in western landscape'
                                fill
                                sizes='(min-width: 1024px) 38vw, 100vw'
                                className='object-cover'
                            />
                            <div className='absolute inset-0 bg-gradient-to-br from-[#2d2317]/45 via-transparent to-transparent' />
                        </div>
                    </div> */}

          <div className='order-1 lg:order-2'>
            <p className='font-first-rodeo text-[0.8rem] uppercase tracking-[0.4em] text-graphite/60'>
              focused sprint
            </p>
            <h2 className='mt-4 font-miroa text-4xl uppercase leading-tight tracking-[0.08em] text-graphite sm:text-5xl'>
              Design Day
            </h2>
            <div className='mt-7 space-y-5 text-sm leading-7 text-graphite/78 sm:text-base'>
              <p>
                A dedicated day to tackle your highest-impact updates: landing
                pages, brand refreshes, conversion improvements, and design
                cleanup.
              </p>
              <p>
                You get a clear scope, fast execution, and visible progress by
                the end of the day.
              </p>
            </div>
            <Link
              href='https://wearesagebrush.hbportal.co/public/6a29cc73a447e0117de3b606'
              className='mt-8 inline-flex items-center gap-2 rounded-full border border-graphite/25 bg-graphite px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-sand-50 transition hover:-translate-y-0.5 hover:border-[#8799a7] hover:bg-[#8799a7]'
            >
              book this
              <ArrowUpRight className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </section>

      <section className='relative isolate overflow-hidden bg-sand-50 px-4 pt-20 pb-28 sm:px-6 lg:px-8'>
        <div className='relative z-10 mx-auto max-w-7xl'>
          <p className='font-first-rodeo text-[0.8rem] uppercase tracking-[0.38em] text-graphite/60'>
            additional services
          </p>
          <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {coreServices.map(service => (
              <article
                key={service.name}
                className='rounded-[1.25rem] border border-graphite/12 bg-[#f6f1e7] p-6'
              >
                <h3 className='font-miroa text-2xl uppercase leading-none tracking-[0.06em] text-graphite'>
                  {service.name}
                </h3>
                <p className='mt-3 text-sm leading-7 text-graphite/78'>
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
