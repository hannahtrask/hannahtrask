'use client'

import Image from 'next/image'
import Link from 'next/link'
import { projects, type ProjectItem } from '@/lib/projects-data'

function ProjectGridItem({ project }: { project: ProjectItem }) {
  return (
    <Link href={`/project/${project.slug}`} className='block'>
      <div className='group relative overflow-hidden cursor-pointer'>
        <div className='relative w-full h-64 md:h-80 overflow-hidden'>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className='object-cover transition-transform duration-700 group-hover:scale-105'
          />

          {/* Hover overlay with title */}
          <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
            <h3 className='text-2xl md:text-3xl font-julius-sans-one font-bold text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
              {project.title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ProjectsGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16'>
      {projects.map(project => (
        <ProjectGridItem key={project.id} project={project} />
      ))}
    </div>
  )
}
