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
    title: 'Sagebrush Web Studio',
    description: 'Sagebrush Web Studio builds authentic websites for outdoor and creative brands.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${miroa.variable} ${firstRodeo.variable}`}>
            <body>{children}</body>
        </html>
    )
}