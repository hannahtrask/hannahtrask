'use client'

import { FormEvent, useState } from 'react'

type SubmitState =
  | { status: 'idle' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string }

const initialState: SubmitState = { status: 'idle' }

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<SubmitState>(initialState)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitState(initialState)

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setIsSubmitting(false)
      setSubmitState({
        status: 'error',
        message: 'Please fill out your name, email, and message.',
      })
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = (await response.json()) as { error?: string; ok?: boolean }

      if (!response.ok || !data.ok) {
        setSubmitState({
          status: 'error',
          message:
            data.error ?? 'Something went wrong while sending your message.',
        })
        return
      }

      form.reset()
      setSubmitState({
        status: 'success',
        message: 'Thanks for reaching out. I will get back to you soon.',
      })
    } catch {
      setSubmitState({
        status: 'error',
        message: 'Unable to send message right now. Please try again shortly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label
          htmlFor='contact-name'
          className='font-first-rodeo text-[0.68rem] uppercase tracking-[0.3em] text-sand-100/80'
        >
          Name
        </label>
        <input
          id='contact-name'
          name='name'
          type='text'
          autoComplete='name'
          required
          className='mt-2 w-full rounded-xl border border-sand-50/20 bg-sand-50/10 px-4 py-3 text-sm text-sand-50 placeholder:text-sand-100/55 outline-none transition focus:border-[#8799a7] focus:ring-2 focus:ring-[#8799a7]/35'
          placeholder='Your name'
        />
      </div>

      <div>
        <label
          htmlFor='contact-email'
          className='font-first-rodeo text-[0.68rem] uppercase tracking-[0.3em] text-sand-100/80'
        >
          Email
        </label>
        <input
          id='contact-email'
          name='email'
          type='email'
          autoComplete='email'
          required
          className='mt-2 w-full rounded-xl border border-sand-50/20 bg-sand-50/10 px-4 py-3 text-sm text-sand-50 placeholder:text-sand-100/55 outline-none transition focus:border-[#8799a7] focus:ring-2 focus:ring-[#8799a7]/35'
          placeholder='you@example.com'
        />
      </div>

      <div>
        <label
          htmlFor='contact-message'
          className='font-first-rodeo text-[0.68rem] uppercase tracking-[0.3em] text-sand-100/80'
        >
          Message
        </label>
        <textarea
          id='contact-message'
          name='message'
          required
          rows={5}
          className='mt-2 w-full rounded-xl border border-sand-50/20 bg-sand-50/10 px-4 py-3 text-sm text-sand-50 placeholder:text-sand-100/55 outline-none transition focus:border-[#8799a7] focus:ring-2 focus:ring-[#8799a7]/35'
          placeholder='Tell me about your project.'
        />
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='inline-flex w-full items-center justify-center rounded-full border border-sand-50/25 bg-sand-50 px-6 py-3 text-[0.7rem] uppercase tracking-[0.32em] text-[#333520] transition hover:-translate-y-0.5 hover:border-[#8799a7] hover:bg-[#8799a7] hover:text-sand-50 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0'
      >
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  )
}
