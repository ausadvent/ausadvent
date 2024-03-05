/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net', 'images.ctfassets.net'],
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/locations',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
