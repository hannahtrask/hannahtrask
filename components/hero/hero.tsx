'use client'

import Image from 'next/image'

interface PhotoCredit {
  name: string
  url?: string
}

interface HeroProps {
  backgroundImage: string
  backgroundImageAlt: string
  title?: string
  subtitle?: string
  description?: string
  children?: React.ReactNode
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  descriptionClassName?: string
  containerClassName?: string
  photoCredit?: PhotoCredit
  priority?: boolean
}

export default function Hero({
  backgroundImage,
  title,
  subtitle,
  description,
  children,
  className = '',
  photoCredit,
  priority = false,
}: HeroProps) {
  return (
    <div
      className={`relative min-h-[100svh] md:min-h-screen w-full flex items-center overflow-hidden ${className}`}
    >
      <div className='absolute inset-0 z-0'>
        <div className='w-full h-[120%]'>
          <Image
            src={backgroundImage}
            alt=''
            fill
            priority={priority}
            sizes='100vw'
            className='object-cover'
          />
        </div>
        <div className='absolute inset-0 bg-graphite/60'></div>
      </div>

      {/* Hero content */}
      <div
        className={`container mx-auto px-4 pt-24 sm:pt-28 md:pt-0 relative z-10 flex items-center justify-center h-full text-center`}
      >
        {children ? (
          children
        ) : (
          <div className='text-white'>
            {subtitle && (
              <span className='text-lg font-medium text-white/90 uppercase tracking-wide mb-4 block'>
                {subtitle}
              </span>
            )}

            <h1 className='text-5xl md:text-6xl font-julius-sans-one font-light text-white mb-6'>
              {title}
            </h1>

            {description && (
              <p className='text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed'>
                {description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Photo Credit */}
      {photoCredit && (
        <div className='absolute bottom-2 right-2 z-20' aria-hidden='true'>
          <span className='text-[10px] text-white/70'>
            Photo by {photoCredit.name}
          </span>
        </div>
      )}
    </div>
  )
}
