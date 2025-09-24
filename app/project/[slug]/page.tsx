import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects-data'
import ProjectPageClient from './project-page-client'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const project = projects.find(p => p.slug === resolvedParams.slug)

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
  const resolvedParams = await params
  const project = projects.find(p => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} />
}
