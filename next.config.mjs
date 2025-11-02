/** @type {import('next').NextConfig} */
const basePath = "";
const nextConfig = {
    output: "export",
    basePath: basePath,
    reactStrictMode: true,
    images: { unoptimized: true },
    env: {
        NEXT_PUBLIC_BASE_PATH: "/",
    },
};

export default nextConfig;
