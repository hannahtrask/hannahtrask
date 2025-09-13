'use client'

import { useEffect } from 'react'

export default function ContactForm() {
  // Load HoneyBook script and inject custom styles
  useEffect(() => {
    const loadHoneyBookScript = () => {
      // Set up HoneyBook global object
      if (typeof window !== 'undefined') {
        ;(window as any)._HB_ = (window as any)._HB_ || {}
        ;(window as any)._HB_.pid = '68ab7f800c8dd7002e944c41'

        // Check if script is already loaded
        if (document.querySelector('script[src*="honeybook.com"]')) {
          return
        }

        // Create and load the script
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src =
          'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js'

        const firstScript = document.getElementsByTagName('script')[0]
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript)
        }

        // Inject custom styles after a delay to ensure widget loads
        setTimeout(() => {
          injectCustomStyles()
        }, 2000)
      }
    }

    const injectCustomStyles = () => {
      // Remove existing custom styles if any
      const existingStyle = document.getElementById('honeybook-custom-styles')
      if (existingStyle) {
        existingStyle.remove()
      }

      // Create and inject new styles
      const style = document.createElement('style')
      style.id = 'honeybook-custom-styles'
      style.textContent = `
        /* HoneyBook Widget Font Overrides */
        .hb-p-68ab7f800c8dd7002e944c41-2 *,
        .hb-p-68ab7f800c8dd7002e944c41-2 *:before,
        .hb-p-68ab7f800c8dd7002e944c41-2 *:after {
          font-family: var(--font-julius-sans-one), 'Julius Sans One', sans-serif !important;
        }

        /* Target iframe content if widget uses iframe */
        iframe[src*="honeybook"] {
          font-family: var(--font-julius-sans-one), 'Julius Sans One', sans-serif !important;
        }

        /* More specific targeting for common HoneyBook elements */
        [class*="hb-"] input,
        [class*="hb-"] textarea,
        [class*="hb-"] select,
        [class*="hb-"] label,
        [class*="hb-"] button,
        [class*="hb-"] p,
        [class*="hb-"] span,
        [class*="hb-"] div,
        [class*="hb-"] h1,
        [class*="hb-"] h2,
        [class*="hb-"] h3,
        [class*="hb-"] h4,
        [class*="hb-"] h5,
        [class*="hb-"] h6 {
          font-family: var(--font-julius-sans-one), 'Julius Sans One', sans-serif !important;
        }

        /* Brand color overrides */
        [class*="hb-"] button {
          background-color: #7F492E !important;
          border-color: #7F492E !important;
        }

        [class*="hb-"] button:hover {
          background-color: #575C4D !important;
          border-color: #575C4D !important;
        }

        [class*="hb-"] input:focus,
        [class*="hb-"] textarea:focus,
        [class*="hb-"] select:focus {
          border-color: #B295C1 !important;
          box-shadow: 0 0 0 2px rgba(178, 149, 193, 0.2) !important;
        }
      `
      document.head.appendChild(style)
    }

    loadHoneyBookScript()

    // Also try to inject styles periodically in case widget loads later
    const styleInterval = setInterval(() => {
      if (document.querySelector('.hb-p-68ab7f800c8dd7002e944c41-2')) {
        injectCustomStyles()
        clearInterval(styleInterval)
      }
    }, 1000)

    // Cleanup interval after 10 seconds
    setTimeout(() => {
      clearInterval(styleInterval)
    }, 10000)

    return () => {
      clearInterval(styleInterval)
    }
  }, [])

  return (
    <div className='bg-white dark:bg-desert-800 p-8 md:p-12 shadow-sm'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-julius-sans-one font-light text-desert-800 dark:text-desert-100 mb-4'>
            Let's Start a Conversation
          </h2>
          <p className='text-gray-600 dark:text-gray-300 font-light leading-relaxed'>
            Ready to bring your vision to life? We'd love to hear about your
            project.
          </p>
        </div>

        {/* HoneyBook Contact Form Widget */}
        <div className='hb-p-68ab7f800c8dd7002e944c41-2'></div>

        {/* HoneyBook tracking pixel */}
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
