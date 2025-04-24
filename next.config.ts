import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
