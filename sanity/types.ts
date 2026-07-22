export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  hotspot?: { x: number; y: number; height: number; width: number }
  caption?: string
}

export interface CaseStudyListItem {
  _id: string
  title: string
  slug: { current: string }
  clientName: string
  subtitle?: string
  overview?: string
  problemStatement?: string
  solutions?: string[]
  projectType: string[]
  shortDescription: string
  scopeOfWork?: string[]
  outcomes?: string
  featured: boolean
  cardImage?: SanityImage
  heroImage?: SanityImage
  publishedAt?: string
}

export interface CaseStudy extends CaseStudyListItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[]
  scopeOfWork: string[]
  outcomes?: string
  screenshots: SanityImage[]
  projectUrl?: string
}

export interface Testimonial {
  _id: string
  name: string
  role?: string
  company?: string
  quote: string
  featured?: boolean
  sortOrder?: number
  headshot?: SanityImage
}
