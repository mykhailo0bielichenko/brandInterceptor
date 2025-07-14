import Script from "next/script"

interface StructuredDataProps {
  type: "organization" | "website" | "article" | "faq"
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Xemeaino",
          description:
            "Premium online casino offering slots, table games, and live dealer experiences with exclusive bonuses and responsible gaming.",
          url: "https://xemeaino.com",
          logo: "https://xemeaino.com/logo.png",
          foundingDate: "2024",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Gaming Street",
            addressLocality: "St. Julian's",
            postalCode: "STJ 1234",
            addressCountry: "MT",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+356-2123-4567",
            contactType: "customer service",
            availableLanguage: ["English"],
            areaServed: "Worldwide",
          },
          sameAs: ["https://facebook.com/xemeaino", "https://twitter.com/xemeaino", "https://instagram.com/xemeaino"],
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Gaming License",
            recognizedBy: {
              "@type": "Organization",
              name: "Malta Gaming Authority",
            },
          },
        }

      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Xemeaino Casino",
          url: "https://xemeaino.com",
          description:
            "Experience premium online gaming with Xemeaino's exclusive collection of slots, table games, and live casino experiences.",
          publisher: {
            "@type": "Organization",
            name: "Xemeaino Limited",
          },
          potentialAction: {
            "@type": "SearchAction",
            target: "https://xemeaino.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }

      case "faq":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity:
            data?.faqs?.map((faq: any) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })) || [],
        }

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data?.title || "Casino Bonuses Guide",
          description: data?.description || "Comprehensive guide to casino bonuses and promotions",
          author: {
            "@type": "Person",
            name: data?.author?.name || "Gaming Expert Team",
            jobTitle: "Casino Gaming Specialist",
            worksFor: {
              "@type": "Organization",
              name: "Xemeaino",
            },
          },
          publisher: {
            "@type": "Organization",
            name: "Xemeaino",
            logo: {
              "@type": "ImageObject",
              url: "https://xemeaino.com/logo.png",
            },
          },
          datePublished: data?.datePublished || "2024-01-08",
          dateModified: data?.dateModified || "2024-01-08",
        }

      default:
        return {}
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  )
}
