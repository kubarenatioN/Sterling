/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.APP_DOMAIN,
      },
    ],
  },
};

module.exports = nextConfig;
