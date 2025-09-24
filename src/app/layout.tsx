import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context";
import { AuthProvider } from "@/contexts/auth-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxury Jewelry Store - Discover Your Sparkle",
  description: "Premium jewelry collection featuring diamonds, engagement rings, earrings, and custom pieces. Find the perfect jewelry for every special occasion.",
  keywords: "jewelry, diamonds, engagement rings, luxury jewelry, custom jewelry, earrings, necklaces, bracelets",
  authors: [{ name: "Luxury Jewelry Store" }],
  openGraph: {
    title: "Luxury Jewelry Store - Discover Your Sparkle",
    description: "Premium jewelry collection featuring diamonds, engagement rings, earrings, and custom pieces.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Jewelry Store - Discover Your Sparkle",
    description: "Premium jewelry collection featuring diamonds, engagement rings, earrings, and custom pieces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
