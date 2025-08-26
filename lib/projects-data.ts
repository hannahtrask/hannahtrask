export interface ProjectItem {
  id: string
  slug: string
  title: string
  description: string
  category: string
  imageUrl: string
  heroImage: string
  technologies: string[]
  additionalImages: string[]
  fullDescription: string
  websiteUrl: string
}

export const projects: ProjectItem[] = [
  {
    id: 'project-1',
    slug: 'wyld-lark',
    title: 'Wyld Lark Video Editing',
    description:
      'Portfolio website for a Jackson WY based video editor, photographer and videographer.',
    fullDescription:
      'When Liz came to us, she was looking to give her site a facelift, so we did just that.' +
      ' We implemented a modern, clean design, letting the videos do the talking. The site ' +
      'is built on WordPress and uses Elementor for page building. Using Yoast SEO, we optimized ' +
      'the site for better search engine optimization. The Wyld Lark website is an excellent example ' +
      'of how small tweaks can go a long way.',
    category: 'Web Design & Development',
    imageUrl: '/projects/wyld-lark/wyld-lark-logo.jpg',
    heroImage: '/projects/wyld-lark/wyld-lark-logo.jpg',
    technologies: ['Wordpress', 'Yoast SEO', 'Elementor'],
    additionalImages: [
      '/projects/wyld-lark/wyld-lark-banner.jpg',
      '/projects/wyld-lark/wyld-lark-socials.jpg',
    ],
    websiteUrl: 'https://wyldlark.com/',
  },
  {
    id: 'project-2',
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description:
      'Complete e-commerce solution with custom product configurator and seamless checkout experience.',
    fullDescription:
      'A comprehensive e-commerce platform built from the ground up with custom product configuration tools, advanced inventory management, and a streamlined checkout process. The platform includes admin dashboards, customer accounts, and integrated payment processing.',
    category: 'E-Commerce Development',
    imageUrl: '/sagebrush.jpg',
    heroImage: '/sagebrush.jpg',
    technologies: ['Shopify', 'React', 'Node.js', 'PostgreSQL', 'Stripe'],
    additionalImages: ['/desert-roadtrip.jpg', '/roadtrip.jpg'],
    websiteUrl: 'https://example-ecommerce.com',
  },
  {
    id: 'project-3',
    slug: 'creative-studio-portfolio',
    title: 'Creative Studio Portfolio',
    description:
      'Minimalist portfolio website showcasing photography and design work with smooth animations.',
    fullDescription:
      'A stunning portfolio website for a creative studio specializing in photography and design. The site features smooth animations, an intuitive gallery system, and a content management system that allows the studio to easily update their work and maintain their online presence.',
    category: 'Portfolio Design',
    imageUrl: '/roadtrip.jpg',
    heroImage: '/roadtrip.jpg',
    technologies: ['Next.js', 'Framer Motion', 'TypeScript', 'Vercel'],
    additionalImages: ['/desert-roadtrip.jpg', '/sagebrush.jpg'],
    websiteUrl: 'https://creative-studio-portfolio.com',
  },
]
