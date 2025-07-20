import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zara Phone Catalog",
  description: "Catálogo de teléfonos móviles - Zara Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}