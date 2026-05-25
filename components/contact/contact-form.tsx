'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const HONEYBOOK_PID = '68ab7f800c8dd7002e944c41'
const HONEYBOOK_SCRIPT_URL =
  'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js'

declare global {
  interface Window {
    _HB_?: {
      pid?: string
      init?: () => void
    }
  }
}

interface ContactFormProps {
  className?: string
}

export function BookingCard({
  title,
  description,
  panelId,
  widgetClassName,
  loadingLabel,
}: {
  title: string
  description: string
  panelId: string
  widgetClassName: string
  loadingLabel: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const retryTimeoutRef = useRef<number | null>(null)
  const pollTimeoutRef = useRef<number | null>(null)
  const isAttemptingRef = useRef(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!isOpen || isLoaded) return

    let cancelled = false
    let retryCount = 0
    const maxRetries = 3

    const queueRetry = (callback: () => void) => {
      if (retryTimeoutRef.current !== null) {
        window.clearTimeout(retryTimeoutRef.current)
      }
      retryTimeoutRef.current = window.setTimeout(callback, 1000)
    }

    const initHoneyBook = () => {
      window._HB_ = window._HB_ || {}
      window._HB_.pid = HONEYBOOK_PID
    }

    const loadScript = () => {
      return new Promise<void>((resolve, reject) => {
        const existingScript = document.querySelector(
          `script[src="${HONEYBOOK_SCRIPT_URL}"]`
        ) as HTMLScriptElement | null

        if (existingScript) {
          if (window._HB_?.init) {
            window._HB_.init()
          }
          resolve()
          return
        }

        const script = document.createElement('script')
        script.async = true
        script.src = HONEYBOOK_SCRIPT_URL
        script.onload = () => resolve()
        script.onerror = () =>
          reject(new Error('Failed to load HoneyBook script'))
        document.head.appendChild(script)
      })
    }

    const waitForWidget = () =>
      new Promise<boolean>(resolve => {
        let polls = 0
        const poll = () => {
          if (cancelled) {
            resolve(false)
            return
          }

          if (containerRef.current?.children.length) {
            resolve(true)
            return
          }

          polls += 1
          if (polls >= 20) {
            resolve(false)
            return
          }

          pollTimeoutRef.current = window.setTimeout(poll, 500)
        }

        poll()
      })

    const attemptLoad = async () => {
      if (cancelled || isAttemptingRef.current) return

      isAttemptingRef.current = true

      try {
        containerRef.current?.replaceChildren()
        setHasError(false)
        setIsLoading(true)
        initHoneyBook()
        await loadScript()

        const loaded = await waitForWidget()

        if (cancelled) return

        if (loaded) {
          setIsLoaded(true)
          setIsLoading(false)
          return
        }

        if (retryCount < maxRetries) {
          retryCount += 1
          queueRetry(attemptLoad)
          return
        }

        setIsLoading(false)
        setHasError(true)
      } catch {
        if (cancelled) return

        if (retryCount < maxRetries) {
          retryCount += 1
          queueRetry(attemptLoad)
          return
        }

        setIsLoading(false)
        setHasError(true)
      } finally {
        isAttemptingRef.current = false
      }
    }

    attemptLoad()

    return () => {
      cancelled = true
      isAttemptingRef.current = false
      if (retryTimeoutRef.current !== null) {
        window.clearTimeout(retryTimeoutRef.current)
        retryTimeoutRef.current = null
      }
      if (pollTimeoutRef.current !== null) {
        window.clearTimeout(pollTimeoutRef.current)
        pollTimeoutRef.current = null
      }
    }
  }, [isOpen, isLoaded])

  return (
    <div className='min-w-0 overflow-hidden rounded-xl border border-desert-200 bg-desert-50/60 p-6 dark:border-desert-700 dark:bg-desert-900/40'>
      <div className='text-center lg:text-left'>
        <h3 className='mb-2 text-xl font-bold text-desert-800 dark:text-white'>
          {title}
        </h3>
        <p className='font-light leading-relaxed text-gray-600 dark:text-gray-300'>
          {description}
        </p>
      </div>

      <div className='mt-5 flex justify-center lg:justify-start'>
        <button
          type='button'
          onClick={() => setIsOpen(current => !current)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className='inline-flex items-center justify-center gap-2 rounded-none bg-brand-sage px-4 py-2 text-sm text-white transition-opacity hover:opacity-90'
        >
          <span className='font-first-rodeo text-white'>
            {isOpen ? 'Hide booking options' : 'Open booking options'}
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </div>

      <div
        id={panelId}
        aria-hidden={!isOpen}
        className={`w-full min-w-0 max-w-full overflow-hidden transition-all duration-800 ease-out ${
          isOpen
            ? 'mt-6 max-h-[2200px] translate-y-0 opacity-100'
            : 'mt-0 max-h-0 -translate-y-1 opacity-0 pointer-events-none'
        }`}
      >
        {isLoading && !isLoaded && !hasError && (
          <div className='flex items-center justify-center py-12 text-center'>
            <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-desert-600'></div>
            <span className='ml-3 text-gray-600 dark:text-gray-300'>
              {loadingLabel}
            </span>
          </div>
        )}

        {hasError && (
          <div className='py-8 text-center'>
            <p className='mb-4 text-gray-600 dark:text-gray-300'>
              This scheduler couldn&apos;t load. You can try again or email
              directly.
            </p>
            <button
              type='button'
              onClick={() => {
                setIsLoaded(false)
                setHasError(false)
                setIsLoading(true)
                setIsOpen(true)
              }}
              className='text-sm text-desert-600 hover:underline dark:text-desert-300'
            >
              Try loading this scheduler again
            </button>
          </div>
        )}

        <div
          ref={containerRef}
          className={`${widgetClassName} min-h-[320px] w-full max-w-full min-w-0 overflow-hidden ${
            isLoaded && !hasError ? 'block' : 'hidden'
          }`}
        />
      </div>
    </div>
  )
}

export default function ContactForm({ className }: ContactFormProps) {
  return (
    <div
      className={
        className ?? 'bg-white py-4 shadow-sm dark:bg-desert-800 md:p-4'
      }
    >
      <div className='max-w-8xl mx-auto'>
        <div className='grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2'>
          <BookingCard
            title="I'm not sure what I want, can we chat?"
            description="This is a free consultation, let's just see if we're a good fit."
            panelId='consultation-booking-panel'
            widgetClassName='hb-p-68ab7f800c8dd7002e944c41-1'
            loadingLabel='Loading consultation form...'
          />

          <BookingCard
            title='I need a website and I know what I want'
            description='Ready to move forward? Use this option if you already know you want to get started.'
            panelId='ready-to-work-booking-panel'
            widgetClassName='hb-p-68ab7f800c8dd7002e944c41-2'
            loadingLabel='Loading project form...'
          />
        </div>

        <div className='mt-6 text-center'>
          <a
            href='mailto:hello@wearesagebrush.com'
            className='inline-flex items-center justify-center px-6 py-3 text-desert-700 underline-offset-4 hover:underline dark:text-desert-200'
          >
            Prefer email? hello@wearesagebrush.com
          </a>
        </div>
      </div>
    </div>
  )
}
