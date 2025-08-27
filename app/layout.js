import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NovaBrand Starter",
  description: "A modern Next.js starter for fast, brand-forward websites.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "NovaBrand Starter",
    description: "A modern Next.js starter for fast, brand-forward websites.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "NovaBrand Starter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaBrand Starter",
    description: "A modern Next.js starter for fast, brand-forward websites.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
