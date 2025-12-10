import type { Metadata } from 'next'
import Hero from '@/components/hero/hero'
import WorkShowcaseSection from '@/components/work/work-showcase-section'
import ContactForm from '@/components/contact-form'
import { generateSEOMetadata } from '@/components/seo/seo-head'
import Typewriter from '@/components/ui/typewriter'

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
        animateContent={true}
        titleClassName='text-5xl md:text-7xl font-cormorant-sc mb-6 text-white'
      >
        <div className='text-center text-white px-4 py-8 sm:px-6 md:px-8'>
          <Typewriter
            lines={[
              'technical consulting',
              'web development and design',
              'small business websites',
            ]}
            className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-cormorant-sc mb-4 sm:mb-6 text-white leading-tight px-2'
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2500}
            showCursor={true}
          />
        </div>
      </Hero>

      {/* Introduction Section */}
      <div className='bg-desert-50 dark:bg-desert-900 py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-2xl md:text-3xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-6'>
              Working with Real Humans
            </h2>
            <div className='w-24 h-px bg-brand-sage mx-auto mb-8'></div>
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
              I started Sagebrush Studio because I know that the internet is
              intimidating, and I know it's hard to sort through the jargon and
              find the right person for the job. My goal is to work with you
              authentically, so I tailor each project to you and your needs.
            </p>
          </div>
        </div>
      </div>

      {/*/!* Fun Web Pages Gallery Section *!/*/}
      {/*<WebPageGallery />*/}

      {/* Web Development Showcase */}
      <WorkShowcaseSection
        title='Web Development & Design'
        description='Custom websites that capture the story you want to tell to your visitors.'
        features={[
          'Squarespace, Wix, Shopify or WordPress development',
          'SEO optimization and performance tuning',
          'Content management system integration',
          'Shopify and custom e-commerce development',
          'Payment gateway integration (Stripe, PayPal) and inventory management',
          'Mobile-first experiences',
        ]}
        imageSrc='/page-images/workspace-image.jpg'
        imageAlt='Modern website development showcase'
        imagePosition='left'
        backgroundColor='bg-gradient-to-br from-brand-brown/10 to-brand-olive/10 dark:from-brand-brown/20 dark:to-brand-olive/20'
        textColor='text-desert-800 dark:text-white'
        accentColor='#7F492E'
        index={0}
      />

      {/* Technical Consulting & Migrations */}
      <WorkShowcaseSection
        title='Technical Consulting & Migrations'
        description="We take the intimidation out of web tasks. I'm here to help with a plugins, domains, migrating, hosting, SEO, or custom code."
        features={[
          'Plugin installation and configuration',
          'Domain registration and management',
          'Website migrations and transfers',
          'Hosting and server setup',
          'SEO optimization and performance tuning',
          'Custom code development and debugging',
        ]}
        imageSrc='/hero-images/work-background-bison.jpg'
        imageAlt='E-commerce website showcase'
        imagePosition='right'
        backgroundColor='bg-gradient-to-bl from-brand-desert/10 to-brand-sage/10 dark:from-brand-desert/20 dark:to-brand-sage/20'
        textColor='text-desert-800 dark:text-white'
        accentColor='#B295C1'
        index={1}
      />

      {/* Personal Dashboards & Internal Applications */}
      <WorkShowcaseSection
        title='Personal Dashboards & Internal Applications'
        description='Custom dashboards and internal applications to help you run your business more efficiently. Built so you can be in control of your business and focus on what you do best.'
        features={[
          'Custom dashboard and internal application development',
          'User authentication and access control',
          'Data visualization and reporting',
          'Integration with external APIs and services',
          'Customized user interfaces and workflows',
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
        description="Professional websites designed specifically for small businesses and entrepreneurs. Tell us your budget, and I'll work within it. Establish credibility, drive local business growth, and build a community around it."
        features={[
          'WordPress, Wix, Shopify or Squarespace development',
          'Local SEO optimization',
          'Contact forms and lead generation',
          'Appointment scheduling and booking',
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
