/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      loader: 'custom',
      loaderFile: './src/app/page.tsx',
    },
  }

module.exports = nextConfig
