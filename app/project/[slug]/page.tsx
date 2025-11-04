import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectPageClient from './project-page-client'
import { client } from '@/sanity/client'
import { SanityDocument } from 'next-sanity'
import { generateSEOMetadata } from '@/components/seo/seo-head'

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

  if (!project) {
    return generateSEOMetadata({
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
      noIndex: true,
    })
  }

  return generateSEOMetadata({
    title: project.title,
    description:
      project.description ||
      `${project.title} - A web design and development project by Sagebrush Creative.`,
    keywords: project.technologies || [],
    url: `/project/${project.slug?.current}`,
    type: 'article',
    publishedTime: project._createdAt,
    modifiedTime: project._updatedAt,
    image: project.heroImage ? `/hero-images/${project.heroImage}` : undefined,
  })
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project: SanityDocument = await client.fetch<SanityDocument>(
    PROJECT_QUERY,
    await params,
    options
  )

  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} />
}
