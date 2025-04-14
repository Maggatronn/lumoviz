/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.d3pi1a7zayw2hq.amplifyapp.com',
      },
    ],
    unoptimized: true, // This will allow local images to work without optimization
  },
  output: 'export', // Enable static exports for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/lumoviz' : '', // Set base path for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lumoviz/' : '', // Set asset prefix for GitHub Pages
}

module.exports = nextConfig 