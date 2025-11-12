import type { Metadata } from 'next'
import Hero from '@/components/hero/hero'
import WorkShowcaseSection from '@/components/work/work-showcase-section'
import WebPageGallery from '@/components/work/web-page-gallery-server'
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
              Working with Real Humans
            </h2>
            <div className='w-24 h-px bg-brand-sage mx-auto mb-8'></div>
            <p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto'>
              Here at Sagebrush Creative we know that the internet is
              intimidating, and we know it's hard to sort through the jargon and
              find the right person for the job. We're here to cut through the
              robotic nature of the web and tailor every project to you and your
              needs. Every project and person is different, and that's part of
              the fun.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Hannah Section */}
      <div className='bg-white dark:bg-desert-800 pt-10'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              {/* Image */}
              <div className='order-2 lg:order-1'>
                <div className='relative'>
                  <img
                    src='/HANNAH_TRASK.png'
                    alt='Hannah Trask - Founder of Sagebrush Creative'
                    className='w-full h-auto object-cover'
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className='order-1 lg:order-2 space-y-6'>
                <h3 className='text-3xl md:text-4xl font-cormorant-sc font-bold text-desert-800 dark:text-white'>
                  Meet Hannah
                </h3>
                <div className='w-16 h-px bg-brand-sage'></div>
                <p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
                  Speaking of real humans, I&apos;m Hannah, the founder and
                  owner of Sagebrush Creative. My passions lie in empowering
                  people to pursue their dreams, businesses, and personal goals.
                  I believe we can bring connection and community back in the
                  digital age by acting with intention, authenticity, and
                  honesty. I specialize in creating websites that not only look
                  beautiful but also tell your unique story for your business
                  and <strong>your</strong> vision.
                </p>
                <p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
                  When I'm not coding, building websites or writing, you&apos;ll
                  find me exploring outside, learning a new thing, or trying out
                  a new pasta recipe I saw on Instagram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Web Development Showcase */}
      <WorkShowcaseSection
        title='Web Development & Design'
        description='Custom websites that capture the story you need to tell to your visitors.'
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
        description="We take the intimidation out of web tasks. Whether you need help with a plugin, domains, migrating, hosting, SEO, or custom code, we've got you covered."
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
        description="Custom dashboards and internal applications to help you run your business more efficiently. Built so you cn be in control and do what you do best. Have an idea? Let's build it."
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
        description="Professional websites designed specifically for small businesses and entrepreneurs. Tell us your budget, and we'll work within it. Establish credibility, drive local business growth, and build a community around it."
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
