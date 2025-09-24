import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Hero from '@/components/hero/hero'

export default function NotFound() {
  return (
    <Hero
      backgroundImage='/road-404.jpg'
      backgroundImageAlt='A highway somewhere in the American West.'
      title='404'
      overlayType='custom'
      overlayClassName=''
      animateContent={false}
    >
      <div className='text-center text-white'>
        <h1 className='text-6xl font-light mb-6 text-white'>404</h1>
        <h2 className='text-2xl font-light mb-8 tracking-wide text-white'>
          Page Not Found
        </h2>
        <p className='text-gray-200 mb-12 max-w-md mx-auto font-light'>
          Looks like you've taken a wrong turn somewhere. This page doesn't
          exist or has been moved.
        </p>
        <Button
          asChild
          variant='outline'
          className='border-white text-desert-900 hover:bg-desert-100'
        >
          <Link href='/'>Go back home</Link>
        </Button>
      </div>
    </Hero>
  )
}
