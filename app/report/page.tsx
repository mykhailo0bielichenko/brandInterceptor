"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, BarChart3, Target, DollarSign, Zap } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Head from "next/head"

export default function ReportPage() {
  const newCasinosChartRef = useRef<HTMLCanvasElement>(null)
  const regulatoryChartRef = useRef<HTMLCanvasElement>(null)
  const seoInvestmentChartRef = useRef<HTMLCanvasElement>(null)
  const roiChartRef = useRef<HTMLCanvasElement>(null)

  // Store chart instances to properly destroy them
  const chartInstancesRef = useRef<any[]>([])

  useEffect(() => {
    // Load Chart.js dynamically
    const loadCharts = async () => {
      const Chart = (await import("chart.js/auto")).default

      // Destroy existing chart instances before creating new ones
      chartInstancesRef.current.forEach((chart) => {
        if (chart) {
          chart.destroy()
        }
      })
      chartInstancesRef.current = []

      const commonChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom" as const,
            labels: {
              font: { size: 10 },
              color: "#ffffff",
            },
          },
          title: {
            display: true,
            font: { size: 14 },
            color: "#ffffff",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: { size: 10 },
              color: "#ffffff",
            },
            title: {
              display: true,
              font: { size: 12 },
              color: "#ffffff",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
          },
          x: {
            ticks: {
              font: { size: 10 },
              color: "#ffffff",
            },
            title: {
              display: true,
              font: { size: 12 },
              color: "#ffffff",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
          },
        },
      }

      // Chart for New Casinos Per Year
      if (newCasinosChartRef.current) {
        const chart1 = new Chart(newCasinosChartRef.current, {
          type: "bar",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024"],
            datasets: [
              {
                label: "Net New Casino Brands Added",
                data: [600, 650, 700, 750, 800],
                backgroundColor: "rgba(59, 130, 246, 0.5)",
                borderColor: "rgba(59, 130, 246, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            ...commonChartOptions,
            plugins: {
              ...commonChartOptions.plugins,
              legend: { display: false },
              title: {
                ...commonChartOptions.plugins.title,
                text: "Estimated New Casino Brands Per Year (Global Average)",
              },
            },
            scales: {
              ...commonChartOptions.scales,
              y: {
                ...commonChartOptions.scales.y,
                title: {
                  ...commonChartOptions.scales.y.title,
                  text: "Number of Brands",
                },
              },
            },
          },
        })
        chartInstancesRef.current.push(chart1)
      }

      // Chart for Regulatory Trends
      if (regulatoryChartRef.current) {
        const chart2 = new Chart(regulatoryChartRef.current, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024"],
            datasets: [
              {
                label: "UK (Apps Processed)",
                data: [200, 186, 160, 133, 97],
                borderColor: "rgba(239, 68, 68, 1)",
                backgroundColor: "rgba(239, 68, 68, 0.5)",
                tension: 0.1,
              },
              {
                label: "Malta (MGA)",
                data: [68, 50, 31, 24, 17],
                borderColor: "rgba(249, 115, 22, 1)",
                backgroundColor: "rgba(249, 115, 22, 0.5)",
                tension: 0.1,
              },
              {
                label: "Isle of Man (GSC)",
                data: [22, 27, 40, 75, 109],
                borderColor: "rgba(34, 197, 94, 1)",
                backgroundColor: "rgba(34, 197, 94, 0.5)",
                tension: 0.1,
              },
            ],
          },
          options: {
            ...commonChartOptions,
            plugins: {
              ...commonChartOptions.plugins,
              title: {
                ...commonChartOptions.plugins.title,
                text: "New Licenses/Applications in Mature Jurisdictions",
              },
            },
            scales: {
              ...commonChartOptions.scales,
              y: {
                ...commonChartOptions.scales.y,
                title: {
                  ...commonChartOptions.scales.y.title,
                  text: "Number of New Licenses / Apps",
                },
              },
            },
          },
        })
        chartInstancesRef.current.push(chart2)
      }

      // Chart for SEO Investment
      if (seoInvestmentChartRef.current) {
        const chart3 = new Chart(seoInvestmentChartRef.current, {
          type: "doughnut",
          data: {
            labels: ["Low / No Initial SEO Investment", "Significant Initial SEO Investment"],
            datasets: [
              {
                data: [75, 25],
                backgroundColor: ["rgba(239, 68, 68, 0.7)", "rgba(34, 197, 94, 0.7)"],
                borderColor: ["#ffffff"],
                borderWidth: 2,
              },
            ],
          },
          options: {
            ...commonChartOptions,
            plugins: {
              ...commonChartOptions.plugins,
              title: {
                ...commonChartOptions.plugins.title,
                text: "Initial SEO Investment by New Casino Brands",
              },
            },
            scales: {},
          },
        })
        chartInstancesRef.current.push(chart3)
      }

      // Chart for ROI Comparison
      if (roiChartRef.current) {
        const chart4 = new Chart(roiChartRef.current, {
          type: "line",
          data: {
            labels: ["Launch", "6m", "12m", "18m", "24m", "30m", "36m"],
            datasets: [
              {
                label: "SEO-Led Strategy (Net Profit)",
                data: [-100, -75, -25, 50, 150, 250, 400],
                borderColor: "rgba(34, 197, 94, 1)",
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                fill: true,
                tension: 0.3,
              },
              {
                label: "Paid/Affiliate-Led Strategy (Net Profit)",
                data: [10, 20, 30, 40, 50, 60, 70],
                borderColor: "rgba(239, 68, 68, 1)",
                backgroundColor: "rgba(239, 68, 68, 0.2)",
                fill: true,
                tension: 0.3,
              },
            ],
          },
          options: {
            ...commonChartOptions,
            plugins: {
              ...commonChartOptions.plugins,
              title: {
                ...commonChartOptions.plugins.title,
                text: "Conceptual ROI: SEO vs. Paid/Affiliate Strategy",
              },
            },
            scales: {
              ...commonChartOptions.scales,
              y: {
                ...commonChartOptions.scales.y,
                title: {
                  ...commonChartOptions.scales.y.title,
                  text: "Cumulative Net Profit (Units)",
                },
              },
              x: {
                ...commonChartOptions.scales.x,
                title: {
                  ...commonChartOptions.scales.x.title,
                  text: "Months Since Launch",
                },
              },
            },
          },
        })
        chartInstancesRef.current.push(chart4)
      }
    }

    loadCharts()

    // Cleanup function to destroy charts when component unmounts
    return () => {
      chartInstancesRef.current.forEach((chart) => {
        if (chart) {
          chart.destroy()
        }
      })
      chartInstancesRef.current = []
    }
  }, [])

  return (
    <>
      <Head>
        <title>Market Analysis Report - Casino SEO Investment Gap | BrandInterceptor</title>
        <meta
          name="description"
          content="Comprehensive market analysis revealing 75% of new casino brands neglect SEO, creating massive traffic interception opportunities. Data-driven insights on casino market inefficiencies."
        />
        <meta
          name="keywords"
          content="casino market analysis, SEO investment gap, casino brand analysis, gambling market research, SEO opportunity analysis, casino traffic interception"
        />
        <link rel="canonical" href="https://brandinterceptor.com/report" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Header */}
        <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Pitch
                  </Button>
                </Link>
                <div>
                  <h1 className="text-xl font-bold text-white">Market Analysis Report</h1>
                  <p className="text-sm text-gray-400">Online Casino Market: New Entrants & SEO Investment Analysis</p>
                </div>
              </div>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Executive Summary */}
          <Card className="mb-12 bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Executive Summary</CardTitle>
              <p className="text-gray-300 text-center">
                This report provides a data-driven analysis of two critical metrics in the global online casino market,
                revealing a significant market inefficiency and strategic opportunity for patient capital.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-lg border border-blue-500/20">
                  <div className="text-4xl font-bold text-blue-300 mb-2">~800</div>
                  <div className="text-lg font-semibold text-white mb-2">
                    New Online Casino Brands Appear Globally Each Year
                  </div>
                  <p className="text-gray-300 text-sm">
                    This high volume is driven by low-barrier "white label" solutions, primarily from offshore hubs,
                    masking consolidation in mature, regulated markets.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-6 rounded-lg border border-red-500/20">
                  <div className="text-4xl font-bold text-red-300 mb-2">&lt; 25%</div>
                  <div className="text-lg font-semibold text-white mb-2">
                    of New Brands Make a Significant Initial Investment in SEO
                  </div>
                  <p className="text-gray-300 text-sm">
                    The vast majority are structurally incentivized to pursue short-term, high-cost acquisition channels
                    over the long-term asset building of organic search.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Volume Analysis */}
          <Card className="mb-12 bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Market Volume Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                The estimation of ~800 new casino launches per year is derived from a hybrid methodology, blending proxy
                data from industry aggregators with official regulatory statistics. This approach reveals a market
                driven by offshore hubs while mature jurisdictions consolidate.
              </p>
              <div className="h-80 mb-6">
                <canvas ref={newCasinosChartRef}></canvas>
              </div>
              <p className="text-xs text-gray-400 text-center">
                Source: Analysis of industry aggregator databases (2020-2024).
              </p>
            </CardContent>
          </Card>

          {/* Regulatory Trends */}
          <Card className="mb-12 bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl text-white">Regulatory Data Shows Diverging Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                While global volume is high, data from key regulatory bodies shows that growth is not originating from
                mature, high-compliance markets. These jurisdictions are either stable or consolidating.
              </p>
              <div className="h-80 mb-6">
                <canvas ref={regulatoryChartRef}></canvas>
              </div>
              <p className="text-xs text-gray-400 text-center">
                Sources: UKGC, MGA, IOM GSC annual reports. Some data interpolated.
              </p>
            </CardContent>
          </Card>

          {/* SEO Investment Gap */}
          <Card className="mb-12 bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Target className="h-5 w-5" />
                The SEO Investment Gap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Our analysis indicates that more than 75% of new online casinos fail to make a significant initial
                investment in SEO. This is a systemic consequence of the dominant "white label" business model used for
                market entry.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="h-80">
                  <canvas ref={seoInvestmentChartRef}></canvas>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">The "White Label" Trap</h3>
                  <p className="text-gray-300 mb-4">
                    The "plug-and-play" white label model, while offering speed, creates a cycle that forces operators
                    away from long-term SEO and into high-cost, low-margin acquisition channels.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
                      <div className="text-blue-300 font-bold">1.</div>
                      <div>
                        <div className="text-white font-semibold">Speed</div>
                        <div className="text-gray-300 text-sm">Launch in 4-6 weeks via White Label</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
                      <div className="text-purple-300 font-bold">2.</div>
                      <div>
                        <div className="text-white font-semibold">Limits</div>
                        <div className="text-gray-300 text-sm">No Technical Control or Unique Authority</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                      <div className="text-red-300 font-bold">3.</div>
                      <div>
                        <div className="text-white font-semibold">Default</div>
                        <div className="text-gray-300 text-sm">Forced into High-Cost Affiliates & PPC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ROI Analysis */}
          <Card className="mb-12 bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                The ROI Divide: Rented Traffic vs. Owned Asset
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                The strategic choice of marketing channel has a profound impact on long-term profitability and
                enterprise value. SEO is the only channel that builds a compounding asset with appreciating value.
              </p>
              <div className="h-80 mb-6">
                <canvas ref={roiChartRef}></canvas>
              </div>
              <p className="text-xs text-gray-400 text-center">
                Conceptual model illustrating Net Profit over a 36-month period.
              </p>
            </CardContent>
          </Card>

          {/* Strategic Conclusion - Rewritten with Traffic Interception Focus */}
          <Card className="mb-12 bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/20">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Strategic Conclusion: The Traffic Interception Opportunity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-gradient-to-r from-orange-900/40 to-red-900/40 rounded-lg border border-orange-400/30">
                <div className="text-3xl font-bold text-orange-200 mb-2">75% Traffic Interception Opportunity</div>
                <p className="text-orange-100 font-semibold">
                  With 800+ new casino brands launching annually and only 25% investing in SEO, there's an unprecedented
                  opportunity to intercept organic search traffic for approximately 75% of new brand keywords.
                </p>
              </div>

              <p className="text-gray-200 mb-6">
                The interconnected findings of this report reveal more than just market inefficiency—they expose a
                massive traffic interception opportunity. When 75% of new casino brands neglect SEO, their brand-related
                keywords become available for strategic capture by competitors who understand the value of organic
                search.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-500/30 text-orange-200 border-orange-400/50 mt-1">Intercept</Badge>
                  <div>
                    <div className="text-white font-semibold">Brand Keyword Vacuum</div>
                    <div className="text-gray-200 text-sm">
                      With 600+ new brands annually making no SEO investment, their brand-related search terms remain
                      undefended, creating opportunities for strategic keyword interception and traffic capture.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-500/30 text-red-200 border-red-400/50 mt-1">Capture</Badge>
                  <div>
                    <div className="text-white font-semibold">First-Mover Advantage</div>
                    <div className="text-gray-200 text-sm">
                      Early investment in SEO for competitor brand terms and related keywords allows for traffic capture
                      before these brands realize their mistake and attempt to reclaim their organic presence.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-yellow-500/30 text-yellow-200 border-yellow-400/50 mt-1">Dominate</Badge>
                  <div>
                    <div className="text-white font-semibold">Market Share Consolidation</div>
                    <div className="text-gray-200 text-sm">
                      By systematically targeting the SEO gaps left by 75% of new entrants, a strategic operator can
                      consolidate market share and establish dominance in organic search results across the sector.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-lg border border-green-400/30">
                  <div className="text-green-200 font-semibold mb-2">Immediate Opportunity</div>
                  <p className="text-green-100 text-sm">
                    Target brand keywords of the 800+ new casinos launching this year with minimal SEO competition,
                    capturing traffic that would otherwise go to direct navigation or paid search.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-400/30">
                  <div className="text-purple-200 font-semibold mb-2">Long-term Dominance</div>
                  <p className="text-purple-100 text-sm">
                    Build an SEO moat that becomes increasingly difficult for late-adopting competitors to overcome,
                    creating sustainable competitive advantage through organic search dominance.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-lg border border-red-400/30">
                <p className="text-red-200 font-semibold">
                  The BrandInterceptor Thesis: In a market where 75% of new entrants abandon SEO, the strategic
                  opportunity isn't just to build your own organic presence—it's to systematically intercept and capture
                  the traffic they're leaving undefended. This represents the largest traffic arbitrage opportunity in
                  the online casino market's history.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Sources */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-lg text-white">Sources & References</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="text-white font-semibold mb-2">Industry Data</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• H2 Gambling Capital Annual Reports</li>
                    <li>• Statista Online Gambling Market Analysis</li>
                    <li>• EGBA (European Gaming & Betting Association)</li>
                    <li>• SBC Research & Analytics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Regulatory Sources</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• UK Gambling Commission (UKGC)</li>
                    <li>• Malta Gaming Authority (MGA)</li>
                    <li>• Isle of Man Gambling Supervision Commission</li>
                    <li>• Curaçao Gaming Control Board</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
