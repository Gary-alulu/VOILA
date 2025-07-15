import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js Image Optimization is enabled by default when unoptimized is false or not present.
    // To optimize images, ensure unoptimized is not set to true.
  },
  transpilePackages: ['framer-motion'],
};

export default nextConfig;
