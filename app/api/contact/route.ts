import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  if (!resendApiKey) {
    return NextResponse.json(
      { error: 'Server email is not configured.' },
      { status: 500 }
    )
  }

  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    )
  }

  const name = String((payload as { name?: string }).name ?? '').trim()
  const email = String((payload as { email?: string }).email ?? '').trim()
  const message = String((payload as { message?: string }).message ?? '').trim()

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    )
  }

  const resend = new Resend(resendApiKey)
  const toEmail = process.env.RESEND_TO_EMAIL || 'hello@wearesagebrush.com'
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: 'web inquiry',
      replyTo: email,
      text: [
        'New website inquiry',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Failed to send contact form email:', error)

    return NextResponse.json(
      { error: 'Unable to send your message right now.' },
      { status: 500 }
    )
  }
}
