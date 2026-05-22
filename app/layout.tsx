import type React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/header-footer/header'
import Footer from '@/components/header-footer/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import {
  generateSEOMetadata,
  generateBusinessStructuredData,
} from '@/components/seo/seo-head'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import SmoothHashScroll from '@/components/scroll/smooth-hash-scroll'
import ClientErrorLogger from '@/components/monitoring/client-error-logger'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

const miroa = localFont({
  src: '../public/fonts/Miroa.otf',
  variable: '--font-miroa',
})

const firstRodeo = localFont({
  src: '../public/fonts/FirstRodeo.otf',
  variable: '--font-first-rodeo',
})

const iconMetadata: Metadata = {
  icons: {
    icon: '/SagebrushSubmark-01.png',
    apple: '/SagebrushSubmark-01.png',
  },
}

export const metadata: Metadata = {
  ...iconMetadata,
  ...generateSEOMetadata({
    title: 'Jackson WY Web Design & Development',
    description:
      'Sagebrush Web Studio is a Jackson, Wyoming web design and development studio. We help locals, creatives, and community-driven businesses in Jackson Hole and the Teton Valley establish a strong online presence.',
    keywords: [
      'Jackson WY web design',
      'Jackson WY web development',
      'Jackson Hole web designer',
      'Jackson Hole web developer',
      'Hannah Trask web developer',
      'Sagebrush Web Studio Jackson WY',
      'Wyoming web developer',
      'Teton Valley web design',
      'local business websites',
      'creative business websites',
    ],
    type: 'website',
  }),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const businessStructuredData = generateBusinessStructuredData()
  const earlyClientLoggerScript = `
    (function () {
      if (typeof window === 'undefined') return;
      if (window.__sagebrushEarlyLoggerInstalled) return;
      window.__sagebrushEarlyLoggerInstalled = true;

      var endpoint = '/api/client-errors';

      function send(payload) {
        try {
          var body = JSON.stringify(payload);
          if (navigator && typeof navigator.sendBeacon === 'function') {
            var blob = new Blob([body], { type: 'application/json' });
            var sent = navigator.sendBeacon(endpoint, blob);
            if (sent) return;
          }

          fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body,
            keepalive: true,
          });
        } catch (_err) {
          // Swallow logger failures to avoid cascading errors.
        }
      }

      function basePayload() {
        return {
          url: window.location.href,
          userAgent: navigator && navigator.userAgent ? navigator.userAgent : 'unknown',
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
          },
          timestamp: new Date().toISOString(),
        };
      }

      window.addEventListener('error', function (event) {
        send(Object.assign(basePayload(), {
          kind: 'early_error',
          message: event && event.message ? event.message : 'Unknown early window error',
          source: event && event.filename ? event.filename : undefined,
          line: event && typeof event.lineno === 'number' ? event.lineno : undefined,
          column: event && typeof event.colno === 'number' ? event.colno : undefined,
          stack: event && event.error && event.error.stack ? event.error.stack : undefined,
          phase: 'pre_hydration',
        }));
      });

      window.addEventListener('unhandledrejection', function (event) {
        var reason = event ? event.reason : undefined;
        var message = 'Unknown rejection reason';
        var stack;

        if (typeof reason === 'string') {
          message = reason;
        } else if (reason && typeof reason === 'object') {
          if (typeof reason.message === 'string') message = reason.message;
          if (typeof reason.stack === 'string') stack = reason.stack;
        }

        send(Object.assign(basePayload(), {
          kind: 'early_unhandledrejection',
          message: message,
          stack: stack,
          phase: 'pre_hydration',
        }));
      });

      try {
        var params = new URLSearchParams(window.location.search);
        if (params.get('log_nav') === '1') {
          var navEntry = performance && performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : undefined;
          send(Object.assign(basePayload(), {
            kind: 'navigation',
            message: 'Navigation diagnostic',
            navType: navEntry && navEntry.type ? navEntry.type : 'unknown',
            referrer: document.referrer || undefined,
            phase: 'startup',
          }));
        }
      } catch (_err) {
        // Ignore diagnostics parse failures.
      }
    })();
  `

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <title>
          Sagebrush Web Studio - Jackson WY Web Design & Development
        </title>
        <Script
          type='application/ld+json'
          id='business-structured-data'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessStructuredData),
          }}
        />
        <Script
          id='early-client-runtime-logger'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{
            __html: earlyClientLoggerScript,
          }}
        />
        <Script
          id='google-analytics-src'
          src='https://www.googletagmanager.com/gtag/js?id=G-H27HPKYH03'
          strategy='afterInteractive'
        />
        <Script
          id='google-analytics-config'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H27HPKYH03');
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${miroa.variable} ${firstRodeo.variable} min-h-screen font-montserrat`}
      >
        <SpeedInsights />
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <ClientErrorLogger />
          <SmoothHashScroll />
          <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow'>
              {children}
              <Analytics />
            </main>
            <Footer />
          </div>
          <Toaster position='top-center' richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
