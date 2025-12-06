import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QUOTEAI | Premium Quoting Automation",
  description: "AI-Powered Quoting for HVAC & Luxury Windows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="liquid-gradient-bg">
          <div className="liquid-orb orb-1" />
          <div className="liquid-orb orb-2" />
          <div className="liquid-orb orb-3" />
        </div>
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
