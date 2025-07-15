'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './mode-toggle'

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
            className={`text-2xl font-julius-sans-one font-semibold tracking-wide transition-colors ${
              isScrolled ? 'text-desert-800 dark:text-white' : 'text-white'
            }`}
          >
            SUN & SAGEBRUSH CREATIVE
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
              HOME
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
            <Link
              href='/services'
              className={`text-base tracking-wide transition-colors ${
                isScrolled
                  ? 'text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              SERVICES
            </Link>
            <Link
              href='/contact'
              className={`text-base tracking-wide transition-colors ${
                isScrolled
                  ? 'text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              CONTACT
            </Link>
            <ModeToggle isScrolled={isScrolled} />
            <Button
              asChild
              variant={isScrolled ? 'outline' : 'secondary'}
              className={
                isScrolled
                  ? 'border-desert-300 text-desert-800'
                  : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30'
              }
            >
              <Link href='/contact'>LET&apos;S CHAT</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className='flex items-center md:hidden'>
            <ModeToggle isScrolled={isScrolled} />
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
            <Link
              href='/services'
              className='block px-4 text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white text-base tracking-wide'
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href='/contact'
              className='block px-4 text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white text-base tracking-wide'
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className='px-4'>
              <Button
                asChild
                variant='outline'
                className='w-full border-desert-300 text-desert-800 dark:border-gray-700 dark:text-white'
              >
                <Link href='/contact' onClick={() => setIsMenuOpen(false)}>
                  Let's Talk
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
