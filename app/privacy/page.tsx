import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/components/seo/seo-head'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Sagebrush Studio. Learn how we collect, use, and protect your personal information.',
  url: '/privacy',
  type: 'website',
})

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen bg-desert-50 dark:bg-desert-900 pt-32 pb-20'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-cormorant-sc font-bold text-desert-800 dark:text-white mb-8'>
            Privacy Policy
          </h1>
          <p className='text-sm text-gray-600 dark:text-gray-400 mb-8'>
            Last updated: December 2025
          </p>

          <div className='prose prose-sm dark:prose-invert max-w-none space-y-8'>
            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Introduction
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                Sun & Sagebrush LLC (&quot;Sagebrush Studio,&quot;
                &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects
                your privacy and is committed to protecting your personal
                information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Information We Collect
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                We may collect information about you in a variety of ways,
                including:
              </p>
              <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2'>
                <li>
                  Personal data you voluntarily provide when contacting us
                  (name, email address, phone number)
                </li>
                <li>
                  Information automatically collected when you visit our website
                  (IP address, browser type, pages visited)
                </li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                How We Use Your Information
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                We use the information we collect to:
              </p>
              <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2'>
                <li>Respond to your inquiries and provide customer service</li>
                <li>Improve our website and services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Disclosure of Your Information
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                necessary to provide our services or as required by law.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Cookies
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                Our website may use cookies to enhance your experience. You can
                choose to disable cookies through your browser settings, though
                this may affect some functionality of our website.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Data Security
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                We implement appropriate security measures to protect your
                personal information. However, no method of transmission over
                the Internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Your Rights
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                You have the right to access, correct, or delete your personal
                information. To exercise these rights, please contact us at
                <Link
                  href='mailto:hello@sunsagebrushcreative.com'
                  className='text-desert-100 dark:text-desert-200 text-sm max-w-xs hover:text-white dark:hover:text-gray-200'
                >
                  hello@sunsagebrushcreative.com
                </Link>
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Changes to This Policy
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-cormorant-sc font-semibold text-desert-800 dark:text-white mb-4'>
                Contact Us
              </h2>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                If you have any questions about this Privacy Policy, please
                contact us at{' '}
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
