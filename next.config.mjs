/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: "export",

  basePath: "/Movies-APP-List",
  assetPrefix: "/Movies-APP-List/",

  images: {
    domains: ["m.media-amazon.com"],
    unoptimized: true,
  },
};

export default nextConfig;
