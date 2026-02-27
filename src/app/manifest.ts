import type { MetadataRoute } from 'next'

export default function manifest (): MetadataRoute.Manifest {
  return {
    name: 'Anotador Va!',
    short_name: 'Anotador',
    description: 'Anotador universal offline para juegos de mesa y cartas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon?size=512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
