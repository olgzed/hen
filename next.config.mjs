/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — produces a fully static `out/` directory.
  // Remove this line if you want full Next.js server features on Vercel.
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
