import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div>
            <h3 className="font-playfair text-xl mb-2">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs">
              Creating thoughtful digital experiences that balance form and function.
            </p>
          </div>

          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-16">
            <div>
              <h4 className="text-sm font-medium mb-4 tracking-wide">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4 tracking-wide">Connect</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  <Github size={18} />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
