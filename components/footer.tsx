import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/social-icons'

export default function Footer() {
  return (
    <footer className='py-16 px-4 md:px-8 bg-desert-400 dark:bg-desert-800 text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0'>
          <div>
            <h3 className='font-playfair text-md mb-2'>SAGEBRUSH CREATIVE</h3>
            <p className='text-desert-100 dark:text-desert-200 text-xs max-w-xs'>
              Based in Jackson, WY. Available for remote and on-site work.
            </p>
          </div>

          <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-16'>
            <div>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='/'
                    className='text-desert-600 dark:text-desert-200 hover:text-white dark:hover:text-gray-200 text-sm flex items-center'
                  >
                    <MapPin className='h-3 w-3 mr-2' />
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/work'
                    className='text-desert-600 dark:text-desert-200 hover:text-white dark:hover:text-gray-200 text-sm flex items-center'
                  >
                    <MapPin className='h-3 w-3 mr-2' />
                    services
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-desert-600 dark:text-desert-200 hover:text-white dark:hover:text-gray-200 text-sm flex items-center'
                  >
                    <MapPin className='h-3 w-3 mr-2' />
                    contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className='flex space-x-4'>
                <Link
                  href='https://github.com/hannahtrask'
                  className='text-desert-600 dark:text-desert-200 hover:text-white dark:hover:text-gray-200'
                >
                  <GitHubIcon size={18} />
                  <span className='sr-only'>GitHub</span>
                </Link>
                <Link
                  href='https://www.linkedin.com/in/hannahtrask/'
                  className='text-desert-600 dark:text-desert-200 hover:text-white dark:hover:text-gray-200'
                >
                  <LinkedInIcon size={18} />
                  <span className='sr-only'>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 pt-8 border-t border-desert-900 dark:border-desert-600'>
          <p className='text-desert-50 dark:text-desert-300 text-xs'>
            © {new Date().getFullYear()} Sun & Sagebrush LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
