'use client'

import Link from 'next/link'

export default function ScrollingBanner() {
  const bannerText =
    ' ☼\u00A0\u00A0\u00A0EXPLORE OUR SERVICES\u00A0\u00A0\u00A0    '
  const repeatedText = bannerText.repeat(20)

  return (
    <div className='relative w-full h-12 bg-desert-600 dark:bg-desert-700 overflow-hidden z-50'>
      <Link href='/services' className='block w-full h-full group'>
        <div className='absolute inset-0 flex items-center'>
          <div className='animate-scroll-banner group-hover:animate-none whitespace-nowrap text-white font-montserrat text-sm font-medium tracking-wider group-hover:text-desert-200 transition-colors duration-900 cursor-pointer'>
            {repeatedText}
          </div>
        </div>
      </Link>
    </div>
  )
}
