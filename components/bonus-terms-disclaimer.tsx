import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Info } from "lucide-react"

export function BonusTermsDisclaimer() {
  return (
    <Card className="bg-red-900/20 border-red-700/50 mb-8">
      <CardContent className="p-6">
        <div className="flex items-start">
          <AlertTriangle className="h-6 w-6 text-red-400 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Important Bonus Terms Disclaimer</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                <strong className="text-red-400">READ CAREFULLY:</strong> All bonuses are subject to specific terms and
                conditions. Wagering requirements must be completed before any withdrawal of bonus funds or associated
                winnings.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-red-800/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <Info className="h-4 w-4 mr-2" />
                    Key Requirements
                  </h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Wagering requirements: 35x-40x (deposit + bonus)</li>
                    <li>• Maximum bet while wagering: $5 per spin/hand</li>
                    <li>• Time limit: 30 days to complete wagering</li>
                    <li>• Game restrictions apply</li>
                  </ul>
                </div>
                <div className="bg-yellow-800/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Risk Warnings</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Gambling can be addictive</li>
                    <li>• Only gamble with money you can afford to lose</li>
                    <li>• Set limits and stick to them</li>
                    <li>• Seek help if gambling becomes a problem</li>
                  </ul>
                </div>
              </div>
              <p className="text-yellow-400 font-medium mt-4">
                Failure to comply with bonus terms may result in forfeiture of bonus funds and winnings.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
