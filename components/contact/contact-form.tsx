'use client'

import { useEffect, useRef, useState } from 'react'

const HONEYBOOK_PID = '68ab7f800c8dd7002e944c41'
const HONEYBOOK_SCRIPT_URL =
  'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js'

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let retryCount = 0
    const maxRetries = 3
    let retryTimeout: NodeJS.Timeout

    const initHoneyBook = () => {
      if (typeof window === 'undefined')
        return // Always set/reset the HoneyBook config
      ;(window as any)._HB_ = (window as any)._HB_ || {}
      ;(window as any)._HB_.pid = HONEYBOOK_PID
    }

    const loadScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector(
          'script[src*="honeybook.com"]'
        ) as HTMLScriptElement

        if (existingScript) {
          // Script exists - try to re-trigger widget initialization
          if ((window as any)._HB_?.init) {
            ;(window as any)._HB_.init()
          }
          resolve()
          return
        }

        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = HONEYBOOK_SCRIPT_URL

        script.onload = () => resolve()
        script.onerror = () =>
          reject(new Error('Failed to load HoneyBook script'))

        document.head.appendChild(script)
      })
    }

    const checkWidgetLoaded = (): boolean => {
      if (!containerRef.current) return false
      // Check if HoneyBook has injected content into the container
      return containerRef.current.children.length > 0
    }

    const attemptLoad = async () => {
      try {
        initHoneyBook()
        await loadScript()

        // Give the widget time to render
        await new Promise(resolve => setTimeout(resolve, 1000))

        if (checkWidgetLoaded()) {
          setIsLoading(false)
          setHasError(false)
        } else if (retryCount < maxRetries) {
          retryCount++
          // Remove existing script to force reload
          const existingScript = document.querySelector(
            'script[src*="honeybook.com"]'
          )
          existingScript?.remove()
          retryTimeout = setTimeout(attemptLoad, 1500)
        } else {
          setIsLoading(false)
          setHasError(true)
        }
      } catch {
        if (retryCount < maxRetries) {
          retryCount++
          retryTimeout = setTimeout(attemptLoad, 1500)
        } else {
          setIsLoading(false)
          setHasError(true)
        }
      }
    }

    attemptLoad()

    return () => {
      if (retryTimeout) clearTimeout(retryTimeout)
    }
  }, [])

  const handleRetry = () => {
    setIsLoading(true)
    setHasError(false)
    // Remove existing script to force a fresh load
    const existingScript = document.querySelector(
      'script[src*="honeybook.com"]'
    )
    existingScript?.remove()
    // Re-trigger the effect by updating state
    window.location.reload()
  }

  return (
    <div className='bg-white dark:bg-desert-800 p-4 md:p-4 shadow-sm'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-8'>
          <p className='text-gray-600 dark:text-gray-300 font-light leading-relaxed'>
            This is a no-commitment connection, let&apos;s just see if
            we&apos;re a good fit.
          </p>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className='flex justify-center items-center py-12'>
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-desert-600'></div>
            <span className='ml-3 text-gray-600 dark:text-gray-300'>
              Loading contact form...
            </span>
          </div>
        )}

        {/* Error state with fallback */}
        {hasError && (
          <div className='text-center py-8'>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              The contact form couldn&apos;t load. You can try again or reach
              out directly:
            </p>
            <a
              href='mailto:hello@wearesagebrush.com'
              className='inline-block bg-desert-600 hover:bg-desert-700 text-white px-6 py-3 rounded-md transition-colors mb-4'
            >
              Email hello@wearesagebrush.com
            </a>
            <br />
            <button
              onClick={handleRetry}
              className='text-desert-600 dark:text-desert-300 hover:underline text-sm mt-2'
            >
              Try loading the form again
            </button>
          </div>
        )}

        {/* HoneyBook Contact Form Widget */}
        <div
          ref={containerRef}
          className={`w-full hb-p-68ab7f800c8dd7002e944c41-2 ${hasError ? 'hidden' : ''}`}
        ></div>

        {/* HoneyBook tracking pixel */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src={`https://www.honeybook.com/p.png?pid=${HONEYBOOK_PID}`}
          alt=''
        />
      </div>
    </div>
  )
}
