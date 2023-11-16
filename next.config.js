/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.APP_DOMAIN,
      },
    ],
  },
  sassOptions: {},
};

module.exports = nextConfig;
