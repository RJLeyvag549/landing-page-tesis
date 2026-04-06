import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/landing-page-tesis' : '',
  allowedDevOrigins: ['192.168.56.1'],
};

export default nextConfig;
