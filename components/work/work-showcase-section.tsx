'use client'

import Image from 'next/image'

interface WorkShowcaseSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition: 'left' | 'right'
  showImage?: boolean
  backgroundColor: string
  textColor: string
  accentColor: string
  index: number
  startingPrice?: string
  priceLabel?: string
}

export default function WorkShowcaseSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
  showImage = true,
  backgroundColor,
  textColor,
  accentColor,
  index,
  startingPrice,
  priceLabel = 'Starting at',
}: WorkShowcaseSectionProps) {
  const sectionClassName = showImage
    ? `relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ${backgroundColor} py-20`
    : `relative ${backgroundColor} py-10 rounded-xl overflow-hidden h-full`

  const contentWrapperClassName = showImage
    ? 'container mx-auto px-4 relative z-10'
    : 'relative z-10 px-6 md:px-8'

  return (
    <div className={sectionClassName}>
      <div className={contentWrapperClassName}>
        <div
          className={`grid grid-cols-1 ${showImage ? 'lg:grid-cols-2' : ''} gap-8 ${showImage ? 'lg:gap-16' : ''} items-center ${imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
            }`}
        >
          {/* Image Section */}
          {showImage && (
            <div
              className={`relative ${imagePosition === 'right' ? 'lg:col-start-2' : ''}`}
            >
              <div className='relative overflow-hidden shadow-2xl'>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={600}
                  height={400}
                  className='w-full h-auto object-cover'
                  priority={index === 0}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
              </div>
            </div>
          )}

          {/* Text Section */}
          <div
            className={`${showImage && imagePosition === 'right'
                ? 'lg:col-start-1 lg:row-start-1'
                : ''
              } ${showImage ? '' : 'mx-auto max-w-3xl'}`}
          >
            <div className={showImage ? 'max-w-xl' : 'max-w-none'}>
              <h2
                className={`text-2xl md:text-3xl font-bold ${textColor} mb-4 leading-tight`}
              >
                {title}
              </h2>

              <div
                className={`w-16 h-px bg-current opacity-60 mb-6`}
                style={{ color: accentColor }}
              ></div>

              <p
                className={`text-sm leading-relaxed ${textColor} opacity-90 mb-4`}
              >
                {description}
              </p>

              {startingPrice && (
                <p className={`text-sm font-semibold ${textColor} mb-6`}>
                  {priceLabel}{' '}
                  <span style={{ color: accentColor }}>{startingPrice}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
