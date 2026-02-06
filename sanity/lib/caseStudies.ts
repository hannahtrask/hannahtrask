import { client } from '../client'
import {
  allCaseStudiesQuery,
  caseStudyBySlugQuery,
  allCaseStudySlugsQuery,
} from '../queries/caseStudies'
import type { SanityCaseStudy, SanityCaseStudySlug } from '../types/caseStudy'

export async function getAllCaseStudies(): Promise<SanityCaseStudy[]> {
  return client.fetch<SanityCaseStudy[]>(allCaseStudiesQuery)
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<SanityCaseStudy | null> {
  return client.fetch<SanityCaseStudy | null>(caseStudyBySlugQuery, { slug })
}

export async function getAllCaseStudySlugs(): Promise<SanityCaseStudySlug[]> {
  return client.fetch<SanityCaseStudySlug[]>(allCaseStudySlugsQuery)
}
