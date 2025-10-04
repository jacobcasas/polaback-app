import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly set Turbopack workspace root to the project dir to avoid
  // Next.js warning about inferring the workspace root from unrelated
  // lockfiles on the machine.
  turbopack: {
    // Path is relative to this Next.js project directory. Using './' ensures
    // Turbopack treats this folder (polaback-app) as the workspace root.
    root: './',
  },
};

export default nextConfig;
