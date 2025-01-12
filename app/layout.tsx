import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ weight: ["400","100","200","300","400"], subsets: ["latin",] });

export const metadata: Metadata = {
  title: "Nakuru Tubers",
  description: "Your Trusted Partner for high quality certified seed potato.",
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
