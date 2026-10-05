import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Published as static files on GitHub Pages at https://shibalove.site.
  output: "export",
  images: {
    unoptimized: true,
  },
  // The preview is opened at 127.0.0.1 while the server binds 0.0.0.0.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
