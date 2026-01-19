import type React from 'react'
import type { Metadata } from 'next'
import { Cormorant_SC, Montserrat } from 'next/font/google'
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

const cormorantSC = Cormorant_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-sc',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = generateSEOMetadata({
  title: 'Web Design & Development',
  description:
    'Sagebrush Studio helps locals, creatives, and community-driven businesses establish a strong online presence while celebrating their unique story and connection to their community and environment.',
  keywords: [
    'web design',
    'web development',
    'local business websites',
    'creative business websites',
  ],
  type: 'website',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const businessStructuredData = generateBusinessStructuredData()

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <title>Sagebrush Studio - Web Design & Development</title>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessStructuredData),
          }}
        />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-H27HPKYH03'
        />
        <script
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
        className={`${cormorantSC.variable} ${montserrat.variable} min-h-screen font-montserrat`}
      >
        <SpeedInsights />
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
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
