'use client'

import { useState, useEffect } from 'react'

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
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    setCurrentText('')
    setCurrentLineIndex(0)
    setIsTyping(true)
    setIsDeleting(false)
    setIsPaused(false)
  }, [lines])

  useEffect(() => {
    if (lines.length === 0) return

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
        // Show the first character instantly so typing starts right away.
        if (currentText.length === 0) {
          setCurrentText(currentLine.slice(0, 1))
        } else {
          timeoutId = window.setTimeout(() => {
            setCurrentText(currentLine.slice(0, currentText.length + 1))
          }, typingSpeed)
        }
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
