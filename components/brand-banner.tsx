'use client'

export default function BrandBanner() {
  const bannerText =
    '☼\u00A0\u00A0\u00A0INVEST IN YOUR BRAND WITH SUN & SAGEBRUSH CREATIVE\u00A0\u00A0\u00A0'
  const repeatedText = bannerText.repeat(4)

  return (
    <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-32 bg-rose-700 dark:bg-rose-800 overflow-hidden'>
      <div className='absolute inset-0 flex items-center'>
        <div className='font-playfair animate-scroll-banner whitespace-nowrap text-white text-lg md:text-7xl font-medium tracking-wider'>
          {repeatedText}
        </div>
      </div>
    </div>
  )
}
