'use client'

import { useEffect, useState } from 'react'
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

let honeyBookScriptPromise: Promise<void> | null = null

function loadHoneyBookScript() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('HoneyBook can only load in the browser'))
  }

  if (honeyBookScriptPromise) return honeyBookScriptPromise

  honeyBookScriptPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector(
      `script[src="${HONEYBOOK_SCRIPT_URL}"]`
    ) as HTMLScriptElement | null

    if (existingScript) {
      if ((existingScript as HTMLScriptElement).dataset.loaded === 'true') {
        resolve()
        return
      }

      existingScript.addEventListener('load', () => resolve(), { once: true })
      existingScript.addEventListener(
        'error',
        () => reject(new Error('Failed to load HoneyBook script')),
        { once: true }
      )
      return
    }

    const script = document.createElement('script')
    script.async = true
    script.src = HONEYBOOK_SCRIPT_URL
    script.onload = () => {
      script.dataset.loaded = 'true'
      resolve()
    }
    script.onerror = () => reject(new Error('Failed to load HoneyBook script'))
    document.head.appendChild(script)
  })

  return honeyBookScriptPromise
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
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>(
    'idle'
  )
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen || status === 'loading' || status === 'ready') return

    let cancelled = false
    const loadWidget = async () => {
      try {
        setStatus('loading')
        await loadHoneyBookScript()
        if (cancelled) return

        window._HB_ = window._HB_ || {}
        window._HB_.pid = HONEYBOOK_PID
        window._HB_.init?.()

        setStatus('ready')
      } catch {
        if (cancelled) return
        setStatus('error')
      }
    }

    loadWidget()

    return () => {
      cancelled = true
    }
  }, [isOpen, status])

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
        {isOpen && (
          <div
            className={`${widgetClassName} relative min-h-[320px] w-full max-w-full min-w-0 overflow-hidden`}
          />
        )}

        {status === 'loading' && (
          <div className='flex items-center justify-center py-8 text-center'>
            <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-desert-600'></div>
            <span className='ml-3 text-gray-600 dark:text-gray-300'>
              {loadingLabel}
            </span>
          </div>
        )}

        {status === 'error' && (
          <div className='py-8 text-center'>
            <p className='mb-4 text-gray-600 dark:text-gray-300'>
              This scheduler couldn&apos;t load. You can try again or email
              directly.
            </p>
            <button
              type='button'
              onClick={() => {
                setStatus('idle')
                setIsOpen(true)
              }}
              className='text-sm text-desert-600 hover:underline dark:text-desert-300'
            >
              Try loading this scheduler again
            </button>
          </div>
        )}
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
        <div className='grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-1'>
          {/* <BookingCard
            title="I'm not sure what I want, can we chat?"
            description="This is a free consultation, let's just see if we're a good fit."
            panelId='consultation-booking-panel'
            widgetClassName='hb-p-68ab7f800c8dd7002e944c41-1'
            loadingLabel='Loading consultation form...'
          /> */}

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
