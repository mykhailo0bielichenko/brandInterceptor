"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowRight, Zap, Target, TrendingUp, HelpCircle } from "lucide-react"

export function Hero() {
  const scrollToInvestment = () => {
    const element = document.getElementById("roi-calculation")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openChatGPTReport = () => {
    window.open("https://chatgpt.com/c/68758c68-1844-8008-b7fe-4017b61e5588", "_blank")
  }

  return (
    <TooltipProvider>
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <Badge variant="secondary" className="mb-8 bg-white/10 text-white border-white/20">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered SEO Traffic Intercept Platform
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Capture Casino Traffic
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Before Competitors
            </span>
          </h1>

          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            Deploy AI-generated affiliate sites that rank for competitor brand searches, intercepting traffic and
            converting visitors before they reach the original casino.
          </p>

          {/* Key Statistics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button onClick={openChatGPTReport} className="text-gray-400 hover:text-white transition-colors">
                        <HelpCircle className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>New Casino Brands/Year</p>
                      <p className="text-xs text-blue-400 cursor-pointer" onClick={openChatGPTReport}>
                        Source: Industry Analysis Report
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-gray-300 text-sm">New Casino Brands/Year</p>
                <p className="text-xs text-gray-400 mt-1">Massive opportunity for traffic intercept</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-3xl font-bold text-white">{"<5%"}</div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button onClick={openChatGPTReport} className="text-gray-400 hover:text-white transition-colors">
                        <HelpCircle className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Invest in SEO Initially</p>
                      <p className="text-xs text-blue-400 cursor-pointer" onClick={openChatGPTReport}>
                        Source: Industry Analysis Report
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-gray-300 text-sm">Invest in SEO Initially</p>
                <p className="text-xs text-gray-400 mt-1">Most brands focus on paid ads first</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <button
                    onClick={scrollToInvestment}
                    className="text-3xl font-bold text-white hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    72%
                  </button>
                  <Target className="h-5 w-5 text-green-400" />
                </div>
                <p className="text-gray-300 text-sm">Projected ROI Year 1</p>
                <p className="text-xs text-gray-400 mt-1">Conservative estimate, break-even Month 8</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById("investment-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Investment Details
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              onClick={() => document.getElementById("data-flow-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              See How It Works
              <TrendingUp className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm mb-4">Powered by proven technologies</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-white font-semibold">Next.js 15</div>
              <div className="text-white font-semibold">OpenAI GPT-4</div>
              <div className="text-white font-semibold">Cloudflare</div>
              <div className="text-white font-semibold">Vercel</div>
              <div className="text-white font-semibold">Ahrefs API</div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}
