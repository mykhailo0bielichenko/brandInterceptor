import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Download, Github, Linkedin } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Optimize Your SEO Strategy?</h2>
          <p className="text-xl mb-8 text-blue-100">
            This specification demonstrates my ability to identify, analyze, and solve complex SEO technical issues
            while effectively communicating with development teams.
          </p>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold mb-2">Technical Expertise</h3>
                  <div className="space-y-1">
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      Next.js 15
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      SSR Optimization
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      Performance
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">SEO Knowledge</h3>
                  <div className="space-y-1">
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      Technical SEO
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      Indexation
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      GSC Analysis
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Communication</h3>
                  <div className="space-y-1">
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      Dev Collaboration
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      Clear Specs
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      Testing Strategy
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              <Mail className="mr-2 w-5 h-5" />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Spec
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Github className="mr-2 w-5 h-5" />
              View Code
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Linkedin className="mr-2 w-5 h-5" />
              LinkedIn
            </Button>
          </div>

          <p className="text-sm text-blue-200 mt-8">
            This landing page itself demonstrates modern Next.js development practices, responsive design, and SEO
            optimization techniques.
          </p>
        </div>
      </div>
    </section>
  )
}
