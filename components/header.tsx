"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? "py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link
                href="/"
                className={`text-2xl font-playfair font-semibold tracking-wide transition-colors ${
                    isScrolled ? "text-desert-800 dark:text-white" : "text-white"
                }`}
            >
              Hannah Catherine Trask
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                  href="/"
                  className={`text-sm tracking-wide transition-colors ${
                      isScrolled
                          ? "text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white"
                          : "text-white/80 hover:text-white"
                  }`}
              >
                Home
              </Link>
              <Link
                  href="/about"
                  className={`text-sm tracking-wide transition-colors ${
                      isScrolled
                          ? "text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white"
                          : "text-white/80 hover:text-white"
                  }`}
              >
                About
              </Link>
              <Link
                  href="/contact"
                  className={`text-sm tracking-wide transition-colors ${
                      isScrolled
                          ? "text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white"
                          : "text-white/80 hover:text-white"
                  }`}
              >
                Contact
              </Link>
              <ModeToggle isScrolled={isScrolled} />
              <Button
                  variant={isScrolled ? "outline" : "secondary"}
                  className={
                    isScrolled
                        ? "border-desert-300 text-desert-800"
                        : "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
                  }
              >
                Let's Talk
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <ModeToggle isScrolled={isScrolled} />
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`ml-2 p-2 ${isScrolled ? "text-gray-700 dark:text-gray-300" : "text-white"}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <nav className="md:hidden py-6 space-y-6 mt-4 bg-white dark:bg-gray-900 rounded-md shadow-lg">
                <Link
                    href="/"
                    className="block px-4 text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white text-sm tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                    href="/about"
                    className="block px-4 text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white text-sm tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                    href="/contact"
                    className="block px-4 text-gray-800 hover:text-desert-600 dark:text-gray-300 dark:hover:text-white text-sm tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-4">
                  <Button
                      variant="outline"
                      className="w-full border-desert-300 text-desert-800 dark:border-gray-700 dark:text-white"
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
