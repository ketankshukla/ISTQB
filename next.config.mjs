/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Memory-constrained environments: serialize static generation to one worker
  // so peak RAM stays low when building ~1,100+ pages.
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  staticPageGenerationTimeout: 300,
};

export default nextConfig;
