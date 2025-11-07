import { client } from '@/sanity/client'
import { SanityDocument } from 'next-sanity'
import WebPageGalleryClient from './web-page-gallery-client'

const PROJECTS_WITH_WEBPAGE_QUERY = `*[_type == "project" && defined(webpageImage)] {
  _id,
  title,
  slug,
  webpageImage,
  description
} | order(_createdAt desc)`

interface Project {
  _id: string
  title: string
  slug: { current: string }
  webpageImage: any
  description: string
}

export default async function WebPageGallery() {
  let projects: Project[] = []

  try {
    projects = await client.fetch<Project[]>(PROJECTS_WITH_WEBPAGE_QUERY)
    console.log('Server-side fetched projects:', projects)
  } catch (error) {
    console.error('Error fetching projects on server:', error)
  }

  if (projects.length === 0) {
    return null
  }

  return <WebPageGalleryClient projects={projects} />
}
