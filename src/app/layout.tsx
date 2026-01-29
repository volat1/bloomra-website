import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Serif font - for poetic headlines and emotional content
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Sans font - for body text and actionable content
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

// Display font - for bold metrics and numbers
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bloomra - Private Period Tracking | Your Data Stays Yours",
    template: "%s | Bloomra",
  },
  description:
    "Period tracking that stays on your phone. No accounts, no cloud, no data collection. Track your cycle in complete privacy with Bloomra.",
  keywords: [
    "period tracker app",
    "private period tracking",
    "local storage period app",
    "menstrual cycle tracker",
    "no cloud period tracker",
    "privacy period app",
    "offline period tracker",
    "ios period tracker",
    "secure menstrual app",
    "cycle awareness app",
    "best period tracker privacy",
    "period tracker no account",
  ],
  authors: [{ name: "Bloomra" }],
  creator: "Bloomra",
  publisher: "Bloomra",
  metadataBase: new URL("https://bloomra.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bloomra.app",
    siteName: "Bloomra",
    title: "Bloomra - Period Tracking That Stays On Your Phone",
    description:
      "No accounts. No cloud. No creepy data collection. Just a beautiful way to understand your cycle.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bloomra - Private Period Tracking App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloomra - Period Tracking That Stays On Your Phone",
    description:
      "No accounts. No cloud. No creepy data collection. Just a beautiful way to understand your cycle.",
    images: ["/og-image.png"],
  },
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD Schema for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bloomra.app/#organization",
      name: "Bloomra",
      url: "https://bloomra.app",
      logo: {
        "@type": "ImageObject",
        url: "https://bloomra.app/logo.png",
      },
      description: "Privacy-first period tracking app",
    },
    {
      "@type": "MobileApplication",
      "@id": "https://bloomra.app/#app",
      name: "Bloomra",
      operatingSystem: "iOS",
      applicationCategory: "HealthApplication",
      description:
        "Period tracking that stays on your phone. No accounts, no cloud, no data collection.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      creator: {
        "@id": "https://bloomra.app/#organization",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://bloomra.app/#website",
      url: "https://bloomra.app",
      name: "Bloomra",
      publisher: {
        "@id": "https://bloomra.app/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${sourceSans.variable} ${plusJakarta.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
