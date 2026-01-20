import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sagebrush Studio - Jackson WY Web Design & Development',
    short_name: 'Sagebrush Studio',
    description:
      'Jackson, Wyoming web design and development studio. Web development and design for dreamers, creatives, and community builders in Jackson Hole and the Teton Valley.',
    start_url: '/',
    display: 'standalone',
    background_color: '#7F492E',
    theme_color: '#7F492E',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
    categories: ['business', 'design', 'development'],
    lang: 'en-US',
  }
}
