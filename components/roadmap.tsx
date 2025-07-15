import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Target, Code, Database, Zap } from "lucide-react"

export function Roadmap() {
  const milestones = [
    {
      phase: "M1 - MVP",
      timeline: "Week 4",
      status: "current",
      icon: Code,
      deliverables: [
        "Trend scanner & SERP scorer → JSON list of 10 low-comp brands nightly",
        "UI MVP using open-source component set (shadcn/ui)",
        "CLI domain bootstrap → Domain → live page in <10 min",
      ],
      kpi: "Live demo of auto-generated website indexed by Google in 4 weeks",
      goal: "Investor proof-point with functional core",
    },
    {
      phase: "M2 - Custom Components",
      timeline: "+6 weeks",
      status: "planned",
      icon: Zap,
      deliverables: [
        "Custom casino components: BonusCard, SlotGrid, RTP-Table",
        "Screenshot analysis for design matching",
        "Zod schema validation for all component props",
      ],
      kpi: "Live demo of auto-generated casino like website ranking in top 30 within 8 weeks",
      goal: "Casino-specific UI library with strict typing",
    },
    {
      phase: "M3 - Link Building Engine",
      timeline: "+8 weeks",
      status: "planned",
      icon: Target,
      deliverables: [
        "Bakery/PBN scheduler automation",
        "Quality backlink monitoring system",
        "Automated link acquisition workflows",
      ],
      kpi: "30 quality links per site",
      goal: "Automated SEO dominance system",
    },
    {
      phase: "M4 - Scale to 100 Sites",
      timeline: "+16 weeks",
      status: "planned",
      icon: Database,
      deliverables: ["Auto content refresh system", "Tag-based ISR implementation", "Multi-site management dashboard"],
      kpi: "≥50% sites ranking top-10 for brand",
      goal: "Industrial-scale deployment",
    },
    {
      phase: "M5 - Revenue Optimization",
      timeline: "+24 weeks",
      status: "planned",
      icon: CheckCircle,
      deliverables: [
        "A/B test CTAs and conversion optimization",
        "Geo-routing for targeted offers",
        "Advanced analytics and revenue tracking",
      ],
      kpi: "ROI > 300% vs cost",
      goal: "Profit maximization and sustainability",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "current":
        return <Clock className="h-4 w-4 text-yellow-400" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      default:
        return <Target className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  return (
    <section className="py-24 px-6 lg:px-8 bg-black/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Development Roadmap & KPIs</h2>
          <p className="mt-4 text-lg text-gray-300">
            Structured milestones with clear deliverables and measurable success criteria
          </p>
        </div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <Card key={index} className="bg-white/5 border-white/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-3">
                    {getStatusIcon(milestone.status)}
                    <milestone.icon className="h-5 w-5 text-purple-400" />
                    {milestone.phase}
                  </CardTitle>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(milestone.status)}>{milestone.timeline}</Badge>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-2">{milestone.goal}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {milestone.deliverables.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      Success Criteria
                    </h4>
                    <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/20">
                      <p className="text-green-300 text-sm font-semibold">{milestone.kpi}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-8 text-center">Core Performance Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-white">{"<48h"}</div>
              <div className="text-sm text-gray-400">Time-to-first-index</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-white">{"≥50%"}</div>
              <div className="text-sm text-gray-400">Top-10 share per cohort</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-white">2.2M+</div>
              <div className="text-sm text-gray-400">Organic clicks/brand</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-white">$90K+</div>
              <div className="text-sm text-gray-400">Affiliate revenue/site</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
