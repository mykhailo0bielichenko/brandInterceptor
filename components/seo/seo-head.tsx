import Head from "next/head"
import { StructuredData } from "./structured-data"

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  structuredData?: {
    type: "organization" | "website" | "article" | "faq"
    data?: any
  }
}

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/og-image.jpg",
  structuredData,
}: SEOHeadProps) {
  const fullTitle = title.includes("Xemeaino") ? title : `${title} | Xemeaino Casino`

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        {canonical && <link rel="canonical" href={canonical} />}

        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Xemeaino Casino" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Xemeaino Gaming Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Gaming-specific meta */}
        <meta name="gambling-license" content="MGA/B2C/123/2024" />
        <meta name="responsible-gaming" content="18+ only. Gambling can be addictive." />
      </Head>

      {structuredData && <StructuredData type={structuredData.type} data={structuredData.data} />}
    </>
  )
}
