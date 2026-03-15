import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/'], // Protect typical backend routes for a template
    },
    sitemap: 'https://atelierorigine.com/sitemap.xml',
  };
}
