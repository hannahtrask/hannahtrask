export interface CaseStudyImage {
  src: string
  alt: string
  caption?: string
}

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  logo: string
  logoAlt: string
  heroImage: string
  heroImageAlt: string
  overview: string
  problemStatement: string
  solutions: string[]
  designProcess: {
    title: string
    description: string
  }[]
  technologies?: string[]
  liveUrl?: string
  images?: CaseStudyImage[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'outdoor-adventure-co',
    title: 'Outdoor Adventure Co',
    subtitle: 'E-commerce Website Redesign',
    logo: '/case-studies/outdoor-adventure-logo.png',
    logoAlt: 'Outdoor Adventure Co logo',
    heroImage: '/hero-images/grand-teton.jpg',
    heroImageAlt: 'Mountain landscape representing outdoor adventure',
    overview:
      'Outdoor Adventure Co is a Jackson-based outdoor gear retailer that needed a complete e-commerce overhaul to better serve their growing customer base and streamline their online sales process.',
    problemStatement:
      'The existing website was outdated, slow, and difficult to navigate. Customers frequently abandoned their carts due to a confusing checkout process, and the site was not optimized for mobile devices where 60% of their traffic originated.',
    solutions: [
      'Redesigned the entire user interface with a mobile-first approach',
      'Implemented a streamlined checkout process reducing steps from 5 to 3',
      'Integrated real-time inventory management with their POS system',
      'Added advanced filtering and search functionality for products',
      'Optimized images and implemented lazy loading for faster page speeds',
    ],
    designProcess: [
      {
        title: 'Discovery & Research',
        description:
          'Conducted user interviews and analyzed existing analytics to understand pain points and user behavior patterns.',
      },
      {
        title: 'Wireframing & Prototyping',
        description:
          'Created low-fidelity wireframes and interactive prototypes to test navigation and checkout flow improvements.',
      },
      {
        title: 'Visual Design',
        description:
          'Developed a fresh visual identity that reflects the outdoor adventure spirit while maintaining brand recognition.',
      },
      {
        title: 'Development & Testing',
        description:
          'Built the site using Shopify with custom theme development, followed by extensive cross-browser and device testing.',
      },
    ],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
    liveUrl: 'https://example.com',
    images: [
      {
        src: '/case-studies/outdoor-adventure/homepage.jpg',
        alt: 'Outdoor Adventure Co homepage design',
        caption: 'Redesigned homepage with hero section and featured products',
      },
      {
        src: '/case-studies/outdoor-adventure/product-page.jpg',
        alt: 'Product detail page',
        caption: 'Clean product pages with detailed specifications',
      },
      {
        src: '/case-studies/outdoor-adventure/checkout.jpg',
        alt: 'Streamlined checkout process',
        caption: 'Simplified 3-step checkout flow',
      },
      {
        src: '/case-studies/outdoor-adventure/mobile.jpg',
        alt: 'Mobile responsive design',
        caption: 'Mobile-first responsive design',
      },
    ],
  },
  {
    slug: 'mountain-wellness-studio',
    title: 'Mountain Wellness Studio',
    subtitle: 'Yoga & Wellness Website',
    logo: '/case-studies/mountain-wellness-logo.png',
    logoAlt: 'Mountain Wellness Studio logo',
    heroImage: '/hero-images/tetons-backdrop.jpg',
    heroImageAlt: 'Serene mountain backdrop',
    overview:
      'Mountain Wellness Studio is a yoga and wellness center in the Teton Valley that needed a calming, intuitive website to showcase their classes, retreats, and booking system.',
    problemStatement:
      'The studio was using a basic template website that did not reflect their brand values of tranquility and connection to nature. They also lacked an integrated booking system, requiring manual scheduling via phone and email.',
    solutions: [
      'Designed a serene, nature-inspired website that embodies their wellness philosophy',
      'Integrated MindBody booking system for seamless class and retreat reservations',
      'Created a custom events calendar with filtering by class type and instructor',
      'Implemented a blog section for wellness tips and studio updates',
      'Added testimonials and instructor profiles to build trust',
    ],
    designProcess: [
      {
        title: 'Brand Exploration',
        description:
          'Worked closely with the studio owners to understand their vision and create a mood board reflecting their values.',
      },
      {
        title: 'Content Strategy',
        description:
          'Organized content hierarchy to prioritize class schedules and booking while showcasing the studio atmosphere.',
      },
      {
        title: 'Design & Development',
        description:
          'Built a custom WordPress theme with calming animations and intuitive navigation.',
      },
      {
        title: 'Integration & Launch',
        description:
          'Connected MindBody API for real-time class availability and launched with SEO optimization.',
      },
    ],
    technologies: ['WordPress', 'PHP', 'MindBody API', 'CSS3'],
    liveUrl: 'https://example.com',
    images: [
      {
        src: '/case-studies/mountain-wellness/homepage.jpg',
        alt: 'Mountain Wellness Studio homepage',
        caption: 'Serene homepage design with class schedule integration',
      },
      {
        src: '/case-studies/mountain-wellness/booking.jpg',
        alt: 'Class booking interface',
        caption: 'MindBody integrated booking system',
      },
      {
        src: '/case-studies/mountain-wellness/instructors.jpg',
        alt: 'Instructor profiles page',
        caption: 'Meet the instructors section',
      },
    ],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map(study => study.slug)
}
