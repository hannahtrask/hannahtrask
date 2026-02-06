'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { CaseStudyImage } from '@/data/case-studies'

interface CaseStudyGalleryProps {
  images: CaseStudyImage[]
  title?: string
}

export default function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
      )
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
      )
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className='group cursor-pointer'
            onClick={() => openLightbox(index)}
          >
            <div className='relative aspect-[4/3] overflow-hidden rounded-lg shadow-md'>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300' />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full'>
                  View
                </span>
              </div>
            </div>
            {image.caption && (
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400 text-center'>
                {image.caption}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4'
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className='absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10'
              aria-label='Close gallery'
            >
              <X className='w-8 h-8' />
            </button>

            {/* Previous Button */}
            <button
              onClick={e => {
                e.stopPropagation()
                goToPrevious()
              }}
              className='absolute left-4 text-white/80 hover:text-white transition-colors z-10'
              aria-label='Previous image'
            >
              <ChevronLeft className='w-10 h-10' />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className='relative max-w-5xl max-h-[80vh] w-full h-full'
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className='object-contain'
                priority
              />
              {images[selectedIndex].caption && (
                <div className='absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-3 px-4'>
                  <p className='text-sm'>{images[selectedIndex].caption}</p>
                </div>
              )}
            </motion.div>

            {/* Next Button */}
            <button
              onClick={e => {
                e.stopPropagation()
                goToNext()
              }}
              className='absolute right-4 text-white/80 hover:text-white transition-colors z-10'
              aria-label='Next image'
            >
              <ChevronRight className='w-10 h-10' />
            </button>

            {/* Image Counter */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm'>
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
