import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sagebrush Web Studio - Jackson WY Web Design & Development',
    short_name: 'Sagebrush Web Studio',
    description:
      'Jackson, Wyoming web design and development studio. Web development and design for dreamers, creatives, and community builders in Jackson Hole and the Teton Valley.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ecd9b9',
    theme_color: '#c56f53',
    icons: [
      {
        src: '/SagebrushSubmark-01.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/SagebrushSubmark-01.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/SagebrushSubmark-01.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/SagebrushSubmark-01.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/SagebrushSubmark-01.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['business', 'design', 'development'],
    lang: 'en-US',
  }
}
