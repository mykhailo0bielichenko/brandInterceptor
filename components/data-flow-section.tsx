"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Maximize2, Database, Code, Zap, Target, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function DataFlowSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscKey)
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen])

  const processSteps = [
    {
      step: 1,
      title: "Discovery Phase",
      description:
        "Keyword watcher monitors Google Trends + Ahrefs API, then backlink analyzer validates competition weakness",
      status: "automated",
      time: "< 5 minutes",
      color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    },
    {
      step: 2,
      title: "Enrichment Phase",
      description: "Headless browser captures website screenshots for design analysis and color palette extraction",
      status: "automated",
      time: "< 2 minutes",
      color: "bg-green-500/20 text-green-300 border-green-500/30",
    },
    {
      step: 3,
      title: "Template Generation",
      description:
        "LLM receives prompt with static text, URL, screenshot, and component schema to generate template JSON",
      status: "ai-powered",
      time: "< 3 minutes",
      color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    },
    {
      step: 4,
      title: "Content Generation",
      description:
        "Dynamic Zod schema created from template, then LLM generates structured content matching component props",
      status: "ai-powered",
      time: "< 2 minutes",
      color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    },
    {
      step: 5,
      title: "Database Storage",
      description: "Template and content JSON stored in separate tables with proper indexing and relationships",
      status: "automated",
      time: "< 1 minute",
      color: "bg-red-500/20 text-red-300 border-red-500/30",
    },
    {
      step: 6,
      title: "Runtime Rendering",
      description: "Next.js server component dynamically imports components and renders ISR-cached HTML",
      status: "real-time",
      time: "< 500ms",
      color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    },
  ]

  return (
    <>
      <section id="data-flow-section" className="py-24 px-6 lg:px-8 bg-black/20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Data Flow Architecture</h2>
            <p className="mt-4 text-lg text-gray-300">
              Complete automation pipeline showing how keywords transform into live websites
            </p>
          </div>

          {/* Main Data Flow Diagram */}
          <div className="mb-16">
            <Card className="bg-white/5 border-white/10 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Complete Data Flow: From Discovery to a Live Page
                </CardTitle>
                <p className="text-gray-300 text-sm">Click the diagram to view full-size interactive flowchart</p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative cursor-pointer group" onClick={() => setIsModalOpen(true)}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aQkXwB1NFygxFrAITyNtO38rJ6vLAw.png"
                    alt="Complete data flow diagram showing the automated pipeline from keyword discovery to live website generation"
                    width={800}
                    height={1200}
                    className="w-full h-[800px] object-contain transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <Maximize2 className="h-6 w-6 text-white" />
                      <span className="text-white text-sm ml-2">Click to expand</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Process Breakdown */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Process Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step) => (
                <Card key={step.step} className="bg-white/5 border-white/10">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-white text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge className={step.color}>
                        {step.status === "automated" && <Zap className="w-3 h-3 mr-1" />}
                        {step.status === "ai-powered" && <Code className="w-3 h-3 mr-1" />}
                        {step.status === "real-time" && <TrendingUp className="w-3 h-3 mr-1" />}
                        {step.status.replace("-", " ")}
                      </Badge>
                      <span className="text-purple-300 text-xs font-semibold">{step.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Technical Innovations */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Technical Innovations</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Two-Phase Data Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
                      <h4 className="text-blue-300 font-semibold mb-2">landing_templates Table</h4>
                      <p className="text-gray-300 text-sm">
                        Stores component layout, SEO metadata, and structural configuration. Enables rapid template
                        reuse and A/B testing.
                      </p>
                    </div>
                    <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
                      <h4 className="text-purple-300 font-semibold mb-2">landing_content Table</h4>
                      <p className="text-gray-300 text-sm">
                        Contains generated text, images, and component-specific data. Allows content refresh without
                        template changes.
                      </p>
                    </div>
                    <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/20">
                      <p className="text-green-300 text-sm">
                        <strong>Benefit:</strong> Independent optimization of layout vs content enables rapid iteration
                        and scaling.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Dynamic Schema Generation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
                      <h4 className="text-yellow-300 font-semibold mb-2">Runtime Type Safety</h4>
                      <p className="text-gray-300 text-sm">
                        Zod schemas generated dynamically based on selected components ensure 100% type safety and
                        validation.
                      </p>
                    </div>
                    <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                      <h4 className="text-red-300 font-semibold mb-2">Structured LLM Output</h4>
                      <p className="text-gray-300 text-sm">
                        AI agents receive strict schemas ensuring valid JSON output that matches component prop
                        requirements exactly.
                      </p>
                    </div>
                    <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/20">
                      <p className="text-green-300 text-sm">
                        <strong>Result:</strong> Zero runtime errors, guaranteed component compatibility, and
                        bulletproof automation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Performance Metrics */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Performance Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">{"<10min"}</div>
                  <div className="text-gray-400 text-sm">Keyword to Live Site</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Type Safety</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{"<500ms"}</div>
                  <div className="text-gray-400 text-sm">Page Load Time</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">0</div>
                  <div className="text-gray-400 text-sm">Runtime Errors</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              onClick={() => document.getElementById("investment-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Target className="mr-2 h-5 w-5" />
              See Full Investment Details
            </Button>
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-gray-300 hover:bg-white/10"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="ml-2">Close (ESC)</span>
            </Button>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aQkXwB1NFygxFrAITyNtO38rJ6vLAw.png"
                alt="Complete data flow diagram showing the automated pipeline from keyword discovery to live website generation"
                width={800}
                height={1200}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
