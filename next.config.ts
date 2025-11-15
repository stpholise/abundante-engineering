import type { NextConfig } from "next";
import i18nConfig from "./next-i18next.config";

const nextConfig: NextConfig = {
  i18n: i18nConfig.i18n,
  reactStrictMode: true,

  images: {
    remotePatterns: [
      new URL("https://cdn.sanity.io/images/2f7v75aq/production/**"),
    ],
  },
};

export default nextConfig;
