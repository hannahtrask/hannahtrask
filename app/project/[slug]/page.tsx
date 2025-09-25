import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectPageClient from './project-page-client'
import { client } from '@/sanity/client'
import { SanityDocument } from 'next-sanity'

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]`
const options = { next: { revalidate: 30 } }

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await client.fetch<SanityDocument>(
    PROJECT_QUERY,
    await params,
    options
  )
  console.log('project', project)

  if (!project) {
    return {
      title: 'Project Not Found | SAGEBRUSH CREATIVE',
    }
  }

  return {
    title: `${project.title} | SAGEBRUSH CREATIVE`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await client.fetch<SanityDocument>(
    PROJECT_QUERY,
    await params,
    options
  )

  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} />
}
