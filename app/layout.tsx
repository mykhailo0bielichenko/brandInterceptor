import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BrandInterceptor - Casino SEO Traffic Interception Platform",
  description:
    "Revolutionary AI-powered platform that systematically intercepts organic search traffic from 75% of new casino brands that neglect SEO. Turn market inefficiency into competitive advantage.",
  keywords:
    "casino SEO, brand interception, organic traffic, casino marketing, SEO automation, gambling SEO, casino affiliate, brand keyword targeting",
  authors: [{ name: "Mykhailo Bielichenko", url: "https://www.linkedin.com/in/mykhailo-bielichenko/" }],
  creator: "Mykhailo Bielichenko",
  publisher: "BrandInterceptor",
  robots: "index, follow",
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
  alternates: {
    canonical: "https://brandinterceptor.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
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
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "162000",
                priceCurrency: "USD",
                description: "6-month build & launch phase investment",
              },
              creator: {
                "@type": "Person",
                name: "Mykhailo Bielichenko",
                url: "https://www.linkedin.com/in/mykhailo-bielichenko/",
                jobTitle: "SEO Expert & Product Manager",
                worksFor: {
                  "@type": "Organization",
                  name: "BrandInterceptor",
                },
              },
              audience: {
                "@type": "Audience",
                audienceType: "Casino operators, SEO agencies, Digital marketing professionals",
              },
              featureList: [
                "AI-powered brand keyword detection",
                "Automated SEO content generation",
                "Real-time competitor monitoring",
                "Traffic interception analytics",
                "ROI tracking and reporting",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
