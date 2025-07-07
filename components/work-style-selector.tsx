'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function WorkStyleSelector() {
  const [selectedWorkStyle, setSelectedWorkStyle] = useState<string | null>(
    null
  )

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='w-full mb-16'>
      <h2 className='text-3xl md:text-4xl font-playfair font-bold text-desert-800 dark:text-white mb-8 text-center'>
        How do you prefer to work?
      </h2>

      <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-8'>
        <label className='flex items-center cursor-pointer'>
          <input
            type='radio'
            name='workStyle'
            value='fast-furious'
            checked={selectedWorkStyle === 'fast-furious'}
            onChange={e => setSelectedWorkStyle(e.target.value)}
            className='sr-only'
          />
          <div
            className={`flex items-center space-x-3 px-6 py-4 rounded-lg border-2 transition-all duration-300 ${
              selectedWorkStyle === 'fast-furious'
                ? 'border-desert-600 bg-desert-50 dark:bg-desert-800/50'
                : 'border-gray-100 dark:border-gray-600 hover:border-desert-400'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedWorkStyle === 'fast-furious'
                  ? 'border-desert-600 bg-desert-600'
                  : 'border-gray-200'
              }`}
            >
              {selectedWorkStyle === 'fast-furious' && (
                <div className='w-2 h-2 rounded-full bg-white'></div>
              )}
            </div>
            <span className='text-lg font-medium text-desert-800 dark:text-white'>
              gotta go FAST!
            </span>
          </div>
        </label>

        <label className='flex items-center cursor-pointer'>
          <input
            type='radio'
            name='workStyle'
            value='steady-thoughtful'
            checked={selectedWorkStyle === 'steady-thoughtful'}
            onChange={e => setSelectedWorkStyle(e.target.value)}
            className='sr-only'
          />
          <div
            className={`flex items-center space-x-3 px-6 py-4 rounded-lg border-2 transition-all duration-300 ${
              selectedWorkStyle === 'steady-thoughtful'
                ? 'border-desert-600 bg-desert-50 dark:bg-desert-800/50'
                : 'border-gray-100 dark:border-gray-600 hover:border-desert-400'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedWorkStyle === 'steady-thoughtful'
                  ? 'border-desert-600 bg-desert-600'
                  : 'border-gray-200'
              }`}
            >
              {selectedWorkStyle === 'steady-thoughtful' && (
                <div className='w-2 h-2 rounded-full bg-white'></div>
              )}
            </div>
            <span className='text-lg font-medium text-desert-800 dark:text-white'>
              ready to take it slow
            </span>
          </div>
        </label>
      </div>

      {/* Dynamic Content Based on Selection */}
      {selectedWorkStyle === 'fast-furious' && (
        <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] transition-all duration-500 ease-in-out'>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 w-full'>
              <Image
                src='/roadtrip.jpg'
                alt='Creative sprint illustration'
                width={800}
                height={600}
                className='object-cover w-full h-64 md:h-96 max-h-96'
              />
            </div>
            <div className='md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-desert-800'>
              <h3 className='text-2xl font-playfair font-bold text-desert-800 dark:text-white mb-4'>
                We recommend: PROJECT SPRINTS
              </h3>
              <p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed'>
                This is for folks who have a clear vision of what they need for
                their website and are looking to build marketing collateral,
                unique art for a specific launch, or a website overhaul for a
                product release or announcement.
              </p>
              <Button
                onClick={() => scrollToSection('creative-sprints')}
                className='bg-desert-600 hover:bg-desert-700 text-white w-fit'
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      )}

      {selectedWorkStyle === 'steady-thoughtful' && (
        <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] transition-all duration-500 ease-in-out'>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 w-full'>
              <Image
                src='/map.jpg'
                alt='INCLUSIVE WEBSITE PACKAGES illustration'
                width={800}
                height={600}
                className='object-cover w-full h-64 md:h-96 max-h-96'
              />
            </div>
            <div className='md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-desert-800'>
              <h3 className='text-2xl font-playfair font-bold text-desert-800 dark:text-white mb-4'>
                We recommend: INCLUSIVE WEBSITE PACKAGES
              </h3>
              <p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed'>
                This is for folks who need an expert to develop a website from
                the ground up, and recognize that building a website with good
                branding and design to reflect your needs is something that
                takes time and effort and you have the budget to do just that.
              </p>
              <Button
                onClick={() => scrollToSection('classic-packages')}
                className='bg-desert-600 hover:bg-desert-700 text-white w-fit'
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
