/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.WORDPRESS_PROTOCOL,
        hostname: process.env.WORDPRESS_HOSTNAME,
        port: process.env.WORDPRESS_PORT,
        pathname: process.env.WORDPRESS_PATH_NAME,
      },
    ],
  },
};

export default nextConfig;
