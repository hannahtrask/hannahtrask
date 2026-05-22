'use client'

import { useEffect, useRef } from 'react'

type ClientLogPayload = {
  kind: 'error' | 'unhandledrejection' | 'manual_test'
  message: string
  stack?: string
  source?: string
  line?: number
  column?: number
  url: string
  userAgent: string
  viewport?: {
    width: number
    height: number
  }
  timestamp: string
}

const CLIENT_ERROR_ENDPOINT = '/api/client-errors'
const MAX_LOGS_PER_PAGE = 8

function toMessage(reason: unknown): string {
  if (typeof reason === 'string') return reason
  if (reason instanceof Error) return reason.message
  if (reason && typeof reason === 'object' && 'message' in reason) {
    const maybeMessage = (reason as { message?: unknown }).message
    if (typeof maybeMessage === 'string') return maybeMessage
  }

  try {
    return JSON.stringify(reason)
  } catch {
    return 'Unknown rejection reason'
  }
}

export default function ClientErrorLogger() {
  const sentCountRef = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const sendLog = (payload: ClientLogPayload) => {
      if (sentCountRef.current >= MAX_LOGS_PER_PAGE) return
      sentCountRef.current += 1

      const body = JSON.stringify(payload)

      if (
        typeof navigator !== 'undefined' &&
        typeof navigator.sendBeacon === 'function'
      ) {
        const blob = new Blob([body], { type: 'application/json' })
        const beaconSent = navigator.sendBeacon(CLIENT_ERROR_ENDPOINT, blob)
        if (beaconSent) return
      }

      void fetch(CLIENT_ERROR_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      })
    }

    const basePayload = () => ({
      url: window.location.href,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      timestamp: new Date().toISOString(),
    })

    const handleError = (event: ErrorEvent) => {
      sendLog({
        kind: 'error',
        message: event.message || 'Unknown window error',
        source: event.filename,
        line: event.lineno,
        column: event.colno,
        stack: event.error?.stack,
        ...basePayload(),
      })
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      sendLog({
        kind: 'unhandledrejection',
        message: toMessage(event.reason),
        stack: event.reason instanceof Error ? event.reason.stack : undefined,
        ...basePayload(),
      })
    }

    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.get('log_test') === '1') {
      sendLog({
        kind: 'manual_test',
        message: 'Manual client log test fired from query param',
        ...basePayload(),
      })
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return null
}
