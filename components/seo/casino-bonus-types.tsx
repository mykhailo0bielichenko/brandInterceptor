import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Zap, RotateCcw, DollarSign, Crown, Star } from "lucide-react"

const bonusTypes = [
  {
    icon: Gift,
    title: "Welcome Bonuses & Sign-Up Offers",
    description:
      "The most valuable casino bonuses for new players, typically offering 100-300% deposit matches plus free spins.",
    details:
      "Welcome bonuses are the cornerstone of casino promotions, designed to attract new players with substantial value. The best welcome bonuses offer multiple deposit matches across your first few deposits, maximizing your initial bankroll.",
    examples: [
      "100% up to $1,000 + 100 Free Spins",
      "300% up to $3,000 Welcome Package",
      "200% Match + 200 Spins on Starburst",
    ],
    pros: ["Highest bonus amounts", "Often include free spins", "Multiple deposit matches"],
    cons: ["Higher wagering requirements", "One-time offer only", "May have game restrictions"],
    keywords: ["welcome bonus", "sign up bonus", "new player bonus", "first deposit bonus"],
    color: "from-purple-600 to-pink-600",
  },
  {
    icon: Zap,
    title: "No Deposit Bonuses & Free Chips",
    description:
      "Risk-free bonuses that require no initial deposit, perfect for testing casinos and games without financial commitment.",
    details:
      "No deposit bonuses let you play real money games without risking your own funds. These bonuses typically range from $10-$50 or 10-50 free spins, with specific wagering requirements and maximum cashout limits.",
    examples: ["$25 No Deposit Bonus", "50 Free Spins No Deposit", "$10 Free Chip + 20 Spins"],
    pros: ["No financial risk", "Test casino games", "Keep winnings (with limits)"],
    cons: ["Lower bonus amounts", "Strict cashout limits", "Higher wagering requirements"],
    keywords: ["no deposit bonus", "free chip", "no deposit free spins", "risk free bonus"],
    color: "from-green-600 to-emerald-600",
  },
  {
    icon: Star,
    title: "Free Spins Bonuses",
    description:
      "Slot-specific bonuses offering free rounds on popular games, often part of welcome packages or standalone promotions.",
    details:
      "Free spins bonuses are exclusively for slot games, giving you a set number of spins at a predetermined bet value. Winnings from free spins usually have wagering requirements before withdrawal.",
    examples: ["100 Free Spins on Book of Dead", "Daily 20 Free Spins", "Weekend 50 Spins Reload"],
    pros: ["Try new slot games", "No bet size decisions", "Often lower wagering"],
    cons: ["Slot games only", "Fixed bet amounts", "Game restrictions"],
    keywords: ["free spins", "slot bonuses", "free rounds", "spin bonuses"],
    color: "from-yellow-600 to-orange-600",
  },
  {
    icon: RotateCcw,
    title: "Reload Bonuses & Ongoing Promotions",
    description:
      "Regular bonuses for existing players, including weekly reloads, monthly bonuses, and special promotional offers.",
    details:
      "Reload bonuses keep existing players engaged with regular deposit bonuses. These typically offer 25-100% matches on subsequent deposits, often with lower wagering requirements than welcome bonuses.",
    examples: ["50% Monday Reload up to $500", "Weekend 75% Bonus", "Monthly 100% up to $1,000"],
    pros: ["Regular bonus opportunities", "Lower wagering requirements", "Loyalty rewards"],
    cons: ["Smaller than welcome bonuses", "May require bonus codes", "Limited frequency"],
    keywords: ["reload bonus", "weekly bonus", "monthly bonus", "existing player bonus"],
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: DollarSign,
    title: "Cashback Bonuses & Loss Rebates",
    description:
      "Insurance-style bonuses that return a percentage of losses, providing a safety net for unlucky gaming sessions.",
    details:
      "Cashback bonuses return 5-25% of your net losses over a specific period. These bonuses often have no wagering requirements, making them highly valuable for regular players.",
    examples: ["10% Weekly Cashback", "25% Weekend Loss Rebate", "VIP 15% Monthly Cashback"],
    pros: ["No wagering requirements", "Reduces overall losses", "Regular payments"],
    cons: ["Only on losses", "Lower percentages", "May have minimum loss requirements"],
    keywords: ["cashback bonus", "loss rebate", "insurance bonus", "money back"],
    color: "from-red-600 to-pink-600",
  },
  {
    icon: Crown,
    title: "High-Roller & VIP Bonuses",
    description:
      "Exclusive bonuses for high-stakes players, featuring larger amounts, better terms, and personalized service.",
    details:
      "VIP bonuses are tailored for high-value players, offering enhanced match percentages, higher limits, and exclusive perks like personal account managers and faster withdrawals.",
    examples: ["500% up to $10,000 High-Roller", "VIP 200% Weekly Reload", "Exclusive Tournament Access"],
    pros: ["Highest bonus amounts", "Better wagering terms", "Personal account managers"],
    cons: ["High minimum deposits", "Invitation only", "Strict qualification requirements"],
    keywords: ["high roller bonus", "VIP bonus", "exclusive bonus", "whale bonus"],
    color: "from-amber-600 to-yellow-600",
  },
]

export default function CasinoBonusTypes() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Types of Casino Bonuses Explained</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Understanding different <strong>types of casino bonuses</strong> helps you choose the best offers for your
            playing style. From <strong>no deposit bonuses</strong> to <strong>high-roller packages</strong>, each bonus
            type serves different player needs and comes with unique terms and conditions.
          </p>
        </div>

        <div className="space-y-8">
          {bonusTypes.map((bonus, index) => {
            const IconComponent = bonus.icon
            return (
              <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${bonus.color} text-white`}>
                  <CardTitle className="flex items-center text-2xl">
                    <IconComponent className="h-8 w-8 mr-3" />
                    {bonus.title}
                  </CardTitle>
                  <p className="text-white/90 text-lg">{bonus.description}</p>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">How It Works</h4>
                      <p className="text-gray-300 leading-relaxed mb-6">{bonus.details}</p>

                      <h5 className="text-lg font-semibold text-white mb-3">Common Examples:</h5>
                      <ul className="space-y-2">
                        {bonus.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-gray-300 flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column */}
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h5 className="text-lg font-semibold text-green-400 mb-3">Advantages</h5>
                          <ul className="space-y-2">
                            {bonus.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="text-gray-300 text-sm flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-lg font-semibold text-red-400 mb-3">Considerations</h5>
                          <ul className="space-y-2">
                            {bonus.cons.map((con, conIndex) => (
                              <li key={conIndex} className="text-gray-300 text-sm flex items-start">
                                <span className="text-red-400 mr-2">⚠</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">Related Keywords:</h5>
                        <div className="flex flex-wrap gap-2">
                          {bonus.keywords.map((keyword, keyIndex) => (
                            <Badge key={keyIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-700/30">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Choosing the Right Bonus Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Gift className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">New Players</h4>
              <p className="text-gray-300 text-sm">
                Start with welcome bonuses for maximum value, then explore no deposit offers to test different casinos
                risk-free.
              </p>
            </div>
            <div className="text-center">
              <RotateCcw className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Regular Players</h4>
              <p className="text-gray-300 text-sm">
                Focus on reload bonuses and cashback offers for ongoing value. Look for loyalty programs with escalating
                benefits.
              </p>
            </div>
            <div className="text-center">
              <Crown className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">High Rollers</h4>
              <p className="text-gray-300 text-sm">
                Seek VIP programs with personalized bonuses, higher limits, and dedicated account management for premium
                treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
