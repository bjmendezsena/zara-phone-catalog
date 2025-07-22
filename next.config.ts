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

  // Configuración para modos desarrollo y producción
  webpack: (config, { dev }) => {
    // Modo Desarrollo: Servir assets sin minimizar
    if (dev) {
      config.optimization.minimize = false;
      config.optimization.minimizer = [];
      config.optimization.concatenateModules = false;

      // Generar archivos separados para mejor debugging
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
    } else {
      // Modo Producción: Assets concatenados y minimizados (configuración por defecto de Next.js)
      config.optimization.minimize = true;
      config.optimization.concatenateModules = true;
    }

    return config;
  },

  // Configuraciones básicas por entorno
  swcMinify: process.env.NODE_ENV === "production",
  compress: process.env.NODE_ENV === "production",
};

export default nextConfig;
