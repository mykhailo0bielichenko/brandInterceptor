import { Hero } from "@/components/hero"
import { ExecutiveSummary } from "@/components/executive-summary"
import { MarketOpportunity } from "@/components/market-opportunity"
import { DataFlowSection } from "@/components/data-flow-section"
import { SolutionArchitecture } from "@/components/solution-architecture"
import { Roadmap } from "@/components/roadmap"
import { Team } from "@/components/team"
import { InvestmentAsk } from "@/components/investment-ask"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <ExecutiveSummary id="executive-summary" className="scroll-mt-24" />
      <MarketOpportunity id="market-opportunity" className="scroll-mt-24" />
      <DataFlowSection id="data-flow-section" className="scroll-mt-24" />
      <SolutionArchitecture id="solution-architecture" className="scroll-mt-24" />
      <Roadmap id="roadmap" className="scroll-mt-24" />
      <Team id="team" className="scroll-mt-24" />
      <InvestmentAsk id="investment-ask" className="scroll-mt-24" />
      <Footer />
    </main>
  )
}
