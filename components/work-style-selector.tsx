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
    <div className='text-center mb-16'>
      <h2 className='text-3xl md:text-4xl font-playfair font-bold text-desert-800 dark:text-white mb-8'>
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
                : 'border-gray-300 dark:border-gray-600 hover:border-desert-400'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedWorkStyle === 'fast-furious'
                  ? 'border-desert-600 bg-desert-600'
                  : 'border-gray-400'
              }`}
            >
              {selectedWorkStyle === 'fast-furious' && (
                <div className='w-2 h-2 rounded-full bg-white'></div>
              )}
            </div>
            <span className='text-lg font-medium text-desert-800 dark:text-white'>
              Fast & Furious
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
                : 'border-gray-300 dark:border-gray-600 hover:border-desert-400'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedWorkStyle === 'steady-thoughtful'
                  ? 'border-desert-600 bg-desert-600'
                  : 'border-gray-400'
              }`}
            >
              {selectedWorkStyle === 'steady-thoughtful' && (
                <div className='w-2 h-2 rounded-full bg-white'></div>
              )}
            </div>
            <span className='text-lg font-medium text-desert-800 dark:text-white'>
              Steady & Thoughtful
            </span>
          </div>
        </label>
      </div>

      {/* Dynamic Content Based on Selection */}
      {selectedWorkStyle === 'fast-furious' && (
        <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg transition-all duration-500 ease-in-out'>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='md:w-1/3'>
              <Image
                src='/me-climbing.jpg'
                alt='Creative sprint illustration'
                width={300}
                height={200}
                className='rounded-lg object-cover w-full h-48'
              />
            </div>
            <div className='md:w-2/3 text-left'>
              <h3 className='text-2xl font-playfair font-bold text-desert-800 dark:text-white mb-4'>
                We recommend: CREATIVE SPRINTS
              </h3>
              <p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed'>
                This is for folks who have a clear vision of what they need for
                their website and are looking to build marketing collateral,
                unique art for a specific launch, or a website overhaul for a
                product release or announcement.
              </p>
              <Button
                onClick={() => scrollToSection('creative-sprints')}
                className='bg-desert-600 hover:bg-desert-700 text-white'
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      )}

      {selectedWorkStyle === 'steady-thoughtful' && (
        <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg transition-all duration-500 ease-in-out'>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='md:w-1/3'>
              <Image
                src='/me-rafting.jpg'
                alt='Classic website packages illustration'
                width={300}
                height={200}
                className='rounded-lg object-cover w-full h-48'
              />
            </div>
            <div className='md:w-2/3 text-left'>
              <h3 className='text-2xl font-playfair font-bold text-desert-800 dark:text-white mb-4'>
                We recommend: CLASSIC WEBSITE PACKAGES
              </h3>
              <p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed'>
                This is for folks who need an expert to develop a website from
                the ground up, and recognize that building a website with good
                branding and design to reflect your needs is something that
                takes time, and I have a budget to do it.
              </p>
              <Button
                onClick={() => scrollToSection('classic-packages')}
                className='bg-desert-600 hover:bg-desert-700 text-white'
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
