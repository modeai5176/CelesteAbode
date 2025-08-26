import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Celeste Abode - Luxury Real Estate Consulting",
  description:
    "Redefining luxury real estate consulting in India's premium segment. From masterpiece of time into a masterpiece of living.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/hero.avif"
          as="image"
          type="image/avif"
        />
      </head>
      <body className={`font-sans ${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
