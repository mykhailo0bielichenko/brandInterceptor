import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, DollarSign, Users, Target } from "lucide-react"

export function ImpactAnalysis() {
  return (
    <section className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <TrendingDown className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Business Impact Analysis</h2>
            <p className="text-xl text-gray-600">
              Understanding the financial and strategic consequences of indexation issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-red-200 bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <TrendingDown className="w-5 h-5" />
                  Traffic Loss
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Reduced organic traffic as Google cannot index game-related keywords, leading to lower rankings for
                  game-specific queries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <DollarSign className="w-5 h-5" />
                  Revenue Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Fewer clicks from search results reduce user engagement and potential ad revenue or in-game purchase
                  conversions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-yellow-600">
                  <Users className="w-5 h-5" />
                  User Discovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Games not appearing in search results limit discoverability, impacting brand visibility and user
                  acquisition.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Target className="w-5 h-5" />
                  Competition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Competitors with properly indexed content rank higher, capturing market share and user attention.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
