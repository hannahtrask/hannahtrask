import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/hero/hero'
import { client } from '@/sanity/client'
import { SanityDocument } from 'next-sanity'
import Image from 'next/image'
import { urlFor } from '@/sanity/utils/imageUrlBuilder'
import ContactForm from '@/components/contact-form'
import { generateSEOMetadata } from '@/components/seo/seo-head'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Work',
  description:
    'Explore our portfolio of web design and development projects for outdoor industry businesses, e-commerce ventures, and adventure-focused brands.',
  keywords: [
    'portfolio',
    'web design projects',
    'web development work',
    'outdoor industry websites',
    'e-commerce projects',
  ],
  url: '/work',
  type: 'website',
})

const PROJECTS_QUERY = `*[_type == "project" && defined(slug.current)] | order(_createdAt desc)[0...12] {
  _id,
  title,
  slug,
  category,
  description,
  heroImage,
  webpageImage,
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
        backgroundImage='/hero-images/hay.jpg'
        backgroundImageAlt='Bison lingering in a field in front of mountains'
        overlayType='custom'
        overlayClassName='absolute inset-0 bg-black/60 dark:bg-black/80'
        title='OUR WORK'
        titleClassName='text-5xl md:text-6xl font-julius-sans-one font-light text-white mb-6'
      />
      {/* Work Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
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

        {/* Webpage Preview */}
        <div className='bg-desert-50 dark:bg-desert-900 py-8'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <div className='w-24 h-px bg-desert-300 dark:bg-desert-600 mx-auto mb-12'></div>
              <div className='flex justify-center'>
                <div className='grid grid-cols-3 md:grid-cols-4 gap-2 max-w-4xl'>
                  {projects.map(
                    project =>
                      project.webpageImage && (
                        <div key={project._id} className='overflow-hidden'>
                          <Image
                            src={urlFor(project.webpageImage).url()}
                            alt={`${project.title} website preview`}
                            width={300}
                            height={573}
                            className='w-full h-auto object-contain hover:scale-105 transition-transform duration-700'
                          />
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='container mx-auto px-4'>
          <div className='text-center mt-16'>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
