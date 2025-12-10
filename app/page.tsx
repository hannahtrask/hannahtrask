import type { Metadata } from 'next'
import HomeClient from './home-client'
import { generateSEOMetadata } from '@/components/seo/seo-head'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description:
    'Sagebrush Studio helps locals, creatives, and community-driven businesses establish a strong online presence while celebrating their unique story and connection to their community and environment. Build your presence. Grow your business.',
  keywords: [
    'web design',
    'web development',
    'local business websites',
    'creative business websites',
    'community-driven business',
    'custom websites',
    'Shopify',
    'WordPress',
    'Wix',
    'Squarespace',
  ],
  url: '/',
  type: 'website',
})

export default function Home() {
  return <HomeClient />
}
