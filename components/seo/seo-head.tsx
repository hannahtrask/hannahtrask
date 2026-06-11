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

interface ProjectStructuredDataInput {
  title: string
  description: string
  slug?: {
    current?: string
  }
  heroImage?: string
  _createdAt?: string
  _updatedAt?: string
  category?: string
  technologies?: string[]
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
    'Sagebrush Web Studio is a Jackson Hole-based web design and development studio helping people anywhere build a strong online presence with thoughtful websites, clear strategy, personalized support, and focused offers like Design Day and Website in a Week.'
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
    'remote web developer',
    'web developer based in Jackson Hole',
    'website design for clients anywhere',
    'Design Day',
    'Website in a Week',
    'website sprint',
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
      creator: '@sagebrushwebstudio',
    },
    icons: {
      icon: [
        {
          url: '/SagebrushSubmark-01.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          url: '/SagebrushSubmark-01.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      shortcut: '/SagebrushSubmark-01.png',
      apple: '/SagebrushSubmark-01.png',
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
    '@type': ['ProfessionalService', 'Organization'],
    name: 'Sagebrush Web Studio',
    description:
      'Sagebrush Web Studio is a Jackson Hole-based web design and development studio helping people anywhere build a strong online presence with thoughtful websites and personalized support.',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/site-title/SagebrushSecondaryLogo-01.png`,
      width: 512,
      height: 512,
    },
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
      telephone: '+1-307-226-0740',
    },
    sameAs: ['https://instagram.com/sagebrushwebstudio'],
  }
}

export function generateProjectStructuredData(
  project: ProjectStructuredDataInput
) {
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
