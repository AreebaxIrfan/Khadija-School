import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kadija Schooling System - Excellence in Education",
  description:
    "Providing world-class education that empowers students to excel academically, socially, and personally in a nurturing environment.",
  keywords: "school, education, learning, students, academic excellence, Kadija",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
