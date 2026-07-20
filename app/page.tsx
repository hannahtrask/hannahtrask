import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ChevronDown, Instagram, Mail, Sun } from 'lucide-react'

import { ServiceGrid } from '../components/service-grid'
import { ParallaxHeroImage } from '../components/parallax-hero-image'
import { ContactForm } from '../components/contact-form'
import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'
import { TestimonialStrip } from '../components/testimonial-strip'
import { TypewriterTitle } from '../components/typewriter-title'
import { testimonialsClient } from '../sanity/client'
import { allTestimonialsQuery } from '../sanity/queries'
import type { Testimonial } from '../sanity/types'

export const metadata: Metadata = {
  title:
    'Web design and content for passionate people: outfitters, outdoor brands, and local businesses who need a site and a story, not just a template.',
  description:
    'Sagebrush Web Studio designs and builds authentic websites for outdoor brands, creative studios, and service businesses that want a clear and memorable online presence.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sagebrush Web Studio',
    description:
      'Sagebrush Web Studio designs and builds authentic websites for outdoor brands, creative studios, and service businesses that want a clear and memorable online presence.',
    images: ['/site-title/SagebrushSecondaryLogo-07.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagebrush Web Studio',
    description:
      'Sagebrush Web Studio designs and builds authentic websites for outdoor brands, creative studios, and service businesses that want a clear and memorable online presence.',
    images: ['/site-title/SagebrushSecondaryLogo-07.png'],
  },
}

export const revalidate = 300

const serviceTiles: Array<{
  title: string
  eyebrow: string
  description: string
  tone: 'light' | 'dark'
}> = [
  {
    title: 'Squarespace',
    eyebrow: 'website in a week',
    description: 'Fast launches with a clean process and a polished finish.',
    tone: 'light',
  },
  {
    title: 'Shopify',
    eyebrow: 'e-commerce',
    description:
      'Inventory management and beautiful storefronts in Liquid templating language.',
    tone: 'dark',
  },
  {
    title: 'Content & Site Management',
    eyebrow: 'management',
    description:
      'Offload the responsibility of blog posts and content updates to us.',
    tone: 'light',
  },
  {
    title: 'Support',
    eyebrow: 'ongoing care',
    description: 'Updates and maintenance after launch so things stay current.',
    tone: 'light',
  },
  {
    title: 'WordPress',
    eyebrow: 'content rich',
    description:
      'Flexible systems for blogs, resources, and growing libraries.',
    tone: 'light',
  },
  {
    title: 'Wix',
    eyebrow: 'easy edits',
    description:
      'Simple websites built so you can update them with confidence.',
    tone: 'dark',
  },
]

