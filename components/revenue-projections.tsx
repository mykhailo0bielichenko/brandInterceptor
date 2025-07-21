"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp, Target, Zap, Users, Globe, Brain, Database, Rocket } from "lucide-react"

const revenueData = [
  { month: "Month 6", revenue: 15000, customers: 3, avgRevenue: 5000 },
  { month: "Month 9", revenue: 45000, customers: 9, avgRevenue: 5000 },
  { month: "Month 12", revenue: 90000, customers: 18, avgRevenue: 5000 },
  { month: "Month 18", revenue: 180000, customers: 30, avgRevenue: 6000 },
  { month: "Month 24", revenue: 300000, customers: 45, avgRevenue: 6667 },
]

const confidenceFactors = [
  {
    factor: "Market Inefficiency",
    confidence: 95,
    evidence: "75% of new casino brands neglect SEO (verified through comprehensive market analysis)",
    icon: Target,
    color: "text-green-400",
  },
  {
    factor: "Technical Capability",
    confidence: 90,
    evidence: "Proven AI portfolio with 10x faster deployment than manual methods",
    icon: Brain,
    color: "text-blue-400",
  },
  {
    factor: "Data Infrastructure",
    confidence: 88,
    evidence: "Real-time brand intelligence pipeline processing 50,000+ keywords daily",
    icon: Database,
    color: "text-purple-400",
  },
  {
    factor: "Customer Acquisition",
    confidence: 85,
    evidence: "Direct access to casino operators through established industry networks",
    icon: Users,
    color: "text-orange-400",
  },
  {
    factor: "Competitive Advantage",
    confidence: 92,
    evidence: "First-mover advantage in automated brand interception technology",
    icon: Rocket,
    color: "text-red-400",
  },
]

export function RevenueProjections({ id, className }: { id?: string; className?: string }) {
  return (
    <section id={id} className={`py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-green-300 border-green-300">
            Revenue Projections
          </Badge>
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">Revenue Growth Timeline</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conservative projections based on proven market inefficiencies and technical capabilities
          </p>
        </div>

        {/* Revenue Chart */}
        <div className="mb-16">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-400" />
                24-Month Revenue Projection
              </CardTitle>
              <CardDescription className="text-gray-300">
                Monthly recurring revenue growth based on customer acquisition model
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  revenue: {
                    label: "Monthly Revenue",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" tickFormatter={(value) => `$${value.toLocaleString()}`} />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      formatter={(value: any) => [`$${value.toLocaleString()}`, "Monthly Revenue"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="var(--color-revenue)"
                      fill="var(--color-revenue)"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-white text-center">Year 1 Revenue</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$540K</div>
              <div className="text-gray-300">18 customers × $30K ARR</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-white text-center">Year 2 Revenue</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$1.8M</div>
              <div className="text-gray-300">45 customers × $40K ARR</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white text-center">ROI Timeline</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">11x</div>
              <div className="text-gray-300">Return by Month 24</div>
            </CardContent>
          </Card>
        </div>

        {/* Confidence Analysis */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why We're Confident in These Numbers</h3>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {confidenceFactors.map((factor, index) => {
                const Icon = factor.icon
                return (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-3">
                        <Icon className={`h-6 w-6 ${factor.color}`} />
                        {factor.factor}
                        <Badge variant="outline" className={`ml-auto ${factor.color} border-current`}>
                          {factor.confidence}%
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={factor.confidence} className="mb-3" />
                      <p className="text-gray-300 text-sm">{factor.evidence}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Globe className="h-6 w-6 text-cyan-400" />
                    Market Evidence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">New casino brands monthly</span>
                      <span className="text-white font-semibold">~50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">SEO neglect rate</span>
                      <span className="text-white font-semibold">75%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Avg. traffic value/brand</span>
                      <span className="text-white font-semibold">$2M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Our capture rate needed</span>
                      <span className="text-green-400 font-semibold">1.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Zap className="h-6 w-6 text-yellow-400" />
                    Technical Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">10x faster deployment than manual SEO</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">Real-time brand detection & response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Automated content generation at scale</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300">Schema-guided development pipeline</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-white">Conservative Assumptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Our projections assume capturing just 1.5% of available traffic value from brands that neglect SEO.
                    With 75% market inefficiency and $2M+ average traffic value per brand, we need minimal market
                    penetration to achieve these numbers. Our proven AI technology and established industry connections
                    provide multiple paths to success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Customer Acquisition Model */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-center flex items-center justify-center gap-2">
              <Users className="h-6 w-6 text-blue-400" />
              Customer Acquisition Timeline
            </CardTitle>
            <CardDescription className="text-gray-300 text-center">
              Realistic customer growth based on market size and our technical capabilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                customers: {
                  label: "Active Customers",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value: any) => [value, "Active Customers"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="customers"
                    stroke="var(--color-customers)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-customers)", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
