import Hero from '@/components/hero/hero'
import ContactForm from '@/components/contact/contact-form'

export default function Home() {
  return (
    <>
      {/* Under Construction Hero Section */}
      <Hero
        backgroundImage='/hero-images/western-backdrop.jpg'
        backgroundImageAlt='A highway somewhere in the American West.'
        title='UNDER CONSTRUCTION'
        overlayType='custom'
        overlayClassName='absolute inset-0 bg-black/60 dark:bg-black/80'
        animateContent={true}
        titleClassName='text-5xl md:text-7xl font-cormorant-sc mb-6 text-white'
      >
        <div className='text-center text-white px-4 py-8 sm:px-6 md:px-8'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-cormorant-sc mb-4 sm:mb-6 text-white leading-tight px-2'>
            UNDER CONSTRUCTION
          </h1>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 sm:mb-8 tracking-wide text-white px-4'>
            something new is coming :)
          </h2>
          <p className='text-gray-200 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto font-light text-sm sm:text-base md:text-lg leading-relaxed px-4'>
            Sagebrush Creative is currently undergoing some exciting changes. In
            the meantime, we'd love to hear about your project! Check out the
            lead inquiry below.
          </p>
        </div>
      </Hero>

      {/* Contact Form Section */}
      <div id='contact-form' className='bg-desert-50 dark:bg-desert-900 py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-cormorant-sc font-light text-desert-800 dark:text-desert-100 mb-6'>
              Let's Connect
            </h2>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  )
}
