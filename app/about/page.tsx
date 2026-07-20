import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Mail } from 'lucide-react'

import { ContactForm } from '../../components/contact-form'
import { SiteFooter } from '../../components/site-footer'
import { SiteHeader } from '../../components/site-header'

export const metadata: Metadata = {
  title: {
    absolute: 'About | Sagebrush Web Studio',
  },
  description:
    'Meet Hannah and learn the story behind Sagebrush Web Studio, a web design studio for thoughtful brands and small businesses.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | Sagebrush Web Studio',
    description:
      'Meet Hannah and learn the story behind Sagebrush Web Studio, a web design studio for thoughtful brands and small businesses.',
    images: ['/site-title/SagebrushSecondaryLogo-07.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Sagebrush Web Studio',
    description:
      'Meet Hannah and learn the story behind Sagebrush Web Studio, a web design studio for thoughtful brands and small businesses.',
    images: ['/site-title/SagebrushSecondaryLogo-07.png'],
  },
}

export default function AboutPage() {
  return (
    <main className='bg-sand-50 text-graphite'>
      <section className='relative overflow-hidden bg-[#c9bea8] px-4 py-24 sm:px-6 lg:px-8'>
        <SiteHeader />

        <div className='mx-auto flex w-full max-w-4xl flex-col items-center gap-10 pt-12 lg:pt-16'>
          <div className='mx-auto flex w-full max-w-[38rem] flex-col items-center'>
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
            <p className='mt-4 max-w-xl text-center text-base leading-8 text-graphite/75 sm:text-lg'>
              I have 6+ years of experience in web development and design across
              all platforms from Shopify to Squarespace and am an outdoor
              enthusiast (catch me on a remote river or trail running).
            </p>
            <p className='mt-4 max-w-xl text-center text-base leading-8 text-graphite/75 sm:text-lg'>
              Everyone has a story (as does your business!) and I&apos;ll help
              you tell yours.
            </p>
          </div>

          <div className='w-full text-center'>
            <p className='font-first-rodeo text-[0.8rem] uppercase tracking-[0.4em] text-graphite/60'>
              about
            </p>
            <h1 className='mt-4 font-miroa text-4xl uppercase leading-tight tracking-[0.08em] text-graphite sm:text-5xl'>
              hi, i&apos;m hannah.
            </h1>
            <div className='mt-8 space-y-5 text-base leading-8 text-graphite/78 sm:text-lg text-left'>
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
                boats, and I&apos;d love to build this with you.
              </p>
            </div>
            <div className='mt-10 flex flex-wrap justify-center gap-3'>
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
            <p className='mt-5 max-w-xl text-base leading-8 text-sand-100/75 sm:text-lg'>
              In an era where most people don&apos;t have brick and mortar
              storefronts, your website is SO important. It&apos;s the first
              impression for your business, and it should feel like you.
            </p>
            <p className='mt-5 max-w-xl text-base leading-8 text-sand-100/75 sm:text-lg'>
              I build websites that feel authentic, clear, and trustworthy. If
              you&apos;re ready to get started, reach out and I can talk about
              your project.
            </p>

            <div className='mt-8 flex flex-col gap-3 text-base text-sand-50/90'>
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
            <p className='mt-3 max-w-xl text-base leading-8 text-sand-100/75'>
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
