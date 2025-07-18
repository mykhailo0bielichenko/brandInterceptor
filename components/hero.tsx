import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowRight, Calendar, FileText, HelpCircle, Play, TrendingUp } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <TooltipProvider>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-digital-pattern.png')] opacity-5"></div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 text-sm px-4 py-2">
            Investor Pitch Deck
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Brand
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Interceptor
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            Revolutionizing Brand Protection Through AI-Powered Domain Monitoring & Strategic SEO Acquisition
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-gray-400">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">$127B Market Opportunity</span>

            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2 text-gray-400">
              <FileText className="h-4 w-4" />
              <span className="text-sm">Data-Driven Strategy</span>

            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">

            <Link href="/report">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                <FileText className="mr-2 h-5 w-5" />
                Justification of the Relevance of the Project
              </Button>
            </Link>

          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">~800</div>
              <div className="text-gray-300 text-sm">New Casino Brands Launch Annually</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">&lt;25%</div>
              <div className="text-gray-300 text-sm">Invest Significantly in SEO</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">400%</div>
              <div className="text-gray-300 text-sm">Potential ROI Advantage</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 text-white/50 rotate-90" />
        </div>
      </section>
    </TooltipProvider>
  )
}
