import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/streaming",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
