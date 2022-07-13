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
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
}

module.exports = nextConfig
