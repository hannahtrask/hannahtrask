import Link from 'next/link'
import { MapPin } from 'lucide-react'
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
} from '@/components/ui/social-icons'

export default function Footer() {
  return (
    <footer className='bg-[#8C7E49] px-4 py-16 text-[#ECD9B9] border-t-[3px] border-[#33352A] md:px-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0'>
          <div>
            <h3 className='font-playfair text-xl mb-2'>SAGEBRUSH WEB STUDIO</h3>
            <p className='text-desert-100 dark:text-desert-200 text-sm max-w-xs'>
              Based in Jackson, WY. Available for remote and on-site work.
            </p>
            <Link
              href='mailto:hello@wearesagebrush.com'
              className='max-w-xs text-sm font-first-rodeo text-[#ECD9B9] transition-colors hover:text-[#F09664]'
            >
              hello@wearesagebrush.com
            </Link>
          </div>

          <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-16'>
            <div>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='/'
                    className='flex items-center text-sm font-first-rodeo text-[#ECD9B9] transition-colors hover:text-[#F09664]'
                  >
                    <MapPin className='h-3 w-3 mr-2' />
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/services'
                    className='flex items-center text-sm font-first-rodeo text-[#ECD9B9] transition-colors hover:text-[#F09664]'
                  >
                    <MapPin className='h-3 w-3 mr-2' />
                    services
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='flex items-center text-sm font-first-rodeo text-[#ECD9B9] transition-colors hover:text-[#F09664]'
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
                  className='text-[#ECD9B9] transition-colors hover:text-[#F09664]'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHubIcon size={18} />
                  <span className='sr-only'>GitHub</span>
                </Link>
                <Link
                  href='https://www.linkedin.com/in/hannahtrask/'
                  className='text-[#ECD9B9] transition-colors hover:text-[#F09664]'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LinkedInIcon size={18} />
                  <span className='sr-only'>LinkedIn</span>
                </Link>
                <Link
                  href='https://www.instagram.com/sagebrushwebstudio'
                  className='text-[#ECD9B9] transition-colors hover:text-[#F09664]'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <InstagramIcon size={18} />
                  <span className='sr-only'>Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 flex flex-col items-start justify-between space-y-4 border-t border-[#ecd9b9] pt-8 md:flex-row md:items-center md:space-y-0'>
          <p className='text-xs text-[#33352a]'>
            © {new Date().getFullYear()} Sun & Sagebrush LLC. All rights
            reserved.
          </p>
          <div className='flex space-x-4'>
            <Link
              href='/privacy'
              className='text-xs font-first-rodeo text-[#33352a] transition-colors hover:text-[#ecd9b9]'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='text-xs font-first-rodeo text-[#33352a] transition-colors hover:text-[#ecd9b9]'
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
