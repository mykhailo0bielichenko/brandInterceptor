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
        
        <Footer />
      </main>
    </>
  )
}
