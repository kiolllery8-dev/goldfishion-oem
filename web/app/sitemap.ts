import type { MetadataRoute } from 'next';

const BASE = 'https://goldfishion.intelliverse.tw';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/about/', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/services/', changeFrequency: 'monthly', priority: 0.95 },
    { path: '/products/', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/applications/', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/insights/', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/contact/', changeFrequency: 'yearly', priority: 0.7 },
  ];
  return pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
