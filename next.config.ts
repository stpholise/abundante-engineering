import type { NextConfig } from "next"; 

const nextConfig: NextConfig = { 
  reactStrictMode: true,

  images: {
    remotePatterns: [
      new URL("https://cdn.sanity.io/images/2f7v75aq/production/**"),
    ],
  },
};

export default nextConfig;
