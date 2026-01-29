import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Poppins({
  weight: ["400", "100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nakurutubers.com"),
  title: {
    default: "Nakuru Tubers | Certified Seed Potatoes in Kenya",
    template: "%s | Nakuru Tubers",
  },
  description:
    "Kenya's trusted supplier of certified seed potatoes. We empower smallholder farmers with quality seeds, climate-smart practices, and expert consultation services across Nakuru and beyond.",
  keywords: [
    "certified seed potatoes Kenya",
    "seed potato supplier Nakuru",
    "potato farming Kenya",
    "smallholder farmer support",
    "agricultural consultation Kenya",
    "climate-smart agriculture",
    "potato seeds",
    "Nakuru Tubers",
  ],
  authors: [{ name: "Nakuru Tubers" }],
  creator: "Nakuru Tubers",
  publisher: "Nakuru Tubers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://nakurutubers.com",
    siteName: "Nakuru Tubers",
    title: "Nakuru Tubers | Certified Seed Potatoes in Kenya",
    description:
      "Kenya's trusted supplier of certified seed potatoes. Empowering smallholder farmers with quality seeds and expert agricultural consultation.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nakuru Tubers - Certified Seed Potatoes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakuru Tubers | Certified Seed Potatoes in Kenya",
    description:
      "Kenya's trusted supplier of certified seed potatoes. Empowering smallholder farmers with quality seeds.",
    images: ["/images/og-image.jpg"],
    creator: "@NakuruTubers",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://nakurutubers.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
          <Toaster richColors />
          <WhatsAppButton />
        </main>
      </body>
    </html>
  );
}
