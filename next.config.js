/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/lumoviz',
  assetPrefix: '/lumoviz/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = nextConfig 