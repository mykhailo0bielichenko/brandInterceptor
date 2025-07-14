import { Hero } from "@/components/hero"
import { ProblemIdentification } from "@/components/problem-identification"
import { ImpactAnalysis } from "@/components/impact-analysis"
import { TechnicalSolution } from "@/components/technical-solution"
import { TestingStrategy } from "@/components/testing-strategy"
import { Implementation } from "@/components/implementation"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Hero />
      <ProblemIdentification />
      <ImpactAnalysis />
      <TechnicalSolution />
      <TestingStrategy />
      <Implementation />
      <CallToAction />
    </main>
  )
}
