/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  basePath: '/AtelierOrigin-Restraunt',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/AtelierOrigin-Restraunt',
  },
};

export default nextConfig;
