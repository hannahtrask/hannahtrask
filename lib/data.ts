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
}

export const projects: Project[] = [
  {
    slug: "video-editing-website-redesign",
    title: "Video Editor Website Redesign",
    summary: "Redesign of a freelance video editors online presence; improving SEO, layout, color scheme, typography, and responsiveness.",
    description:
        "This project involved a complete overhaul of an established e-commerce site that was struggling with poor user experience and low search visibility. I redesigned the entire user interface focusing on mobile responsiveness, improved navigation, and applied modern design principles to showcase products more effectively. Additionally, I optimized on-page SEO by updating title tags, meta descriptions, and header tags, conducted keyword research, and fixed technical SEO issues such as site speed and broken links. These improvements led to a significant increase in organic traffic, higher search rankings, and a better overall user experience.",
    coverImage: "/client-wyld-lark.jpg?height=600&width=800",
    // beforeImage: "/client-wyld-lark.jpg?height=400&width=600&text=Before",
    // afterImage: "/client-wyld-lark.jpg?height=400&width=600&text=After",
    technologies: ["WordPress", "SiteGround", "Elementor", "Yoast SEO"],
    liveUrl: "https://wyldlark.com/",
    highlights: [
      "Redesigned product pages using Elementor with improved imagery and clearer information architecture",
      "Implemented a streamlined 2-step checkout process, reducing cart abandonment by 35%",
      "Created a fully responsive design optimized for mobile and desktop devices",
      "Optimized SEO using Yoast: updated title tags, meta descriptions, and implemented keyword strategies",
      "Improved site speed and fixed technical SEO issues, enhancing user experience and search rankings",
      "Enhanced navigation and integrated advanced filtering and search functionality",
    ],
  },
  // {
  //   slug: "fitness-app",
  //   title: "Fitness Tracking Application",
  //   summary: "Mobile-first web app for fitness enthusiasts to track workouts and nutrition.",
  //   description:
  //       "Developed a comprehensive fitness tracking application that allows users to log workouts, track nutrition, and monitor progress over time. The app features a clean, intuitive interface with data visualizations to help users understand their fitness journey.",
  //   coverImage: "/placeholder.svg?height=600&width=800",
  //   beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
  //   afterImage: "/placeholder.svg?height=400&width=600&text=After",
  //   technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  //   highlights: [
  //     "Built custom workout planning tools with drag-and-drop functionality",
  //     "Implemented nutrition tracking with barcode scanning capability",
  //     "Created interactive progress charts and goal-setting features",
  //     "Designed a notification system to keep users motivated",
  //   ],
  // },
  // {
  //   slug: "real-estate-platform",
  //   title: "Real Estate Platform",
  //   summary: "Modern property listing platform with advanced search and virtual tours.",
  //   description:
  //       "Created a comprehensive real estate platform that connects buyers, sellers, and agents. The platform features advanced property search, virtual tours, and integrated messaging. The clean, modern design focuses on showcasing properties while providing all necessary information in an easily digestible format.",
  //   coverImage: "/placeholder.svg?height=600&width=800",
  //   beforeImage: "/placeholder.svg?height=400&width=600&text=Before",
  //   afterImage: "/placeholder.svg?height=400&width=600&text=After",
  //   technologies: ["Next.js", "PostgreSQL", "Google Maps API", "AWS S3"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  //   highlights: [
  //     "Implemented advanced search with filters for location, price, amenities, and more",
  //     "Created interactive map view with property clustering",
  //     "Built 360° virtual tour functionality for property listings",
  //     "Designed a responsive interface that works seamlessly on all devices",
  //   ],
  // },
]
