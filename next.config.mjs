/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    domains: ["m.media-amazon.com"],
    unoptimized: true,
  },
};

export default nextConfig;
