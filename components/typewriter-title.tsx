'use client'

import { useEffect, useState } from 'react'

type TypewriterTitleProps = {
  text: string
  className?: string
  speedMs?: number
}

export function TypewriterTitle({
  text,
  className,
  speedMs = 80,
}: TypewriterTitleProps) {
  const [displayText, setDisplayText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      setDisplayText(text)
      setDone(true)
      return
    }

    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setDisplayText(text.slice(0, index))

      if (index >= text.length) {
        window.clearInterval(timer)
        setDone(true)
      }
    }, speedMs)

    return () => window.clearInterval(timer)
  }, [text, speedMs])

  return (
    <h1 className={className} aria-label={text}>
      {displayText}
      <span
        aria-hidden='true'
        className={`ml-1 inline-block h-[0.85em] w-[0.08em] align-[-0.08em] bg-current ${done ? 'opacity-0' : 'animate-pulse'}`}
      />
    </h1>
  )
}
