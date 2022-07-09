/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverless:false,
  swcMinify: true,
  compiler: {
    removeConsole: true,
    styledComponents: true,
  },
  distDir:"./dist/",
  images: {
    domains: ["images.prismic.io", "images.unsplash.com"],
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
