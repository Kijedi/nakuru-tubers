/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nyc.cloud.appwrite.io",
        pathname: "/**"
      },
        {
        protocol: "https",
        hostname: "appwrite.coelib.org",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "yali-expo.nyc3.cdn.digitaloceanspaces.com",
        pathname: "/**"
      }
    ],
    unoptimized: true,
  },
};

export default nextConfig;
