'use client'

import { useEffect, useState } from 'react'

export default function HeroDescription() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div
      className='w-full py-8 relative bg-cover bg-center'
      style={{
        backgroundImage: `url(${isMobile ? '/hero-description-bg-mobile.jpg' : '/hero-description-bg.jpg'})`,
        backgroundColor: '#7F492E',
        height: '200px',
      }}
    ></div>
  )
}
