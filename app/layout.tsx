import type { Metadata } from "next";
import Script from "next/script";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://tandatech.co.za"),

  title: "TandaTech | IT & Networking Solutions in Randburg",

  description:
    "Professional IT support, network installations, CCTV setup, WiFi optimization and structured cabling for homes and small businesses in Randburg and surrounding areas.",

  keywords: [
    "IT Support Randburg",
    "Network Installation Randburg",
    "CCTV Installation Randburg",
    "WiFi Setup Randburg",
    "Laptop Repairs Randburg",
    "Structured Cabling Randburg",
    "IT Technician Randburg",
    "Computer Support Randburg",
  ],

  authors: [{ name: "TandaTech" }],
  creator: "TandaTech",
  publisher: "TandaTech",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "TandaTech | Professional IT Solutions",
    description:
      "Reliable IT support and networking services in Randburg for homes and small businesses.",
    url: "https://tandatech.co.za",
    siteName: "TandaTech",
    locale: "en_ZA",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Script
          id="tandatech-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "TandaTech",
              url: "https://tandatech.co.za",
              image: "https://tandatech.co.za/logo.png",
              telephone: "+27826490965",
              email: "info@tandatech.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Randburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              areaServed: [
                "Randburg",
                "Sandton",
                "Fourways",
                "Roodepoort",
                "Johannesburg",
              ],
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}