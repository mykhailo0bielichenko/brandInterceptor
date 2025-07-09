import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Shield, Zap } from "lucide-react"

const topBonuses = [
  {
    casino: "Xemeaino Casino",
    bonus: "100% up to $2,500 + 500 Free Spins",
    wagering: "35x",
    minDeposit: "$20",
    code: "WELCOME500",
    rating: 5,
    features: ["Licensed MGA", "Fast Payouts", "24/7 Support"],
    highlight: "Editor's Choice",
    color: "from-purple-600 to-pink-600",
  },
  {
    casino: "Royal Slots Casino",
    bonus: "200% up to $1,000 + 200 Free Spins",
    wagering: "40x",
    minDeposit: "$25",
    code: "ROYAL200",
    rating: 4.8,
    features: ["High RTP Games", "Mobile Optimized", "VIP Program"],
    highlight: "Highest Match",
    color: "from-blue-600 to-cyan-600",
  },
  {
    casino: "Lucky Fortune Casino",
    bonus: "150% up to $1,500 + 300 Free Spins",
    wagering: "35x",
    minDeposit: "$20",
    code: "LUCKY150",
    rating: 4.7,
    features: ["Progressive Jackpots", "Live Dealers", "Crypto Accepted"],
    highlight: "Best Value",
    color: "from-green-600 to-emerald-600",
  },
  {
    casino: "Diamond Casino",
    bonus: "100% up to $2,000 + 100 Free Spins",
    wagering: "30x",
    minDeposit: "$30",
    code: "DIAMOND100",
    rating: 4.6,
    features: ["Low Wagering", "Premium Games", "Instant Withdrawals"],
    highlight: "Low Wagering",
    color: "from-yellow-600 to-orange-600",
  },
  {
    casino: "Mega Win Casino",
    bonus: "300% up to $800 + 150 Free Spins",
    wagering: "45x",
    minDeposit: "$15",
    code: "MEGA300",
    rating: 4.5,
    features: ["Huge Multiplier", "Daily Bonuses", "Tournament Access"],
    highlight: "Biggest Multiplier",
    color: "from-red-600 to-pink-600",
  },
]

export default function BonusComparisonTable() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Top Casino Bonuses Comparison 2025</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Compare the <strong>best casino bonuses</strong> side-by-side. Our expert team has tested wagering
            requirements, game restrictions, and payout speeds to rank the <strong>highest casino bonuses</strong> with
            the best value for players.
          </p>
        </div>

        <div className="space-y-6">
          {topBonuses.map((bonus, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Casino Info */}
                  <div className="lg:w-1/3 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{bonus.casino}</h3>
                      {bonus.highlight && (
                        <Badge className={`bg-gradient-to-r ${bonus.color} text-white`}>{bonus.highlight}</Badge>
                      )}
                    </div>

                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(bonus.rating) ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                        />
                      ))}
                      <span className="text-gray-300 ml-2 text-sm">{bonus.rating}/5</span>
                    </div>

                    <div className="space-y-2">
                      {bonus.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <Shield className="h-3 w-3 text-green-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bonus Details */}
                  <div className="lg:w-1/3 p-6 border-l border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-3">Bonus Offer</h4>
                    <p className="text-2xl font-bold text-yellow-400 mb-4">{bonus.bonus}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Wagering:</span>
                        <div className="text-white font-semibold">{bonus.wagering}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Min Deposit:</span>
                        <div className="text-white font-semibold">{bonus.minDeposit}</div>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-400">Bonus Code:</span>
                        <div className="text-green-400 font-mono font-semibold">{bonus.code}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="lg:w-1/3 p-6 flex flex-col justify-center">
                    <Button
                      size="lg"
                      className={`w-full bg-gradient-to-r ${bonus.color} hover:opacity-90 text-white font-bold mb-3`}
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Claim Bonus
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      Read Review
                    </Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">T&Cs apply. 18+ only.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            <strong>Responsible Gambling:</strong> All bonuses subject to terms and conditions. Please read wagering
            requirements before claiming. Gambling can be addictive.
          </p>
          <Button variant="outline" className="border-yellow-400 text-yellow-400 bg-transparent">
            <Zap className="mr-2 h-4 w-4" />
            View All Casino Bonuses
          </Button>
        </div>
      </div>
    </section>
  )
}
