"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowDown, Search, Code, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
            Senior SEO Position - Technical Specification
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            SSR Indexation Issue
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Specification & Solution
            </span>
          </h1>

          <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            A comprehensive technical specification for resolving GameList component indexation issues in Next.js 15 SSR
            applications, demonstrating effective communication with development teams.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Search className="w-5 h-5" />
              <span>SEO Optimization</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Code className="w-5 h-5" />
              <span>Next.js 15 SSR</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <TrendingUp className="w-5 h-5" />
              <span>Performance</span>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
            onClick={() => document.getElementById("problem-identification")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore the Solution
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
