'use client'

import { FormEvent, useState } from 'react'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/hello@wearesagebrush.com'

export function ContactInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4' noValidate>
      <input type='hidden' name='_subject' value='web inquiry' />
      <input type='hidden' name='_captcha' value='false' />
      <div>
        <label
          htmlFor='inquiry-name'
          className='font-first-rodeo text-[0.68rem] uppercase tracking-[0.3em] text-sand-100/78'
        >
          Name
        </label>
        <input
          id='inquiry-name'
          name='name'
          type='text'
          autoComplete='name'
          required
          className='mt-2 w-full rounded-xl border border-sand-50/22 bg-sand-50/10 px-4 py-3 text-sm text-sand-50 placeholder:text-sand-100/45 focus:border-sand-50/55 focus:outline-none'
          placeholder='Your name'
        />
      </div>

      <div>
        <label
          htmlFor='inquiry-email'
          className='font-first-rodeo text-[0.68rem] uppercase tracking-[0.3em] text-sand-100/78'
        >
          Email
        </label>
        <input
          id='inquiry-email'
          name='email'
          type='email'
          autoComplete='email'
          required
          className='mt-2 w-full rounded-xl border border-sand-50/22 bg-sand-50/10 px-4 py-3 text-sm text-sand-50 placeholder:text-sand-100/45 focus:border-sand-50/55 focus:outline-none'
          placeholder='you@email.com'
        />
      </div>

      <div>
        <label
          htmlFor='inquiry-message'
          className='font-first-rodeo text-[0.68rem] uppercase tracking-[0.3em] text-sand-100/78'
        >
          Message
        </label>
        <textarea
          id='inquiry-message'
          name='message'
          rows={5}
          required
          className='mt-2 w-full rounded-xl border border-sand-50/22 bg-sand-50/10 px-4 py-3 text-sm text-sand-50 placeholder:text-sand-100/45 focus:border-sand-50/55 focus:outline-none'
          placeholder='Tell me about your project'
        />
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='inline-flex w-full items-center justify-center rounded-full border border-sand-50/26 bg-[#333520] px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-sand-50 transition hover:-translate-y-0.5 hover:border-[#8799a7] hover:bg-[#8799a7]'
      >
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>

      {status === 'success' && (
        <p className='text-sm text-sand-50/85'>
          Thanks! I&apos;ll be in touch soon.
        </p>
      )}

      {status === 'error' && (
        <p className='text-sm text-[#ffd7cc]'>
          Shoot, something went wrong. Try again in a sec.
        </p>
      )}
    </form>
  )
}
