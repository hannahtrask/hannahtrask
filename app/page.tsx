import type { Metadata } from 'next'
import HomeClient from './home-client'
import { generateSEOMetadata } from '@/components/seo/seo-head'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description:
    'Sagebrush Creative offers professional web design and development services for outdoor industry businesses, e-commerce ventures, and adventure-focused brands. Let your ideas roam with custom websites, branding, and digital solutions.',
  keywords: [
    'web design',
    'web development',
    'outdoor industry websites',
    'e-commerce development',
    'adventure brands',
    'custom websites',
    'branding',
    'illustration',
    'responsive design',
    'freelance web developer',
  ],
  url: '/',
  type: 'website',
})

export default function Home() {
  return <HomeClient />
}
