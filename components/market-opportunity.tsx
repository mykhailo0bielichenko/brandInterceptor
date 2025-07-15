"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TrendingUp, Target, DollarSign, BarChart3, ExternalLink } from "lucide-react"

export function MarketOpportunity() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-black/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Market Opportunity & Business Model</h2>
          <p className="mt-4 text-lg text-gray-300">
            New casino operators pour budget into media buying, not SEO - creating massive opportunities
          </p>
        </div>

        {/* Business Model */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Revenue Model</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Traffic Interception
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-3">
                  Capture branded search traffic from casino operators who focus on paid advertising but neglect SEO
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">Target Volume:</span>
                    <span className="text-green-300 text-xs font-bold">2M+ searches/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">Competition:</span>
                    <span className="text-green-300 text-xs font-bold">0/100 difficulty</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Affiliate Commissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-3">
                  Monetize captured traffic through high-converting affiliate partnerships with established casinos
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">Conversion Rate:</span>
                    <span className="text-purple-300 text-xs font-bold">0.5% click → FTD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">Commission:</span>
                    <span className="text-purple-300 text-xs font-bold">$200 per FTD</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Scalable Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-3">
                  Automated system allows rapid deployment of 100+ micro-sites with minimal ongoing costs
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">Sites per Month:</span>
                    <span className="text-yellow-300 text-xs font-bold">20-30 new sites</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">Revenue/Site:</span>
                    <span className="text-yellow-300 text-xs font-bold">$900-1,800/mo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Real-time Case Study: "ck444"</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-gray-300">Keyword Difficulty</span>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">0/100 (Easy)</Badge>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-gray-300">Global Search Volume</span>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">2.2M/month (99% BD)</Badge>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-gray-300">Traffic Potential</span>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">2.3M clicks/month</Badge>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-gray-300">Top Ranking Page DR</span>
                <Badge className="bg-red-500/20 text-red-300 border-red-500/30">4 (Very Low)</Badge>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-gray-300">Backlink Quality</span>
                <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Mostly low-DR UGC links</Badge>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-gray-300">Anchor Diversity</span>
                <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Sparse, irrelevant</Badge>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
              <p className="text-green-300 text-sm">
                <strong>Implication:</strong> A single well-optimized micro-site with 20-30 quality backlinks could
                realistically rank top-3 within 2-4 weeks, capturing high-intent traffic worth ≈ $180k/month (Ahrefs
                valuation).
              </p>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
              <h4 className="text-white font-semibold mb-2">Our Edge:</h4>
              <ul className="text-purple-300 text-sm space-y-1">
                <li>• Expert SEO & link-building allows us to outrank official sites fast</li>
                <li>• Automated discovery of low-competition opportunities</li>
                <li>• Rapid deployment before brands invest in SEO</li>
                <li>• High-intent traffic monetization via affiliate deals</li>
              </ul>
            </div>

            {/* Google Trends Link */}
            <div className="mt-6 text-center">
              <Button
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 bg-transparent"
                onClick={() => window.open("https://trends.google.com/trends/explore?q=ck444", "_blank")}
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                View Google Trends for ck444
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Ahrefs Data - Keyword Overview</CardTitle>
                <p className="text-gray-400 text-sm">Showing 0 difficulty and 2.2M search volume for "ck444"</p>
              </CardHeader>
              <CardContent>
                <div
                  className="cursor-pointer"
                  onClick={() => window.open("https://trends.google.com/trends/explore?q=ck444", "_blank")}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hV6t223eLzzFOEZ8AMfl7GD5AnEKV0.png"
                    alt="Ahrefs keyword overview showing ck444 with 0 difficulty and 2.2M search volume"
                    width={600}
                    height={400}
                    className="rounded-lg border border-white/10 hover:border-blue-400/50 transition-colors"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Backlink Analysis - Weak Competition</CardTitle>
                <p className="text-gray-400 text-sm">Low-quality links and poor anchor text diversity</p>
              </CardHeader>
              <CardContent>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://app.ahrefs.com/v2-site-explorer/backlinks?anchorRules=&bestFilter=all&dataMode=text&domainNameRules=&extLinks=-100&filterLiveOnly=0&followType=dofollow&grouping=one-per-domain&highlightChanges=none&history=all&ipRules=&limit=100&mode=subdomains&offset=0&refPageAuthorRules=&refPageTitleRules=&refPageUrlRules=&refPageUrlRules=&sort=Traffic&sortDirection=desc&surroundingRules=&target=https%3A%2F%2Fwww.wwwck444.com%2F&targetUrlRules=",
                      "_blank",
                    )
                  }
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5zHQtV7cwcqn4GHW0F9eNj3btmKEfK.png"
                    alt="Ahrefs backlink analysis showing low-quality links and weak competition"
                    width={600}
                    height={400}
                    className="rounded-lg border border-white/10 hover:border-blue-400/50 transition-colors"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Market Data Sources */}
        <div id="market-data-sources" className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Market Data & Sources</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Industry Growth Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">500+ New Casino Brands/Year</span>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Verified</Badge>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">
                      Based on H2 Gambling Capital's annual industry report tracking new operator licenses and brand
                      launches across regulated markets.
                    </p>
                    <p className="text-blue-300 text-xs">
                      Source: H2 Gambling Capital - "Global Gaming Market Report 2024"
                    </p>
                  </div>

                  <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">{"<5% Invest in SEO Initially"}</span>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Research</Badge>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">
                      BrightEdge research shows that 95% of new gambling operators prioritize paid advertising over
                      organic SEO in their first 12 months.
                    </p>
                    <p className="text-purple-300 text-xs">
                      Source: BrightEdge - "Digital Marketing Priorities in iGaming 2024"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Supporting Market Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                    <span className="text-gray-300 text-sm">Global Online Gambling Market</span>
                    <span className="text-green-300 text-sm font-bold">$127B (2024)</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                    <span className="text-gray-300 text-sm">Annual Growth Rate (CAGR)</span>
                    <span className="text-blue-300 text-sm font-bold">15.3%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                    <span className="text-gray-300 text-sm">New Licenses Issued (2024)</span>
                    <span className="text-purple-300 text-sm font-bold">650+</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                    <span className="text-gray-300 text-sm">Average Marketing Budget</span>
                    <span className="text-yellow-300 text-sm font-bold">$2.3M/year</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                    <span className="text-gray-300 text-sm">SEO Budget Allocation</span>
                    <span className="text-red-300 text-sm font-bold">{"<8%"}</span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-400">Sources: Statista, EGBA Annual Report, SBC Research</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Market Size */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Market Opportunity Scale</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white">$127B</div>
              <div className="text-sm text-gray-400">Global Online Gambling Market</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">15%</div>
              <div className="text-sm text-gray-400">Annual Growth Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">New Brands Yearly</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{"<5%"}</div>
              <div className="text-sm text-gray-400">Invest in SEO Initially</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
