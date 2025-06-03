import type React from 'react'
import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import {SanityLive} from "@/app/sanity/live";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Creative Web Developer | Adventure Enthusiast',
  description:
    'Showcasing my work as a freelance web developer with a passion for the outdoors',
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
        className={`${playfair.variable} ${montserrat.variable} min-h-screen font-montserrat`}
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
            <SanityLive />
            <Footer />
          </div>
          <Toaster position='top-center' richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
