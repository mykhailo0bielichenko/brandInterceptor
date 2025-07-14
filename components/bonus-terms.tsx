import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Clock, Shield, Info } from "lucide-react"

const terms = [
  {
    category: "Wagering Requirements",
    icon: Clock,
    color: "text-yellow-400",
    items: [
      "Welcome bonus: 35x (deposit + bonus)",
      "Reload bonuses: 25x-30x (deposit + bonus)",
      "Free spins: 40x winnings",
      "Maximum bet while wagering: $5 per spin",
    ],
  },
  {
    category: "Game Contributions",
    icon: Info,
    color: "text-blue-400",
    items: [
      "Slots: 100% contribution",
      "Table games: 10% contribution",
      "Live casino: 10% contribution",
      "Video poker: 5% contribution",
    ],
  },
  {
    category: "Time Limits",
    icon: AlertTriangle,
    color: "text-orange-400",
    items: [
      "Welcome bonus: 30 days to complete",
      "Reload bonuses: 14 days to complete",
      "Free spins: Must be used within 7 days",
      "Bonus expires if not used within time limit",
    ],
  },
  {
    category: "General Terms",
    icon: Shield,
    color: "text-green-400",
    items: [
      "One bonus per player/household",
      "Minimum deposit: $20 for most bonuses",
      "Maximum withdrawal from free spins: $100",
      "Bonuses cannot be combined unless stated",
    ],
  },
]

export function BonusTerms() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Bonus Terms & Conditions</h2>
          <p className="text-gray-400 text-lg">Important information about our bonus offers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {terms.map((term, index) => {
            const IconComponent = term.icon
            return (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <IconComponent className={`h-6 w-6 mr-3 ${term.color}`} />
                    {term.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {term.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-gradient-to-r from-red-900/50 to-orange-900/50 border-red-700/50">
          <CardContent className="p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Important Notice</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Please read all terms and conditions carefully before claiming any bonus. Failure to comply with bonus
                  terms may result in forfeiture of bonus funds and winnings. Gambling can be addictive - please play
                  responsibly.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-red-400 text-red-400">
                    18+ Only
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    Play Responsibly
                  </Badge>
                  <Badge variant="outline" className="border-blue-400 text-blue-400">
                    Terms Apply
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
