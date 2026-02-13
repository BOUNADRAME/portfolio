/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Change this to your GitHub repo name if not using custom domain
  // basePath: '/portfolio',
}

module.exports = nextConfig
