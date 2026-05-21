'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const HONEYBOOK_PID = '68ab7f800c8dd7002e944c41'
const HONEYBOOK_SCRIPT_URL =
  'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js'

type WidgetKey = 'consultation' | 'readyToWork'

declare global {
  interface Window {
    _HB_?: {
      pid?: string
      init?: () => void
    }
  }
}

interface ContactFormProps {
  autoload?: boolean
}

const initialLoadedWidgets: Record<WidgetKey, boolean> = {
  consultation: false,
  readyToWork: false,
}

export default function ContactForm({ autoload }: ContactFormProps) {
  void autoload

  const consultationContainerRef = useRef<HTMLDivElement>(null)
  const readyToWorkContainerRef = useRef<HTMLDivElement>(null)
  const scheduledLoadRef = useRef<number | null>(null)

  const [expandedWidget, setExpandedWidget] = useState<WidgetKey | null>(null)
  const [widgetToLoad, setWidgetToLoad] = useState<WidgetKey | null>(null)
  const [loadingWidget, setLoadingWidget] = useState<WidgetKey | null>(null)
  const [widgetError, setWidgetError] = useState<WidgetKey | null>(null)
  const [hasStartedHoneyBook, setHasStartedHoneyBook] = useState(false)
  const [loadVersion, setLoadVersion] = useState(0)
  const [loadedWidgets, setLoadedWidgets] = useState(initialLoadedWidgets)

  const getWidgetContainer = (widgetKey: WidgetKey) => {
    return widgetKey === 'consultation'
      ? consultationContainerRef.current
      : readyToWorkContainerRef.current
  }

  const clearScheduledLoad = () => {
    if (scheduledLoadRef.current === null) return

    if (typeof window !== 'undefined' && window.cancelIdleCallback) {
      window.cancelIdleCallback(scheduledLoadRef.current)
    } else {
      window.clearTimeout(scheduledLoadRef.current)
    }

    scheduledLoadRef.current = null
  }

  const resetHoneyBook = () => {
    const existingScript = document.querySelector(
      'script[src*="honeybook.com"]'
    )
    existingScript?.remove()
    window._HB_ = undefined
  }

  const queueWidgetLoad = (widgetKey: WidgetKey) => {
    clearScheduledLoad()
    setHasStartedHoneyBook(true)
    setWidgetError(currentError =>
      currentError === widgetKey ? null : currentError
    )
    setLoadingWidget(widgetKey)

    if (typeof window === 'undefined') {
      setWidgetToLoad(widgetKey)
      setLoadVersion(currentVersion => currentVersion + 1)
      return
    }

    const startLoad = () => {
      scheduledLoadRef.current = null
      setWidgetToLoad(widgetKey)
      setLoadVersion(currentVersion => currentVersion + 1)
    }

    if (window.requestIdleCallback) {
      scheduledLoadRef.current = window.requestIdleCallback(startLoad, {
        timeout: 250,
      })
      return
    }

    scheduledLoadRef.current = window.setTimeout(startLoad, 32)
  }

  const handleRetry = (widgetKey: WidgetKey) => {
    clearScheduledLoad()
    getWidgetContainer(widgetKey)?.replaceChildren()
    setLoadedWidgets(currentWidgets => ({
      ...currentWidgets,
      [widgetKey]: false,
    }))
    resetHoneyBook()
    queueWidgetLoad(widgetKey)
  }

  const handleWidgetToggle = (widgetKey: WidgetKey) => {
    if (expandedWidget === widgetKey) {
      if (loadingWidget === widgetKey && !loadedWidgets[widgetKey]) {
        clearScheduledLoad()
        setLoadingWidget(null)
        setWidgetToLoad(null)
      }

      setExpandedWidget(null)
      return
    }

    setExpandedWidget(widgetKey)

    if (!loadedWidgets[widgetKey]) {
      queueWidgetLoad(widgetKey)
    }
  }

  useEffect(() => {
    if (!widgetToLoad) return

    let retryCount = 0
    const maxRetries = 3
    let retryTimeout: NodeJS.Timeout | undefined
    const activeWidget = widgetToLoad

    const initHoneyBook = () => {
      window._HB_ = window._HB_ || {}
      window._HB_.pid = HONEYBOOK_PID
    }

    const loadScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
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
        script.type = 'text/javascript'
        script.async = true
        script.src = HONEYBOOK_SCRIPT_URL
        script.onload = () => resolve()
        script.onerror = () =>
          reject(new Error('Failed to load HoneyBook script'))

        document.head.appendChild(script)
      })
    }

    const checkWidgetLoaded = () => {
      const container = getWidgetContainer(activeWidget)
      return Boolean(container && container.children.length > 0)
    }

    const waitForWidget = (): Promise<boolean> => {
      return new Promise(resolve => {
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
        getWidgetContainer(activeWidget)?.replaceChildren()
        initHoneyBook()
        await loadScript()

        const loaded = await waitForWidget()

        if (loaded) {
          setLoadedWidgets(currentWidgets => ({
            ...currentWidgets,
            [activeWidget]: true,
          }))
          setLoadingWidget(currentWidget =>
            currentWidget === activeWidget ? null : currentWidget
          )
          setWidgetError(currentError =>
            currentError === activeWidget ? null : currentError
          )
          return
        }

        if (retryCount < maxRetries) {
          retryCount += 1
          resetHoneyBook()
          retryTimeout = setTimeout(attemptLoad, 1000)
          return
        }

        setLoadingWidget(currentWidget =>
          currentWidget === activeWidget ? null : currentWidget
        )
        setWidgetError(activeWidget)
      } catch {
        if (retryCount < maxRetries) {
          retryCount += 1
          retryTimeout = setTimeout(attemptLoad, 1000)
          return
        }

        setLoadingWidget(currentWidget =>
          currentWidget === activeWidget ? null : currentWidget
        )
        setWidgetError(activeWidget)
      }
    }

    attemptLoad()

    return () => {
      if (retryTimeout) {
        clearTimeout(retryTimeout)
      }
    }
  }, [loadVersion, widgetToLoad])

  useEffect(() => {
    return () => {
      clearScheduledLoad()
    }
  }, [])

  return (
    <div className='bg-white py-4 shadow-sm dark:bg-desert-800 md:p-4'>
      <div className='max-w-8xl mx-auto'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <div className='overflow-hidden rounded-xl border border-desert-200 bg-desert-50/60 p-6 dark:border-desert-700 dark:bg-desert-900/40'>
            <div className='text-center lg:text-left'>
              <h3 className='mb-2 text-xl font-bold text-desert-800 dark:text-white'>
                I&apos;m not sure what I want, can we chat?
              </h3>
              <p className='font-light leading-relaxed text-gray-600 dark:text-gray-300'>
                This is a free consultation, let&apos;s just see if we&apos;re a
                good fit.
              </p>
            </div>

            <div className='mt-5 flex justify-center lg:justify-start'>
              <button
                type='button'
                onClick={() => handleWidgetToggle('consultation')}
                aria-expanded={expandedWidget === 'consultation'}
                aria-controls='consultation-booking-panel'
                className='inline-flex items-center justify-center gap-2 rounded-none bg-brand-sage px-4 py-2 text-sm text-white transition-opacity hover:opacity-90'
              >
                <span className='font-first-rodeo text-white'>
                  {expandedWidget === 'consultation'
                    ? 'Hide booking options'
                    : 'Open booking options'}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    expandedWidget === 'consultation'
                      ? 'rotate-180'
                      : 'rotate-0'
                  }`}
                />
              </button>
            </div>

            <div
              id='consultation-booking-panel'
              aria-hidden={expandedWidget !== 'consultation'}
              className={`overflow-hidden transition-all duration-800 ease-out ${
                expandedWidget === 'consultation'
                  ? 'mt-6 max-h-[2200px] translate-y-0 opacity-100'
                  : 'mt-0 max-h-0 -translate-y-1 opacity-0 pointer-events-none'
              }`}
            >
              {loadingWidget === 'consultation' &&
                !loadedWidgets.consultation && (
                  <div className='flex items-center justify-center py-12 text-center'>
                    <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-desert-600'></div>
                    <span className='ml-3 text-gray-600 dark:text-gray-300'>
                      Loading consultation form...
                    </span>
                  </div>
                )}

              {widgetError === 'consultation' && (
                <div className='py-8 text-center'>
                  <p className='mb-4 text-gray-600 dark:text-gray-300'>
                    This scheduler couldn&apos;t load. You can try again or
                    email directly.
                  </p>
                  <button
                    type='button'
                    onClick={() => handleRetry('consultation')}
                    className='text-sm text-desert-600 hover:underline dark:text-desert-300'
                  >
                    Try loading this scheduler again
                  </button>
                </div>
              )}

              <div
                ref={consultationContainerRef}
                className={`min-h-[320px] w-full overflow-x-auto hb-p-68ab7f800c8dd7002e944c41-1 ${
                  loadedWidgets.consultation ? 'block' : 'hidden'
                }`}
              ></div>
            </div>
          </div>

          <div className='overflow-hidden rounded-xl border border-desert-200 bg-desert-50/60 p-6 dark:border-desert-700 dark:bg-desert-900/40'>
            <div className='text-center lg:text-left'>
              <h3 className='mb-2 text-xl font-bold text-desert-800 dark:text-white'>
                I need a website and I know what I want
              </h3>
              <p className='font-light leading-relaxed text-gray-600 dark:text-gray-300'>
                Ready to move forward? Use this option if you already know you
                want to get started.
              </p>
            </div>

            <div className='mt-5 flex justify-center lg:justify-start'>
              <button
                type='button'
                onClick={() => handleWidgetToggle('readyToWork')}
                aria-expanded={expandedWidget === 'readyToWork'}
                aria-controls='ready-to-work-booking-panel'
                className='inline-flex items-center justify-center gap-2 rounded-none bg-brand-sage px-4 py-2 text-sm text-white transition-opacity hover:opacity-90'
              >
                <span className='font-first-rodeo text-white'>
                  {expandedWidget === 'readyToWork'
                    ? 'Hide booking options'
                    : 'Open booking options'}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    expandedWidget === 'readyToWork' ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
            </div>

            <div
              id='ready-to-work-booking-panel'
              aria-hidden={expandedWidget !== 'readyToWork'}
              className={`overflow-hidden transition-all duration-800 ease-out ${
                expandedWidget === 'readyToWork'
                  ? 'mt-6 max-h-[2200px] translate-y-0 opacity-100'
                  : 'mt-0 max-h-0 -translate-y-1 opacity-0 pointer-events-none'
              }`}
            >
              {loadingWidget === 'readyToWork' &&
                !loadedWidgets.readyToWork && (
                  <div className='flex items-center justify-center py-12 text-center'>
                    <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-desert-600'></div>
                    <span className='ml-3 text-gray-600 dark:text-gray-300'>
                      Loading project form...
                    </span>
                  </div>
                )}

              {widgetError === 'readyToWork' && (
                <div className='py-8 text-center'>
                  <p className='mb-4 text-gray-600 dark:text-gray-300'>
                    This scheduler couldn&apos;t load. You can try again or
                    email directly.
                  </p>
                  <button
                    type='button'
                    onClick={() => handleRetry('readyToWork')}
                    className='text-sm text-desert-600 hover:underline dark:text-desert-300'
                  >
                    Try loading this scheduler again
                  </button>
                </div>
              )}

              <div
                ref={readyToWorkContainerRef}
                className={`min-h-[320px] w-full overflow-x-auto hb-p-68ab7f800c8dd7002e944c41-2 ${
                  loadedWidgets.readyToWork ? 'block' : 'hidden'
                }`}
              ></div>
            </div>
          </div>
        </div>

        {!expandedWidget && (
          <div className='mt-6 text-center'>
            <a
              href='mailto:hello@wearesagebrush.com'
              className='inline-flex items-center justify-center px-6 py-3 text-desert-700 underline-offset-4 hover:underline dark:text-desert-200'
            >
              Prefer email? hello@wearesagebrush.com
            </a>
          </div>
        )}

        {hasStartedHoneyBook && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height='1'
              width='1'
              style={{ display: 'none' }}
              src={`https://www.honeybook.com/p.png?pid=${HONEYBOOK_PID}`}
              alt=''
            />
          </>
        )}
      </div>
    </div>
  )
}
