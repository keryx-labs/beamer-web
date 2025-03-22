import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@beamer/ui"],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
