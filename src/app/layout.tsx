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
    "A period tracking app that stores everything locally on your device. No cloud, no accounts, no data collection. Track your cycle in complete privacy with Bloomra.",
  keywords: [
    "period tracker",
    "menstrual cycle app",
    "private period tracking",
    "local storage period app",
    "cycle awareness",
    "privacy period tracker",
    "no cloud period app",
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
    title: "Bloomra - Private Period Tracking",
    description:
      "Track your cycle with complete privacy. 100% local storage, no cloud, no AI. Your body, your rhythm, your sanctuary.",
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
    title: "Bloomra - Private Period Tracking",
    description:
      "Track your cycle with complete privacy. 100% local storage, no cloud, no AI.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${sourceSans.variable} ${plusJakarta.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
