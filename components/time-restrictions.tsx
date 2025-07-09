import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertTriangle, Calendar } from "lucide-react"

const timeRestrictions = [
  {
    bonusType: "Welcome Bonus",
    timeLimit: "30 days",
    description: "Complete wagering within 30 days of claiming",
    urgency: "medium",
  },
  {
    bonusType: "Reload Bonus",
    timeLimit: "14 days",
    description: "Complete wagering within 14 days of claiming",
    urgency: "high",
  },
  {
    bonusType: "Free Spins",
    timeLimit: "7 days",
    description: "Use free spins within 7 days, wager winnings within 30 days",
    urgency: "high",
  },
  {
    bonusType: "No Deposit Bonus",
    timeLimit: "7 days",
    description: "Complete wagering within 7 days of claiming",
    urgency: "high",
  },
  {
    bonusType: "Cashback Bonus",
    timeLimit: "30 days",
    description: "Complete wagering within 30 days of receiving",
    urgency: "medium",
  },
]

export function TimeRestrictions() {
  return (
    <Card className="bg-gray-800 border-gray-700 mb-8">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Clock className="h-5 w-5 mr-2 text-orange-400" />
          Time Restrictions & Expiration Dates
        </CardTitle>
        <p className="text-gray-400 text-sm">
          All bonuses have time limits. Failure to complete wagering requirements within the specified time will result
          in forfeiture of bonus and winnings.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/30">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white mb-2">Critical Warning</h4>
                <p className="text-gray-300 text-sm">
                  Bonuses and associated winnings will be automatically removed from your account if wagering
                  requirements are not completed within the specified time limit. This action is irreversible.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {timeRestrictions.map((restriction, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-400 mr-3" />
                  <div>
                    <h4 className="font-semibold text-white">{restriction.bonusType}</h4>
                    <p className="text-gray-400 text-sm">{restriction.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    className={`${
                      restriction.urgency === "high"
                        ? "bg-red-600"
                        : restriction.urgency === "medium"
                          ? "bg-yellow-600"
                          : "bg-green-600"
                    } text-white font-bold`}
                  >
                    {restriction.timeLimit}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
              <h4 className="font-semibold text-white mb-2">Time Tracking</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Timer starts when bonus is credited to your account</li>
                <li>• Check remaining time in your account dashboard</li>
                <li>• Email reminders sent 3 days before expiration</li>
                <li>• No extensions available once time limit is reached</li>
              </ul>
            </div>
            <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30">
              <h4 className="font-semibold text-white mb-2">Best Practices</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Start playing immediately after claiming bonus</li>
                <li>• Focus on high-contribution games (slots)</li>
                <li>• Monitor your progress regularly</li>
                <li>• Contact support if you need clarification</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
