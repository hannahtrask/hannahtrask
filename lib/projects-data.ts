export interface ProjectItem {
  id: string
  slug: string
  title: string
  description: string
  category: string
  // Recommended size: 1920x1080px (16:9 aspect ratio) - Used as full-screen hero background
  heroImage: string
  technologies: string[]
  // Recommended size: 500x500px (1:1 square aspect ratio) - Used in square gallery grid (max 250px wide)
  additionalImages: string[]
  // Recommended size: 3022x5772px (1:1.91 portrait aspect ratio) - Used for full webpage screenshots
  webpageImage?: string
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
      ' We implemented a modern, clean design, letting her expertise with video editing do the talking. The site ' +
      'is built on WordPress and uses Elementor for page building. Using Yoast SEO, we optimized ' +
      "the site for better search engine optimization, and implemented SSL to ensure robust security and protect her website's data. " +
      'Wyld Lark is clean, simple, and easy to navigate. This website is an excellent example ' +
      'of how a simple, clean design can go a long way.',
    category: 'Web Design & Development',
    heroImage: '/projects/wyld-lark/wyld-lark-logo.jpg',
    technologies: ['Wordpress', 'Yoast SEO', 'Elementor'],
    additionalImages: [
      '/projects/wyld-lark/wyld-lark-logo-square.jpg',
      '/projects/wyld-lark/wyld-lark-flying.jpg',
      '/projects/wyld-lark/wyld-lark.jpg',
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
    heroImage: '/projects/bloomist/bloomist-category.jpg',
    technologies: ['Shopify', 'Gorgias Chat', 'Theme Development'],
    additionalImages: [
      '/projects/bloomist/bloomist-background.jpg',
      '/projects/bloomist/bloomist-homepage.jpg',
    ],
    websiteUrl: 'https://bloomist.com/',
  },
  {
    id: 'vert-solutions',
    slug: 'vert-solutions',
    title: 'Vert Solutions',
    description:
      'Ski lesson booking software for Jackson Hole, Aspen Snowmass, Big Sky, and other resorts.',
    fullDescription:
      "Hired on contract to work on Vert Solutions' booking software. Assisted in development, deployment, and comms between Vert Solutions and related resorts.",
    category: 'Portfolio Design',
    heroImage: '/projects/vert-solutions/procard-vert-solutions-frame.jpg',
    technologies: ['jQuery', 'JavaScript', 'CI/CD', 'GitHub'],
    additionalImages: [
      '/projects/vert-solutions/logo-vert-solutions.jpg',
      '/projects/vert-solutions/procard-vert-solutions-frame.jpg',
    ],
    websiteUrl: 'https://www.vertsolutions.com/',
    webpageImage: '/projects/vert-solutions/vert-solutions-webpage.png',
  },
]
