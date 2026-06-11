import type { Metadata } from 'next'
import HomeClient from './home-client'
import { generateSEOMetadata } from '@/components/seo/seo-head'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Jackson WY Web Design & Development',
  description:
    'Sagebrush Web Studio is a Jackson Hole-based web design and development studio helping people anywhere build their online presence with thoughtful websites, clear strategy, personalized support, Design Days to knock out your todo list, and Website in a Week.',
  keywords: [
    'Jackson WY web design',
    'Jackson WY web development',
    'Jackson Wyoming web developer',
    'Jackson Hole web design',
    'remote web designer',
    'Design Day to knock out your web design todo list',
    'Website in a Week',
    'Sagebrush Web Studio Jackson WY',
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
