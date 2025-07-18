import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TrendingUp, Users, Globe, DollarSign, Target, BarChart3, HelpCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image";  

export function MarketOpportunity() {
  return (
    <TooltipProvider>
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">Market Analysis</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">The $127B Global iGaming Market</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A massive, fragmented market with clear inefficiencies and strategic opportunities for patient capital
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-400" />
                  Market Size & Growth

                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">$127B</div>
                    <div className="text-gray-300">Global iGaming Market Size (2024)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400 mb-2">11.7%</div>
                    <div className="text-gray-300">Annual Growth Rate (CAGR)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-2">$204B</div>
                    <div className="text-gray-300">Projected Market Size by 2030</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-400" />
                  Market Fragmentation

                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-orange-400 mb-2">~800</div>
                    <div className="text-gray-300">New Casino Brands Launch Annually</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-400 mb-2">&lt;25%</div>
                    <div className="text-gray-300">Invest Significantly in SEO</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">85%</div>
                    <div className="text-gray-300">Use White-Label Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/5 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  SEO Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Most new entrants rely on expensive paid acquisition, creating a massive opportunity for SEO-focused
                  operators to capture high-value organic traffic.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-400" />
                  Regulatory Moats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Increasing regulation creates barriers to entry while established, compliant operators gain
                  competitive advantages and market consolidation opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-purple-400" />
                  High LTV Players
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Online casino players have exceptionally high lifetime values, making the cost of organic acquisition
                  through SEO extremely attractive compared to paid channels.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/5 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-400" />
                The Strategic Opportunity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                While the market appears saturated with 800+ new brands launching annually, the reality is different.
                Most are undifferentiated white-label operations competing in high-cost acquisition channels.
              </p>
              <p className="text-green-300 font-semibold">
The resulting surge in Google searches of the brand creates an opening for a quick‑moving SEO team to spot new keywords, build sites, and outrank the brands’ own pages.</p>
            </CardContent>
          </Card>
        </div>
      </section>
       <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-2xl font-bold text-white mb-6">Real-time Case Study: "ck444"</h1>
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

            <div className="space-y-6 pt-8">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Ahrefs Data - Keyword Overview</CardTitle>
                  <p className="text-gray-400 text-sm">Showing 0 difficulty and 2.2M search volume for "ck444"</p>
                </CardHeader>
                <CardContent>
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      window.open("https://app.ahrefs.com/keywords-explorer/google/bd/overview?keyword=ck444", "_blank")
                    }
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
          <div id="market-data-sources" className="mt-16 mx-auto max-w-7xl pb-24">
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
                        <span className="text-white font-semibold">About 800 New Casino Brands/Year</span>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Verified</Badge>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">
                        Based on H2 Gambling Capital's annual industry report tracking new operator licenses and brand
                        launches across regulated markets.
                      </p>
                      <p className="text-blue-300 text-xs">
                        Source:
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="/report" className="text-gray-400 hover:text-white transition-colors ml-1">
                              <HelpCircle className="h-4 w-4 inline" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View detailed market analysis report</p>
                          </TooltipContent>
                        </Tooltip>
                      </p>
                    </div>

                    <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">{"<25% Invest in SEO Initially"}</span>
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Research</Badge>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">
                        Our research shows that 75% of new gambling operators prioritize paid advertising over organic
                        SEO in their first 12 months.
                      </p>
                      <p className="text-purple-300 text-xs">
                        Source:
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="/report" className="text-gray-400 hover:text-white transition-colors ml-1">
                              <HelpCircle className="h-4 w-4 inline" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View detailed market analysis report</p>
                          </TooltipContent>
                        </Tooltip>
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
    </TooltipProvider>
  )
}
