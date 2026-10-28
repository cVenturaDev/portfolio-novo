const basePath = process.env.BASE_PATH || "";

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  output: "export",
  basePath,
  images: { unoptimized: true },
};
