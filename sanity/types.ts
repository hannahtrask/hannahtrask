export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: { x: number; y: number; height: number; width: number }
  caption?: string
}

export interface CaseStudyListItem {
  _id: string
  title: string
  slug: { current: string }
  clientName: string
  projectType: string[]
  shortDescription: string
  featured: boolean
  coverImage?: SanityImage
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
  quote: string
  clientName: string
  clientOrg?: string
  headshot?: SanityImage
}
