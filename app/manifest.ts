import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Atelier',
    description: siteConfig.metadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F2EB', // Match the --bg-light var
    theme_color: '#1a1a1a',      // Match the dark accent or base layout color
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
