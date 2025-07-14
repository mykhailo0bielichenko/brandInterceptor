import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gift, Star, Clock, Shield, TrendingUp, Users } from "lucide-react"

export function CasinoBonusesOverview() {
  const bonusTypes = [
    {
      title: "Welcome Bonuses",
      description: "Get up to 200% match bonus + 100 free spins on your first deposit",
      icon: Gift,
      highlight: "Most Popular",
      features: ["Match up to $1,000", "100+ Free Spins", "Low Wagering Requirements"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "No Deposit Bonuses",
      description: "Play without risking your own money with our exclusive no deposit offers",
      icon: Star,
      highlight: "Risk Free",
      features: ["$20 Free Bonus", "50 Free Spins", "No Deposit Required"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Reload Bonuses",
      description: "Weekly reload bonuses to keep your bankroll topped up",
      icon: TrendingUp,
      highlight: "Weekly",
      features: ["50% Match Bonus", "Every Week", "Loyalty Rewards"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "VIP Rewards",
      description: "Exclusive bonuses and perks for our most valued players",
      icon: Users,
      highlight: "Exclusive",
      features: ["Personal Manager", "Higher Limits", "Faster Withdrawals"],
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const bonusFeatures = [
    {
      icon: Shield,
      title: "Fair Wagering Requirements",
      description: "All our bonuses come with reasonable wagering requirements, typically 25x-35x",
    },
    {
      icon: Clock,
      title: "Extended Validity",
      description: "Generous time limits to complete wagering requirements, usually 30-60 days",
    },
    {
      icon: Star,
      title: "Game Variety",
      description: "Use bonuses on hundreds of slots, table games, and live dealer games",
    },
  ]

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Exclusive Casino Bonuses & Promotions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Maximize your gaming experience with our carefully curated selection of casino bonuses. From welcome
            packages to VIP rewards, we've got something for every type of player.
          </p>
        </div>

        {/* Bonus Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {bonusTypes.map((bonus, index) => {
            const IconComponent = bonus.icon
            return (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${bonus.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge className="bg-blue-600 text-white text-xs">{bonus.highlight}</Badge>
                  </div>
                  <CardTitle className="text-white text-lg group-hover:text-blue-400 transition-colors">
                    {bonus.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{bonus.description}</p>
                  <ul className="space-y-2 mb-4">
                    {bonus.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Claim Bonus
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bonus Features */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-700/30 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Why Our Bonuses Stand Out</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonusFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bonus Terms Notice */}
        <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-yellow-400 font-semibold mb-2">Important Bonus Information</h4>
              <p className="text-gray-300 text-sm">
                All bonuses are subject to terms and conditions. Wagering requirements apply to bonus funds. Players
                must be 18+ and play responsibly. Full terms available on individual bonus pages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
