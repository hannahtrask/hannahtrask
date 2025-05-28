import Link from "next/link"
import { MapPin } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons"

export default function Footer() {
  return (
      <footer className="py-16 px-4 md:px-8 bg-desert-400 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            <div>
              <h3 className="font-montserrat text-xl mb-2">Hannah Catherine Trask</h3>
              <p className="text-gray-300 text-sm max-w-xs">
                Creating digital experiences with the same passion I bring to exploring the outdoors.
              </p>
            </div>

            <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-16">
              <div>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-white text-sm flex items-center">
                      <MapPin className="h-3 w-3 mr-2" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-white text-sm flex items-center">
                      <MapPin className="h-3 w-3 mr-2" />
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-white text-sm flex items-center">
                      <MapPin className="h-3 w-3 mr-2" />
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex space-x-4">
                  <Link href="https://github.com/hannahtrask" className="text-gray-300 hover:text-white">
                    <GitHubIcon size={18} />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://www.linkedin.com/in/hannahtrask/" className="text-gray-300 hover:text-white">
                    <LinkedInIcon size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-desert-900">
            <p className="text-gray-50 text-xs">
              © {new Date().getFullYear()} Sun & Sagebrush LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}
