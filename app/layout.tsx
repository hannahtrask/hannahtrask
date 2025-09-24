import type React from 'react'
import type { Metadata } from 'next'
import { Cormorant_SC, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/header-footer/header'
import Footer from '@/components/header-footer/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

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

export const metadata: Metadata = {
  title: 'SAGEBRUSH CREATIVE',
  description:
    'Showcasing our work as a web developers with a passion for the outdoors',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${cormorantSC.variable} ${montserrat.variable} min-h-screen font-montserrat`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </div>
          <Toaster position='top-center' richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
