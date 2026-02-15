import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "TradePro - Advanced Trading Platform",
  description:
    "Institutional-grade tools, real-time data, and world-class execution for every trader."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${inter.variable} bg-background-dark text-text-primary antialiased selection:bg-primary selection:text-black`}
      >
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
