import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.christianokoye.com',
      },
      {
        protocol: 'https',
        hostname: 'christianokoye.com',
      },
    ],
  },
};

export default nextConfig;
