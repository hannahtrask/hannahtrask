'use client'

import { useEffect, useRef, useState } from 'react'

type ServiceTile = {
  title: string
  eyebrow: string
  description: string
  tone: 'light' | 'dark'
}

function HoneycombTile({ title, eyebrow, description, tone }: ServiceTile) {
  const toneClass = tone === 'light' ? 'text-graphite' : 'text-sand-50'

  return (
    <article className='group relative w-full'>
      <div className={`honeycomb-hex ${toneClass} group-hover:-translate-y-1`}>
        <div
          className={`honeycomb-hex-fill ${tone === 'light' ? 'bg-[#f6f1e7]' : 'bg-[#333520]'}`}
        />
        <div className='honeycomb-hex-content'>
          <p className='font-first-rodeo text-[0.72rem] uppercase tracking-[0.34em] opacity-70'>
            {eyebrow}
          </p>
          <h3 className='mt-3 font-miroa text-[1.55rem] uppercase leading-[0.9] tracking-[0.08em] sm:text-[1.95rem]'>
            {title}
          </h3>
          <p className='mx-auto mt-3 max-w-[11rem] text-[0.9rem] leading-5 opacity-80'>
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

export function HoneycombGrid({
  serviceTiles,
}: {
  serviceTiles: ServiceTile[]
}) {
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
      className='honeycomb-layout relative w-full max-w-[980px]'
    >
      {serviceTiles.map((tile, index) => (
        <div
          key={tile.title}
          className={`honeycomb-pos honeycomb-pos-${index} absolute ${animateOnScroll ? 'honeycomb-motion' : ''} ${isVisible ? 'is-visible' : ''}`}
          style={
            animateOnScroll
              ? {
                  transitionDelay: `${index * 130}ms`,
                }
              : undefined
          }
        >
          <HoneycombTile {...tile} />
        </div>
      ))}

      <svg
        aria-hidden='true'
        className='absolute h-0 w-0'
        width='0'
        height='0'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <defs>
          <filter id='honeycomb-goo'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='4' result='blur' />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
              result='goo'
            />
            <feComposite in='SourceGraphic' in2='goo' operator='atop' />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
