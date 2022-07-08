/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: "serverless",
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.prismic.io", "images.unsplash.com"],
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
