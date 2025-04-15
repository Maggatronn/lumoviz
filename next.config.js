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
  // Configure based on deployment target
  ...(process.env.GITHUB_PAGES === 'true' 
    ? {
        output: 'export', // Enable static exports for GitHub Pages
        basePath: '/lumoviz', // Set base path for GitHub Pages
        assetPrefix: '/lumoviz/', // Set asset prefix for GitHub Pages
      } 
    : {
        // Default configuration for other deployment platforms like Vercel
        output: 'standalone',
      }
  )
}

module.exports = nextConfig 