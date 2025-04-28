// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'butterfly-button.web.app',
        pathname: '/img/**',
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Ignoring build errors can be dangerous, use with caution
    ignoreBuildErrors: true,
  },
  eslint: {
    // !! WARN !!
    // Ignoring ESLint errors can be dangerous, use with caution
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
