import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['http://10.77.112.184:3000'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;