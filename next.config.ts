import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV === 'development',
    remotePatterns: [{
      hostname: 'localhost',
      port: '4000',
      protocol: 'http',
      pathname: '/**',
    }],
  },
};

export default nextConfig;
