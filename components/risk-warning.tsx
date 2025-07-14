import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Heart, Phone, ExternalLink } from "lucide-react"

export function RiskWarning() {
  return (
    <Card className="bg-gradient-to-r from-red-900/50 to-orange-900/50 border-red-700/50 mb-8">
      <CardContent className="p-6">
        <div className="flex items-start">
          <AlertTriangle className="h-8 w-8 text-red-400 mr-4 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-400" />
              Responsible Gaming Warning
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Important Reminders</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <strong className="text-red-400">Gambling can be addictive</strong> - seek help if you lose control
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <strong className="text-red-400">Only gamble with money you can afford to lose</strong>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <strong className="text-red-400">Set limits and stick to them</strong> - never chase losses
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Gambling should be <strong>entertainment</strong>, not a way to make money
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Warning Signs</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Spending more than you planned
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Borrowing money to gamble
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Neglecting responsibilities
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Feeling anxious about gambling
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black/30 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Get Help Now - Free & Confidential
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-white font-medium">GamCare (UK)</p>
                  <p className="text-green-400 font-mono">0808 8020 133</p>
                </div>
                <div>
                  <p className="text-white font-medium">National Problem Gambling</p>
                  <p className="text-green-400 font-mono">1-800-522-4700</p>
                </div>
                <div>
                  <p className="text-white font-medium">Gambling Help Online</p>
                  <p className="text-green-400 font-mono">1800 858 858</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-red-600 hover:bg-red-700 flex-1">
                <Heart className="h-4 w-4 mr-2" />
                Set Deposit Limits
              </Button>
              <Button variant="outline" className="border-red-400 text-red-400 bg-transparent flex-1">
                <ExternalLink className="h-4 w-4 mr-2" />
                Self-Exclusion Tools
              </Button>
              <Button variant="outline" className="border-yellow-400 text-yellow-400 bg-transparent flex-1">
                <Phone className="h-4 w-4 mr-2" />
                Get Help Now
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
