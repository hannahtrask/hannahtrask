'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-40 border-b-[3px] border-[#8c7e49] bg-[#ECD9B9] py-4'>
      <div className='container mx-auto px-4 text-md mid:text-base'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='relative h-24 w-56'>
            <Image
              src='/site-title/SagebrushPrimaryLogo-01.png'
              alt='Sagebrush Web Studio'
              fill
              className='object-contain'
            />
          </Link>

          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/services'
              className='font-first-rodeo text-base tracking-wide text-[#8C7E49] transition-colors hover:text-[#33352a]'
            >
              services
            </Link>
            <Link
              href='/contact'
              className='font-first-rodeo text-base tracking-wide text-[#8C7E49] transition-colors hover:text-[#33352a]'
            >
              contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className='flex items-center md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='ml-2 p-2 text-[#33352a]'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Under Construction Mode */}
        {isMenuOpen && (
          <nav className='mt-4 space-y-6 rounded-md bg-[#ecd9b9] py-6 shadow-lg md:hidden'>
            <Link
              href='/'
              className='block px-4 font-first-rodeo text-base tracking-wide text-[#33352a] hover:text-[#f09664]'
              onClick={() => setIsMenuOpen(false)}
            >
              home
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
