import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work | Sun & Sagebrush Creative',
  description:
    'Explore our portfolio of web development and design projects for thoughtful lifestyle brands, e-commerce businesses, and creative studios.',
}

interface ProjectItem {
  id: string
  title: string
  description: string
  category: string
  imageUrl: string
  projectUrl?: string
  technologies: string[]
}

const projects: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Lifestyle Brand Website',
    description: 'A beautiful, responsive website for a sustainable lifestyle brand focused on outdoor adventures and eco-friendly products.',
    category: 'Web Design & Development',
    imageUrl: '/desert-roadtrip.jpg',
    projectUrl: '#',
    technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
  },
  {
    id: 'project-2',
    title: 'E-Commerce Platform',
    description: 'Complete e-commerce solution with custom product configurator and seamless checkout experience.',
    category: 'E-Commerce Development',
    imageUrl: '/sagebrush.jpg',
    projectUrl: '#',
    technologies: ['Shopify', 'React', 'Node.js'],
  },
  {
    id: 'project-3',
    title: 'Creative Studio Portfolio',
    description: 'Minimalist portfolio website showcasing photography and design work with smooth animations.',
    category: 'Portfolio Design',
    imageUrl: '/roadtrip.jpg',
    projectUrl: '#',
    technologies: ['Next.js', 'Framer Motion', 'TypeScript'],
  },
]

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className='group relative overflow-hidden bg-white dark:bg-desert-800 shadow-lg hover:shadow-xl transition-all duration-300'>
      <div className='relative h-64 w-full overflow-hidden'>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className='object-cover transition-transform duration-700 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        
        {project.projectUrl && (
          <Link
            href={project.projectUrl}
            className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          >
            <span className='bg-white text-desert-800 px-6 py-2 rounded-lg font-semibold hover:bg-desert-50 transition-colors'>
              View Project
            </span>
          </Link>
        )}
      </div>
      
      <div className='p-6'>
        <div className='mb-2'>
          <span className='text-sm font-medium text-desert-600 dark:text-desert-400 uppercase tracking-wide'>
            {project.category}
          </span>
        </div>
        <h3 className='text-xl font-julius-sans-one font-bold text-desert-800 dark:text-white mb-3'>
          {project.title}
        </h3>
        <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
          {project.description}
        </p>
        
        <div className='flex flex-wrap gap-2'>
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className='text-xs bg-desert-100 dark:bg-desert-700 text-desert-700 dark:text-desert-300 px-2 py-1 rounded'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WorkPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[60vh] w-full flex items-center'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/work-background-bison.jpg'
            alt='Creative work and portfolio'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/50'></div>
        </div>

        <div className='container mx-auto px-4 relative z-10 text-center'>
          <h1 className='text-5xl md:text-6xl font-julius-sans-one font-light text-white mb-6'>
            OUR WORK
          </h1>
          <p className='text-xl text-white/90 max-w-2xl mx-auto leading-relaxed'>
            Explore our portfolio of thoughtfully crafted digital experiences for brands that value quality and authenticity.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
