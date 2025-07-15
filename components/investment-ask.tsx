"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, Calendar, Target, BarChart } from "lucide-react"
import { CalendlyScheduler } from "./calendly-scheduler"

export function InvestmentAsk() {
  return (
    <section id="investment-section" className="py-24 px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Investment Ask</h2>
          <p className="mt-4 text-lg text-gray-300">We seek USD 162k to fund the 6-month build & launch phase</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-3">
                  <DollarSign className="h-8 w-8 text-green-400" />
                  $162,000 Investment Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">6</div>
                    <div className="text-sm text-gray-300">Month Build Phase</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Target className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">6</div>
                    <div className="text-sm text-gray-300">Month Break-even</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                    <span className="text-gray-300">Staff & Development (6 months)</span>
                    <span className="text-white font-semibold">$114,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                    <span className="text-gray-300">Infrastructure & Tools</span>
                    <span className="text-white font-semibold">$18,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                    <span className="text-gray-300">Link Acquisition</span>
                    <span className="text-white font-semibold">$30,000</span>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-lg">Total Investment</span>
                      <span className="text-green-400 font-bold text-2xl">$162,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Financial Projections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-purple-900/20 rounded-lg">
                      <div className="text-lg font-bold text-white">Month 6</div>
                      <div className="text-sm text-gray-300">First Revenue</div>
                      <div className="text-purple-300 font-semibold">$15,000</div>
                    </div>
                    <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                      <div className="text-lg font-bold text-white">Month 6</div>
                      <div className="text-sm text-gray-300">Break-even</div>
                      <div className="text-blue-300 font-semibold">$11,000</div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/20">
                    <div className="text-xl font-bold text-white">Month 12</div>
                    <div className="text-sm text-gray-300 mb-1">Target Monthly Revenue</div>
                    <div className="text-green-300 font-bold text-2xl">$180,000</div>
                    <div className="text-xs text-gray-400 mt-1">Based on 100 active sites</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Ongoing Operating Costs (Post-Launch)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                    <span className="text-gray-300">Link-building Manager</span>
                    <span className="text-white font-semibold">$3,000/mo</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                    <span className="text-gray-300">Infrastructure & Tools</span>
                    <span className="text-white font-semibold">$3,000/mo</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                    <span className="text-gray-300">Link Acquisition</span>
                    <span className="text-white font-semibold">$5,000/mo</span>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Total Monthly (Ongoing)</span>
                      <span className="text-green-400 font-bold text-lg">$11,000</span>
                    </div>
                  </div>
                  <div className="mt-2 p-2 bg-blue-900/20 rounded text-xs text-blue-300">
                    <strong>Note:</strong> Development team contracts end after 6 months
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Revenue Model & Projections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
                    <h4 className="text-white font-semibold mb-3">Conservative Assumptions</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Sites deployed per month:</span>
                        <span className="text-green-300 font-semibold">20-30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Average ranking time:</span>
                        <span className="text-green-300 font-semibold">2-4 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Click-through rate:</span>
                        <span className="text-green-300 font-semibold">3-5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Conversion rate (click → FTD):</span>
                        <span className="text-green-300 font-semibold">0.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Average commission per FTD:</span>
                        <span className="text-green-300 font-semibold">$200</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
                    <h4 className="text-white font-semibold mb-3">Per-Site Economics</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Monthly search volume:</span>
                        <span className="text-purple-300 font-semibold">100K-2M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Expected monthly clicks:</span>
                        <span className="text-purple-300 font-semibold">3K-100K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Monthly conversions:</span>
                        <span className="text-purple-300 font-semibold">15-500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Monthly revenue per site:</span>
                        <span className="text-purple-300 font-semibold">$900-1,800</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-500/20">
                    <h4 className="text-white font-semibold mb-3">Annual Revenue Calculation</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Target sites by Month 12:</span>
                        <span className="text-blue-300 font-semibold">100 sites</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Average revenue per site:</span>
                        <span className="text-blue-300 font-semibold">$1,800/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Monthly revenue (100 × $1,800):</span>
                        <span className="text-blue-300 font-semibold">$180,000</span>
                      </div>
                      <div className="flex justify-between border-t border-blue-500/20 pt-2 mt-2">
                        <span className="text-white font-semibold">Annual Revenue ($180K × 12):</span>
                        <span className="text-blue-300 font-bold text-lg">$2.16M</span>
                      </div>
                    </div>
                    <div className="mt-2 p-2 bg-blue-800/20 rounded text-xs text-blue-200">
                      <strong>Note:</strong> Using higher-end revenue estimate ($1,800) for mature sites with
                      established rankings
                    </div>
                  </div>

                  {/* Updated ROI calculation section */}
                  <div
                    id="roi-calculation"
                    className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/20 scroll-mt-24"
                  >
                    <h4 className="text-white font-semibold mb-2">ROI Timeline</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Month 12 Annual Revenue:</span>
                        <span className="text-yellow-300 font-bold">$2.16M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Annual Operating Costs:</span>
                        <span className="text-yellow-300 font-bold">$132K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Net Annual Profit:</span>
                        <span className="text-yellow-300 font-bold">$2.03M</span>
                      </div>
                      <div className="flex justify-between border-t border-yellow-500/20 pt-2 mt-2">
                        <span className="text-white font-semibold">ROI on Investment:</span>
                        <span className="text-yellow-300 font-bold text-lg">1,253%</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-yellow-500/20">
                      <div className="text-xs text-gray-400">
                        <strong>Calculation:</strong> ($2.03M profit / $162K investment) × 100 = 1,253% ROI
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        <strong>Operating costs:</strong> $11K/mo ongoing (Link-builder $3K + Infrastructure $3K + Links
                        $5K)
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        <strong>Sources:</strong> Based on Ahrefs traffic valuation, industry average conversion rates,
                        and standard affiliate commission structures
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Integrated Calendly Scheduler */}
            <CalendlyScheduler />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-white mb-8">Next Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                1
              </div>
              <h4 className="text-white font-semibold mb-2">Approve Budget & Hire Core Team</h4>
              <p className="text-gray-300 text-sm">DevOps, Architect, AI-engineer (2 weeks)</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                2
              </div>
              <h4 className="text-white font-semibold mb-2">Kick-off Sprint 0</h4>
              <p className="text-gray-300 text-sm">Establish repo, CI, CF infra (2 weeks)</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-3">
                3
              </div>
              <h4 className="text-white font-semibold mb-2">Deliver MVP Demo</h4>
              <p className="text-gray-300 text-sm">Live prototype to investors (end Week 4)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
