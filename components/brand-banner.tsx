'use client'

export default function BrandBanner() {
  const bannerText = ' — INVEST IN YOUR BRAND WITH SUN & SAGEBRUSH CREATIVE —    '
  const repeatedText = bannerText.repeat(20)

  return (
    <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-16 bg-rose-700 dark:bg-rose-800 overflow-hidden'>
      <div className='absolute inset-0 flex items-center'>
        <div className='animate-scroll-banner whitespace-nowrap text-white font-julius-sans-one text-lg md:text-xl font-medium tracking-wider'>
          {repeatedText}
        </div>
      </div>
    </div>
  )
}
