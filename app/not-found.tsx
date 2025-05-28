import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='min-h-screen relative flex items-center justify-center'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/road-404.jpg'
          alt='A highway somewhere in the American West.'
          fill
          className='object-cover'
        />
      </div>

      <div className='container mx-auto px-4 relative z-10 text-center'>
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
          <Link href='/'>Return to Base Camp</Link>
        </Button>
      </div>
    </div>
  )
}
