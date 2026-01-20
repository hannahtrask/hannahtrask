import type { Metadata } from 'next'
import HomeClient from './home-client'
import { generateSEOMetadata } from '@/components/seo/seo-head'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Jackson WY Web Design & Development',
  description:
    'Sagebrush Studio is a Jackson, Wyoming web design and development studio. We help locals, creatives, and community-driven businesses in Jackson Hole and the Teton Valley build their online presence. Build your presence. Grow your business.',
  keywords: [
    'Jackson WY web design',
    'Jackson WY web development',
    'Jackson Wyoming web developer',
    'Jackson Hole web design',
    'Sagebrush Studio Jackson WY',
    'Teton Valley web development',
    'Wyoming web designer',
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
