/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  images: {
    domains: ["https://photos.google.com/u/3/photo"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
