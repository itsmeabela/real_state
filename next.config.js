/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bayut-production.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

module.exports = nextConfig;
