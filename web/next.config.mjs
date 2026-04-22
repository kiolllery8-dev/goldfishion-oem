/**
 * Next.js config for GitHub Pages static export with custom domain.
 * Site is served from the root (goldfishion.intelliverse.tw), so no basePath.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
