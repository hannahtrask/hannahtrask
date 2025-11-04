import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Hero from '@/components/hero/hero'

export default function NotFound() {
  return (
    <Hero
      backgroundImage='/hero-images/road-404.jpg'
      backgroundImageAlt='A highway somewhere in the American West.'
      title='404'
      overlayType='custom'
      overlayClassName='absolute inset-0 bg-black/60 dark:bg-black/80'
      animateContent={true}
    >
      <div className='text-center text-white'>
        <h1 className='text-5xl md:text-7xl font-cormorant-sc mb-6 text-white'>
          OOPS!
        </h1>
        <h2 className='text-2xl md:text-3xl font-light mb-8 tracking-wide text-white'>
          Looks like you took a wrong turn somewhere.
        </h2>
        <Button
          asChild
          variant='outline'
          className='border-white text-desert-900 hover:bg-desert-100'
        >
          <Link href='/'>back to home base</Link>
        </Button>
      </div>
    </Hero>
  )
}
