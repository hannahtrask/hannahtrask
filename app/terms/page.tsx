import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/components/seo/seo-head'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Terms & Conditions',
  description:
    'Terms and Conditions for Sagebrush Studio. Read our terms of service and usage policies.',
  url: '/terms',
  type: 'website',
})

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-desert-50 dark:bg-desert-900 pt-32 pb-20'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-8'>
            Terms &amp; Conditions
          </h1>
          <p className='text-sm text-gray-600 dark:text-gray-400 mb-8'>
            Last updated: December 2025
          </p>

          <div className='prose prose-sm dark:prose-invert max-w-none space-y-8'>
            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Agreement to Terms
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                By accessing or using the Sagebrush Studio website, you agree to
                be bound by these Terms and Conditions. If you do not agree with
                any part of these terms, you may not access the website.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Services
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                Sagebrush Studio provides web design, development, and
                consulting services. All services are subject to separate
                agreements and contracts that will be provided before work
                begins.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Intellectual Property
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                The content, design, and code on this website are the property
                of Sun &amp; Sagebrush LLC unless otherwise stated. You may not
                reproduce, distribute, or create derivative works without our
                express written permission.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                User Responsibilities
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                When using our website, you agree to:
              </p>
              <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2'>
                <li>Provide accurate information when contacting us</li>
                <li>Not use the website for any unlawful purpose</li>
                <li>
                  Not attempt to gain unauthorized access to any part of the
                  website
                </li>
                <li>
                  Not interfere with the proper functioning of the website
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Limitation of Liability
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                Sagebrush Studio shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages
                resulting from your use of or inability to use the website or
                services.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Disclaimer
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                The website and its content are provided &quot;as is&quot;
                without warranties of any kind, either express or implied. We do
                not guarantee that the website will be error-free or
                uninterrupted.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Governing Law
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                These Terms and Conditions shall be governed by and construed in
                accordance with the laws of the State of Wyoming, without regard
                to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Changes to Terms
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                We reserve the right to modify these Terms and Conditions at any
                time. Changes will be effective immediately upon posting to the
                website. Your continued use of the website constitutes
                acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Contact Us
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                If you have any questions about these Terms and Conditions,
                please contact us at{' '}
                <Link
                  href='mailto:hello@sunsagebrushcreative.com'
                  className='text-desert-100 dark:text-desert-200 text-sm max-w-xs hover:text-white dark:hover:text-gray-200'
                >
                  hello@sunsagebrushcreative.com
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
