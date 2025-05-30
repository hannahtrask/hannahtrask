export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  coverImage: string
  beforeImage?: string
  afterImage?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  highlights: string[]
  category:
    | 'thoughtful lifestyle brands'
    | 'small e-commerce businesses'
    | 'creative studios'
    | 'values-driven teams'
  primaryTechnology?: string
}

export const projects: Project[] = [
  {
    slug: 'mountain-wellness-retreat',
    title: 'Mountain Wellness Retreat',
    summary:
      'A serene wellness retreat website showcasing mindful living and outdoor experiences.',
    description:
      'Created a peaceful, nature-inspired website for a wellness retreat center focused on mindful living and outdoor experiences. The design emphasizes tranquility and connection with nature while providing easy booking and information access.',
    coverImage: '/placeholder.svg?height=600&width=800',
    technologies: ['WordPress', 'Elementor', 'WooCommerce', 'Yoast SEO'],
    primaryTechnology: 'WordPress',
    liveUrl: 'https://example.com',
    category: 'thoughtful lifestyle brands',
    highlights: [
      "Designed a calming, nature-inspired interface that reflects the retreat's values",
      'Integrated booking system for retreat sessions and workshops',
      'Optimized for mobile users seeking outdoor experiences',
      'Implemented SEO strategies for wellness and outdoor keywords',
    ],
  },
  {
    slug: 'artisan-coffee-shop',
    title: 'Artisan Coffee E-commerce',
    summary:
      "Small batch coffee roaster's online store with subscription services.",
    description:
      'Built a warm, inviting e-commerce platform for a local coffee roaster, featuring subscription services, detailed product information, and a blog about coffee culture and sustainability.',
    coverImage: '/placeholder.svg?height=600&width=800',
    technologies: ['Shopify', 'Liquid', 'Shopify Plus', 'Klaviyo'],
    primaryTechnology: 'Shopify',
    liveUrl: 'https://example.com',
    category: 'small e-commerce businesses',
    highlights: [
      'Custom Shopify theme with subscription functionality',
      'Integrated inventory management for small batch roasting',
      'Email marketing automation for customer retention',
      'Mobile-optimized checkout process',
    ],
  },
  {
    slug: 'adventure-photography-studio',
    title: 'Adventure Photography Studio',
    summary:
      'Portfolio website for outdoor photographers showcasing adventure stories.',
    description:
      'Designed a stunning portfolio website for adventure photographers, featuring immersive galleries, client testimonials, and booking systems for outdoor photography sessions.',
    coverImage: '/placeholder.svg?height=600&width=800',
    technologies: [
      'WordPress',
      'Custom Theme',
      'Lightbox Gallery',
      'Contact Form 7',
    ],
    primaryTechnology: 'WordPress',
    liveUrl: 'https://example.com',
    category: 'creative studios',
    highlights: [
      'Custom WordPress theme optimized for high-resolution photography',
      'Immersive gallery experiences with lightbox functionality',
      'Client booking system for outdoor photography sessions',
      'SEO optimization for local photography searches',
    ],
  },
  {
    slug: 'sustainable-consulting-firm',
    title: 'Sustainable Business Consulting',
    summary:
      'Professional website for environmental consulting firm focused on sustainability.',
    description:
      'Created a professional, trust-building website for a sustainability consulting firm, emphasizing their expertise in environmental solutions and corporate responsibility.',
    coverImage: '/placeholder.svg?height=600&width=800',
    technologies: ['WordPress', 'Elementor Pro', 'Gravity Forms', 'Yoast SEO'],
    primaryTechnology: 'WordPress',
    liveUrl: 'https://example.com',
    category: 'values-driven teams',
    highlights: [
      'Professional design that builds trust and credibility',
      'Case study showcase highlighting environmental impact',
      'Lead generation forms for consulting inquiries',
      'Content strategy focused on sustainability expertise',
    ],
  },
]
