"use client"

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
      <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Solution Architecture</h2>
          <p className="mt-4 text-lg text-gray-300">Available by request</p>
        </div>

         </div>
    </section>
      <Roadmap id="roadmap" className="scroll-mt-24" />

            <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Team & Resource Plan</h2>
          <p className="mt-4 text-lg text-gray-300">Available by request</p>
        </div>

         </div>
    </section>

                <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Investment Ask</h2>
                    <p className="mt-4 text-lg text-gray-300">We seek USD 162k to fund the 6-month build & launch phase</p>

          <p className="mt-4 text-lg text-gray-300">Detailed economic is available by request</p>
        </div>

         </div>
    </section>

    {/*
      <SolutionArchitecture />
      <Team id="team" className="scroll-mt-24" />
      <InvestmentAsk id="investment-ask" className="scroll-mt-24" />*/}
      <Footer />
    </main>
  )
}
