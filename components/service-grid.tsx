'use client'

import { useEffect, useRef, useState } from 'react'

type ServiceTile = {
  title: string
  eyebrow: string
  description: string
}

const tileColors = [
  { bg: 'bg-[#8c7e49]', text: 'text-graphite' },
  { bg: 'bg-[#333520]', text: 'text-graphite' },
  { bg: 'bg-[#ecd9b9]', text: 'text-graphite' },
]

// Pattern: 1 of color 0, 1 of color 1, 2 of color 2, 1 of color 0, 2 of color 1, 1 of color 2
const colorPattern = [0, 1, 2, 2, 0, 1, 1, 2, 0]

const getColorForTile = (index: number) => {
  const colorIndex = colorPattern[index % colorPattern.length]
  return tileColors[colorIndex]
}

function ServiceTile({
  title,
  eyebrow,
  description,
  index,
}: ServiceTile & { index: number }) {
  const colorPair = getColorForTile(index)

  return (
    <article
      className={`group relative mx-auto flex h-[12rem] w-full max-w-[18rem] flex-col overflow-hidden rounded-2xl border-t-2 border-b border-l border-r border-white/60 px-3 py-3 text-center shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 ${colorPair.bg} bg-opacity-40 ${colorPair.text}`}
    >
      <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none' />
      <div className='relative z-10 mx-auto flex h-full w-full max-w-[14.5rem] flex-col items-center justify-center text-center'>
        <p className='w-full text-center font-first-rodeo text-[0.66rem] uppercase tracking-[0.3em] opacity-70'>
          {eyebrow}
        </p>
        <h3 className='mt-2 w-full text-center font-miroa text-[1.2rem] uppercase leading-[0.94] tracking-[0.06em] sm:text-[1.4rem]'>
          {title}
        </h3>
        <p className='mt-2 w-full text-center text-[0.78rem] leading-[1.28] opacity-80'>
          {description}
        </p>
      </div>
    </article>
  )
}

export function ServiceGrid({ serviceTiles }: { serviceTiles: ServiceTile[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [animateOnScroll, setAnimateOnScroll] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const isTabletOrLarger = window.matchMedia('(min-width: 768px)').matches

    if (!isTabletOrLarger || reduceMotion) {
      setIsVisible(true)
      return
    }

    setAnimateOnScroll(true)

    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className='mx-auto grid w-full max-w-6xl gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-3'
    >
      {serviceTiles.map((tile, index) => (
        <div
          key={tile.title}
          className={`${animateOnScroll ? 'opacity-0 transition-all duration-500' : ''} ${isVisible ? 'opacity-100' : ''}`}
          style={
            animateOnScroll
              ? {
                  transitionDelay: `${index * 100}ms`,
                }
              : undefined
          }
        >
          <ServiceTile {...tile} index={index} />
        </div>
      ))}
    </div>
  )
}
