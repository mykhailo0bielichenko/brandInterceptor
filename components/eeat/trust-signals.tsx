import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, CheckCircle, Star } from "lucide-react"

export function TrustSignals() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Security & Certifications</h2>
          <p className="text-gray-400 text-lg">Your safety and security are our top priorities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">SSL Encryption</h3>
              <p className="text-gray-400 text-sm">256-bit SSL encryption protects all data</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">RNG Certified</h3>
              <p className="text-gray-400 text-sm">Games tested by eCOGRA for fairness</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Lock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-400 text-sm">PCI DSS compliant payment processing</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Player Reviews</h3>
              <p className="text-gray-400 text-sm">4.8/5 stars from verified players</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Certification Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-2">
                <div className="text-2xl font-bold text-gray-800">MGA</div>
              </div>
              <p className="text-gray-400 text-sm">Malta Gaming Authority</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-2">
                <div className="text-2xl font-bold text-gray-800">eCOGRA</div>
              </div>
              <p className="text-gray-400 text-sm">Fair Gaming Certified</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-2">
                <div className="text-2xl font-bold text-gray-800">SSL</div>
              </div>
              <p className="text-gray-400 text-sm">256-bit Encryption</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-2">
                <div className="text-2xl font-bold text-gray-800">PCI</div>
              </div>
              <p className="text-gray-400 text-sm">Payment Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
