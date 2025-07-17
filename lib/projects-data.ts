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
}

export const projects: ProjectItem[] = [
  {
    id: 'project-1',
    slug: 'lifestyle-brand-website',
    title: 'Lifestyle Brand Website',
    description:
      'A beautiful, responsive website for a sustainable lifestyle brand focused on outdoor adventures and eco-friendly products.',
    fullDescription:
      "This project involved creating a complete digital presence for a sustainable lifestyle brand that specializes in outdoor adventures and eco-friendly products. The website features a modern, clean design that reflects the brand's commitment to environmental responsibility while showcasing their product line and brand story.",
    category: 'Web Design & Development',
    imageUrl: '/desert-roadtrip.jpg',
    heroImage: '/desert-roadtrip.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'Vercel'],
    additionalImages: ['/sagebrush.jpg', '/roadtrip.jpg'],
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
    technologies: [
      'Next.js',
      'Framer Motion',
      'TypeScript',
      'Sanity CMS',
      'Vercel',
    ],
    additionalImages: ['/desert-roadtrip.jpg', '/sagebrush.jpg'],
  },
]
