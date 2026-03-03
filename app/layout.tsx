import type { Metadata } from "next";
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
  title: "TandaTech | IT & Networking Solutions in Randburg",
  description:
    "Professional IT support, network installations, CCTV setup, WiFi optimization and structured cabling in Randburg and surrounding areas.",
  keywords: [
    "IT Support Randburg",
    "Network Installation Randburg",
    "CCTV Installation Randburg",
    "WiFi Setup Randburg",
    "Laptop Repairs Randburg",
    "Structured Cabling Randburg",
  ],
  openGraph: {
    title: "TandaTech | Professional IT Solutions",
    description:
      "On-site IT & Networking solutions for homes and small businesses in Randburg.",
    url: "https://tandatech.co.za",
    siteName: "TandaTech",
    locale: "en_ZA",
    type: "website",
  },
}

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
        {children}
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "TandaTech",
      image: "https://tandatech.co.za/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "32 Hill Street",
        addressLocality: "Randburg",
        addressRegion: "Gauteng",
        postalCode: "2194",
        addressCountry: "ZA",
      },
      telephone: "+27826490965",
      email: "info@tandatech.co.za",
      url: "https://tandatech.co.za",
    }),
  }}
/>
      </body>
    </html>
  );
}
