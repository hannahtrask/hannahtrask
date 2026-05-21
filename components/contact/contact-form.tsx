'use client'

import { useEffect, useRef, useState } from 'react'

const HONEYBOOK_PID = '68ab7f800c8dd7002e944c41'
const HONEYBOOK_SCRIPT_URL =
  'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js'

interface ContactFormProps {
  autoload?: boolean
}

export default function ContactForm({ autoload = true }: ContactFormProps) {
  const consultationContainerRef = useRef<HTMLDivElement>(null)
  const readyToWorkContainerRef = useRef<HTMLDivElement>(null)
  const scheduledLoadRef = useRef<number | null>(null)
  const [shouldLoad, setShouldLoad] = useState(autoload)
  const [isLoading, setIsLoading] = useState(autoload)
  const [hasError, setHasError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  const clearScheduledLoad = () => {
    if (scheduledLoadRef.current === null) return

    if (typeof window !== 'undefined' && window.cancelIdleCallback) {
      window.cancelIdleCallback(scheduledLoadRef.current)
    } else {
      window.clearTimeout(scheduledLoadRef.current)
    }

    scheduledLoadRef.current = null
  }

  const queueWidgetLoad = () => {
    clearScheduledLoad()
    setHasError(false)
    setIsLoading(true)

    if (typeof window === 'undefined') {
      setShouldLoad(true)
      return
    }

    const startLoad = () => {
      scheduledLoadRef.current = null
      setShouldLoad(true)
    }

    if (window.requestIdleCallback) {
      scheduledLoadRef.current = window.requestIdleCallback(startLoad, {
        timeout: 250,
      })
      return
    }

    scheduledLoadRef.current = window.setTimeout(startLoad, 32)
  }

  useEffect(() => {
    if (autoload) {
      setHasError(false)
      setIsLoading(true)
      setShouldLoad(true)
    }
  }, [autoload])

  useEffect(() => {
    if (!shouldLoad) return

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
      if (
        !consultationContainerRef.current ||
        !readyToWorkContainerRef.current
      ) {
        return false
      }

      return (
        consultationContainerRef.current.children.length > 0 &&
        readyToWorkContainerRef.current.children.length > 0
      )
    }

    const waitForWidget = (): Promise<boolean> => {
      return new Promise(resolve => {
        let pollCount = 0
        const maxPolls = 20 // Poll for up to 10 seconds (20 * 500ms)

        const poll = () => {
          if (checkWidgetLoaded()) {
            resolve(true)
            return
          }
          pollCount++
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
        consultationContainerRef.current?.replaceChildren()
        readyToWorkContainerRef.current?.replaceChildren()
        initHoneyBook()
        await loadScript()

        // Poll for widget to load (up to 10 seconds)
        const loaded = await waitForWidget()

        if (loaded) {
          setIsLoading(false)
          setHasError(false)
        } else if (retryCount < maxRetries) {
          retryCount++
          // Remove existing script to force reload
          const existingScript = document.querySelector(
            'script[src*="honeybook.com"]'
          )
          existingScript?.remove()
          // Also clear HoneyBook state
          ;(window as any)._HB_ = {}
          retryTimeout = setTimeout(attemptLoad, 1000)
        } else {
          setIsLoading(false)
          setHasError(true)
        }
      } catch {
        if (retryCount < maxRetries) {
          retryCount++
          retryTimeout = setTimeout(attemptLoad, 1000)
        } else {
          setIsLoading(false)
          setHasError(true)
        }
      }
    }

    attemptLoad()

    return () => {
      if (retryTimeout) clearTimeout(retryTimeout)
      clearScheduledLoad()
    }
  }, [reloadKey, shouldLoad])

  const handleRetry = () => {
    clearScheduledLoad()
    setShouldLoad(false)
    consultationContainerRef.current?.replaceChildren()
    readyToWorkContainerRef.current?.replaceChildren()
    // Remove existing script to force a fresh load
    const existingScript = document.querySelector(
      'script[src*="honeybook.com"]'
    )
    existingScript?.remove()
    ;(window as any)._HB_ = {}
    setReloadKey(currentKey => currentKey + 1)
    queueWidgetLoad()
  }

  return (
    <div className='bg-white dark:bg-desert-800 py-4 md:p-4 shadow-sm'>
      <div className='max-w-8xl mx-auto'>
        {!shouldLoad && !hasError && (
          <div className='rounded-xl border border-desert-200 bg-desert-50/60 p-6 text-center dark:border-desert-700 dark:bg-desert-900/40'>
            <h3 className='text-xl font-bold text-desert-800 dark:text-white mb-3'>
              Load the contact form
            </h3>
            <p className='mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300'>
              On mobile, the full scheduler is deferred to keep the page lighter
              and more stable during the first load.
            </p>
            <div className='flex flex-col items-center justify-center gap-3 sm:flex-row'>
              <button
                type='button'
                onClick={queueWidgetLoad}
                className='inline-flex items-center justify-center bg-desert-600 px-6 py-3 text-white transition-colors hover:bg-desert-700'
              >
                Open contact form
              </button>
              <a
                href='mailto:hello@wearesagebrush.com'
                className='inline-flex items-center justify-center px-6 py-3 text-desert-700 underline-offset-4 hover:underline dark:text-desert-200'
              >
                Email hello@wearesagebrush.com
              </a>
            </div>
          </div>
        )}

        {/* Loading state */}
        {shouldLoad && isLoading && (
          <div className='flex flex-col items-center justify-center py-12 text-center'>
            <div className='flex items-center justify-center'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-desert-600'></div>
              <span className='ml-3 text-gray-600 dark:text-gray-300'>
                Loading contact form...
              </span>
            </div>
          </div>
        )}

        {/* Error state with fallback */}
        {shouldLoad && hasError && (
          <div className='text-center py-8'>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              The contact form couldn&apos;t load. You can try again or reach
              out directly:
            </p>
            <a
              href='mailto:hello@wearesagebrush.com'
              className='inline-block bg-desert-600 hover:bg-desert-700 text-white px-6 py-3 rounded-none transition-colors mb-4'
            >
              Email hello@wearesagebrush.com
            </a>
            <br />
            <button
              type='button'
              onClick={handleRetry}
              className='text-desert-600 dark:text-desert-300 hover:underline text-sm mt-2'
            >
              Try loading the form again
            </button>
          </div>
        )}

        <div
          className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${hasError || !shouldLoad ? 'hidden' : ''}`}
        >
          <div className='overflow-hidden rounded-xl border border-desert-200 bg-desert-50/60 p-6 dark:border-desert-700 dark:bg-desert-900/40'>
            <div className='mb-6 text-center lg:text-left'>
              <h3 className='text-xl font-bold text-desert-800 dark:text-white mb-2'>
                I'm not sure what I want, can we chat?
              </h3>
              <p className='text-gray-600 dark:text-gray-300 font-light leading-relaxed'>
                This is a free consultation, let&apos;s just see if we&apos;re a
                good fit.
              </p>
            </div>

            <div
              ref={consultationContainerRef}
              className='min-h-[320px] w-full overflow-x-auto hb-p-68ab7f800c8dd7002e944c41-1'
            ></div>
          </div>

          <div className='overflow-hidden rounded-xl border border-desert-200 bg-desert-50/60 p-6 dark:border-desert-700 dark:bg-desert-900/40'>
            <div className='mb-6 text-center lg:text-left'>
              <h3 className='text-xl font-bold text-desert-800 dark:text-white mb-2'>
                I need a website and I know what I want
              </h3>
              <p className='text-gray-600 dark:text-gray-300 font-light leading-relaxed'>
                Ready to move forward? Use this option if you already know you
                want to get started.
              </p>
            </div>

            <div
              ref={readyToWorkContainerRef}
              className='min-h-[320px] w-full overflow-x-auto hb-p-68ab7f800c8dd7002e944c41-2'
            ></div>
          </div>
        </div>

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
