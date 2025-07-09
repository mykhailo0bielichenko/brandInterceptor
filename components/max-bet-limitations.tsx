import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, AlertTriangle, Shield } from "lucide-react"

const betLimitations = [
  {
    gameType: "Slot Games",
    maxBet: "$5.00",
    description: "Maximum bet per spin while bonus is active",
    enforcement: "Automatic",
  },
  {
    gameType: "Table Games",
    maxBet: "$5.00",
    description: "Maximum bet per hand/round",
    enforcement: "Automatic",
  },
  {
    gameType: "Live Casino",
    maxBet: "$5.00",
    description: "Maximum bet per hand with live dealers",
    enforcement: "Automatic",
  },
  {
    gameType: "Video Poker",
    maxBet: "$5.00",
    description: "Maximum bet per hand",
    enforcement: "Automatic",
  },
  {
    gameType: "Progressive Jackpots",
    maxBet: "$5.00",
    description: "Maximum bet per spin on jackpot games",
    enforcement: "Automatic",
  },
]

export function MaxBetLimitations() {
  return (
    <Card className="bg-gray-800 border-gray-700 mb-8">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <DollarSign className="h-5 w-5 mr-2 text-red-400" />
          Maximum Bet Limitations
        </CardTitle>
        <p className="text-gray-400 text-sm">
          While any bonus is active, maximum bet limits apply to all games. Exceeding these limits will void your bonus
          and winnings.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/30">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white mb-2">Violation Consequences</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Placing bets above the maximum limit while a bonus is active will result in:
                </p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Immediate forfeiture of bonus funds</li>
                  <li>• Confiscation of all winnings from bonus play</li>
                  <li>• Possible account restrictions</li>
                  <li>• No exceptions or appeals will be considered</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {betLimitations.map((limitation, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div>
                  <h4 className="font-semibold text-white">{limitation.gameType}</h4>
                  <p className="text-gray-400 text-sm">{limitation.description}</p>
                </div>
                <div className="text-right">
                  <Badge className="bg-red-600 text-white font-bold text-lg">{limitation.maxBet}</Badge>
                  <p className="text-gray-400 text-xs mt-1">{limitation.enforcement}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Automatic Enforcement
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• System automatically prevents over-betting</li>
                <li>• Bet buttons disabled above $5 limit</li>
                <li>• Real-time warnings if approaching limit</li>
                <li>• No manual override available</li>
              </ul>
            </div>
            <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30">
              <h4 className="font-semibold text-white mb-2">Important Notes</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Limits apply to ALL active bonuses</li>
                <li>• Includes free spins bonus winnings</li>
                <li>• Side bets and insurance bets count toward limit</li>
                <li>• Limits remain until wagering is complete</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30">
            <h4 className="font-semibold text-white mb-2">After Wagering Completion</h4>
            <p className="text-gray-300 text-sm">
              Once you have successfully completed all wagering requirements, bet limits are automatically removed and
              you can play with your normal betting preferences. You will receive a notification when restrictions are
              lifted.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
