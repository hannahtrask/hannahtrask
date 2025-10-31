'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
              HOME
            </Link>
            <span
              className={`text-base tracking-wide opacity-50 cursor-not-allowed ${
                isScrolled
                  ? 'text-gray-400 dark:text-gray-500'
                  : 'text-white/40'
              }`}
            >
              WORK
            </span>
            <span
              className={`text-base tracking-wide opacity-50 cursor-not-allowed ${
                isScrolled
                  ? 'text-gray-400 dark:text-gray-500'
                  : 'text-white/40'
              }`}
            >
              SERVICES
            </span>
            <span
              className={`text-base tracking-wide opacity-50 cursor-not-allowed ${
                isScrolled
                  ? 'text-gray-400 dark:text-gray-500'
                  : 'text-white/40'
              }`}
            >
              CONTACT
            </span>
            {/*<ModeToggle isScrolled={isScrolled} />*/}
            <Button
              onClick={() => {
                document
                  .getElementById('contact-form')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              variant={isScrolled ? 'outline' : 'secondary'}
              className={
                isScrolled
                  ? 'border-desert-300 text-desert-800'
                  : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30'
              }
            >
              LET&apos;S CHAT
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className='flex items-center md:hidden'>
            {/*<ModeToggle isScrolled={isScrolled} />*/}
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
              Home
            </Link>
            <span className='block px-4 text-gray-400 dark:text-gray-500 text-base tracking-wide opacity-50 cursor-not-allowed'>
              Work
            </span>
            <span className='block px-4 text-gray-400 dark:text-gray-500 text-base tracking-wide opacity-50 cursor-not-allowed'>
              Services
            </span>
            <span className='block px-4 text-gray-400 dark:text-gray-500 text-base tracking-wide opacity-50 cursor-not-allowed'>
              Contact
            </span>
            <div className='px-4'>
              <Button
                onClick={() => {
                  setIsMenuOpen(false)
                  document
                    .getElementById('contact-form')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                variant='outline'
                className='w-full border-desert-300 text-desert-800 dark:border-gray-700 dark:text-white'
              >
                Let's Talk
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
