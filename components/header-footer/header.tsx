'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className='fixed top-0 left-0 right-0 z-40 border-b-[3px] border-[#8c7e49] bg-[#ECD9B9] py-2 sm:py-3 md:py-4'>
      <div className='container mx-auto px-4 text-md mid:text-base'>
        <div className='flex items-center justify-between'>
          <Link
            href='/'
            className='relative h-16 w-40 sm:h-20 sm:w-48 md:h-24 md:w-56'
          >
            <Image
              src='/site-title/SagebrushPrimaryLogo-01.png'
              alt='Sagebrush Web Studio'
              fill
              className='object-contain'
            />
          </Link>

          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/about'
              className='font-first-rodeo text-base tracking-wide text-[#8C7E49] hover:text-[#33352a]'
            >
              about
            </Link>
            <Link
              href='/services'
              className='font-first-rodeo text-base tracking-wide text-[#8C7E49] hover:text-[#33352a]'
            >
              services
            </Link>
            <Link
              href='/contact'
              className='font-first-rodeo text-base tracking-wide text-[#8C7E49] hover:text-[#33352a]'
            >
              contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className='flex items-center md:hidden'>
            <button
              type='button'
              aria-label='Toggle navigation menu'
              aria-expanded={isMenuOpen}
              aria-controls='mobile-nav'
              onClick={() => setIsMenuOpen(current => !current)}
              className='ml-2 p-2 text-[#33352a] bg-transparent'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id='mobile-nav'
            className='absolute left-0 right-0 top-full z-50 mt-2 space-y-6 border-y border-[#8c7e49]/30 bg-[#ecd9b9] py-6 shadow-lg md:hidden'
          >
            <Link
              href='/'
              className='block px-4 font-first-rodeo text-base tracking-wide text-[#33352a] hover:text-[#f09664]'
              onClick={() => setIsMenuOpen(false)}
            >
              home
            </Link>
            <Link
              href='/about'
              className='block px-4 font-first-rodeo text-base tracking-wide text-[#33352a] hover:text-[#f09664]'
              onClick={() => setIsMenuOpen(false)}
            >
              about
            </Link>
            <Link
              href='/services'
              className='block px-4 font-first-rodeo text-base tracking-wide text-[#33352a] hover:text-[#f09664]'
              onClick={() => setIsMenuOpen(false)}
            >
              services
            </Link>
            <Link
              href='/contact'
              className='block px-4 font-first-rodeo text-base tracking-wide text-[#33352a] hover:text-[#f09664]'
              onClick={() => setIsMenuOpen(false)}
            >
              contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
