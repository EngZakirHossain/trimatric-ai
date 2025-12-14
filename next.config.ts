import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "admin-trimatric.test",
        pathname: "/storage/**",
      }, 
    ],
  },
};

export default nextConfig;
