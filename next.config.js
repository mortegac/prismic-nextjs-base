/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  distDir:".next",
  images: {
    domains: ["images.prismic.io", "images.unsplash.com"],
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
