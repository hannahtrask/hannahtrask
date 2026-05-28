'use client'

import { useState, useEffect } from 'react'

function safeMediaQueryMatch(query: string, fallback: boolean) {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia !== 'function'
  ) {
    return fallback
  }

  try {
    return window.matchMedia(query).matches
  } catch {
    return fallback
  }
}

interface TypewriterProps {
  lines: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  showCursor?: boolean
  cursorClassName?: string
  loop?: boolean
}

export default function Typewriter({
  lines,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  showCursor = true,
  cursorClassName = '',
  loop = true,
}: TypewriterProps) {
  const [isLiteMode, setIsLiteMode] = useState(true)
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentText, setCurrentText] = useState(lines[0] ?? '')
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = safeMediaQueryMatch(
      '(prefers-reduced-motion: reduce)',
      true
    )
    const hasCoarsePointer = safeMediaQueryMatch('(pointer: coarse)', true)

    const lite = prefersReducedMotion || hasCoarsePointer
    setIsLiteMode(lite)

    if (lite) {
      setCurrentText(lines[0] ?? '')
      setCurrentLineIndex(0)
      setIsTyping(false)
      setIsDeleting(false)
      setIsPaused(false)
      return
    }

    setCurrentText('')
    setCurrentLineIndex(0)
    setIsTyping(true)
    setIsDeleting(false)
    setIsPaused(false)
  }, [lines])

  useEffect(() => {
    if (isLiteMode || lines.length === 0) return

    const currentLine = lines[currentLineIndex]
    let timeoutId: number | null = null

    if (isPaused) {
      timeoutId = window.setTimeout(() => {
        setIsPaused(false)
        if (loop || currentLineIndex < lines.length - 1) {
          setIsDeleting(true)
        }
      }, pauseDuration)
    } else if (isDeleting) {
      if (currentText.length > 0) {
        timeoutId = window.setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setIsTyping(true)
        setCurrentLineIndex(prev => {
          if (loop) {
            return (prev + 1) % lines.length
          } else {
            return Math.min(prev + 1, lines.length - 1)
          }
        })
      }
    } else if (isTyping) {
      if (currentText.length < currentLine.length) {
        timeoutId = window.setTimeout(() => {
          setCurrentText(currentLine.slice(0, currentText.length + 1))
        }, typingSpeed)
      } else {
        setIsTyping(false)
        setIsPaused(true)
      }
    }

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [
    isLiteMode,
    currentText,
    currentLineIndex,
    isTyping,
    isDeleting,
    isPaused,
    lines,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
  ])

  if (isLiteMode) {
    return (
      <h1 className={`!font-first-rodeo ${className}`}>
        <span className='!font-first-rodeo text-[#ecd9b9] drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]'>
          {lines[0] ?? ''}
        </span>
      </h1>
    )
  }

  return (
    <h1 className={`!font-first-rodeo ${className}`}>
      <span className='!font-first-rodeo text-[#ecd9b9] drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]'>
        {currentText}
      </span>
      {showCursor && (
        <span
          className={`typewriter-cursor ml-1 inline-block w-0.5 bg-[#ecd9b9] drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] ${cursorClassName}`}
          style={{ height: '1em' }}
        >
          |
        </span>
      )}
    </h1>
  )
}
