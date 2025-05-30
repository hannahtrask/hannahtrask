import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProjectsSection from '@/components/projects-section'

export default function Home() {
  return (
    <>
      {/* Hero Section with Mountain Background */}
      <div className='relative h-screen w-full flex items-center'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/desert-roadtrip.jpg'
            alt='A westfalia driving through a beautiful desert landscape.'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/45 backdrop-blur-[2px]'></div>
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-2xl'>
            <h1 className='text-5xl md:text-6xl font-light mb-6 tracking-tight text-white drop-shadow-md'>
              Crafting <span className='font-normal italic'>seamless</span> web
              experiences
            </h1>
            <p className='text-lg text-gray-100 leading-relaxed mb-8 drop-shadow-md'>
              Transforming ideas into exceptional web experiences. Fueled by a
              love for wild places and big ideas.
            </p>
            <Link
              href='#projects'
              className='inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 transition-all duration-300'
            >
              Explore My Work
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <ProjectsSection />
    </>
  )
}
