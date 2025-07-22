import type { Metadata, Viewport } from "next";
import { Header } from "@/components";
import { RootProvider } from "@/provider";

import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Zara Phone Catalog",
    default: "Zara Phone Catalog",
  },
  description: "Catálogo de teléfonos móviles - Zara Challenge",
  applicationName: "Zara Phone Catalog",
  authors: [{ name: "Zara Team" }],
  keywords: ["Zara", "Phone", "Catalog", "Mobile", "Challenge"],
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: "Zara Phone Catalog",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className='antialiased'
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        <RootProvider>
          <Header />
          <main>{children}</main>
        </RootProvider>
      </body>
    </html>
  );
}
