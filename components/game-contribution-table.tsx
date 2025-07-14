import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Percent } from "lucide-react"

const gameContributions = [
  { category: "Slots", contribution: 100, description: "All slot games", color: "bg-green-600" },
  { category: "Video Slots", contribution: 100, description: "Video slot machines", color: "bg-green-600" },
  { category: "Progressive Jackpots", contribution: 100, description: "Jackpot slot games", color: "bg-green-600" },
  { category: "Blackjack", contribution: 10, description: "All blackjack variants", color: "bg-red-600" },
  { category: "Roulette", contribution: 10, description: "European & American roulette", color: "bg-red-600" },
  { category: "Baccarat", contribution: 10, description: "All baccarat games", color: "bg-red-600" },
  { category: "Video Poker", contribution: 5, description: "All video poker variants", color: "bg-red-700" },
  { category: "Live Casino", contribution: 10, description: "Live dealer games", color: "bg-red-600" },
  { category: "Table Games", contribution: 10, description: "Other table games", color: "bg-red-600" },
  { category: "Scratch Cards", contribution: 100, description: "Instant win games", color: "bg-green-600" },
]

export function GameContributionTable() {
  return (
    <Card className="bg-gray-800 border-gray-700 mb-8">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Gamepad2 className="h-5 w-5 mr-2 text-purple-400" />
          Game Contribution to Wagering Requirements
        </CardTitle>
        <p className="text-gray-400 text-sm">
          Different games contribute different percentages toward completing your wagering requirements
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
            <h4 className="font-semibold text-white mb-2 flex items-center">
              <Percent className="h-4 w-4 mr-2" />
              How It Works
            </h4>
            <p className="text-gray-300 text-sm">
              When you wager $100 on a game with 100% contribution, it counts as $100 toward your wagering requirement.
              If you wager $100 on a game with 10% contribution, only $10 counts toward your requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gameContributions.map((game, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div>
                  <h4 className="font-semibold text-white">{game.category}</h4>
                  <p className="text-gray-400 text-sm">{game.description}</p>
                </div>
                <Badge className={`${game.color} text-white font-bold`}>{game.contribution}%</Badge>
              </div>
            ))}
          </div>

          <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30">
            <h4 className="font-semibold text-white mb-2">Important Notes</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Slots and scratch cards offer the fastest wagering completion (100% contribution)</li>
              <li>• Table games and live casino have reduced contribution rates</li>
              <li>• Some games may be completely excluded from bonus play</li>
              <li>• Contribution rates may vary by specific game - check individual game rules</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
