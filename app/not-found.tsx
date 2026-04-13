import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Hero from '@/components/hero/hero'

export default function NotFound() {
  return (
    <Hero
      backgroundImage='/hero-images/grand-teton.jpg'
      backgroundImageAlt='The Grand Teton in the sunlight. Photo by Nick Sulzer.'
      enableParallax={true}
      title='404'
      overlayType='custom'
      overlayClassName='absolute inset-0 bg-[#33352a]/[0.84] dark:bg-[#33352a]/[0.90]'
      animateContent={true}
      photoCredit={{ name: 'Nick Sulzer', url: 'https://www.nicksulzer.com/' }}
    >
      <div className='text-center text-white'>
        <h1 className='text-5xl md:text-7xl mb-6 text-white'>OOPS</h1>
        <h2 className='text-md font-montserrat md:text-md font-light mb-8 tracking-wide text-white'>
          looks like you ended up somewhere that doesn&apos;t exist
        </h2>
        <Button
          asChild
          variant='ghost'
          className='border-white text-desert-900 hover:bg-desert-100'
        >
          <Link href='/'>head home</Link>
        </Button>
      </div>
    </Hero>
  )
}
