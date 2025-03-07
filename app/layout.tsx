import type React from "react"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Banner from "@/components/Banner"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const websiteUrl = "https://nazhairandbeauty.com";

export const metadata: Metadata = {
  title: "Naz Hair & Beauty Salon | Professional Hair & Beauty Services in Birmingham",
  description: "Naz Hair & Beauty offers a wide range of professional hair styling, beauty treatments, threading, waxing, facials, and nail services in Birmingham. Book your appointment today!",
  keywords: "hair salon birmingham, beauty salon, threading, waxing, facials, nail services, hair styling, hair coloring, massage, eyelash extensions, eyebrow threading",
  openGraph: {
    title: "Naz Hair & Beauty Salon | Birmingham",
    description: "Professional hair styling, beauty treatments, threading, waxing, facials, and nail services in Birmingham. Book your appointment today!",
    url: websiteUrl,
    siteName: "Naz Hair & Beauty Salon",
    images: [
      {
        url: "/naz/client4.webp", // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Naz Hair & Beauty Salon in Birmingham"
      }
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naz Hair & Beauty Salon | Birmingham",
    description: "Professional hair and beauty services in Birmingham. Book your appointment today!",
    images: ["/naz/client2.webp"], // Replace with your actual image path
  },
  alternates: {
    canonical: websiteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: "Naz Hair & Beauty Salon",
      url: websiteUrl,
    }
  ],
  category: "Beauty Salon",
  metadataBase: new URL(websiteUrl),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}

