"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, Calendar, Target, BarChart } from "lucide-react"
import { CalendlyScheduler } from "./calendly-scheduler"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from "recharts"

export function InvestmentAsk() {
  // Financial data with proper structure for Recharts
  const chartData = [
    { month: 1, revenue: 0, costs: 27000, cumulative: -27000 },
    { month: 2, revenue: 0, costs: 27000, cumulative: -54000 },
    { month: 3, revenue: 0, costs: 27000, cumulative: -81000 },
    { month: 4, revenue: 0, costs: 27000, cumulative: -108000 },
    { month: 5, revenue: 500, costs: 27000, cumulative: -134500 },
    { month: 6, revenue: 1500, costs: 27000, cumulative: -160000 },
    { month: 7, revenue: 4500, costs: 11000, cumulative: -166500 },
    { month: 8, revenue: 13500, costs: 11000, cumulative: -164000 },
    { month: 9, revenue: 22500, costs: 11000, cumulative: -152500 },
    { month: 10, revenue: 36000, costs: 11000, cumulative: -127500 },
    { month: 11, revenue: 54000, costs: 11000, cumulative: -84500 },
    { month: 12, revenue: 72000, costs: 11000, cumulative: -23500 },
    { month: 13, revenue: 84000, costs: 11000, cumulative: 49500 },
    { month: 14, revenue: 96000, costs: 11000, cumulative: 134500 },
    { month: 15, revenue: 108000, costs: 11000, cumulative: 231500 },
    { month: 16, revenue: 120000, costs: 11000, cumulative: 340500 },
  ]

  const chartConfig = {
    revenue: {
      label: "Monthly Revenue",
      color: "hsl(142, 76%, 36%)",
    },
    costs: {
      label: "Operating Costs",
      color: "hsl(346, 87%, 43%)",
    },
    cumulative: {
      label: "Cumulative Profit",
      color: "hsl(217, 91%, 60%)",
    },
  }

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
                    <div className="text-2xl font-bold text-white">8</div>
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
                  First Year Projections (Realistic)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-purple-900/20 rounded-lg">
                      <div className="text-lg font-bold text-white">Month 5</div>
                      <div className="text-sm text-gray-300">First Revenue</div>
                      <div className="text-purple-300 font-semibold">$500</div>
                    </div>
                    <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                      <div className="text-lg font-bold text-white">Month 8</div>
                      <div className="text-sm text-gray-300">Break-even</div>
                      <div className="text-blue-300 font-semibold">$13,500</div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/20">
                    <div className="text-xl font-bold text-white">Month 12</div>
                    <div className="text-sm text-gray-300 mb-1">Monthly Revenue</div>
                    <div className="text-green-300 font-bold text-2xl">$72,000</div>
                    <div className="text-xs text-gray-400 mt-1">Based on 300 active sites</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
                    <div className="text-lg font-bold text-white">Year 1 Total</div>
                    <div className="text-sm text-gray-300 mb-1">Revenue (8 months)</div>
                    <div className="text-yellow-300 font-bold text-xl">$204,500</div>
                    <div className="text-xs text-gray-400 mt-1">May - December revenue</div>
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
                  Revenue Growth Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
                    <h4 className="text-white font-semibold mb-3">Monthly Progression (Year 1)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Month 5 (5 sites):</span>
                        <span className="text-green-300 font-semibold">$500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Month 6 (15 sites):</span>
                        <span className="text-green-300 font-semibold">$1,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Month 7 (35 sites):</span>
                        <span className="text-green-300 font-semibold">$4,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Month 8 (65 sites):</span>
                        <span className="text-green-300 font-semibold">$13,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Month 9 (100 sites):</span>
                        <span className="text-green-300 font-semibold">$22,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Month 10 (140 sites):</span>
                        <span className="text-green-300 font-semibold">$36,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Month 11 (200 sites):</span>
                        <span className="text-green-300 font-semibold">$54,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Month 12 (300 sites):</span>
                        <span className="text-green-300 font-semibold">$72,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
                    <h4 className="text-white font-semibold mb-3">Year 2 Projections</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Target sites by Month 24:</span>
                        <span className="text-purple-300 font-semibold">500+ sites</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Monthly revenue potential:</span>
                        <span className="text-purple-300 font-semibold">$120,000+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Annual revenue (Year 2):</span>
                        <span className="text-purple-300 font-semibold">$1.44M+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Net profit (Year 2):</span>
                        <span className="text-purple-300 font-bold">$1.31M+</span>
                      </div>
                    </div>
                  </div>

                  <div
                    id="roi-calculation"
                    className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/20 scroll-mt-24"
                  >
                    <h4 className="text-white font-semibold mb-2">First Year ROI (Conservative)</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Year 1 Revenue (8 months):</span>
                        <span className="text-yellow-300 font-bold">$204,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Operating Costs (8 months):</span>
                        <span className="text-yellow-300 font-bold">$88,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Net Profit (Year 1):</span>
                        <span className="text-yellow-300 font-bold">$116,500</span>
                      </div>
                      <div className="flex justify-between border-t border-yellow-500/20 pt-2 mt-2">
                        <span className="text-white font-semibold">ROI on Investment:</span>
                        <span className="text-yellow-300 font-bold text-lg">72%</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-yellow-500/20">
                      <div className="text-xs text-gray-400">
                        <strong>Calculation:</strong> ($116,500 profit / $162K investment) × 100 = 72% ROI
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        <strong>Timeline:</strong> First revenue Month 5, break-even Month 8, full ROI Month 13
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        <strong>Year 2 ROI:</strong> Expected 800%+ as platform reaches full scale
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

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
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
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
