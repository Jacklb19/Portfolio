import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { PreferencesProvider } from "@/lib/preferences-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Jose Burbano - Software Engineer Portfolio",
  description: "Portafolio personal de José Luis",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  )
}
