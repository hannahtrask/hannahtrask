import type { Metadata } from 'next'
import Hero from '@/components/hero/hero'
import WorkShowcaseSection from '@/components/work/work-showcase-section'
import WebPageGallery from '@/components/work/web-page-gallery'
import ContactForm from '@/components/contact-form'
import { generateSEOMetadata } from '@/components/seo/seo-head'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Work',
  description:
    'Explore our portfolio of web design and development projects for outdoor industry businesses, e-commerce ventures, and adventure-focused brands.',
  keywords: [
    'portfolio',
    'web design projects',
    'web development work',
    'outdoor industry websites',
    'e-commerce projects',
  ],
  url: '/work',
  type: 'website',
})

export default function WorkPage() {
  return (
    <>
      <Hero
        backgroundImage='/hero-images/hay.jpg'
        backgroundImageAlt='Bison lingering in a field in front of mountains'
        overlayType='custom'
        overlayClassName='absolute inset-0 bg-black/60 dark:bg-black/80'
        title='OUR WORK'
        titleClassName='text-5xl md:text-6xl font-cormorant-sc font-light text-white mb-6'
      />

      {/* Introduction Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-6'>
              Crafting Digital Experiences
            </h2>
            <div className='w-24 h-px bg-brand-sage mx-auto mb-8'></div>
            <p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
              From custom web development to e-commerce solutions, we create
              digital experiences that connect with your audience and drive
              results. Each project is thoughtfully designed to reflect your
              brand's unique story and goals.
            </p>
          </div>
        </div>
      </div>

      {/* Web Development Showcase */}
      <WorkShowcaseSection
        title='Web Development'
        description='Custom websites built with modern technologies, optimized for performance and user experience. From concept to launch, we create responsive, accessible websites that work beautifully across all devices.'
        features={[
          'Custom React & Next.js development',
          'Responsive design for all screen sizes',
          'SEO optimization and performance tuning',
          'Content management system integration',
          'Analytics and conversion tracking',
        ]}
        imageSrc='/page-images/workspace-image.jpg'
        imageAlt='Modern website development showcase'
        imagePosition='left'
        backgroundColor='bg-gradient-to-br from-brand-brown/10 to-brand-olive/10 dark:from-brand-brown/20 dark:to-brand-olive/20'
        textColor='text-desert-800 dark:text-white'
        accentColor='#7F492E'
        index={0}
      />

      {/* E-commerce Showcase */}
      <WorkShowcaseSection
        title='E-commerce Solutions'
        description='Powerful online stores that convert visitors into customers. We build scalable e-commerce platforms with seamless checkout experiences, inventory management, and marketing integrations.'
        features={[
          'Shopify and custom e-commerce development',
          'Payment gateway integration (Stripe, PayPal)',
          'Inventory management and order processing',
          'Email marketing automation (Klaviyo, Mailchimp)',
          'Mobile-optimized shopping experiences',
        ]}
        imageSrc='/hero-images/work-background-bison.jpg'
        imageAlt='E-commerce website showcase'
        imagePosition='right'
        backgroundColor='bg-gradient-to-bl from-brand-desert/10 to-brand-sage/10 dark:from-brand-desert/20 dark:to-brand-sage/20'
        textColor='text-desert-800 dark:text-white'
        accentColor='#B295C1'
        index={1}
      />

      {/* Branding & Visual Identity */}
      <WorkShowcaseSection
        title='Branding & Visual Identity'
        description='Cohesive brand experiences that tell your story across all touchpoints. From logo design to complete brand guidelines, we help establish a memorable visual identity that resonates with your audience.'
        features={[
          'Logo design and brand mark creation',
          'Color palette and typography selection',
          'Brand guidelines and style documentation',
          'Marketing collateral design',
          'Website integration and brand consistency',
        ]}
        imageSrc='/hero-images/western-backdrop.jpg'
        imageAlt='Brand identity design showcase'
        imagePosition='left'
        backgroundColor='bg-gradient-to-tr from-brand-sage/10 to-brand-olive/10 dark:from-brand-sage/20 dark:to-brand-sage/20'
        textColor='text-desert-800 dark:text-white'
        accentColor='#CD9493'
        index={2}
      />

      {/* Small Business Solutions */}
      <WorkShowcaseSection
        title='Small Business Websites'
        description='Professional websites designed specifically for small businesses and entrepreneurs. We focus on creating cost-effective solutions that establish credibility and drive local business growth.'
        features={[
          'WordPress and Squarespace development',
          'Local SEO optimization',
          'Contact forms and lead generation',
          'Social media integration',
          'Easy content management for business owners',
        ]}
        imageSrc='/hero-images/hay.jpg'
        imageAlt='Small business website showcase'
        imagePosition='right'
        backgroundColor='bg-gradient-to-bl from-brand-sage/10 to-brand-olive/10 dark:from-brand-sage/20 dark:to-brand-olive/20'
        textColor='text-desert-800 dark:text-white'
        accentColor='#9D9B86'
        index={3}
      />

      {/* Fun Web Pages Gallery Section */}
      <WebPageGallery />

      {/* Contact Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center'>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
