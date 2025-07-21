"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Zap, Globe, TrendingUp } from "lucide-react"
import Image from "next/image"

interface PortfolioItem {
  title: string
  description: string
  url: string
  image: string
  market: string
  technologies: string[]
  metrics: string[]
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "CyberCasino Poland",
    description:
      "AI-generated Polish casino affiliate site with advanced SEO optimization and localized content targeting 'kasyna online' keywords.",
    url: "https://v0-pl-aff-1.vercel.app/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FjKkEf6yyahTwDIGt2dmLrk8x9f0TW.png",
    market: "Polish Market",
    technologies: ["Next.js", "AI Content", "Schema Markup", "Polish SEO"],
    metrics: ["Responsive Design", "Fast Loading", "SEO Optimized"],
  },
  {
    title: "TryggeNettCasino Norway",
    description:
      "Comprehensive Norwegian casino review platform with expert team profiles and extensive database of 300+ tested casinos.",
    url: "https://tryggenettcasino.com/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hHmy9Oe6YSEbQpU3lwrNh7AFqVkuBO.png",
    market: "Norwegian Market",
    technologies: ["Expert Reviews", "Database Integration", "Norwegian SEO", "Trust Signals"],
    metrics: ["15+ Years Experience", "300+ Casinos", "100k+ Readers"],
  },
  {
    title: "Xemeaino Casino",
    description:
      "Modern casino platform with live games, progressive jackpots, and professional dealer integration showcasing advanced iGaming development.",
    url: "https://istfmsq.com/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GR93CbvgyHttsESFA9sw4bSo3OKf7h.png",
    market: "International",
    technologies: ["Live Gaming", "Progressive Jackpots", "Payment Integration", "Mobile First"],
    metrics: ["98.5% RTP", "24/7 Support", "50+ Live Tables"],
  },
]

export function AIPortfolioShowcase() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-yellow-400" />
            <Badge variant="outline" className="text-yellow-400 border-yellow-400">
              AI-Powered Development
            </Badge>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Our AI-Generated iGaming Portfolio</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Demonstrating our expertise in iGaming, web development, and SEO through AI-powered website generation. Each
            site showcases advanced technical capabilities and market-specific optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-t-lg"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-4 w-4 text-slate-900" />
                  </div>
                </a>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="h-4 w-4 text-purple-400" />
                    <Badge variant="secondary" className="text-xs">
                      {item.market}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {item.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs border-slate-600 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        Key Metrics
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {item.metrics.map((metric, metricIndex) => (
                          <Badge
                            key={metricIndex}
                            variant="outline"
                            className="text-xs border-green-600 text-green-400"
                          >
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
                  >
                    Visit Live Site
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Our AI-Generated Sites Outperform Traditional Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">10x Faster Development</h4>
                <p className="text-gray-300 text-sm">
                  AI-powered generation reduces development time from months to days
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">SEO-First Approach</h4>
                <p className="text-gray-300 text-sm">Built-in SEO optimization and market-specific keyword targeting</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Multi-Market Expertise</h4>
                <p className="text-gray-300 text-sm">Localized content and compliance for different gaming markets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
