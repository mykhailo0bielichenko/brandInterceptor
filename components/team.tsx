import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Shield, AlertTriangle } from "lucide-react"

export function Team() {
  const roles = [
    {
      title: "Lead DevOps / SRE",
      fte: "0.5 FTE",
      skills: ["Cloudflare", "Terraform", "Vercel"],
      duration: "6 months (setup)",
      cost: "$7k/mo",
      responsibilities: "Domain automation, CF Tunnel setup, infrastructure scaling",
    },
    {
      title: "Senior Full-stack Architect",
      fte: "1.0 FTE",
      skills: ["Next.js 14/15", "TypeScript", "System Design"],
      duration: "6 months",
      cost: "$12k/mo",
      responsibilities: "Component library, Zod schemas, dynamic rendering system",
    },
    {
      title: "AI / Prompt Engineer",
      fte: "0.5 FTE",
      skills: ["LLM APIs", "Structured Output", "Zod"],
      duration: "6 months",
      cost: "$8k/mo",
      responsibilities: "Template & content agents, structured output optimization",
    },
    {
      title: "QA Automation",
      fte: "0.5 FTE",
      skills: ["Playwright", "Jest", "Lighthouse CI"],
      duration: "4 months",
      cost: "$5k/mo",
      responsibilities: "Component testing, performance monitoring, regression testing",
    },
    {
      title: "Link-building Manager",
      fte: "1.0 FTE",
      skills: ["Outreach", "PBN Operations", "SEO"],
      duration: "Ongoing",
      cost: "$6k/mo",
      responsibilities: "Backlink acquisition, SERP monitoring, competitor analysis",
    },
  ]

  const risks = [
    {
      risk: "Google Algorithm Updates",
      impact: "Loss of rankings",
      mitigation: "Diversify link types, run shadow sandbox tests",
    },
    {
      risk: "LLM Output Drift",
      impact: "Invalid JSON → build fail",
      mitigation: "Runtime Zod validation + fallback human QA",
    },
    {
      risk: "IP Leakage",
      impact: "PBN footprint detection",
      mitigation: "CF Tunnel + WAF; rotate registrar & nameservers",
    },
    {
      risk: "Component Schema Changes",
      impact: "Breaking changes in UI",
      mitigation: "Strict versioning, backward compatibility, automated testing",
    },
  ]

  const totalMonthlyCost = 38000

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Team & Resource Plan</h2>
          <p className="mt-4 text-lg text-gray-300">Specialized team structure for rapid development and deployment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {roles.map((role, index) => (
            <Card key={index} className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">{role.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-purple-300 border-purple-300/30">
                    {role.fte}
                  </Badge>
                  <Badge variant="outline" className="text-green-300 border-green-300/30">
                    {role.cost}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {role.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Duration</h4>
                    <p className="text-gray-300 text-sm">{role.duration}</p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Responsibilities</h4>
                    <p className="text-gray-300 text-sm">{role.responsibilities}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-r from-purple-900 to-pink-900 border-purple-500">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Budget Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monthly Team Cost</span>
                  <span className="text-white font-bold">${totalMonthlyCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Infrastructure & Tools</span>
                  <span className="text-white font-bold">$3,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Link Acquisition</span>
                  <span className="text-white font-bold">$5,000</span>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Total Monthly</span>
                    <span className="text-purple-300 font-bold text-lg">$46,000</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-900 rounded-lg border border-green-500 ">
                  <p className="text-green-300 text-sm">
                    <strong>Budget estimate:</strong> ≈ USD 46k/mo for first 6 months (salaries + tooling + links)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Risk & Mitigation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {risks.map((item, index) => (
                  <div key={index} className="border-b border-white/10 pb-3 last:border-b-0">
                    <div className="flex items-start gap-2 mb-1">
                      <AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <h4 className="text-white text-sm font-semibold">{item.risk}</h4>
                    </div>
                    <p className="text-red-300 text-xs mb-1">Impact: {item.impact}</p>
                    <p className="text-green-300 text-xs">Mitigation: {item.mitigation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-6">Resource Allocation Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Months 1-2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Core team setup, infrastructure, MVP development</p>
                <div className="mt-2">
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">High Intensity</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Months 3-4</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Custom components, testing, initial deployments</p>
                <div className="mt-2">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Development Focus</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Months 5-6</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Scaling, optimization, revenue generation</p>
                <div className="mt-2">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Revenue Phase</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
