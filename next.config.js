/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: {
      loader: 'custom',
      loaderFile: "./page.tsx",
      remotePatterns: [
        { hostname: 'avatars.githubusercontent.com' },
        { hostname: 'github.com' },
      ],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    poweredByHeader: false,
    optimizeFonts: true,
  };
  
  module.exports = nextConfig;
  