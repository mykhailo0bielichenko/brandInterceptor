import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Target, Zap, TrendingUp } from "lucide-react"

export function ExecutiveSummary() {
  const features = [
    {
      icon: TrendingUp,
      title: "Trend Intelligence",
      description: "Continuous monitoring of brand search demand and backlink opportunities",
    },
    {
      icon: Zap,
      title: "AI-Powered Generation",
      description: "Next.js 15 site generator driven by AI-created JSON templates",
    },
    {
      icon: Target,
      title: "One-Click Infrastructure",
      description: "Domain → Cloudflare → Vercel deployment secured behind Cloudflare Tunnel",
    },
    {
      icon: CheckCircle,
      title: "Rapid Ranking",
      description: "Rank #1-3 for target brands within weeks, driving high-intent affiliate clicks",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Executive Summary</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            A fully-automated system that discovers new casino brands with rising branded search demand, spins up
            highly-optimized review sites, and captures organic traffic before those brands invest in SEO.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
