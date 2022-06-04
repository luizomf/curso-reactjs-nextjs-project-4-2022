/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['logodownload.org', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
