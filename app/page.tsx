import Image from 'next/image'
import ProjectsSection from '@/components/projects-section'
import HeroDescription from '@/components/hero-description'

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

        <div className='container mx-auto px-4 relative z-10 flex items-center justify-center h-full'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-6xl font-light mb-6 tracking-tight text-white drop-shadow-md'>
              Let your ideas <span className='font-normal italic'>roam</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Description */}
      <HeroDescription />

      {/* Projects Section */}
      <ProjectsSection />
    </>
  )
}
