import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ChevronDown, Instagram, Mail } from 'lucide-react'

import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'

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
    title: 'Wix',
    eyebrow: 'easy edits',
    description:
      'Simple websites built so you can update them with confidence.',
    tone: 'dark',
  },
  {
    title: 'WordPress',
    eyebrow: 'content rich',
    description:
      'Flexible systems for blogs, resources, and growing libraries.',
    tone: 'light',
  },
  {
    title: 'Shopify',
    eyebrow: 'e-commerce',
    description:
      'Product pages and storefronts built to feel clear and trustworthy.',
    tone: 'dark',
  },
  {
    title: 'Custom',
    eyebrow: 'tailored build',
    description:
      'Fully custom sites when the off-the-shelf path is not enough.',
    tone: 'light',
  },
  {
    title: 'Design Day',
    eyebrow: 'one day sprint',
    description:
      'A focused work session to clear your todo list in a single day.',
    tone: 'dark',
  },
  {
    title: 'Support',
    eyebrow: 'ongoing care',
    description:
      'Light updates and maintenance after launch so things stay current.',
    tone: 'light',
  },
]

function HoneycombTile({
  title,
  eyebrow,
  description,
  tone,
}: {
  title: string
  eyebrow: string
  description: string
  tone: 'light' | 'dark'
}) {
  const toneClass = tone === 'light' ? 'text-graphite' : 'text-sand-50'

  return (
    <article className='group relative w-full'>
      <div className={`honeycomb-hex ${toneClass} group-hover:-translate-y-1`}>
        <div
          className={`honeycomb-hex-fill ${tone === 'light' ? 'bg-[#f6f1e7]' : 'bg-graphite'}`}
        />
        <div className='honeycomb-hex-content'>
          <p className='font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] opacity-70'>
            {eyebrow}
          </p>
          <h3 className='mt-3 font-miroa text-[1.55rem] uppercase leading-[0.9] tracking-[0.08em] sm:text-[1.95rem]'>
            {title}
          </h3>
          <p className='mx-auto mt-3 max-w-[11rem] text-[0.9rem] leading-5 opacity-80'>
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function Home() {
  return (
    <main className='bg-sand-50 text-graphite'>
      <section className='relative isolate min-h-[100svh] overflow-hidden'>
        <Image
          src='/hero-images/western-backdrop.jpg'
          alt='Sweeping western landscape'
          fill
          priority
          sizes='100vw'
          className='object-cover object-center'
        />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,245,224,0.28),_transparent_38%),linear-gradient(180deg,rgba(21,18,14,0.38)_0%,rgba(34,27,18,0.18)_38%,rgba(236,217,185,0.96)_100%)]' />

        <SiteHeader />

        <div className='relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-start px-4 pb-28 pt-32 text-center sm:px-6 sm:pt-36 lg:px-8 lg:pt-40'>
          <p className='font-first-rodeo text-[0.95rem] uppercase tracking-[0.4em] text-sand-50/90 sm:text-[1.05rem]'>
            build an authentic online presence
          </p>
          <h1 className='mt-6 max-w-5xl text-balance font-miroa text-3xl uppercase leading-[0.9] tracking-[0.08em] text-sand-50 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:text-5xl lg:text-[5.75rem]'>
            Sagebrush Web Studio
          </h1>
          <p className='mt-6 max-w-2xl text-pretty text-sm leading-7 text-graphite/80 sm:text-base'>
            A grounded digital home for independent brands, outdoor companies,
            and creative teams who want a site that feels clear, warm, and
            unmistakably theirs.
          </p>
          <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row'>
            <Link
              href='#services-section'
              className='inline-flex items-center gap-2 rounded-full border border-graphite/30 bg-graphite px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-sand-50 transition hover:-translate-y-0.5 hover:bg-graphite/90'
            >
              View Services
              <ArrowUpRight className='h-4 w-4' />
            </Link>
            <Link
              href='#contact'
              className='inline-flex items-center gap-2 rounded-full border border-graphite/20 bg-sand-50/55 px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-graphite backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-sand-50'
            >
              Start a Project
              <ChevronDown className='h-4 w-4' />
            </Link>
          </div>
        </div>

        <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sand-50 via-sand-50/90 to-transparent' />
      </section>

      <section
        id='services-section'
        className='relative overflow-hidden bg-sand-50 px-4 pb-28 pt-6 sm:px-6 lg:px-8'
      >
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto mb-14 max-w-4xl text-center'>
            <p className='font-first-rodeo text-[0.8rem] uppercase tracking-[0.38em] text-graphite/60'>
              services
            </p>
            <h2 className='mt-4 font-miroa text-4xl uppercase leading-tight tracking-[0.08em] text-graphite sm:text-5xl'>
              So, what do we do?
            </h2>
            <p className='mx-auto mt-5 max-w-3xl text-sm leading-7 text-graphite/72 sm:text-base'>
              No matter where you are with budget or project, we&apos;ve got
              you. Browse some of the offerings below.
            </p>
          </div>

          <div className='mx-auto flex w-full max-w-5xl justify-center px-2 sm:px-6'>
            <div className='honeycomb-layout relative w-full max-w-[980px]'>
              {serviceTiles.map((tile, index) => (
                <div
                  key={tile.title}
                  className={`honeycomb-pos honeycomb-pos-${index} absolute`}
                >
                  <HoneycombTile {...tile} />
                </div>
              ))}
              <svg
                aria-hidden='true'
                className='absolute h-0 w-0'
                width='0'
                height='0'
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
              >
                <defs>
                  <filter id='honeycomb-goo'>
                    <feGaussianBlur
                      in='SourceGraphic'
                      stdDeviation='4'
                      result='blur'
                    />
                    <feColorMatrix
                      in='blur'
                      mode='matrix'
                      values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                      result='goo'
                    />
                    <feComposite in='SourceGraphic' in2='goo' operator='atop' />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

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
                I&apos;m a web designer and developer who helps small businesses
                and creative teams build authentic websites that feel like them.
                Data drives the decisions, but design makes the experience feel
                right.
              </p>
              <p>
                The result is a site that looks intentional on day one and still
                feels flexible as your business grows.
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

      <section
        id='contact'
        className='relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-graphite px-4 pt-24 pb-0 text-sand-50 sm:px-6 lg:px-8'
      >
        <Image
          src='/hero-images/grand-teton.jpg'
          alt='Mountain landscape at sunset'
          fill
          sizes='100vw'
          className='object-cover object-center opacity-35'
        />
        <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(35,37,29,0.58)_0%,rgba(35,37,29,0.9)_70%,rgba(23,24,19,1)_100%)]' />
        <div className='absolute inset-x-0 bottom-0 z-0 h-80 bg-[linear-gradient(0deg,rgba(23,24,19,1)_0%,rgba(23,24,19,0.96)_18%,rgba(23,24,19,0.88)_38%,rgba(23,24,19,0.68)_62%,rgba(23,24,19,0.16)_84%,rgba(23,24,19,0)_100%)]' />

        <div className='relative mx-auto grid w-full max-w-7xl flex-1 gap-12 pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-end'>
          <div>
            <p className='font-first-rodeo text-[0.8rem] uppercase tracking-[0.38em] text-sand-100/80'>
              contact
            </p>
            <h2 className='mt-4 max-w-lg font-miroa text-4xl uppercase leading-tight tracking-[0.08em] text-sand-50 sm:text-5xl'>
              build a web presence you&apos;re proud of
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
                className='inline-flex w-fit items-center gap-3 rounded-full border border-sand-50/20 bg-sand-50/8 px-5 py-3 transition hover:border-sand-50/50 hover:bg-sand-50/12'
              >
                <Mail className='h-4 w-4' />
                hello@wearesagebrush.com
              </Link>
              <Link
                href='https://instagram.com/sagebrushwebstudio'
                target='_blank'
                rel='noreferrer'
                className='inline-flex w-fit items-center gap-3 rounded-full border border-sand-50/20 bg-sand-50/8 px-5 py-3 transition hover:border-sand-50/50 hover:bg-sand-50/12'
              >
                <Instagram className='h-4 w-4' />
                @sagebrushwebstudio
              </Link>
              <Link
                href='tel:+13072260740'
                aria-label='Call 307 226 0740'
                className='inline-flex w-fit items-center gap-3 rounded-full border border-sand-50/20 bg-sand-50/8 px-5 py-3 transition hover:border-sand-50/50 hover:bg-sand-50/12'
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
            <div className='grid gap-6 sm:grid-cols-2'>
              <div>
                <p className='font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] text-sand-100/75'>
                  What you get
                </p>
                <ul className='mt-4 space-y-3 text-sm leading-7 text-sand-50/80'>
                  <li>Working with a real person</li>
                  <li>Copy and messaging that feels authentic to you</li>
                  <li>Suped up SEO/AIO/GEO so you are actually found online</li>
                  <li>A web presence you're proud of</li>
                </ul>
              </div>
              <div>
                <p className='font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] text-sand-100/75'>
                  Best fit
                </p>
                <ul className='mt-4 space-y-3 text-sm leading-7 text-sand-50/80'>
                  <li>Outdoor brands</li>
                  <li>Creative studios</li>
                  <li>Service businesses</li>
                  <li>Small teams with a sharp point of view</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <SiteFooter />
      </section>
    </main>
  )
}
