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
    process.env.NEXT_PUBLIC_SITE_URL || 'https://wearesagebrush.com'
  const siteName = 'Sagebrush Web Studio'
  const defaultTitle =
    'Sagebrush Web Studio - Jackson WY Web Design & Development'
  const defaultDescription =
    'Sagebrush Web Studio is a Jackson, Wyoming web design and development studio helping locals, creatives, and community-driven businesses in the Teton Valley establish a strong online presence while celebrating their unique story and connection to their community and environment.'
  const defaultImage = `${baseUrl}/hero-images/tetons-backdrop.jpg`

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle
  const fullDescription = description || defaultDescription
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImage = image ? `${baseUrl}${image}` : defaultImage

  const defaultKeywords = [
    'Hannah Trask',
    'Hannah Trask web developer',
    'Hannah Trask Jackson WY',
    'Jackson WY web design',
    'Jackson WY web development',
    'Jackson Wyoming web developer',
    'Jackson Hole web design',
    'Jackson Hole web developer',
    'Teton Valley web development',
    'Sagebrush Web Studio Jackson WY',
    'web design',
    'web development',
    'local business websites',
    'creative business websites',
    'community-driven business',
    'Shopify',
    'WordPress',
    'Wix',
    'Squarespace',
    'freelance web developer',
    'Wyoming web designer',
    'freelance web developer Wyoming',
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
          alt: title || 'Sagebrush Web Studio',
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
    process.env.NEXT_PUBLIC_SITE_URL || 'https://wearesagebrush.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Sagebrush Web Studio',
    description:
      'Sagebrush Web Studio is a Jackson, Wyoming web design and development studio helping locals, creatives, and community-driven businesses in Jackson Hole and the Teton Valley establish a strong online presence.',
    url: baseUrl,
    logo: `${baseUrl}/favicon.ico`,
    image: `${baseUrl}/hero-images/tetons-backdrop.jpg`,
    founder: {
      '@type': 'Person',
      name: 'Hannah Trask',
      jobTitle: 'Web Developer & Designer',
    },
    serviceType: [
      'Web Design',
      'Web Development',
      'E-commerce Development',
      'Technical Consulting',
      'Migrations',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jackson',
      addressRegion: 'WY',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.4799,
      longitude: -110.7624,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Jackson',
        containedInPlace: {
          '@type': 'State',
          name: 'Wyoming',
        },
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Teton County',
      },
      {
        '@type': 'Place',
        name: 'Jackson Hole',
      },
    ],
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
    process.env.NEXT_PUBLIC_SITE_URL || 'https://wearesagebrush.com'

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
      name: 'Sagebrush Web Studio',
      url: baseUrl,
    },
    dateCreated: project._createdAt,
    dateModified: project._updatedAt,
    genre: project.category,
    keywords: project.technologies?.join(', '),
  }
}
