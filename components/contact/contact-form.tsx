'use client'

import { useEffect } from 'react'

export default function ContactForm() {
  useEffect(() => {
    const loadHoneyBookScript = () => {
      if (typeof window !== 'undefined') {
        ;(window as any)._HB_ = (window as any)._HB_ || {}
        ;(window as any)._HB_.pid = '68ab7f800c8dd7002e944c41'

        if (document.querySelector('script[src*="honeybook.com"]')) {
          return
        }

        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src =
          'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js'

        const firstScript = document.getElementsByTagName('script')[0]
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript)
        }
      }
    }

    loadHoneyBookScript()
  }, [])

  return (
    <div className='bg-white dark:bg-desert-800 p-4 md:p-4 shadow-sm'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-cormorant-sc font-light text-desert-800 dark:text-desert-100 mb-4'>
            Let's Start a Conversation
          </h2>
        </div>

        {/* HoneyBook Contact Form Widget */}
        <div className='w-full hb-p-68ab7f800c8dd7002e944c41-2'></div>

        {/* HoneyBook tracking pixel */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.honeybook.com/p.png?pid=68ab7f800c8dd7002e944c41'
          alt=''
        />
      </div>
    </div>
  )
}
