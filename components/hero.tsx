"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Zap, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              SEO Traffic Intercept
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Platform
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Automated casino affiliate site deployment targeting competitor brand searches. Deploy 300+ sites in 12
              months with AI-powered content generation.
            </p>

            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 ml-2 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Based on iGaming Business Report 2024 and industry analysis</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">New Casino Brands/Year</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-400" />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 ml-2 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Source: SEMrush Industry Study 2024 and UKGC Annual Report</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{"<5%"}</div>
                <div className="text-gray-300">Invest in SEO Initially</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-purple-400" />
                </div>
                <div
                  className="text-3xl font-bold text-white mb-2 cursor-pointer hover:text-purple-300 transition-colors"
                  onClick={scrollToROI}
                >
                  72% Projected ROI Year 1
                </div>
                <div className="text-gray-300">Conservative Estimate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
                onClick={() => document.getElementById("investment-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Investment Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-transparent"
                onClick={() => document.getElementById("data-flow-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How It Works
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}
