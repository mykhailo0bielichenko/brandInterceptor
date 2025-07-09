import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users, Clock } from "lucide-react"

export function ExpertCredentials() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Trust Xemeaino?</h2>
          <p className="text-gray-400 text-lg">Licensed, regulated, and trusted by thousands of players worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Licensed & Regulated</h3>
              <p className="text-gray-400 text-sm">Malta Gaming Authority License MGA/B2C/123/2024</p>
              <Badge className="mt-2 bg-green-600">Verified</Badge>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Industry Awards</h3>
              <p className="text-gray-400 text-sm">Best New Casino 2024, Excellence in Player Protection</p>
              <Badge className="mt-2 bg-yellow-600">Awarded</Badge>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">50,000+ Players</h3>
              <p className="text-gray-400 text-sm">Trusted by players in 40+ countries worldwide</p>
              <Badge className="mt-2 bg-blue-600">Growing</Badge>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-sm">Expert customer support available around the clock</p>
              <Badge className="mt-2 bg-purple-600">Always On</Badge>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Gaming Experts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                JD
              </div>
              <h4 className="text-lg font-semibold text-white">John Davis</h4>
              <p className="text-blue-400 text-sm">Chief Gaming Officer</p>
              <p className="text-gray-400 text-sm mt-2">
                15+ years in online gaming, former Malta Gaming Authority advisor
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                SM
              </div>
              <h4 className="text-lg font-semibold text-white">Sarah Mitchell</h4>
              <p className="text-green-400 text-sm">Head of Player Protection</p>
              <p className="text-gray-400 text-sm mt-2">
                Certified in Responsible Gaming, 10+ years player safety experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                MR
              </div>
              <h4 className="text-lg font-semibold text-white">Michael Roberts</h4>
              <p className="text-orange-400 text-sm">Security & Compliance Director</p>
              <p className="text-gray-400 text-sm mt-2">
                Cybersecurity expert, former financial services compliance officer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
