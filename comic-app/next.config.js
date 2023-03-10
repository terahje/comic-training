/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.annihil.us'],
    deviceSizes: [375, 640, 1024, 1440, 1920]
  },
}

module.exports = nextConfig
