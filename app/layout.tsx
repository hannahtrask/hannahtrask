import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'

const miroa = localFont({
  src: '../public/fonts/Miroa.otf',
  variable: '--font-miroa',
  display: 'swap',
})

const firstRodeo = localFont({
  src: '../public/fonts/FirstRodeo.otf',
  variable: '--font-first-rodeo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wearesagebrush.com'),
  title: {
    default: 'Sagebrush Web Studio',
    template: '%s | Sagebrush Web Studio',
  },
  description:
    'Sagebrush Web Studio builds authentic websites for outdoor brands, creative teams, and service businesses that want a clear, memorable presence.',
  keywords: [
    'web design',
    'web development',
    'SEO',
    'AIO',
    'GEO',
    'Squarespace',
    'Wix',
    'WordPress',
    'Shopify',
    'branding',
    'writing',
    'storytelling',
    'outdoor brands',
    'creative studios',
    'service businesses',
  ],
  authors: [{ name: 'Hannah Trask' }],
  creator: 'Hannah Trask',
  publisher: 'Sagebrush Web Studio',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Sagebrush Web Studio',
    title: 'Sagebrush Web Studio',
    description:
      'Sagebrush Web Studio builds authentic websites for outdoor brands, creative teams, and service businesses that want a clear, memorable presence.',
    images: [
      {
        url: '/site-title/SagebrushSecondaryLogo-07.png',
        width: 1969,
        height: 2000,
        alt: 'Sagebrush Web Studio logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagebrush Web Studio',
    description:
      'Sagebrush Web Studio builds authentic websites for outdoor brands, creative teams, and service businesses that want a clear, memorable presence.',
    images: ['/site-title/SagebrushSecondaryLogo-07.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${miroa.variable} ${firstRodeo.variable}`}>
      <body>{children}</body>
    </html>
  )
}
