import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Miss Khadija Schooling System - Guiding Young Minds",
  description:
    "Providing world-class education that empowers students to excel academically, socially, and personally in a nurturing environment. Guiding Young Minds since 2009.",
  keywords: "school, education, learning, students, academic excellence, Miss Khadija, MKSS, Guiding Young Minds",
  authors: [{ name: "Miss Khadija Schooling System" }],
  creator: "Miss Khadija Schooling System",
  publisher: "Miss Khadija Schooling System",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://misskhadija.edu",
    title: "Miss Khadija Schooling System - Guiding Young Minds",
    description:
      "Providing world-class education that empowers students to excel academically, socially, and personally.",
    siteName: "Miss Khadija Schooling System",
    images: [
      {
        url: "/images/school-logo.png",
        width: 1200,
        height: 630,
        alt: "Miss Khadija Schooling System Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miss Khadija Schooling System - Guiding Young Minds",
    description:
      "Providing world-class education that empowers students to excel academically, socially, and personally.",
    images: ["/images/school-logo.png"],
    creator: "@misskhadija_edu",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon-512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        {/* Theme and App Configuration */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-TileImage" content="/icon-192.png" />
        <meta name="application-name" content="MKSS" />
        <meta name="apple-mobile-web-app-title" content="MKSS" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://misskhadija.edu" />
        <meta name="referrer" content="origin-when-cross-origin" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
