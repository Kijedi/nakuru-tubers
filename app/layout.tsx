import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nakuru Tubers",
  description: "Nakuru Tubers",
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
