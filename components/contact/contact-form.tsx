interface ContactFormProps {
  className?: string
}

function BookingCard({
  title,
  description,
  href,
  linkLabel,
}: {
  title: string
  description: string
  href: string
  linkLabel: string
}) {
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
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center gap-2 rounded-none bg-brand-sage px-4 py-2 text-sm text-white transition-opacity hover:opacity-90'
        >
          <span className='font-first-rodeo text-white'>{linkLabel}</span>
        </a>
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
        <div className='grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2'>
          <BookingCard
            title="I'm not sure what I want, can we chat?"
            description="This is a free consultation, let's just see if we're a good fit."
            href='https://wearesagebrush.hbportal.co/public/68af6743f3408f00280384b9'
            linkLabel='Book a free consultation'
          />

          <BookingCard
            title='I need a website and I know what I want'
            description='Ready to move forward? Use this option if you already know you want to get started.'
            href='https://wearesagebrush.hbportal.co/public/68bdedca922e1900272c5149'
            linkLabel='Start your project'
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
