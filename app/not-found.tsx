import Image from 'next/image'
import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'

import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'

export default function NotFound() {
  return (
    <main className='bg-sand-50 text-graphite'>
      <section className='relative isolate min-h-[100svh] overflow-hidden bg-[#f6f1e7]'>
        <Image
          src='/hero-images/western-backdrop.jpg'
          alt='Sweeping western landscape'
          fill
          priority
          sizes='100vw'
          className='object-cover object-center'
        />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,245,224,0.26),_transparent_38%),linear-gradient(180deg,rgba(21,18,14,0.42)_0%,rgba(34,27,18,0.2)_40%,rgba(23,24,19,0.94)_100%)]' />
        <div className='absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(0deg,rgba(23,24,19,1)_0%,rgba(23,24,19,0.96)_18%,rgba(23,24,19,0.82)_42%,rgba(23,24,19,0.5)_68%,rgba(23,24,19,0.16)_88%,rgba(23,24,19,0)_100%)]' />

        <SiteHeader />

        <div className='relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8'>
          <p className='font-first-rodeo text-[0.9rem] uppercase tracking-[0.38em] text-sand-50/90 sm:text-[1rem]'>
            404
          </p>
          <h1 className='mt-6 max-w-4xl text-balance font-miroa text-4xl uppercase leading-[0.9] tracking-[0.08em] text-sand-50 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:text-5xl lg:text-[5rem]'>
            looks like you wandered off
          </h1>
          <p className='mt-6 max-w-2xl text-pretty text-sm leading-7 text-sand-100/80 sm:text-base'>
            I support some wandering, though. The page you&apos;re looking for
            doesn&apos;t exist, but when you&apos;re ready to head home, the way
            is below.
          </p>

          <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 rounded-full border border-sand-50/20 bg-sand-50/10 px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-sand-50 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#8799a7] hover:bg-[#8799a7]'
            >
              Head Home
              <ArrowUpRight className='h-4 w-4' />
            </Link>
            <Link
              href='/services'
              className='inline-flex items-center gap-2 rounded-full border border-sand-50/20 bg-sand-50/10 px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-sand-50 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#8799a7] hover:bg-[#8799a7]'
            >
              View Services
              <ArrowUpRight className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
