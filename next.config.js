/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
