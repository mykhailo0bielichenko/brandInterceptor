import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Cpu, Globe, Shield, Code, Zap } from "lucide-react"

export function SolutionArchitecture() {
  const componentEnum = [
    // Core Layout Components
    {
      key: "HEADER",
      required: true,
      description: "Site header with navigation and branding",
      props: "title, subtitle, logo, navigation[]",
    },
    {
      key: "HERO",
      required: false,
      description: "Main hero section with CTA",
      props: "title, subtitle, backgroundImage, ctaText, ctaUrl",
    },
    {
      key: "FOOTER",
      required: true,
      description: "Site footer with links and legal info",
      props: "links[], copyright, legalPages[]",
    },

    // Casino-Specific Components
    {
      key: "BONUS_CARD",
      required: false,
      description: "Welcome bonus display with terms",
      props: "bonus, currency, wager, minDeposit, ctaUrl, terms[]",
    },
    {
      key: "GAME_CARD",
      required: false,
      description: "Individual game showcase",
      props: "gameName, provider, rtp, volatility, minBet, maxBet, thumbnail",
    },
    {
      key: "GAME_GRID",
      required: false,
      description: "Grid of featured games",
      props: "games[], filterOptions[], sortBy",
    },
    {
      key: "SLOT_CAROUSEL",
      required: false,
      description: "Rotating slot game showcase",
      props: "slots[], autoPlay, showControls",
    },
    {
      key: "LIVE_CASINO_SECTION",
      required: false,
      description: "Live dealer games section",
      props: "games[], providers[], streamQuality",
    },

    // Review & Comparison Components
    {
      key: "PROS_CONS",
      required: false,
      description: "Structured advantages and disadvantages",
      props: "pros[], cons[], overallRating",
    },
    {
      key: "RATING_CARD",
      required: false,
      description: "Overall casino rating display",
      props: "overallRating, categories[], methodology",
    },
    {
      key: "COMPARISON_TABLE",
      required: false,
      description: "Side-by-side casino comparison",
      props: "casinos[], features[], highlightBest",
    },
    {
      key: "EXPERT_REVIEW",
      required: false,
      description: "Detailed expert analysis",
      props: "author, rating, reviewText, expertise[]",
    },

    // Payment & Banking Components
    {
      key: "PAYMENT_METHODS",
      required: false,
      description: "Accepted payment options",
      props: "methods[], processingTimes[], fees[]",
    },
    {
      key: "WITHDRAWAL_INFO",
      required: false,
      description: "Withdrawal process and limits",
      props: "methods[], limits[], timeframes[]",
    },
    {
      key: "BANKING_TABLE",
      required: false,
      description: "Detailed banking information",
      props: "deposits[], withdrawals[], currencies[]",
    },

    // Promotional Components
    {
      key: "PROMOTIONS_GRID",
      required: false,
      description: "Current offers and promotions",
      props: "promotions[], categories[], validUntil[]",
    },
    {
      key: "VIP_PROGRAM",
      required: false,
      description: "Loyalty program details",
      props: "tiers[], benefits[], requirements[]",
    },
    {
      key: "TOURNAMENT_CARD",
      required: false,
      description: "Casino tournament information",
      props: "name, prizePool, startDate, endDate, games[]",
    },

    // Trust & Security Components
    {
      key: "LICENSE_INFO",
      required: false,
      description: "Licensing and regulation details",
      props: "licenses[], regulators[], certifications[]",
    },
    {
      key: "SECURITY_FEATURES",
      required: false,
      description: "Security measures and encryption",
      props: "sslCertificate, encryption, fairnessTests[]",
    },
    {
      key: "RESPONSIBLE_GAMING",
      required: false,
      description: "Responsible gambling tools",
      props: "tools[], limits[], supportContacts[]",
    },

    // Content Components
    {
      key: "FAQ",
      required: false,
      description: "Frequently asked questions",
      props: "categories[], items[], searchable",
    },
    {
      key: "GAME_RULES",
      required: false,
      description: "How to play guides",
      props: "game, rules[], strategies[], tips[]",
    },
    {
      key: "NEWS_SECTION",
      required: false,
      description: "Latest casino news and updates",
      props: "articles[], categories[], featured",
    },
    {
      key: "BLOG_POSTS",
      required: false,
      description: "Educational and promotional content",
      props: "posts[], tags[], author",
    },

    // Interactive Components
    {
      key: "LIVE_CHAT",
      required: false,
      description: "Customer support chat widget",
      props: "availability, languages[], departments[]",
    },
    {
      key: "CONTACT_FORM",
      required: false,
      description: "Contact and support form",
      props: "fields[], departments[], responseTime",
    },
    {
      key: "NEWSLETTER_SIGNUP",
      required: false,
      description: "Email subscription form",
      props: "incentive, frequency, categories[]",
    },

    // Mobile & App Components
    {
      key: "MOBILE_APP_PROMO",
      required: false,
      description: "Mobile app download section",
      props: "appStore, googlePlay, features[], screenshots[]",
    },
    {
      key: "MOBILE_BONUS",
      required: false,
      description: "Mobile-specific offers",
      props: "bonus, requirements[], exclusiveTo",
    },

    // Legal & Compliance Components
    {
      key: "TERMS_CONDITIONS",
      required: false,
      description: "Terms and conditions summary",
      props: "lastUpdated, keyPoints[], fullTextUrl",
    },
    {
      key: "PRIVACY_POLICY",
      required: false,
      description: "Privacy policy highlights",
      props: "dataCollection[], cookies[], rights[]",
    },
    {
      key: "AGE_VERIFICATION",
      required: false,
      description: "Age verification notice",
      props: "minimumAge, verificationMethods[], consequences[]",
    },

    // Social & Community Components
    {
      key: "SOCIAL_PROOF",
      required: false,
      description: "Player testimonials and reviews",
      props: "reviews[], ratings[], verified",
    },
    {
      key: "SOCIAL_MEDIA",
      required: false,
      description: "Social media integration",
      props: "platforms[], feeds[], shareButtons",
    },
    {
      key: "COMMUNITY_FEATURES",
      required: false,
      description: "Player community elements",
      props: "forums[], leaderboards[], achievements[]",
    },
  ]

  const pipeline = [
    {
      step: 1,
      title: "Track New Brands",
      tool: "Google Trends API, Ahrefs Keywords Explorer",
      output: "Candidate list w/ volume & growth rate",
    },
    {
      step: 2,
      title: "Assess SERP Weakness",
      tool: "Ahrefs/Majestic backlink scrape, DR<20 filter",
      output: "Low-competition shortlist",
    },
    {
      step: 3,
      title: "Auto-register Domain",
      tool: "Cloudflare Registrar / API",
      output: "brandcasino-review.com (proxied)",
    },
    {
      step: 4,
      title: "Generate Website",
      tool: "AI Template + Content Agents, Next.js Builder",
      output: "Live site deployed to Vercel in <10 min",
    },
    {
      step: 5,
      title: "Setup Link Building",
      tool: "Automated outreach, PBN scheduler, Quality monitoring",
      output: "30+ quality backlinks acquired over 2-4 weeks",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Solution Architecture</h2>
          <p className="mt-4 text-lg text-gray-300">Fully automated pipeline from discovery to deployment</p>
        </div>

        {/* Data Pipeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">3.1 Data & Discovery Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {pipeline.map((item) => (
              <Card key={item.step} className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {item.step}
                    </div>
                    <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-400 text-sm font-semibold">Tool:</p>
                    <p className="text-purple-300 text-sm">{item.tool}</p>
                    <p className="text-gray-400 text-sm font-semibold">Output:</p>
                    <p className="text-green-300 text-sm">{item.output}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Website Builder Agent Workflow */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Website Builder Agent Workflow</h3>


          {/* Detailed Process Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Phase 1-2: Discovery & Enrichment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
                    <h4 className="text-blue-300 font-semibold mb-2">🔍 Keyword Detection</h4>
                    <p className="text-gray-300 text-sm">
                      Google Trends API monitors search volume spikes. Ahrefs Keywords Explorer validates commercial
                      intent and difficulty scores.
                    </p>
                    <div className="mt-2 text-xs text-blue-200">
                      Input: Brand monitoring → Output: "ck444" (2.2M volume, 0 difficulty)
                    </div>
                  </div>

                  <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
                    <h4 className="text-purple-300 font-semibold mb-2">📊 Competition Analysis</h4>
                    <p className="text-gray-300 text-sm">
                      Ahrefs Site Explorer API analyzes top-ranking pages for backlink quality, domain rating, and
                      content gaps.
                    </p>
                    <div className="mt-2 text-xs text-purple-200">
                      Input: Target URL → Output: Weak competition confirmed (DR 4, sparse links)
                    </div>
                  </div>

                  <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/20">
                    <h4 className="text-green-300 font-semibold mb-2">📸 Visual Analysis</h4>
                    <p className="text-gray-300 text-sm">
                      Headless browser captures screenshots, extracts color palette, and analyzes design patterns for
                      style matching.
                    </p>
                    <div className="mt-2 text-xs text-green-200">
                      Input: Website URL → Output: Screenshot + design tokens
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Phase 3-4: AI Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
                    <h4 className="text-yellow-300 font-semibold mb-2">🤖 Template Generation</h4>
                    <p className="text-gray-300 text-sm">
                      LLM receives component schema + screenshot + brand context. Returns structured JSON defining page
                      layout and component selection.
                    </p>
                    <div className="mt-2 text-xs text-yellow-200">
                      Input: Schema + Context → Output: landing_templates JSON
                    </div>
                  </div>

                  <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                    <h4 className="text-red-300 font-semibold mb-2">⚙️ Dynamic Schema Creation</h4>
                    <p className="text-gray-300 text-sm">
                      TypeScript utility generates content schema based on selected components. Ensures type safety for
                      content generation.
                    </p>
                    <div className="mt-2 text-xs text-red-200">
                      Input: Template JSON → Output: Content validation schema
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-900/20 rounded-lg border border-indigo-500/20">
                    <h4 className="text-indigo-300 font-semibold mb-2">📝 Content Generation</h4>
                    <p className="text-gray-300 text-sm">
                      Second LLM call generates casino-specific content, images, and copy that matches component
                      requirements exactly.
                    </p>
                    <div className="mt-2 text-xs text-indigo-200">
                      Input: Content schema + Brand facts → Output: landing_content JSON
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Database Schema */}
          <div className="mt-8">
            <h4 className="text-xl font-bold text-white mb-6 text-center">Database Schema Design</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">landing_templates Table</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <pre className="text-green-300 text-xs overflow-x-auto">
                      {`CREATE TABLE landing_templates (
  id UUID PRIMARY KEY,
  brand VARCHAR(100) NOT NULL,
  keyword VARCHAR(200) NOT NULL,
  template_json JSONB NOT NULL,
  components TEXT[] NOT NULL,
  seo_meta JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_brand (brand),
  INDEX idx_keyword (keyword)
);

-- Example row:
{
  "id": "uuid-123",
  "brand": "ck444", 
  "keyword": "ck444 casino",
  "template_json": {
    "layout": "casino-review",
    "components": [
      {"key": "HEADER", "props": {...}},
      {"key": "BONUS_CARD", "props": {...}}
    ]
  },
  "components": ["HEADER", "BONUS_CARD", "FAQ"]
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">landing_content Table</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <pre className="text-purple-300 text-xs overflow-x-auto">
                      {`CREATE TABLE landing_content (
  id UUID PRIMARY KEY,
  template_id UUID REFERENCES landing_templates(id),
  content_json JSONB NOT NULL,
  generated_images TEXT[],
  content_hash VARCHAR(64),
  created_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_template_id (template_id)
);

-- Example row:
{
  "id": "uuid-456",
  "template_id": "uuid-123",
  "content_json": {
    "header": {
      "title": "CK444 Casino Review",
      "subtitle": "Expert Analysis & Bonuses"
    },
    "bonus": {
      "amount": 500,
      "currency": "USD",
      "terms": ["18+", "New players only"]
    }
  },
  "generated_images": ["/gen/ck444-hero.jpg"]
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Runtime Process */}
          <div className="mt-8">
            <Card className="bg-gradient-to-r from-purple-900 to-pink-900 border-purple-500">
              <CardHeader>
                <CardTitle className="text-white">⚡ Runtime Rendering Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                      1
                    </div>
                    <h4 className="text-white font-semibold mb-2">Load Data</h4>
                    <p className="text-gray-300 text-sm">
                      Server component fetches template + content JSON from database using brand/keyword lookup
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                      2
                    </div>
                    <h4 className="text-white font-semibold mb-2">Dynamic Import</h4>
                    <p className="text-gray-300 text-sm">
                      ComponentMap dynamically imports only the React components listed in template.components array
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                      3
                    </div>
                    <h4 className="text-white font-semibold mb-2">Render & Cache</h4>
                    <p className="text-gray-300 text-sm">
                      Components receive props from content JSON, render to HTML, cached with ISR for optimal
                      performance
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-900 rounded-lg border border-green-500">
                  <p className="text-green-300 text-sm">
                    <strong>Key Innovation:</strong> Two-phase generation (template → content) allows independent
                    optimization of layout vs copy, enabling rapid A/B testing and content refresh without rebuilding
                    entire sites.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Site Generator */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">3.2 Site Generator ("Secret Sauce")</h3>

          {/* Component Library */}
          <Card className="bg-white/5 border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Code className="h-5 w-5" />
                Complete Casino Component Library (Next.js 15, Strict TypeScript)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-4">
                Comprehensive component library covering all aspects of casino websites. Each component is strictly
                typed with Zod schemas.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-white p-2">Category</th>
                      <th className="text-left text-white p-2">Component</th>
                      <th className="text-left text-white p-2">Required?</th>
                      <th className="text-left text-white p-2">Props</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Core Layout */}
                    <tr className="border-b border-white/5">
                      <td colSpan={4} className="p-2 bg-purple-900/20">
                        <span className="text-purple-300 font-semibold">Core Layout Components</span>
                      </td>
                    </tr>
                    {componentEnum.slice(0, 3).map((comp) => (
                      <tr key={comp.key} className="border-b border-white/5">
                        <td className="p-2"></td>
                        <td className="p-2">
                          <code className="text-purple-300 text-xs bg-white/10 px-2 py-1 rounded">{comp.key}</code>
                        </td>
                        <td className="p-2">
                          {comp.required ? (
                            <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                              Required
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-gray-400 border-gray-500/30 text-xs">
                              Optional
                            </Badge>
                          )}
                        </td>
                        <td className="p-2 text-gray-300 text-xs">{comp.props}</td>
                      </tr>
                    ))}

                    {/* Casino-Specific */}
                    <tr className="border-b border-white/5">
                      <td colSpan={4} className="p-2 bg-green-900/20">
                        <span className="text-green-300 font-semibold">Casino-Specific Components</span>
                      </td>
                    </tr>
                    {componentEnum.slice(3, 8).map((comp) => (
                      <tr key={comp.key} className="border-b border-white/5">
                        <td className="p-2"></td>
                        <td className="p-2">
                          <code className="text-green-300 text-xs bg-white/10 px-2 py-1 rounded">{comp.key}</code>
                        </td>
                        <td className="p-2">
                          <Badge variant="outline" className="text-gray-400 border-gray-500/30 text-xs">
                            Optional
                          </Badge>
                        </td>
                        <td className="p-2 text-gray-300 text-xs">{comp.props}</td>
                      </tr>
                    ))}

                    {/* Review & Comparison */}
                    <tr className="border-b border-white/5">
                      <td colSpan={4} className="p-2 bg-blue-900/20">
                        <span className="text-blue-300 font-semibold">Review & Comparison Components</span>
                      </td>
                    </tr>
                    {componentEnum.slice(8, 12).map((comp) => (
                      <tr key={comp.key} className="border-b border-white/5">
                        <td className="p-2"></td>
                        <td className="p-2">
                          <code className="text-blue-300 text-xs bg-white/10 px-2 py-1 rounded">{comp.key}</code>
                        </td>
                        <td className="p-2">
                          <Badge variant="outline" className="text-gray-400 border-gray-500/30 text-xs">
                            Optional
                          </Badge>
                        </td>
                        <td className="p-2 text-gray-300 text-xs">{comp.props}</td>
                      </tr>
                    ))}

                    {/* Payment & Banking */}
                    <tr className="border-b border-white/5">
                      <td colSpan={4} className="p-2 bg-yellow-900/20">
                        <span className="text-yellow-300 font-semibold">Payment & Banking Components</span>
                      </td>
                    </tr>
                    {componentEnum.slice(12, 15).map((comp) => (
                      <tr key={comp.key} className="border-b border-white/5">
                        <td className="p-2"></td>
                        <td className="p-2">
                          <code className="text-yellow-300 text-xs bg-white/10 px-2 py-1 rounded">{comp.key}</code>
                        </td>
                        <td className="p-2">
                          <Badge variant="outline" className="text-gray-400 border-gray-500/30 text-xs">
                            Optional
                          </Badge>
                        </td>
                        <td className="p-2 text-gray-300 text-xs">{comp.props}</td>
                      </tr>
                    ))}

                    {/* Show remaining categories in collapsed form */}
                    <tr className="border-b border-white/5">
                      <td colSpan={4} className="p-2 bg-gray-800/20">
                        <span className="text-gray-300 text-sm">
                          + 25 additional components including: Promotional, Trust & Security, Content, Interactive,
                          Mobile, Legal, and Social components
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
                <p className="text-yellow-300 text-sm">
                  <strong>Total: 40+ Components</strong> - Complete coverage of all casino website functionality with
                  strict TypeScript typing and Zod validation
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI Agents */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Template Agent – Structured Output
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    Prompt context includes: brand facts, screenshot palette (extracted dominant colours), and the
                    component enum list.
                  </p>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-green-300 text-xs font-mono">Real AI-generated template for "ck444" brand:</p>
                    <pre className="text-purple-300 text-xs mt-2 overflow-x-auto">
                      {`{
  "page": "/review",
  "brand": "CK444",
  "layout": "casino-review",
  "seoMeta": {
    "title": "CK444 Casino Review 2025 - Bonuses, Games & Expert Analysis",
    "description": "Complete CK444 casino review with exclusive bonuses, game selection, payment methods and expert ratings. Join today for 500% welcome bonus.",
    "keywords": ["ck444", "ck444 casino", "ck444 review", "ck444 bonus"]
  },
  "components": [
    {
      "key": "HEADER",
      "props": {
        "title": "CK444 Casino Review",
        "subtitle": "Expert Analysis & Exclusive Bonuses",
        "logo": "/logos/ck444-logo.png",
        "navigation": ["Games", "Bonuses", "Banking", "Support"]
      }
    },
    {
      "key": "HERO",
      "props": {
        "title": "CK444 Casino - The Ultimate Gaming Experience",
        "subtitle": "Join thousands of players winning big at CK444",
        "backgroundImage": "/hero/ck444-hero.jpg",
        "ctaText": "Claim 500% Bonus",
        "ctaUrl": "/visit-ck444",
        "trustBadges": ["licensed", "ssl-secured", "fair-play"]
      }
    },
    {
      "key": "BONUS_CARD",
      "props": {
        "bonus": 500,
        "currency": "USD",
        "wager": 40,
        "minDeposit": 20,
        "ctaUrl": "/visit-ck444",
        "terms": ["18+ only", "New players only", "40x wagering"],
        "validUntil": "2025-02-28",
        "bonusCode": "WELCOME500"
      }
    },
    {
      "key": "GAME_GRID",
      "props": {
        "games": [
          {
            "name": "Starburst",
            "provider": "NetEnt",
            "rtp": 96.1,
            "volatility": "low",
            "thumbnail": "/games/starburst.jpg"
          },
          {
            "name": "Book of Dead",
            "provider": "Play'n GO", 
            "rtp": 94.25,
            "volatility": "high",
            "thumbnail": "/games/book-of-dead.jpg"
          }
        ],
        "filterOptions": ["provider", "rtp", "volatility"],
        "sortBy": "popularity"
      }
    },
    {
      "key": "PROS_CONS",
      "props": {
        "pros": [
          "Massive 500% welcome bonus",
          "2000+ games from top providers",
          "Fast withdrawals (24-48 hours)",
          "24/7 live chat support",
          "Mobile-optimized platform"
        ],
        "cons": [
          "High 40x wagering requirement",
          "Limited live dealer games",
          "No phone support available"
        ],
        "overallRating": 8.5
      }
    },
    {
      "key": "PAYMENT_METHODS",
      "props": {
        "methods": [
          {
            "name": "Visa",
            "type": "credit_card",
            "minDeposit": 20,
            "maxDeposit": 5000,
            "processingTime": "instant"
          },
          {
            "name": "Bitcoin",
            "type": "crypto",
            "minDeposit": 0.001,
            "maxDeposit": 10,
            "processingTime": "15 minutes"
          }
        ],
        "currencies": ["USD", "EUR", "BTC"],
        "fees": "No deposit fees"
      }
    },
    {
      "key": "FAQ",
      "props": {
        "categories": ["bonuses", "games", "payments", "account"],
        "items": [
          {
            "question": "How do I claim the 500% welcome bonus?",
            "answer": "Register a new account, make your first deposit of $20+, and the bonus will be automatically credited.",
            "category": "bonuses"
          },
          {
            "question": "What games contribute to wagering requirements?",
            "answer": "Slots contribute 100%, table games 10%, live dealer games 5%.",
            "category": "bonuses"
          }
        ],
        "searchable": true
      }
    }
  ]
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Cpu className="h-5 w-5" />
                  Content Agent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    Receives a second Zod schema auto-generated from the template (e.g. if template includes BONUS_CARD,
                    schema requires bonus, wager, etc.).
                  </p>
                  <p className="text-gray-300 text-sm">
                    Returns strictly-typed content JSON; runtime validation guarantees completeness.
                  </p>
                  <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/20">
                    <p className="text-green-300 text-sm">
                      <strong>Runtime Guarantees:</strong> .safeParse() blocks any invalid JSON → system "never breaks"
                    </p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-green-300 text-xs font-mono">Real AI-generated template for "ck444" brand:</p>
                    <pre className="text-purple-300 text-xs mt-2 overflow-x-auto">
                      {`{
  "page": "/review",
  "brand": "CK444",
  "layout": "casino-review",
  "seoMeta": {
    "title": "CK444 Casino Review 2025 - Bonuses, Games & Expert Analysis",
    "description": "Complete CK444 casino review with exclusive bonuses, game selection, payment methods and expert ratings. Join today for 500% welcome bonus.",
    "keywords": ["ck444", "ck444 casino", "ck444 review", "ck444 bonus"]
  },
  "components": [
    {
      "key": "HEADER",
      "props": {
        "title": "CK444 Casino Review",
        "subtitle": "Expert Analysis & Exclusive Bonuses",
        "logo": "/logos/ck444-logo.png",
        "navigation": ["Games", "Bonuses", "Banking", "Support"]
      }
    },
    {
      "key": "HERO",
      "props": {
        "title": "CK444 Casino - The Ultimate Gaming Experience",
        "subtitle": "Join thousands of players winning big at CK444",
        "backgroundImage": "/hero/ck444-hero.jpg",
        "ctaText": "Claim 500% Bonus",
        "ctaUrl": "/visit-ck444",
        "trustBadges": ["licensed", "ssl-secured", "fair-play"]
      }
    },
    {
      "key": "BONUS_CARD",
      "props": {
        "bonus": 500,
        "currency": "USD",
        "wager": 40,
        "minDeposit": 20,
        "ctaUrl": "/visit-ck444",
        "terms": ["18+ only", "New players only", "40x wagering"],
        "validUntil": "2025-02-28",
        "bonusCode": "WELCOME500"
      }
    },
    {
      "key": "GAME_GRID",
      "props": {
        "games": [
          {
            "name": "Starburst",
            "provider": "NetEnt",
            "rtp": 96.1,
            "volatility": "low",
            "thumbnail": "/games/starburst.jpg"
          },
          {
            "name": "Book of Dead",
            "provider": "Play'n GO", 
            "rtp": 94.25,
            "volatility": "high",
            "thumbnail": "/games/book-of-dead.jpg"
          }
        ],
        "filterOptions": ["provider", "rtp", "volatility"],
        "sortBy": "popularity"
      }
    },
    {
      "key": "PROS_CONS",
      "props": {
        "pros": [
          "Massive 500% welcome bonus",
          "2000+ games from top providers",
          "Fast withdrawals (24-48 hours)",
          "24/7 live chat support",
          "Mobile-optimized platform"
        ],
        "cons": [
          "High 40x wagering requirement",
          "Limited live dealer games",
          "No phone support available"
        ],
        "overallRating": 8.5
      }
    },
    {
      "key": "PAYMENT_METHODS",
      "props": {
        "methods": [
          {
            "name": "Visa",
            "type": "credit_card",
            "minDeposit": 20,
            "maxDeposit": 5000,
            "processingTime": "instant"
          },
          {
            "name": "Bitcoin",
            "type": "crypto",
            "minDeposit": 0.001,
            "maxDeposit": 10,
            "processingTime": "15 minutes"
          }
        ],
        "currencies": ["USD", "EUR", "BTC"],
        "fees": "No deposit fees"
      }
    },
    {
      "key": "FAQ",
      "props": {
        "categories": ["bonuses", "games", "payments", "account"],
        "items": [
          {
            "question": "How do I claim the 500% welcome bonus?",
            "answer": "Register a new account, make your first deposit of $20+, and the bonus will be automatically credited.",
            "category": "bonuses"
          },
          {
            "question": "What games contribute to wagering requirements?",
            "answer": "Slots contribute 100%, table games 10%, live dealer games 5%.",
            "category": "bonuses"
          }
        ],
        "searchable": true
      }
    }
  ]
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Assembler */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Assembler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Server Component</h4>
                  <p className="text-gray-300 text-sm">Fetches {`{template, content}`} from database</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Dynamic Import</h4>
                  <p className="text-gray-300 text-sm">
                    Uses componentMap to import only enum keys found in template.components
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">ISR Caching</h4>
                  <p className="text-gray-300 text-sm">Caches rendered HTML for optimal performance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* DevOps Automation */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">3.3 DevOps Automation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  CLI Bootstrap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  <code className="text-purple-300">deploy-site brandname</code>: creates CF DNS, issues SSL, seeds DB,
                  opens PR.
                </p>
              </CardContent>
            </Card>


            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  CI/CD Pipeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">GitHub → Vercel preview → main deploy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
