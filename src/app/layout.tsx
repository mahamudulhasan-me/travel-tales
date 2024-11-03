import Navbar from "@/components/shared/Navbar/Navbar";
import Providers from "@/lib/Providers";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 400 500 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 400 500 900",
});

export const metadata: Metadata = {
  title: "Feed | Travel Tales",
  description: "Travel with your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
