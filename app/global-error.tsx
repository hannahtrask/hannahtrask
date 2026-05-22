'use client'

import { useEffect } from 'react'
import Link from 'next/link'

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

function postGlobalError(error: Error & { digest?: string }) {
  const payload = {
    kind: 'global_error',
    message: error.message || 'Unknown global app error',
    stack: error.stack,
    digest: error.digest,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    userAgent:
      typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
    viewport:
      typeof window !== 'undefined'
        ? { width: window.innerWidth, height: window.innerHeight }
        : undefined,
    timestamp: new Date().toISOString(),
    phase: 'react_global_error_boundary',
  }

  try {
    const body = JSON.stringify(payload)

    if (
      typeof navigator !== 'undefined' &&
      typeof navigator.sendBeacon === 'function'
    ) {
      const blob = new Blob([body], { type: 'application/json' })
      const beaconSent = navigator.sendBeacon('/api/client-errors', blob)
      if (beaconSent) return
    }

    void fetch('/api/client-errors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    })
  } catch {
    // Never throw from the error boundary logger itself.
  }
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    postGlobalError(error)
  }, [error])

  return (
    <html lang='en'>
      <body className='min-h-screen bg-[#ECD9B9] text-[#33352A]'>
        <main className='mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center'>
          <h1 className='font-first-rodeo text-4xl tracking-wide text-[#8C7E49]'>
            Something went wrong
          </h1>
          <p className='mt-4 max-w-md text-sm leading-relaxed'>
            The page hit an unexpected error. A diagnostic log was sent so this
            can be fixed quickly.
          </p>
          <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
            <button
              type='button'
              onClick={() => reset()}
              className='border border-[#8C7E49] px-5 py-2 text-sm font-semibold text-[#8C7E49] transition-colors hover:bg-[#8C7E49] hover:text-[#ECD9B9]'
            >
              Try again
            </button>
            <Link
              href='/'
              className='border border-[#33352A] px-5 py-2 text-sm font-semibold text-[#33352A] transition-colors hover:bg-[#33352A] hover:text-[#ECD9B9]'
            >
              Go home
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
