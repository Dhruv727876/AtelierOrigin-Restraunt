import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://atelierorigine.com'; // In a real template, this would use process.env.NEXT_PUBLIC_SITE_URL or similar

  // You can dynamically map over blog posts, menu items, or events here.
  // For a single-page or simple multi-page structure:
  const routes = ['', '/menu', '/story', '/press', '/cellar', '/events'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  return routes;
}
