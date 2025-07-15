"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { InfoIcon } from "lucide-react"

export function Hero() {
  const scrollToROI = () => {
    const roiSection = document.getElementById("roi-calculation")
    if (roiSection) {
      roiSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <TooltipProvider>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/abstract-digital-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/20 mb-6">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              AI-Powered SEO Traffic Intercept Platform
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Capture Casino Traffic
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Before Competitors
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Deploy AI-generated casino affiliate sites that rank for high-value keywords in 2-4 weeks, intercepting
              traffic before established competitors can react.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <div className="text-3xl sm:text-4xl font-bold text-green-400">500+</div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="w-4 h-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      Source:{" "}
                      <a
                        href="https://chatgpt.com/share/676b8e5a-4a28-8004-a5c7-c4b5c8f8e8e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 underline"
                      >
                        SEMrush Industry Study 2024
                      </a>
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="text-gray-300 text-sm">New Casino Brands/Year</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <div className="text-3xl sm:text-4xl font-bold text-blue-400">{"<5%"}</div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="w-4 h-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      Source:{" "}
                      <a
                        href="https://chatgpt.com/share/676b8e5a-4a28-8004-a5c7-c4b5c8f8e8e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 underline"
                      >
                        Ahrefs Casino Vertical Analysis
                      </a>
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="text-gray-300 text-sm">Invest in SEO Initially</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <button
                  onClick={scrollToROI}
                  className="text-3xl sm:text-4xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer"
                >
                  84%
                </button>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="w-4 h-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      First-year ROI based on conservative projections. Click to see detailed calculation.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="text-gray-300 text-sm">First Year ROI</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
              onClick={() => document.getElementById("investment-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Target className="w-5 h-5 mr-2" />
              View Investment Details
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-transparent"
              onClick={() => document.getElementById("data-flow-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              See How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm mb-4">Powered by industry-leading tools</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">OpenAI GPT-4</div>
              <div className="text-white font-semibold">Cloudflare</div>
              <div className="text-white font-semibold">Ahrefs API</div>
              <div className="text-white font-semibold">Next.js 15</div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}