export default async function Home() {
  let testimonials: Testimonial[] = []

  try {
    testimonials = await testimonialsClient.fetch(allTestimonialsQuery)
  } catch (error) {
    console.error('Failed to fetch testimonials from Sanity:', error)
  }

  return (
    <main className='bg-sand-50 text-graphite'>
      <section className='relative isolate min-h-[76svh] overflow-hidden sm:min-h-[100svh]'>
        <ParallaxHeroImage
          src='/hero-images/elk-background.jpg'
          alt='Sweeping western landscape'
          priority
          sizes='100vw'
          className='object-cover object-center'
          speed={0.16}
        />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,245,224,0.28),_transparent_38%),linear-gradient(180deg,rgba(21,18,14,0.38)_0%,rgba(34,27,18,0.18)_38%,rgba(236,217,185,0.96)_100%)]' />

        <SiteHeader />

        <div className='relative z-10 mx-auto flex min-h-[76svh] max-w-7xl flex-col items-center justify-start px-4 pb-20 pt-24 text-center sm:min-h-[100svh] sm:px-6 sm:pb-28 sm:pt-36 lg:px-8 lg:pt-40'>
          <p className='font-first-rodeo text-[0.95rem] uppercase tracking-[0.4em] text-sand-50/90 sm:text-[1.05rem]'>
            build an authentic online presence
          </p>
          <TypewriterTitle
            text='Sagebrush Web Studio'
            className='mt-6 max-w-5xl text-balance font-miroa text-3xl uppercase leading-[0.9] tracking-[0.08em] text-sand-50 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:text-5xl lg:text-[5.75rem]'
          />
          <p className='mt-6 max-w-2xl text-pretty text-sm leading-7 text-graphite/80 sm:text-base'>
            A grounded digital home for independent brands, outdoor companies,
            and creative teams who want a site that feels clear, warm, and
            unmistakably theirs.
          </p>
          <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row'>
            <Link
              href='/services'
              className='inline-flex items-center gap-2 rounded-full border border-graphite/30 bg-[#333520] px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-sand-50 transition hover:-translate-y-0.5 hover:border-[#8799a7] hover:bg-[#8799a7]'
            >
              View Services
              <ArrowUpRight className='h-4 w-4' />
            </Link>
            <Link
              href='#contact'
              className='inline-flex items-center gap-2 rounded-full border border-graphite/20 bg-sand-50/55 px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-graphite backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#8799a7] hover:bg-[#8799a7] hover:text-sand-50'
            >
              Start a Project
              <ChevronDown className='h-4 w-4' />
            </Link>
          </div>
        </div>

        <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sand-50 via-sand-50/90 to-transparent' />
      </section>

      <section className='relative overflow-hidden bg-sand-50 px-4 pb-8 pt-10 sm:px-6 sm:pt-14 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start'>
            <div>
              <h2 className='mt-4 max-w-2xl font-miroa text-3xl uppercase leading-tight tracking-[0.08em] text-graphite sm:text-4xl'>
                Any of this sound familiar?
              </h2>
              <ul className='mt-6 grid gap-4 sm:grid-cols-2'>
                {[
                  'You wince a little every time you have to send someone your website link.',
                  'Your site looked pretty good ... in 2019.',
                  'People search for what you do, land on a competitor, and choose them because their site looks better.',
                  'Updating your site is an afterthought and has stayed the same for way too long.',
                  'Your website was never really the priority. It was just something you needed to check off the list.',
                ].map(item => (
                  <li key={item} className='flex items-start gap-3'>
                    <Sun
                      className='mt-1 h-4 w-4 shrink-0 text-[#8b7651]'
                      aria-hidden='true'
                    />
                    <p className='text-sm leading-6 text-graphite/80'>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <aside className='rounded-[1.5rem] border border-[#8b7651]/35 bg-[#efe3cd] p-6 shadow-[0_14px_36px_rgba(92,70,39,0.16)] sm:p-8'>
              <p className='font-first-rodeo text-[0.72rem] uppercase tracking-[0.32em] text-[#5f5136]'>
                you&apos;re in the right place
              </p>
              <p className='mt-4 text-sm leading-7 text-graphite/82 sm:text-base'>
                I build and update sites for outdoor brands, guides, nonprofits,
                and small businesses who are great at what they do and tired of
                having a website that doesn&apos;t show it.
              </p>
              <div className='mt-6 h-px w-full bg-[#8b7651]/35' />
              <p className='mt-6 font-first-rodeo text-[0.66rem] uppercase tracking-[0.3em] text-[#5f5136]'>
                what&apos;s in it for you?
              </p>
              <p className='mt-3 text-sm leading-7 text-graphite/80'>
                You&apos;ll end up with a website you&apos;re proud to share,
                fully up to date, easily found by search engines, and a web
                presence that earns trust before you ever even talk to a client
                or customer.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section
        id='services-section'
        className='relative overflow-hidden bg-sand-50 py-4 sm:py-4'
      >
        <div className='mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-8 lg:px-8'>
          <div className='mx-auto mb-7 max-w-4xl text-center sm:mb-10'>
            <p className='font-first-rodeo text-[0.8rem] uppercase tracking-[0.38em] text-graphite/60'>
              services
            </p>
            <h2 className='mt-4 font-miroa text-4xl uppercase leading-tight tracking-[0.08em] text-graphite sm:text-5xl'>
              So, what do we do?
            </h2>
            <p className='mx-auto mt-4 max-w-3xl text-sm leading-7 text-graphite/72 sm:mt-5 sm:text-base'>
              Web development! Web design! Copywriting and content management!
              SEO/AIO/GEO! Curious if I can help you? Fill out the contact form{' '}
              <a
                className='text-graphite/80 underline hover:text-graphite font-w-800'
                href='#contact'
              >
                here
              </a>
              .
            </p>
          </div>
        </div>

        <ServiceGrid serviceTiles={serviceTiles} />
      </section>

      <div className='h-24 w-full bg-gradient-to-b from-sand-50 to-[#c9bea8]' />

      <section
        id='about-section'
        className='relative overflow-hidden bg-[#c9bea8] px-4 py-24 sm:px-6 lg:px-8'
      >
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
          <div className='order-2 lg:order-1'>
            <div className='mx-auto flex max-w-[38rem] flex-col items-center'>
              <div className='relative h-56 w-56 overflow-hidden rounded-full border border-graphite/20 shadow-[0_16px_40px_rgba(61,45,28,0.24)] sm:h-64 sm:w-64'>
                <Image
                  src='/hannah.JPG'
                  alt='Portrait of Hannah'
                  fill
                  sizes='(min-width: 640px) 16rem, 14rem'
                  className='object-cover'
                />
              </div>
              <p className='mt-5 text-center font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] text-graphite/70'>
                founder / owner / designer
              </p>
              <p className='mt-4 max-w-md text-center text-sm leading-7 text-graphite/75 sm:text-base'>
                I have 6+ years of experience in web development and design
                across all platforms from Shopify to Squarespace and am an
                outdoor enthusiast (catch me on a remote river or trail
                running).
              </p>
              <p className='mt-4 max-w-md text-center text-sm leading-7 text-graphite/75 sm:text-base'>
                Everyone has a story (as does your business!) and I&apos;ll help
                you tell yours.
              </p>
            </div>
          </div>

          <div className='order-1 max-w-2xl lg:order-2'>
            <p className='font-first-rodeo text-[0.8rem] uppercase tracking-[0.4em] text-graphite/60'>
              about
            </p>
            <h2 className='mt-4 font-miroa text-4xl uppercase leading-tight tracking-[0.08em] text-graphite sm:text-5xl'>
              hi, i&apos;m hannah.
            </h2>
            <div className='mt-8 space-y-5 text-sm leading-7 text-graphite/78 sm:text-base'>
              <p>
                I call Jackson, WY, my homebase (but I&apos;m from the suburbs
                of Pennsylvania). I have over 6 years of experience in the web
                world, and spent 3 years working remotely for a tech startup
                based out of California. I LOVED how much I learned, but I was
                missing the connection I had with my community.
              </p>
              <p>
                I quit my job to start Sagebrush Web Studio to connect with
                passionate people and organizations. I love to see people
                pursuing their dreams and choosing a more fulfilling path, and I
                want to help.
              </p>
              <p>
                Support from someone who truly does care about what you&apos;re
                doing and about mission-driven work. The rising tide raises all
                boats, so let&apos;s do it together.
              </p>
            </div>
            <div className='mt-10 flex flex-wrap gap-3'>
              {[
                'Squarespace',
                'Wix',
                'WordPress',
                'Shopify',
                'Custom',
                'Design Day',
                'Support',
              ].map(item => (
                <span
                  key={item}
                  className='rounded-full border border-graphite/15 bg-sand-50/60 px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-graphite/80'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialStrip testimonials={testimonials} />

      <section
        id='contact'
        className='relative isolate flex min-h-[92svh] flex-col overflow-hidden bg-[#333520] px-4 pt-10 pb-0 text-sand-50 sm:px-6 lg:px-8'
      >
        <Image
          src='/hero-images/grand-teton.jpg'
          alt='Mountain landscape at sunset'
          fill
          sizes='100vw'
          className='object-cover object-center opacity-35'
        />
        <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(35,37,29,0.54)_0%,rgba(35,37,29,0.82)_52%,rgba(23,24,19,0.96)_82%,rgba(23,24,19,1)_100%)]' />
        <div className='absolute inset-x-0 bottom-0 z-0 h-96 bg-[linear-gradient(0deg,rgba(23,24,19,1)_0%,rgba(23,24,19,0.98)_14%,rgba(23,24,19,0.9)_30%,rgba(23,24,19,0.74)_48%,rgba(23,24,19,0.5)_66%,rgba(23,24,19,0.22)_84%,rgba(23,24,19,0)_100%)]' />

        <div className='relative mx-auto grid w-full max-w-7xl flex-1 gap-12 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end'>
          <div>
            <p className='font-first-rodeo text-[0.8rem] uppercase tracking-[0.38em] text-sand-100/80'>
              contact
            </p>
            <h2 className='mt-4 max-w-lg font-miroa text-4xl uppercase leading-tight tracking-[0.08em] text-sand-50 sm:text-5xl'>
              get in touch
            </h2>
            <p className='mt-5 max-w-xl text-sm leading-7 text-sand-100/75 sm:text-base'>
              In an era where most of us don&apos;t have brick and mortar
              storefronts, your website is SO important. It&apos;s the first
              impression for your business, and it should feel like you.
            </p>
            <p className='mt-5 max-w-xl text-sm leading-7 text-sand-100/75 sm:text-base'>
              I build websites that feel authentic, clear, and trustworthy. If
              you&apos;re ready to get started, reach out and we can talk about
              your project.
            </p>

            <div className='mt-8 flex flex-col gap-3 text-sm text-sand-50/90'>
              <Link
                href='mailto:hello@wearesagebrush.com'
                className='inline-flex w-fit items-center gap-3 rounded-full border border-sand-50/20 bg-sand-50/8 px-5 py-3 transition hover:border-[#8799a7] hover:bg-[#8799a7]'
              >
                <Mail className='h-4 w-4' />
                hello@wearesagebrush.com
              </Link>
              <Link
                href='https://instagram.com/sagebrushwebstudio'
                target='_blank'
                rel='noreferrer'
                className='inline-flex w-fit items-center gap-3 rounded-full border border-sand-50/20 bg-sand-50/8 px-5 py-3 transition hover:border-[#8799a7] hover:bg-[#8799a7]'
              >
                <Instagram className='h-4 w-4' />
                @sagebrushwebstudio
              </Link>
              <Link
                href='tel:+13072260740'
                aria-label='Call 307 226 0740'
                className='inline-flex w-fit items-center gap-3 rounded-full border border-sand-50/20 bg-sand-50/8 px-5 py-3 transition hover:border-[#8799a7] hover:bg-[#8799a7]'
              >
                <svg
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.9'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 2.18 2 2 0 0 1 4.1 0h2a2 2 0 0 1 2 1.72c.12.92.33 1.81.63 2.67a2 2 0 0 1-.45 2.11L7.38 7.7a16 16 0 0 0 6.92 6.92l1.2-1.2a2 2 0 0 1 2.11-.45c.86.3 1.75.51 2.67.63A2 2 0 0 1 22 16.92Z' />
                </svg>
                307 226 0740
              </Link>
            </div>
          </div>

          <div className='rounded-[2rem] border border-sand-50/10 bg-sand-50/8 p-6 backdrop-blur-sm sm:p-8'>
            <p className='font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] text-sand-100/75'>
              get in touch
            </p>
            <h3 className='mt-3 max-w-lg font-miroa text-3xl uppercase leading-tight tracking-[0.08em] text-sand-50'>
              want to chat?
            </h3>
            <p className='mt-3 max-w-xl text-sm leading-7 text-sand-100/75'>
              Send me a note.
            </p>

            <div className='mt-6'>
              <ContactForm />
            </div>
          </div>
        </div>

        <SiteFooter />
      </section>
    </main>
  )
}
