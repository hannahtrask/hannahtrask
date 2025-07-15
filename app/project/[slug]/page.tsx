import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects-data'
import ProjectPageClient from './project-page-client'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    return {
      title: 'Project Not Found | Sun & Sagebrush Creative'
    }
  }

  return {
    title: `${project.title} | Sun & Sagebrush Creative`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} />
}
