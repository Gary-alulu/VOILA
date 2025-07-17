import { Playfair_Display, Inter } from 'next/font/google';

import { Playfair_Display, Inter, Caveat } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: '400',
  display: 'swap',
});

import "./globals.css";
import Navbar from "../components/Navbar";
import FooterClient from "../components/FooterClient";
import { ThemeProvider } from "../components/ThemeProvider";
import LoadingScreen from "../components/LoadingScreen";
import { ReduxProvider } from "@/components/Provider";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VOILÀ - Luxury Perfumes',
  description: 'Discover our collection of luxury perfumes and fragrances',
  keywords: ['perfume', 'luxury', 'fragrance', 'scent', 'voila'],
  authors: [{ name: 'VOILÀ' }],
  openGraph: {
    title: 'VOILÀ - Luxury Perfumes',
    description: 'Discover our collection of luxury perfumes and fragrances',
    siteName: 'VOILÀ',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOILÀ - Luxury Perfumes',
    description: 'Discover our collection of luxury perfumes and fragrances',
  },
  robots: {
    index: true,
    follow: true,
  },
};






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${caveat.variable} antialiased`} 
      >
        <ReduxProvider>
          <ThemeProvider>
            <Navbar />
            {/* The following links are typically part of the Navbar component, but are placed here for demonstration of insertion if needed in layout.tsx */}
            {/* <Link href="/about" className="hover:text-gray-300 transition-colors duration-300">About</Link> */}
            {/* <Link href="/contact" className="hover:text-gray-300 transition-colors duration-300">Contact</Link> */}
            <LoadingScreen>{children}</LoadingScreen>
            <FooterClient />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
