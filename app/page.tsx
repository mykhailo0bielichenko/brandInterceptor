"use client"

import { Hero } from "@/components/hero"
import { ExecutiveSummary } from "@/components/executive-summary"
import { MarketOpportunity } from "@/components/market-opportunity"
import { DataFlowSection } from "@/components/data-flow-section"
import { AIPortfolioShowcase } from "@/components/ai-portfolio-showcase"
import { RevenueProjections } from "@/components/revenue-projections"
import { InvestmentAsk} from "@/components/revenue-projections2"
import { Roadmap } from "@/components/roadmap"
import { Footer } from "@/components/footer"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>BrandInterceptor - Casino SEO Traffic Interception Platform</title>
        <meta
          name="description"
          content="Revolutionary AI-powered platform that systematically intercepts organic search traffic from 75% of new casino brands that neglect SEO. Turn market inefficiency into competitive advantage."
        />
        <meta
          name="keywords"
          content="casino SEO, brand interception, organic traffic, casino marketing, SEO automation, gambling SEO, casino affiliate, brand keyword targeting"
        />
        <link rel="canonical" href="https://brandinterceptor.com" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Hero />
        <ExecutiveSummary id="executive-summary" className="scroll-mt-24" />
        <MarketOpportunity id="market-opportunity" className="scroll-mt-24" />
        <AIPortfolioShowcase />

{/*
        <RevenueProjections id="revenue-projections" className="scroll-mt-24" />
        <SolutionArchitecture />
        <Team id="team" className="scroll-mt-24" />
*/}
        <Roadmap id="roadmap" className="scroll-mt-24" />

        <InvestmentAsk id="investment-ask" className="scroll-mt-24" />

        <DataFlowSection id="data-flow-section" className="scroll-mt-24" />
        
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Solution Architecture</h2>
              <p className="mt-4 text-lg text-gray-300">Available by request</p>
            </div>
          </div>
        </section>

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
              <p className="text-gray-300 text-sm">Establish backlog, repo, CI, CF infra (2 weeks)</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                3
              </div>
              <h4 className="text-white font-semibold mb-2">Deliver MVP Demo</h4>
              <p className="text-gray-300 text-sm">Live prototype (based on lucide-react lib components) to investors (end Week 4)</p>
            </div>
          </div>
        </div>
                  </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
