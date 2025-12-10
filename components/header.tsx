'use client'

import Link from 'next/link'
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
          <Link
            href='/'
            className={`text-2xl font-cormorant-sc font-semibold tracking-wide transition-colors ${
              isScrolled ? 'text-desert-800 dark:text-white' : 'text-white'
            }`}
          >
            <strong>SAGEBRUSH CREATIVE</strong>
          </Link>

          {/* Desktop Navigation */}
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
              href='/work'
              className={`text-base tracking-wide transition-colors ${
                isScrolled
                  ? 'text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              WORK
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden py-6 space-y-6 mt-4 bg-white dark:bg-gray-900 rounded-md shadow-lg'>
            <Link
              href='/'
              className='block px-4 text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white text-base tracking-wide'
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/work'
              className='block px-4 text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white text-base tracking-wide'
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
