'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'top-0 py-4 bg-white/90 dark:bg-desert-900/90 backdrop-blur-md shadow-sm'
          : 'top-0 py-6 bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4 text-md mid:text-base'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='relative h-10 w-56'>
            <Image
              src='/site-title/site-title-light.png'
              alt='Sagebrush Studio'
              fill
              className={`object-contain transition-opacity duration-300 ${
                isScrolled ? 'opacity-0 dark:opacity-100' : 'opacity-100'
              }`}
            />
            <Image
              src='/site-title/site-title-dark.png'
              alt='Sagebrush Studio'
              fill
              className={`object-contain transition-opacity duration-300 ${
                isScrolled ? 'opacity-100 dark:opacity-0' : 'opacity-0'
              }`}
            />
          </Link>

          {/* Desktop Navigation - Under Construction Mode */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className={`text-base tracking-wide transition-colors ${
                isScrolled
                  ? 'text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              home
            </Link>
            <Link
              href='/services'
              className={`text-base tracking-wide transition-colors ${
                isScrolled
                  ? 'text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              services
            </Link>
            <Link
              href='/case-studies'
              className={`text-base tracking-wide transition-colors ${
                isScrolled
                  ? 'text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              projects
            </Link>
            <Link
              href='/contact'
              className={`text-base tracking-wide transition-colors ${
                isScrolled
                  ? 'text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className='flex items-center md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`ml-2 p-2 ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Under Construction Mode */}
        {isMenuOpen && (
          <nav className='md:hidden py-6 space-y-6 mt-4 bg-white dark:bg-gray-900 rounded-md shadow-lg'>
            <Link
              href='/'
              className='block px-4 text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white text-base tracking-wide'
              onClick={() => setIsMenuOpen(false)}
            >
              home
            </Link>
            <Link
              href='/services'
              className='block px-4 text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white text-base tracking-wide'
              onClick={() => setIsMenuOpen(false)}
            >
              services
            </Link>
            <Link
              href='/case-studies'
              className='block px-4 text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white text-base tracking-wide'
              onClick={() => setIsMenuOpen(false)}
            >
              case studies
            </Link>
            <Link
              href='/contact'
              className='block px-4 text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white text-base tracking-wide'
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
