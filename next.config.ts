import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/:path*",
        destination: "https://github.com/m4sensen/masensen-api",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
