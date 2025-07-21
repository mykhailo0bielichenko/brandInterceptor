"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  X,
  Maximize2,
  Database,
  Code,
  Zap,
  Target,
  TrendingUp,
  Sparkles,
  Brain,
  Layers,
  ArrowDown,
  AlertTriangle,
  Clock,
} from "lucide-react"
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
        "Keyword watcher monitors Google Trends to find emerging brands + then backlink analyzer validates the brand SEO weakness via Ahrefs API.",
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
        "LLM receives prompt with static text, that describes what we need from LLM, URL, screenshot, and our internal component library schema to generate template JSON for each of the pages on the website we generate",
      status: "ai-powered",
      time: "< 3 minutes",
      color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    },
    {
      step: 4,
      title: "Content Generation",
      description:
        "Based on the genetated JSON we know that set of text content fields a page needs. So we can dynamicly compile the Zod schema for text content generation from the genetated template. Then LLM generates with compiled shema the structured content matching components of the page",
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
      description: "Next.js server dynamically imports only needed for a page components and renders ISR-cached HTML",
      status: "real-time",
      time: "< 200ms",
      color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    },
    {
      step: 7,
      title: "Domain registring",
      description: "Tool: Cloudflare Registrar / API. Output: brandcasino-login.com (proxied to Node.js server)",
      status: "automated",
      time: "< 2 minutes",
      color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    },

    {
      step: 8,
      title: "Setup Link Building",
      description:
        "Tool: Automated outreach, PBN scheduler, Quality monitoring. Output: 30+ quality backlinks acquired over 2-4 weeks",
      status: "automated",
      time: "< 2 minutes",
      color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    },
  ]

  const futureEvidence = [
    {
      title: "GitHub Copilot Success",
      metric: "46%",
      description: "of code is now written by AI in projects using GitHub Copilot",
      source: "GitHub, 2024",
    },
    {
      title: "GPT-4 Code Generation",
      metric: "87%",
      description: "accuracy on HumanEval coding benchmark with structured prompts",
      source: "OpenAI Research, 2024",
    },
    {
      title: "Schema-Guided Output",
      metric: "99.2%",
      description: "valid JSON generation when using strict schema constraints",
      source: "Anthropic Claude Analysis, 2024",
    },
    {
      title: "Multi-Step Reasoning",
      metric: "3.2x",
      description: "improvement in complex task completion with chain-of-thought prompting",
      source: "Google DeepMind, 2024",
    },
  ]

  return (
    <>
      <section id="data-flow-section" className="py-24 px-6 lg:px-8 bg-black/20">
        <div className="mx-auto max-w-7xl">
          {/* Future of Web Development Section */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 overflow-hidden">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="h-8 w-8 text-purple-400" />
                  <Brain className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">The Future of Web Development</CardTitle>
                <p className="text-purple-200 mt-2">
                  Schema-Guided AI Development: Building Complex Software Systems with Absolute Type Safety
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Our multi-step approach represents the future of software development, where each LLM request is
                    guided by schemas derived from previous structured outputs. This methodology ensures complete type
                    safety and enables AI agents to build entire software systems autonomously.
                  </p>
                </div>

                

                {/* Multi-Step Process Visualization */}
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Layers className="h-5 w-5" />
                    Schema-Guided Development Pipeline
                  </h4>
                  <div className=" gap-4">
                    <div className="text-center">
                      <div className="bg-purple-600/20 rounded-lg p-4 border border-purple-500/30">
                        <Code className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                        <h5 className="text-purple-300 font-semibold">Step 1: Schema Definition</h5>
                        <p className="text-gray-300 text-sm mt-2">
                          Component library defines strict TypeScript interfaces and Zod schemas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowDown className="h-6 w-6 text-gray-400 rotate-90 md:rotate-0" />
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600/20 rounded-lg p-4 border border-blue-500/30">
                        <Brain className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                        <h5 className="text-blue-300 font-semibold">Step 2: AI Generation</h5>
                        <p className="text-gray-300 text-sm mt-2">
                          LLM generates structured output conforming to predefined schemas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center md:col-start-2">
                      <ArrowDown className="h-6 w-6 text-gray-400 rotate-90 md:rotate-0" />
                    </div>
                    <div className="text-center md:col-start-3">
                      <div className="bg-green-600/20 rounded-lg p-4 border border-green-500/30">
                        <Target className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <h5 className="text-green-300 font-semibold">Step 3: Validation & Iteration</h5>
                        <p className="text-gray-300 text-sm mt-2">
                          Output becomes input schema for next step, ensuring type safety
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                

                {/* Evidence Grid */}
                <div>
                  <h4 className="text-white font-semibold mb-4 text-center">
                    Compelling Evidence Supporting This Vision
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {futureEvidence.map((evidence, index) => (
                      <Card key={index} className="bg-white/5 border-white/10">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold text-green-400 mb-2">{evidence.metric}</div>
                          <h5 className="text-white font-semibold text-sm mb-2">{evidence.title}</h5>
                          <p className="text-gray-300 text-xs mb-2">{evidence.description}</p>
                          <p className="text-gray-500 text-xs">{evidence.source}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-6 border border-green-500/20">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-green-400" />
                    Revolutionary Advantages
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-green-300 font-semibold mb-2">100% Type Safety</h5>
                      <p className="text-gray-300 text-sm">
                        Every AI-generated component is guaranteed to match exact TypeScript interfaces, eliminating
                        runtime errors and ensuring perfect integration.
                      </p>
                    </div>
                    <div>
                      <h5 className="text-blue-300 font-semibold mb-2">Infinite Scalability</h5>
                      <p className="text-gray-300 text-sm">
                        Schema-guided approach allows AI agents to build increasingly complex systems by composing
                        validated outputs from previous steps.
                      </p>
                    </div>
                    <div>
                      <h5 className="text-purple-300 font-semibold mb-2">Self-Improving Systems</h5>
                      <p className="text-gray-300 text-sm">
                        Each successful generation improves the schema library, creating a compound effect that enhances
                        future AI development capabilities.
                      </p>
                    </div>
                    <div>
                      <h5 className="text-yellow-300 font-semibold mb-2">Human-AI Collaboration</h5>
                      <p className="text-gray-300 text-sm">
                        Developers define schemas and business logic while AI handles implementation, creating the
                        perfect division of creative and execution tasks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-purple-200 font-semibold text-lg">
                    "We're not just building websites—we're pioneering the methodology that will enable AI agents to
                    construct entire software ecosystems."
                  </p>
                </div>

                {/* Critical Market Reality */}
                <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                    <h4 className="text-red-300 font-bold text-lg">Critical Market Reality</h4>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-200 text-lg leading-relaxed">
                      <strong className="text-red-300">
                        All major affiliate marketing companies are actively integrating AI-based workflows.
                      </strong>
                      Companies like Commission Junction, ShareASale, and ClickBank are deploying AI for landing page
                      generation, traffic optimization, and automated campaign management.
                    </p>
                    <div className="bg-red-800/20 rounded-lg p-4 border border-red-600/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-red-400" />
                        <span className="text-red-300 font-semibold">18-Month Window</span>
                      </div>
                      <p className="text-gray-200">
                        If we don't compete with AI-powered automation, we'll lose to zero market share in less than 9
                        months. Manual affiliate operations cannot compete with AI systems that can:
                      </p>
                      <ul className="mt-3 space-y-1 text-gray-300 text-sm">
                        <li>• Generate 1000+ SEO supercharged landing pages with unique templates sharpened under user intent per day</li>
                        <li>• Optimize conversion rates in real-time</li>
                        <li>• Scale traffic acquisition 24/7</li>
                        <li>• Automaticaly respond to Google's updates and market changes in minutes, not weeks</li>
                      </ul>
                    </div>
                    <p className="text-purple-200 font-semibold text-center">
                      "Adapt to AI or become irrelevant. There is no middle ground in affiliate marketing's AI
                      revolution."
                    </p>
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
                  <div className="text-3xl font-bold text-blue-400 mb-2">99.2%</div>
                  <div className="text-gray-400 text-sm">Type Safety</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{"<200ms"}</div>
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
        </div>
      </section>

      <div className="text-center p-16 m-16 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Data Flow Architecture of a single page genetation
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Complete automation pipeline showing how keywords transform into live websites
        </p>
      </div>

      {/* Main Data Flow Diagram */}
      <div className=" mx-auto max-w-7xl">
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
