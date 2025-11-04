import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  noIndex?: boolean
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false,
}: SEOProps): Metadata {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://sagebrushcreative.com'
  const siteName = 'Sagebrush Creative'
  const defaultTitle = 'Sagebrush Creative - Web Design & Development'
  const defaultDescription =
    'Professional web design and development services for outdoor industry businesses, e-commerce ventures, and adventure-focused brands.'
  const defaultImage = `${baseUrl}/hero-images/western-backdrop.jpg`

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle
  const fullDescription = description || defaultDescription
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImage = image ? `${baseUrl}${image}` : defaultImage

  const defaultKeywords = [
    'web design',
    'web development',
    'outdoor industry',
    'e-commerce',
    'adventure brands',
    'responsive design',
    'SEO optimization',
    'branding',
    'illustration',
    'freelance developer',
  ]

  const allKeywords = [...defaultKeywords, ...keywords].join(', ')

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    authors: [{ name: author || 'Hannah Trask' }],
    creator: 'Hannah Trask',
    publisher: siteName,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type,
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || 'Sagebrush Creative',
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: '@sagebrush.dev',
    },
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
  }

  // Add article-specific metadata
  if (type === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [author || 'Hannah Trask'],
    }
  }

  return metadata
}

// Structured Data (JSON-LD) generators
export function generateBusinessStructuredData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://sagebrushcreative.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Sagebrush Creative',
    description:
      'Professional web design and development services for outdoor industry businesses, e-commerce ventures, and adventure-focused brands.',
    url: baseUrl,
    logo: `${baseUrl}/favicon.ico`,
    image: `${baseUrl}/hero-images/western-backdrop.jpg`,
    founder: {
      '@type': 'Person',
      name: 'Hannah Trask',
      jobTitle: 'Web Developer & Designer',
    },
    serviceType: [
      'Web Design',
      'Web Development',
      'E-commerce Development',
      'Branding',
      'Illustration',
    ],
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Design & Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Design',
            description: 'Custom website design services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Full-stack web development services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Development',
            description: 'Online store development and optimization',
          },
        },
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hctrask@gmail.com',
    },
    sameAs: ['https://instagram.com/sagebrush.dev'],
  }
}

export function generateProjectStructuredData(project: any) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://sagebrushcreative.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `${baseUrl}/project/${project.slug?.current}`,
    image: project.heroImage ? `${baseUrl}${project.heroImage}` : undefined,
    author: {
      '@type': 'Person',
      name: 'Hannah Trask',
      jobTitle: 'Web Developer & Designer',
    },
    creator: {
      '@type': 'Organization',
      name: 'Sagebrush Creative',
      url: baseUrl,
    },
    dateCreated: project._createdAt,
    dateModified: project._updatedAt,
    genre: project.category,
    keywords: project.technologies?.join(', '),
  }
}
