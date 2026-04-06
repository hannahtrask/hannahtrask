'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const HONEYBOOK_PID = '68ab7f800c8dd7002e944c41'
const HONEYBOOK_SCRIPT_URL =
  'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js'

export default function WebsiteInWeekBooking() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [retrySeed, setRetrySeed] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    let retryCount = 0
    const maxRetries = 3
    let retryTimeout: NodeJS.Timeout | undefined

    setIsLoading(true)
    setHasError(false)

    const initHoneyBook = () => {
      if (typeof window === 'undefined') return
      ;(window as any)._HB_ = (window as any)._HB_ || {}
      ;(window as any)._HB_.pid = HONEYBOOK_PID
    }

    const loadScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(
          `script[src="${HONEYBOOK_SCRIPT_URL}"]`
        ) as HTMLScriptElement | null

        if (existingScript) {
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
      return containerRef.current.children.length > 0
    }

    const waitForWidget = (): Promise<boolean> => {
      return new Promise<boolean>(resolve => {
        let pollCount = 0
        const maxPolls = 20

        const poll = () => {
          if (checkWidgetLoaded()) {
            resolve(true)
            return
          }

          pollCount += 1
          if (pollCount < maxPolls) {
            setTimeout(poll, 500)
          } else {
            resolve(false)
          }
        }

        poll()
      })
    }

    const attemptLoad = async () => {
      try {
        initHoneyBook()
        await loadScript()

        const loaded = await waitForWidget()

        if (loaded) {
          setIsLoading(false)
          setHasError(false)
        } else if (retryCount < maxRetries) {
          retryCount += 1
          const existingScript = document.querySelector(
            `script[src="${HONEYBOOK_SCRIPT_URL}"]`
          )
          existingScript?.remove()
          ;(window as any)._HB_ = {}
          retryTimeout = setTimeout(attemptLoad, 1000)
        } else {
          setIsLoading(false)
          setHasError(true)
        }
      } catch {
        if (retryCount < maxRetries) {
          retryCount += 1
          retryTimeout = setTimeout(attemptLoad, 1000)
        } else {
          setIsLoading(false)
          setHasError(true)
        }
      }
    }

    attemptLoad()

    return () => {
      if (retryTimeout) {
        clearTimeout(retryTimeout)
      }
    }
  }, [retrySeed, isOpen])

  const handleRetry = () => {
    setIsOpen(true)
    setIsLoading(true)
    setHasError(false)
    const existingScript = document.querySelector(
      `script[src="${HONEYBOOK_SCRIPT_URL}"]`
    )
    existingScript?.remove()
    ;(window as any)._HB_ = {}
    if (containerRef.current) {
      containerRef.current.innerHTML = ''
    }
    setRetrySeed(prev => prev + 1)
  }

  return (
    <div className='rounded-xl border border-desert-200 bg-white/90 p-5 shadow-sm dark:border-desert-700 dark:bg-desert-800/90 md:p-8'>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <p className='text-sm text-gray-700 dark:text-gray-300'>
          Ready to book?
        </p>
        <button
          type='button'
          onClick={() => setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
          aria-controls='website-in-week-booking-panel'
          className='inline-flex items-center justify-center gap-2 rounded-none bg-brand-sage px-4 py-2 text-sm text-white transition-opacity hover:opacity-90'
        >
          <span className='font-first-rodeo'>
            {isOpen ? 'Hide booking options' : 'Open booking options'}
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </div>

      <div
        id='website-in-week-booking-panel'
        aria-hidden={!isOpen}
        className={`overflow-hidden transition-all duration-800 ease-out ${
          isOpen
            ? 'mt-6 max-h-[2200px] opacity-100 translate-y-0'
            : 'mt-0 max-h-0 opacity-0 -translate-y-1 pointer-events-none'
        }`}
      >
        {isLoading && (
          <div className='flex items-center justify-center py-10 text-gray-600 dark:text-gray-300'>
            <div className='h-7 w-7 animate-spin rounded-full border-b-2 border-desert-600'></div>
            <span className='ml-3 text-sm'>Loading booking options...</span>
          </div>
        )}

        {hasError && (
          <div className='py-6 text-center'>
            <p className='mb-3 text-sm text-gray-700 dark:text-gray-300'>
              Booking options are temporarily unavailable.
            </p>
            <a
              href='/contact'
              className='inline-flex items-center justify-center rounded-none bg-desert-700 px-4 py-2 text-sm text-white transition-colors hover:bg-desert-800'
            >
              Contact me to book directly
            </a>
            <div>
              <button
                type='button'
                onClick={handleRetry}
                className='mt-3 text-sm text-desert-700 hover:underline dark:text-desert-200'
              >
                Try loading booking options again
              </button>
            </div>
          </div>
        )}

        <div
          ref={containerRef}
          className={`hb-p-68ab7f800c8dd7002e944c41-3 min-h-[320px] ${hasError ? 'hidden' : ''}`}
        ></div>

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
