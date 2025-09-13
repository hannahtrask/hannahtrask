import type React from 'react'
import type { Metadata } from 'next'
import { Julius_Sans_One, Archivo_Narrow } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const juliusSansOne = Julius_Sans_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-julius-sans-one',
})

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo-narrow',
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
        className={`${juliusSansOne.variable} ${archivoNarrow.variable} min-h-screen font-archivo-narrow`}
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
