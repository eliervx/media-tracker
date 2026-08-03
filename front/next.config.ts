import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    console.log("====================================")
    console.log(process.env.INTERNAL_BACKEND_URL )
    console.log("====================================")
    return [
      {
        source: '/api/:path*',
        // En dev local : http://localhost:3000/api/:path*
        // Dans Docker : http://backend:3000/api/:path*
        destination: `${process.env.INTERNAL_BACKEND_URL || 'http://localhost:3000'}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
