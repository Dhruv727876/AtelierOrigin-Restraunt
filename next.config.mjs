/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  // basePath: '/atelier-origine', // Uncomment and update if your repo name is different
};

export default nextConfig;
