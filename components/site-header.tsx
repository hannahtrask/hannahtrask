import Image from 'next/image'
import Link from 'next/link'

import { Instagram, Mail, Phone } from 'lucide-react'

const headerLinks = [
  { label: 'About', href: '#about-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className='relative z-20 w-full'>
      <div className='mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8'>
        <div className='relative flex flex-col items-center gap-4 pt-2 md:pt-0'>
          <div className='absolute right-0 top-0 flex items-center gap-2 text-sand-50'>
            <Link
              href='tel:+13072260740'
              aria-label='Call 307 226 0740'
              className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-50/30 bg-black/10 backdrop-blur-sm transition hover:border-sand-50 hover:bg-sand-50 hover:text-graphite'
            >
              <Phone className='h-4 w-4' />
            </Link>
            <Link
              href='https://instagram.com/sagebrushwebstudio'
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram @sagebrushwebstudio'
              className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-50/30 bg-black/10 backdrop-blur-sm transition hover:border-sand-50 hover:bg-sand-50 hover:text-graphite'
            >
              <Instagram className='h-4 w-4' />
            </Link>
            <Link
              href='mailto:hello@wearesagebrush.com'
              aria-label='Email hello@wearesagebrush.com'
              className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-50/30 bg-black/10 backdrop-blur-sm transition hover:border-sand-50 hover:bg-sand-50 hover:text-graphite'
            >
              <Mail className='h-4 w-4' />
            </Link>
          </div>

          <Link
            href='/'
            className='flex items-center justify-center'
            aria-label='Sagebrush Web Studio home'
          >
            <Image
              src='/site-title/SagebrushSecondaryLogo-07.png'
              alt='Sagebrush Web Studio secondary logo'
              width={120}
              height={56}
              className='h-auto object-contain'
              priority
            />
          </Link>

          <nav
            aria-label='Primary'
            className='flex items-center gap-6 sm:gap-8'
          >
            {headerLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className='font-first-rodeo text-[0.75rem] uppercase tracking-[0.3em] text-sand-50/90 transition hover:text-sand-50 sm:text-[0.8rem] sm:tracking-[0.34em]'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
