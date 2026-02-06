// TypeScript types for Sanity case study documents

import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface SanityCaseStudyImage {
  _key: string
  _type: 'image'
  asset: SanityImageSource
  alt?: string
  caption?: string
}

export interface SanityDesignProcessStep {
  _key: string
  title: string
  description: string
}

export interface SanityCaseStudy {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  subtitle: string
  slug: string
  logo: SanityImageSource
  heroImage: SanityImageSource
  overview: string
  problemStatement: string
  solutions: string[]
  designProcess: SanityDesignProcessStep[]
  technologies?: string[]
  liveUrl?: string
  images?: SanityCaseStudyImage[]
}

export interface SanityCaseStudySlug {
  slug: string
}
