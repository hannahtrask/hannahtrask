import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { label: 'About', href: '#about-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className='relative mt-auto w-full overflow-hidden bg-[#171813] px-4 pt-10 pb-10 text-sm text-sand-100/75 sm:px-6 lg:px-8'>
      <div className='relative mx-auto w-full max-w-7xl border-t border-sand-50/10 pt-8'>
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <Image
            src='/site-title/SagebrushSecondaryLogo-07.png'
            alt='Sagebrush Web Studio secondary logo'
            width={170}
            height={72}
            className='h-9 w-auto opacity-95'
          />
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
      </div>
    </footer>
  )
}
