export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  coverImage: string
  beforeImage: string
  afterImage: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: "e-commerce-redesign",
    title: "E-Commerce Website Redesign",
    summary: "Complete redesign of an outdated online store, resulting in 40% increase in conversions.",
    description:
      "This project involved a complete overhaul of an established e-commerce site that was struggling with poor user experience and declining sales. I redesigned the entire user interface with a focus on mobile responsiveness, streamlined the checkout process, and implemented modern design principles to showcase products more effectively.",
    coverImage: "/placeholder.svg?height=600&width=800",
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
    technologies: ["Next.js", "Tailwind CSS", "Shopify", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    highlights: [
      "Redesigned product pages with improved imagery and information architecture",
      "Implemented a streamlined 2-step checkout process, reducing cart abandonment by 35%",
      "Created a responsive design that works flawlessly across all devices",
      "Integrated advanced filtering and search functionality",
    ],
  },
  {
    slug: "fitness-app",
    title: "Fitness Tracking Application",
    summary: "Mobile-first web app for fitness enthusiasts to track workouts and nutrition.",
    description:
      "Developed a comprehensive fitness tracking application that allows users to log workouts, track nutrition, and monitor progress over time. The app features a clean, intuitive interface with data visualizations to help users understand their fitness journey.",
    coverImage: "/placeholder.svg?height=600&width=800",
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    highlights: [
      "Built custom workout planning tools with drag-and-drop functionality",
      "Implemented nutrition tracking with barcode scanning capability",
      "Created interactive progress charts and goal-setting features",
      "Designed a notification system to keep users motivated",
    ],
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    summary: "Modern property listing platform with advanced search and virtual tours.",
    description:
      "Created a comprehensive real estate platform that connects buyers, sellers, and agents. The platform features advanced property search, virtual tours, and integrated messaging. The clean, modern design focuses on showcasing properties while providing all necessary information in an easily digestible format.",
    coverImage: "/placeholder.svg?height=600&width=800",
    beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
    afterImage: "/placeholder.svg?height=400&width=600&text=After",
    technologies: ["Next.js", "PostgreSQL", "Google Maps API", "AWS S3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    highlights: [
      "Implemented advanced search with filters for location, price, amenities, and more",
      "Created interactive map view with property clustering",
      "Built 360° virtual tour functionality for property listings",
      "Designed a responsive interface that works seamlessly on all devices",
    ],
  },
]
