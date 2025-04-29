import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/adopt',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
