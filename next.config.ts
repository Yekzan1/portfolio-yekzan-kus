import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/portfolio-yekzan-kus" : "",
  assetPrefix: isGithubPages ? "/portfolio-yekzan-kus/" : "",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
