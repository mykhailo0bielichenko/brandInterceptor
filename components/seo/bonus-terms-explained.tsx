import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, AlertTriangle, Clock, Gamepad2, DollarSign, Info } from "lucide-react"

const keyTerms = [
  {
    icon: Calculator,
    term: "Wagering Requirements",
    definition: "The number of times you must play through a bonus before withdrawing winnings.",
    explanation:
      "If you receive a $100 bonus with 35x wagering, you must wager $3,500 total ($100 × 35) before cashing out. Lower wagering requirements (25x-35x) are more player-friendly than high requirements (50x+).",
    examples: [
      "35x wagering on $100 bonus = $3,500 total wagering",
      "25x wagering = more favorable terms",
      "50x+ wagering = avoid these offers",
    ],
    tips: ["Look for 35x or lower", "Check if deposit counts toward wagering", "Understand game contribution rates"],
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: DollarSign,
    term: "Maximum Cash-Out Limits",
    definition: "The maximum amount you can withdraw from bonus winnings.",
    explanation:
      "Some bonuses, especially no deposit offers, limit how much you can cash out. A $25 no deposit bonus might have a $100 maximum cashout, meaning even if you win $500, you can only withdraw $100.",
    examples: [
      "No deposit bonus: $100 max cashout",
      "Free spins: $200 withdrawal limit",
      "Welcome bonus: Often no limit",
    ],
    tips: [
      "Check cashout limits before playing",
      "No deposit bonuses usually have limits",
      "Welcome bonuses often unlimited",
    ],
    color: "from-green-600 to-emerald-600",
  },
  {
    icon: Gamepad2,
    term: "Game Weighting & Contributions",
    definition: "How much different games contribute toward meeting wagering requirements.",
    explanation:
      "Not all games contribute equally to wagering. Slots typically contribute 100%, while table games might only contribute 10-20%. Playing blackjack with a $100 bet might only count as $10 toward wagering requirements.",
    examples: ["Slots: 100% contribution", "Blackjack: 10% contribution", "Roulette: 20% contribution"],
    tips: [
      "Stick to slots for faster wagering",
      "Avoid table games with bonuses",
      "Check contribution rates before playing",
    ],
    color: "from-purple-600 to-pink-600",
  },
  {
    icon: Clock,
    term: "Bonus Validity Period",
    definition: "The time limit to use a bonus and meet wagering requirements.",
    explanation:
      "Bonuses expire if not used within the specified timeframe. Most welcome bonuses give 30 days to complete wagering, while free spins might expire in 7 days. Plan your gaming sessions accordingly.",
    examples: ["Welcome bonus: 30 days validity", "Free spins: 7 days to use", "No deposit: 14 days typical"],
    tips: ["Note expiry dates immediately", "Plan gaming sessions in advance", "Contact support for extensions"],
    color: "from-yellow-600 to-orange-600",
  },
  {
    icon: AlertTriangle,
    term: "Maximum Bet Limits",
    definition: "The highest bet allowed per spin/hand while bonus is active.",
    explanation:
      "Most bonuses restrict bet sizes to prevent bonus abuse. Typical limits are $5 per spin or hand. Exceeding this limit can void your bonus and winnings, so always check before playing.",
    examples: ["$5 maximum bet per spin", "$10 limit on table games", "Automatic enforcement in most casinos"],
    tips: ["Never exceed stated limits", "Check limits before each game", "Limits apply until wagering complete"],
    color: "from-red-600 to-pink-600",
  },
  {
    icon: Info,
    term: "Sticky vs. Cashable Bonuses",
    definition: "Whether the bonus amount itself can be withdrawn or only the winnings.",
    explanation:
      "Sticky bonuses cannot be withdrawn - only winnings above the bonus amount. Cashable bonuses allow withdrawal of both bonus and winnings after wagering. Most modern bonuses are cashable.",
    examples: [
      "Sticky: Withdraw winnings only",
      "Cashable: Withdraw bonus + winnings",
      "Most welcome bonuses are cashable",
    ],
    tips: ["Prefer cashable bonuses", "Understand which type you're claiming", "Read terms carefully"],
    color: "from-indigo-600 to-purple-600",
  },
]

export default function BonusTermsExplained() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Casino Bonus Terms Explained</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Understanding <strong>casino bonus terms</strong> is crucial for maximizing value and avoiding
            disappointment. Learn what <strong>wagering requirements</strong>, <strong>game weighting</strong>, and{" "}
            <strong>maximum cashout limits</strong>
            mean for your bonus experience. Our expert guide breaks down complex terms into simple explanations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {keyTerms.map((term, index) => {
            const IconComponent = term.icon
            return (
              <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${term.color} text-white`}>
                  <CardTitle className="flex items-center text-xl">
                    <IconComponent className="h-6 w-6 mr-3" />
                    {term.term}
                  </CardTitle>
                  <p className="text-white/90">{term.definition}</p>
                </CardHeader>

                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Detailed Explanation</h4>
                  <p className="text-gray-300 leading-relaxed mb-6">{term.explanation}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-white font-semibold mb-3">Examples:</h5>
                      <ul className="space-y-2">
                        {term.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-white font-semibold mb-3">Pro Tips:</h5>
                      <ul className="space-y-2">
                        {term.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Reference Guide */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Quick Reference: Good vs. Poor Bonus Terms</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-900/30 rounded-lg p-6 border border-green-700/50">
              <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">✓</span>
                Good Bonus Terms
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong>Wagering:</strong> 25x-35x (bonus + deposit)
                </li>
                <li>
                  <strong>Validity:</strong> 30+ days to complete
                </li>
                <li>
                  <strong>Games:</strong> All slots contribute 100%
                </li>
                <li>
                  <strong>Max Bet:</strong> $5-$10 per spin
                </li>
                <li>
                  <strong>Cashout:</strong> No maximum limit
                </li>
                <li>
                  <strong>Type:</strong> Cashable bonus
                </li>
              </ul>
            </div>

            <div className="bg-red-900/30 rounded-lg p-6 border border-red-700/50">
              <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">⚠</span>
                Poor Bonus Terms
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong>Wagering:</strong> 50x+ requirements
                </li>
                <li>
                  <strong>Validity:</strong> Less than 14 days
                </li>
                <li>
                  <strong>Games:</strong> Limited game selection
                </li>
                <li>
                  <strong>Max Bet:</strong> $1-$2 per spin
                </li>
                <li>
                  <strong>Cashout:</strong> Low maximum limits
                </li>
                <li>
                  <strong>Type:</strong> Sticky bonus only
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-700/30 max-w-4xl mx-auto">
            <AlertTriangle className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">Always Read the Fine Print</h4>
            <p className="text-gray-300 leading-relaxed">
              Before claiming any casino bonus, thoroughly read the terms and conditions. Pay special attention to
              wagering requirements, game restrictions, time limits, and maximum bet rules. When in doubt, contact
              customer support for clarification. Remember: if terms seem too good to be true, they probably are.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
