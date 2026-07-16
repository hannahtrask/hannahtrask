import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { label: 'About', href: '/#about-section' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteFooter() {
  return (
    <footer className='relative mt-auto w-full overflow-hidden border-t border-sand-50/10 bg-[#171813] px-4 pt-10 pb-10 text-sm text-sand-100/75 sm:px-6 lg:px-8'>
      <div className='relative mx-auto w-full max-w-7xl pt-8'>
        <div className='flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between'>
          <Link href='/' aria-label='Sagebrush Web Studio home'>
            <div className='relative h-12 w-[12.5rem] opacity-95 sm:h-14 sm:w-[15rem] md:h-14 md:w-[17rem]'>
              <Image
                src='/site-title/SagebrushPrimaryLogo-03.png'
                alt='Sagebrush Web Studio primary logo'
                fill
                sizes='(min-width: 768px) 17rem, (min-width: 640px) 15rem, 12.5rem'
                className='object-contain'
              />
            </div>
          </Link>
          <div className='flex flex-wrap items-center gap-5'>
            {footerLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className='transition hover:text-sand-50'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className='mt-8 text-center text-[0.65rem] uppercase tracking-[0.28em] text-sand-100/45 sm:text-[0.7rem]'>
          Sun and Sagebrush LLC © 2026
        </p>
      </div>
    </footer>
  )
}
