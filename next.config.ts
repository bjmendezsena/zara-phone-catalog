import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "prueba-tecnica-api-tienda-moviles.onrender.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },

  webpack: (config, { dev }) => {
    if (dev) {
      config.optimization.minimize = false;
      config.optimization.minimizer = [];
      config.optimization.concatenateModules = false;

      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: "vendor",
            chunks: "all",
            test: /node_modules/,
            enforce: true,
          },
        },
      };

      config.devtool = "eval-source-map";
    } else {
      config.optimization.minimize = true;
      config.optimization.concatenateModules = true;
      config.devtool = "source-map";
    }

    return config;
  },

  compress: process.env.NODE_ENV === "production",

  productionBrowserSourceMaps: process.env.NODE_ENV === "development",
};

export default nextConfig;
