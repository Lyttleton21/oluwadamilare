import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "I'm Bolarinwa Damilare by Name, a skilled full-stack developer with passion for building robust, scalable, and user-friendly applications.",
  openGraph: {
    images: [
      {
        url: "https://devoluwadamilare.vercel.app/api/og",
        alt: "Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
