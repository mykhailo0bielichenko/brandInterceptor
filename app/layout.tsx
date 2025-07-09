import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/components/auth/auth-provider"
import { LoginModal } from "@/components/auth/login-modal"
import { SignupModal } from "@/components/auth/signup-modal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Xemeaino - Premium Online Casino | Win Big with $5,000 Bonus",
  description:
    "Experience the ultimate online casino at Xemeaino. Over 3,000 games, instant payouts, and exclusive bonuses up to $5,000. Licensed, secure, and trusted by 150K+ players worldwide.",
  keywords: "online casino, casino games, slots, blackjack, roulette, poker, casino bonus, gambling, live casino",
  authors: [{ name: "Xemeaino Casino Team" }],
  creator: "Xemeaino",
  publisher: "Xemeaino",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://xemeaino.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Xemeaino - Premium Online Casino | Win Big with $5,000 Bonus",
    description:
      "Experience the ultimate online casino at Xemeaino. Over 3,000 games, instant payouts, and exclusive bonuses up to $5,000.",
    url: "https://xemeaino.com",
    siteName: "Xemeaino",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xemeaino Online Casino",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xemeaino - Premium Online Casino | Win Big with $5,000 Bonus",
    description:
      "Experience the ultimate online casino at Xemeaino. Over 3,000 games, instant payouts, and exclusive bonuses up to $5,000.",
    images: ["/og-image.jpg"],
    creator: "@xemeaino",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "entertainment",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#da532c",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#ffffff",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <LoginModal />
          <SignupModal />
        </AuthProvider>
      </body>
    </html>
  )
}
