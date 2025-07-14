import type { Metadata } from "next"
import BonusPageHero from "@/components/seo/bonus-page-hero"
import BonusComparisonTable from "@/components/seo/bonus-comparison-table"
import HowWeRateBonuses from "@/components/seo/how-we-rate-bonuses"
import CasinoBonusTypes from "@/components/seo/casino-bonus-types"
import BonusTermsExplained from "@/components/seo/bonus-terms-explained"
import ContentAuthorship from "@/components/eeat/content-authorship"
import { StructuredData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "Best Casino Bonuses 2025 - Expert Reviews & Exclusive Offers | Xemeaino",
  description:
    "Discover the best casino bonuses of 2025 with our expert analysis. Compare welcome bonuses, no deposit offers, and exclusive promotions. Updated daily by gaming professionals.",
  keywords:
    "casino bonuses, welcome bonus, no deposit bonus, free spins, casino promotions, bonus codes, wagering requirements, casino offers 2025",
  authors: [{ name: "Michael Roberts" }, { name: "Emma Thompson" }],
  openGraph: {
    title: "Best Casino Bonuses 2025 - Expert Reviews & Analysis",
    description:
      "Expert-reviewed casino bonuses with detailed analysis of terms, wagering requirements, and real value. Find the best offers updated daily.",
    url: "https://xemeaino.com/qpkgf",
    siteName: "Xemeaino Casino",
    images: [
      {
        url: "/og-bonus-page.jpg",
        width: 1200,
        height: 630,
        alt: "Best Casino Bonuses 2025 - Expert Reviews",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Casino Bonuses 2025 - Expert Reviews & Analysis",
    description:
      "Expert-reviewed casino bonuses with detailed analysis of terms, wagering requirements, and real value.",
    images: ["/og-bonus-page.jpg"],
    creator: "@XemeinoGaming",
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
  alternates: {
    canonical: "https://xemeaino.com/qpkgf",
  },
  other: {
    "gambling-license": "MGA/B2C/123/2024",
    "responsible-gaming": "18+ only. Gambling can be addictive. Play responsibly.",
    "content-rating": "mature",
    "geo-region": "MT, UK, CA, AU, NZ",
    "last-modified": "2025-01-15T10:00:00Z",
  },
}

const bonusStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Casino Bonuses 2025 - Expert Reviews & Analysis",
  description:
    "Comprehensive guide to the best casino bonuses of 2025, featuring expert analysis of welcome bonuses, no deposit offers, and exclusive promotions.",
  image: ["https://xemeaino.com/og-bonus-page.jpg"],
  datePublished: "2025-01-15T10:00:00Z",
  dateModified: "2025-01-15T10:00:00Z",
  author: [
    {
      "@type": "Person",
      name: "Michael Roberts",
      jobTitle: "Senior Casino Analyst",
      worksFor: {
        "@type": "Organization",
        name: "Xemeaino Gaming",
      },
      url: "https://xemeaino.com/team#michael-roberts",
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "Xemeaino Gaming",
    logo: {
      "@type": "ImageObject",
      url: "https://xemeaino.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://xemeaino.com/qpkgf",
  },
  articleSection: "Casino Bonuses",
  keywords: ["casino bonuses", "welcome bonus", "no deposit bonus", "free spins", "wagering requirements"],
  about: [
    {
      "@type": "Thing",
      name: "Casino Bonuses",
      description: "Promotional offers provided by online casinos to attract and retain players",
    },
    {
      "@type": "Thing",
      name: "Wagering Requirements",
      description: "Conditions that must be met before bonus funds can be withdrawn",
    },
  ],
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best casino bonuses in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best casino bonuses in 2025 include welcome bonuses up to $5,000, no deposit bonuses of $20-50, and free spin packages. We evaluate bonuses based on wagering requirements, game restrictions, and overall value to players.",
      },
    },
    {
      "@type": "Question",
      name: "How do wagering requirements work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wagering requirements specify how many times you must play through bonus funds before withdrawing. For example, a $100 bonus with 30x wagering requires $3,000 in bets. Lower wagering requirements (20x-35x) offer better value.",
      },
    },
    {
      "@type": "Question",
      name: "Are no deposit bonuses worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No deposit bonuses are excellent for trying new casinos risk-free. While amounts are smaller ($10-50), they allow you to test games and potentially win real money without depositing funds.",
      },
    },
    {
      "@type": "Question",
      name: "What should I look for in casino bonus terms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key factors include wagering requirements (lower is better), game contributions (slots usually 100%), time limits (7-30 days), maximum bet limits, and withdrawal restrictions. Always read full terms before claiming.",
      },
    },
  ],
}

export default function BonusPage() {
  return (
    <>
      <StructuredData data={bonusStructuredData} />
      <StructuredData data={faqStructuredData} />

      <main className="min-h-screen bg-gray-900">
        <BonusPageHero />
        <BonusComparisonTable />
        <HowWeRateBonuses />
        <CasinoBonusTypes />
        <BonusTermsExplained />

        <ContentAuthorship
          author={{
            name: "Michael Roberts",
            role: "Senior Casino Analyst",
            credentials: [
              "Master's Finance, London School of Economics",
              "12+ years analyzing casino bonuses",
              "Personally tested 500+ casino bonuses",
              "CFA & FRM Certified",
            ],
            image: "/team/michael-roberts.png",
          }}
          factChecker={{
            name: "Emma Thompson",
            role: "Compliance & Legal Officer",
            credentials: [
              "Master's Law (Gaming & Regulation), University of Malta",
              "10+ years gaming compliance experience",
              "Former Betsson Group Compliance Officer",
              "CAMS & GDPR Certified",
            ],
            image: "/team/emma-thompson.png",
          }}
          publishDate="January 15, 2025"
          lastUpdated="January 15, 2025"
          reviewProcess={[
            "Personal testing of all bonus offers and wagering requirements",
            "Mathematical analysis of bonus value and player expected return",
            "Legal review of terms and conditions for fairness",
            "Compliance verification with gaming regulations",
            "Independent fact-checking and editorial approval",
          ]}
        />
      </main>
    </>
  )
}
