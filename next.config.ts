import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
    turbopackScopeHoisting: false
  },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
    ],
  },
};

export default nextConfig;
