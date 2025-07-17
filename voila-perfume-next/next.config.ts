import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.brandfetch.io',
        port: '',
        pathname: '/hermes.com/**',
      },
    ],
  },
  transpilePackages: ['framer-motion'],
};

export default nextConfig;
