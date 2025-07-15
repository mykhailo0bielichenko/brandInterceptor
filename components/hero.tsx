"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Zap, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
            <TrendingUp className="h-4 w-4" />
            <span>Automated SEO Traffic Intercept Platform</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Capture Casino Brand Traffic
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Before They Do
          </span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
          Fully-automated system that discovers emerging casino brands, spins up optimized review sites in minutes, and
          captures organic traffic before brands invest in SEO.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            onClick={() => document.getElementById("investment-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Investment Deck
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-400 mb-2">New Casino Brands/Year</div>
            <div className="text-xs text-gray-500">
              Source:{" "}
              <a
                href="https://chatgpt.com/share/68758d06-23ac-8008-ae3e-1adf5095b844"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1"
              >
                Casino Industry Analysis Report
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">{"<35%"}</div>
            <div className="text-sm text-gray-400 mb-2">Invest in SEO Initially</div>
            <div className="text-xs text-gray-500">
              Source:{" "}
              <a
                href="https://chatgpt.com/share/68758d06-23ac-8008-ae3e-1adf5095b844"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1"
              >
                Casino Industry Analysis Report
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <a href="#roi-calculation" className="group">
              <div className="text-3xl font-bold text-white group-hover:text-green-400 transition-colors">583%</div>
              <div className="text-sm text-gray-400 group-hover:text-green-300 transition-colors">
                Projected ROI Year 1
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
