/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  //  Tell Next to generate a fully static site
  output: 'export',

  // Export pages as folder/index.html to avoid directory 403s on static hosts
  trailingSlash: true,

  images: {
    remotePatterns: [],
    // Required for static export (no Next image optimizer on Hostinger)
    unoptimized: true,
  },
};

module.exports = nextConfig;
