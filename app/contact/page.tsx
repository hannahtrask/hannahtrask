import type { Metadata } from 'next'
import Link from 'next/link'
import { Instagram, Mail } from 'lucide-react'

import { ContactForm } from '../../components/contact-form'
import { SiteFooter } from '../../components/site-footer'
import { SiteHeader } from '../../components/site-header'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact | Sagebrush Web Studio',
  },
  description:
    'Reach out to Sagebrush Web Studio for websites, copy, and SEO support in Jackson Hole and Teton County.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Sagebrush Web Studio',
    description:
      'Reach out to Sagebrush Web Studio for websites, copy, and SEO support in Jackson Hole and Teton County.',
    images: ['/site-title/SagebrushSecondaryLogo-07.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Sagebrush Web Studio',
    description:
      'Reach out to Sagebrush Web Studio for websites, copy, and SEO support in Jackson Hole and Teton County.',
    images: ['/site-title/SagebrushSecondaryLogo-07.png'],
  },
}

export default function ContactPage() {
  return (
    <main className='bg-sand-50 text-graphite'>
      <section className='bg-sand-50 px-4 pb-20 pt-8 sm:px-6 lg:px-8'>
        <SiteHeader />

        <div className='mx-auto mt-10 w-full max-w-4xl'>
          <p className='font-first-rodeo text-[0.8rem] uppercase tracking-[0.38em] text-graphite/60'>
            contact
          </p>
          <h1 className='mt-4 font-miroa text-4xl uppercase leading-tight tracking-[0.08em] text-graphite sm:text-5xl'>
            let&apos;s connect
          </h1>
          <p className='mt-5 max-w-2xl text-base leading-8 text-graphite/75 sm:text-lg'>
            Tell me about your project and I&apos;ll follow up as soon as I can.
          </p>

          <div className='mt-8 flex flex-col gap-3 text-base text-graphite/85'>
            <Link
              href='mailto:hello@wearesagebrush.com'
              className='inline-flex w-fit items-center gap-3 rounded-full border border-graphite/15 bg-sand-50 px-5 py-3 transition hover:border-[#8799a7] hover:bg-[#8799a7] hover:text-sand-50'
            >
              <Mail className='h-4 w-4' />
              hello@wearesagebrush.com
            </Link>
            <Link
              href='https://instagram.com/sagebrushwebstudio'
              target='_blank'
              rel='noreferrer'
              className='inline-flex w-fit items-center gap-3 rounded-full border border-graphite/15 bg-sand-50 px-5 py-3 transition hover:border-[#8799a7] hover:bg-[#8799a7] hover:text-sand-50'
            >
              <Instagram className='h-4 w-4' />
              @sagebrushwebstudio
            </Link>
          </div>

          <div className='mt-10 rounded-[2rem] border border-graphite/12 bg-[#f6f1e7] p-6 sm:p-8'>
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
