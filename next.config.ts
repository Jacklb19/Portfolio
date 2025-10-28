import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
    turbopackScopeHoisting: false
  }
};

export default nextConfig;
