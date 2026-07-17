export function ContactInquiryForm() {
  return (
    <form
      action='https://formsubmit.co/hello@wearesagebrush.com'
      method='POST'
      className='space-y-4'
    >
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
        className='inline-flex w-full items-center justify-center rounded-full border border-sand-50/26 bg-[#333520] px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-sand-50 transition hover:-translate-y-0.5 hover:border-[#8799a7] hover:bg-[#8799a7]'
      >
        Send Inquiry
      </button>
    </form>
  )
}
