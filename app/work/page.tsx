import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/hero/hero'
import { client } from '@/sanity/client'
import { SanityDocument } from 'next-sanity'

export const metadata: Metadata = {
  title: 'Work | SAGEBRUSH CREATIVE',
}

const PROJECTS_QUERY = `*[_type == "project" && defined(slug.current)] | order(_createdAt desc)[0...12] {
  _id,
  title,
  slug,
  category,
  description,
  heroImage,
  technologies,
  websiteUrl
}`

const options = { next: { revalidate: 30 } }

export default async function WorkPage() {
  const projects = await client.fetch<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    options
  )

  return (
    <>
      <Hero
        backgroundImage='/hero-images/work-background-bison.jpg'
        backgroundImageAlt='Bison lingering in a field in front of mountains'
        title='OUR WORK'
        titleClassName='text-5xl md:text-6xl font-julius-sans-one font-light text-white mb-6'
      />
      {/* Work Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-8'>
              THE WORK
            </h2>
            <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-12'></div>

            {/* Project Names List */}
            <div className='space-y-6'>
              {projects.map(project => (
                <div key={project._id}>
                  <Link
                    href={`/project/${project.slug.current}`}
                    className='text-2xl md:text-3xl font-cormorant-sc text-desert-700 dark:text-desert-200 hover:text-desert-900 dark:hover:text-white transition-colors duration-300 block py-1'
                  >
                    {project.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='container mx-auto px-4'>
          <div className='text-center mt-16'>
            <h3 className='text-2xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-4'>
              Ready to get started?
            </h3>
            <Link
              href='/contact'
              className='inline-block bg-desert-600 hover:bg-desert-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300'
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
