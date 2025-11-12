'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
    if (lines.length === 0) return

    const currentLine = lines[currentLineIndex]
    let timeout: NodeJS.Timeout

    if (isPaused) {
      // Pause after typing complete line
      timeout = setTimeout(() => {
        setIsPaused(false)
        if (loop || currentLineIndex < lines.length - 1) {
          setIsDeleting(true)
        }
      }, pauseDuration)
    } else if (isDeleting) {
      // Deleting characters
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
      } else {
        // Finished deleting, move to next line
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
      // Typing characters
      if (currentText.length < currentLine.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentLine.slice(0, currentText.length + 1))
        }, typingSpeed)
      } else {
        // Finished typing current line
        setIsTyping(false)
        setIsPaused(true)
      }
    }

    return () => clearTimeout(timeout)
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
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={className}
    >
      <span>{currentText}</span>
      {showCursor && (
        <span
          className={`inline-block w-0.5 bg-current ml-1 animate-pulse ${cursorClassName}`}
          style={{ height: '1em' }}
        >
          |
        </span>
      )}
    </motion.h1>
  )
}
