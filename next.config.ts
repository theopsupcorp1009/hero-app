import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   allowedDevOrigins: ["192.168.0.107"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;