import type { Metadata } from 'next'
import ServicesPageClient from './services-page-client'

export const metadata: Metadata = {
  title: 'Services | SAGEBRUSH CREATIVE',
  description:
    'Discover web design and development services, from branding to custom websites and e-commerce solutions.',
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
