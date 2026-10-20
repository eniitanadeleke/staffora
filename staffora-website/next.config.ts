import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site builds to plain HTML in /out and can be hosted
  // on Vercel, Netlify, cPanel or any static host.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
