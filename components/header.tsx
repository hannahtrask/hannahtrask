"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-playfair tracking-wide">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white text-sm tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white text-sm tracking-wide"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white text-sm tracking-wide"
            >
              Contact
            </Link>
            <ModeToggle />
            <Button variant="outline" className="border-gray-300 dark:border-gray-700 rounded-none">
              Let's Talk
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2 p-2 text-gray-700 dark:text-gray-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 space-y-6">
            <Link
              href="/"
              className="block text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white text-sm tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white text-sm tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white text-sm tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button variant="outline" className="w-full border-gray-300 dark:border-gray-700 rounded-none">
              Let's Talk
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
