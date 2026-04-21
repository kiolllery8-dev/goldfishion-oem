/**
 * Next.js config for GitHub Pages static export.
 * Repo default: set NEXT_PUBLIC_BASE_PATH=/<repo-name> at build time (auto in CI).
 * For custom domain (CNAME), leave NEXT_PUBLIC_BASE_PATH empty.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
