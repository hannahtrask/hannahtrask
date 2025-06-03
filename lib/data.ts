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
    slug: 'bloomist-shopify-store',
    title: 'Bloomist — Shopify',
    summary:
      'A nature-inspired shop. Bloomist has a simple mission—to inspire shoppers to make a calm, natural refuge at home.',
    description:
      'Redesigned and implemented changes in the Bloomist Shopify website to better attract customers to their products.',
    coverImage: '/projects/bloomist/hero-bloomist.png',
    technologies: [
      'Shopify',
      'Gorgias Chat',
      'E-Commerce',
      'Theme Development',
    ],
    primaryTechnology: 'Shopify',
    liveUrl: 'https://bloomist.com/',
    category: 'thoughtful lifestyle brands',
    highlights: [
      'Integrated Gorgias chat to provide real-time customer support',
      'Refreshed and reorganized all collections to use meta-fields for categorization and improved SEO',
      'Optimized product images for faster load times and better visual appeal',
    ],
  },
  // {
  //   slug: 'artisan-coffee-shop',
  //   title: 'Artisan Coffee E-commerce',
  //   summary:
  //     "Small batch coffee roaster's online store with subscription services.",
  //   description:
  //     'Built a warm, inviting e-commerce platform for a local coffee roaster, featuring subscription services, detailed product information, and a blog about coffee culture and sustainability.',
  //   coverImage: '/placeholder.svg?height=600&width=800',
  //   technologies: ['Shopify', 'Liquid', 'Shopify Plus', 'Klaviyo'],
  //   primaryTechnology: 'Shopify',
  //   liveUrl: 'https://example.com',
  //   category: 'small e-commerce businesses',
  //   highlights: [
  //     'Custom Shopify theme with subscription functionality',
  //     'Integrated inventory management for small batch roasting',
  //     'Email marketing automation for customer retention',
  //     'Mobile-optimized checkout process',
  //   ],
  // },
  {
    slug: 'wyld-lark-video-editing',
    title: 'Wyld Lark Video Editing',
    summary:
      'Portfolio website for a Jackson WY based video editor, photographer and videographer.',
    description:
      "Took a website that hadn't been truly updated in years and gave it a facelift.",
    coverImage: '/projects/wyld-lark/wyld-lark-home.png',
    technologies: ['WordPress', 'Elementor', 'Yoast SEO'],
    primaryTechnology: 'WordPress',
    liveUrl: 'https://wyldlark.com/',
    category: 'creative studios',
    highlights: [
      'Wordpress Child Theme for increased customization',
      'Smooth image gallery and transitions between pages',
      'SEO optimization using Yoast SEO for user-friendliness',
      'Optimized caching for improved performance, no matter where the user is',
    ],
  },
  // {
  //   slug: 'sustainable-consulting-firm',
  //   title: 'Sustainable Business Consulting',
  //   summary:
  //     'Professional website for environmental consulting firm focused on sustainability.',
  //   description:
  //     'Created a professional, trust-building website for a sustainability consulting firm, emphasizing their expertise in environmental solutions and corporate responsibility.',
  //   coverImage: '/placeholder.svg?height=600&width=800',
  //   technologies: ['WordPress', 'Elementor Pro', 'Gravity Forms', 'Yoast SEO'],
  //   primaryTechnology: 'WordPress',
  //   liveUrl: 'https://example.com',
  //   category: 'values-driven teams',
  //   highlights: [
  //     'Professional design that builds trust and credibility',
  //     'Case study showcase highlighting environmental impact',
  //     'Lead generation forms for consulting inquiries',
  //     'Content strategy focused on sustainability expertise',
  //   ],
  // },
]
