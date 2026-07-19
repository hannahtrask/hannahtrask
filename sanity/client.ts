import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2026-01-01',
  useCdn: true,
})

export const testimonialsClient = createClient({
  projectId:
    process.env.NEXT_PUBLIC_SANITY_TESTIMONIALS_PROJECT_ID ||
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:
    process.env.NEXT_PUBLIC_SANITY_TESTIMONIALS_DATASET ||
    process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2026-01-01',
  useCdn: true,
})
