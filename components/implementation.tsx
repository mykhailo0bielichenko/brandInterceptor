import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react"

export function Implementation() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Implementation Timeline</h2>
            <p className="text-xl text-gray-600">Structured approach to deployment and monitoring</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Clock className="w-5 h-5" />
                  Phase 1: Development
                </CardTitle>
                <CardDescription>Days 1-3</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Update GameList component</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Implement getServerSideProps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Add API caching layer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Implement error handling</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <AlertCircle className="w-5 h-5" />
                  Phase 2: Testing
                </CardTitle>
                <CardDescription>Days 4-5</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Unit test implementation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Playwright SEO tests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Manual GSC validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Performance testing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  Phase 3: Deployment
                </CardTitle>
                <CardDescription>Days 6-7</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Staging deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Production rollout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Monitoring setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">GSC re-indexing request</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-0">
            <CardHeader>
              <CardTitle className="text-center">Post-Implementation Monitoring</CardTitle>
              <CardDescription className="text-center">Ongoing validation and performance tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Badge variant="outline" className="mb-2">
                    Weekly
                  </Badge>
                  <p className="text-sm text-gray-600">
                    Automated crawl validation using Screaming Frog or similar tools
                  </p>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="mb-2">
                    Daily
                  </Badge>
                  <p className="text-sm text-gray-600">GSC monitoring for indexation issues and performance metrics</p>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="mb-2">
                    Real-time
                  </Badge>
                  <p className="text-sm text-gray-600">Server log monitoring for SSR performance and API errors</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
