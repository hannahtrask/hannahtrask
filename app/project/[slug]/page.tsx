import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Mountain } from 'lucide-react'
import { projects } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { GitHubIcon } from '@/components/ui/social-icons'
import { defineQuery } from 'groq'
import { sanityFetch } from '@/app/sanity/live'

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className='pt-24'>
      {/* Project Hero */}
      <div className='relative h-[50vh] w-full flex items-center'>
        <div className='absolute inset-0 z-0'>
          <Image
            src={project.coverImage || '/placeholder.svg'}
            alt={project.title}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/40'></div>
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <Link
            href='/'
            className='inline-flex items-center text-white hover:text-gray-200 mb-4 text-sm tracking-wide'
          >
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back to all projects
          </Link>
          <h1 className='text-4xl md:text-5xl font-light text-white drop-shadow-md'>
            {project.title}
          </h1>
        </div>
      </div>

      {/* Project Content */}
      <div className='bg-[#f8f7f4] dark:bg-desert-900 topo-pattern'>
        <div className='container mx-auto px-4 py-16'>
          <div className='max-w-4xl mx-auto bg-white dark:bg-desert-800 p-8 md:p-12 shadow-sm'>
            <div className='prose dark:prose-invert max-w-none mb-16'>
              <p className='text-xl leading-relaxed mb-8 font-light'>
                {project.description}
              </p>

              <div className='flex flex-wrap gap-3 mb-12'>
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className='px-4 py-1.5 bg-desert-50 dark:bg-desert-700 text-desert-800 dark:text-desert-200 text-xs tracking-wide flex items-center'
                  >
                    <Mountain className='h-3 w-3 mr-2' />
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex flex-wrap gap-4'>
                {project.liveUrl && (
                  <Button
                    asChild
                    variant='outline'
                    className='border-desert-300 text-desert-800'
                  >
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center'
                    >
                      View Live Site
                      <ExternalLink className='ml-2 h-4 w-4' />
                    </a>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    variant='outline'
                    asChild
                    className='border-desert-300 text-desert-800'
                  >
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center'
                    >
                      View Code
                      <GitHubIcon size={16} className='ml-2' />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/*<section className="mb-20">*/}
            {/*  <h2 className="text-2xl font-light mb-12 tracking-wide text-desert-800">The Transformation</h2>*/}
            {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">*/}
            {/*    <div className="space-y-4">*/}
            {/*      <div className="relative w-full h-[350px] overflow-hidden">*/}
            {/*        <Image src={project.beforeImage || "/placeholder.svg"} alt="Before" fill className="object-cover" />*/}
            {/*        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">*/}
            {/*          <span className="text-white font-light">Before</span>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="space-y-4">*/}
            {/*      <div className="relative w-full h-[350px] overflow-hidden">*/}
            {/*        <Image src={project.afterImage || "/placeholder.svg"} alt="After" fill className="object-cover" />*/}
            {/*        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">*/}
            {/*          <span className="text-white font-light">After</span>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}

            <section>
              <h2 className='text-2xl font-light mb-12 tracking-wide text-desert-800 dark:text-desert-100'>
                Project Highlights
              </h2>
              <ul className='space-y-6'>
                {project.highlights.map((highlight, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='flex-shrink-0 w-6 h-6 border border-desert-300 dark:border-desert-600 flex items-center justify-center mr-4 mt-0.5 text-sm text-desert-800 dark:text-desert-200'>
                      {index + 1}
                    </span>
                    <p className='text-gray-800 dark:text-gray-300 font-light'>
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
