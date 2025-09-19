'use client'

export default function HeroDescription() {
  return (
    <div
      className='w-full py-8 relative'
      style={{
        background: `
          linear-gradient(to right, rgba(127, 73, 46, 1), rgba(255, 255, 255, 0.1), rgba(127, 73, 46, 1)),
          url(https://grainy-gradients.vercel.app/noise.svg),
          #7F492E
        `,
        filter: 'contrast(170%) brightness(100%)',
      }}
    >
      <div className='container mx-auto px-4 relative z-10'>
        <p className='text-white font-montserrat text-sm md:text-base leading-relaxed text-center max-w-4xl mx-auto tracking-wide'>
          Sagebrush Creative is a small web development and creative agency
          based in Jackson Hole, WY
        </p>
        <p className='text-white font-montserrat text-sm md:text-base leading-relaxed text-center max-w-4xl mx-auto tracking-wide'>
          We are a team of web experts with a deep connection to wild spaces.
        </p>
      </div>
    </div>
  )
}
