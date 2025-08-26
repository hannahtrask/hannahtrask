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
    id: 'wyld-lark',
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
    id: 'bloomist',
    slug: 'bloomist',
    title: 'Bloomist',
    description: 'Technical tweaks in an existing Shopify store.',
    fullDescription:
      'Bloomist was an already established, beautifully curated website that needed a little assistance ' +
      'working with app installations and the more technical aspects of the Shopify e-commerce space. ' +
      "That's where we came in. We worked with Bloomist to implement Gorgias chat, refresh and reorganize " +
      'all collections to use meta-fields for categorization and improved SEO, and optimize product ' +
      'images for faster load times and better visual appeal.',
    category: 'E-Commerce Development',
    imageUrl: '/projects/bloomist/bloomist-background.jpg',
    heroImage: '/projects/bloomist/bloomist-category.jpg',
    technologies: ['Shopify', 'Gorgias Chat', 'Theme Development'],
    additionalImages: [
      '/projects/bloomist/bloomist-background.jpg',
      '/projects/bloomist/bloomist-homepage.jpg',
    ],
    websiteUrl: 'https://bloomist.com/',
  },
  // {
  //   id: 'project-3',
  //   slug: 'creative-studio-portfolio',
  //   title: 'Creative Studio Portfolio',
  //   description:
  //     'Minimalist portfolio website showcasing photography and design work with smooth animations.',
  //   fullDescription:
  //     'A stunning portfolio website for a creative studio specializing in photography and design. The site features smooth animations, an intuitive gallery system, and a content management system that allows the studio to easily update their work and maintain their online presence.',
  //   category: 'Portfolio Design',
  //   imageUrl: '/roadtrip.jpg',
  //   heroImage: '/roadtrip.jpg',
  //   technologies: ['Next.js', 'Framer Motion', 'TypeScript', 'Vercel'],
  //   additionalImages: ['/desert-roadtrip.jpg', '/sagebrush.jpg'],
  //   websiteUrl: 'https://creative-studio-portfolio.com',
  // },
]
