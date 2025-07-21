import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "BrandInterceptor - Casino SEO Traffic Interception Platform",
    template: "%s | BrandInterceptor",
  },
  description:
    "Revolutionary AI-powered platform that systematically intercepts organic search traffic from 75% of new casino brands that neglect SEO. Turn market inefficiency into competitive advantage.",
  keywords: [
    "casino SEO",
    "brand interception",
    "organic traffic",
    "casino marketing",
    "SEO automation",
    "gambling SEO",
    "casino affiliate",
    "brand keyword targeting",
    "iGaming SEO",
    "casino traffic interception",
  ],
  authors: [{ name: "Mykhailo Bielichenko", url: "https://brandinterceptor.com" }],
  creator: "Mykhailo Bielichenko",
  publisher: "BrandInterceptor",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brandinterceptor.com",
    siteName: "BrandInterceptor",
    title: "BrandInterceptor - Casino SEO Traffic Interception Platform",
    description:
      "Revolutionary AI-powered platform that systematically intercepts organic search traffic from 75% of new casino brands that neglect SEO.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BrandInterceptor - Casino SEO Traffic Interception Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandInterceptor - Casino SEO Traffic Interception Platform",
    description:
      "Revolutionary AI-powered platform that systematically intercepts organic search traffic from 75% of new casino brands that neglect SEO.",
    images: ["/og-image.png"],
    creator: "@brandinterceptor",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://brandinterceptor.com",
  },
  other: {
    "msapplication-TileColor": "#7c3aed",
    "theme-color": "#7c3aed",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "BrandInterceptor",
              description:
                "Revolutionary AI-powered platform that systematically intercepts organic search traffic from 75% of new casino brands that neglect SEO.",
              url: "https://brandinterceptor.com",
              author: {
                "@type": "Person",
                name: "Mykhailo Bielichenko",
              },
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "162000",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
