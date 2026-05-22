import { NextRequest, NextResponse } from 'next/server'

type ClientErrorBody = {
  kind?: 'error' | 'unhandledrejection' | 'manual_test'
  message?: string
  stack?: string
  source?: string
  line?: number
  column?: number
  url?: string
  userAgent?: string
  viewport?: {
    width?: number
    height?: number
  }
  timestamp?: string
}

const truncate = (value: unknown, max = 2000) => {
  if (typeof value !== 'string') return undefined
  return value.length <= max ? value : `${value.slice(0, max)}...`
}

export async function POST(request: NextRequest) {
  let body: ClientErrorBody = {}

  try {
    body = (await request.json()) as ClientErrorBody
  } catch (error) {
    console.error('[client-runtime-error][invalid-json]', {
      message: error instanceof Error ? error.message : String(error),
    })

    return NextResponse.json(
      { ok: false, error: 'invalid_json' },
      { status: 400 }
    )
  }

  const logEntry = {
    kind: body.kind ?? 'error',
    message: truncate(body.message, 1000) ?? 'Unknown client error',
    stack: truncate(body.stack, 8000),
    source: truncate(body.source, 500),
    line: typeof body.line === 'number' ? body.line : undefined,
    column: typeof body.column === 'number' ? body.column : undefined,
    url: truncate(body.url, 2000),
    userAgent: truncate(body.userAgent, 800),
    viewport:
      body.viewport &&
      typeof body.viewport.width === 'number' &&
      typeof body.viewport.height === 'number'
        ? { width: body.viewport.width, height: body.viewport.height }
        : undefined,
    timestamp: truncate(body.timestamp, 100),
    serverReceivedAt: new Date().toISOString(),
    ip: request.headers.get('x-forwarded-for') ?? undefined,
  }

  console.error('[client-runtime-error]', JSON.stringify(logEntry))

  return NextResponse.json(
    { ok: true },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  )
}
