import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Calculator, Shield, Clock, Star, Users } from "lucide-react"

const ratingCriteria = [
  {
    icon: Calculator,
    title: "Bonus Value & Wagering Requirements",
    weight: "30%",
    description:
      "We analyze the total bonus amount, match percentage, and wagering requirements. Lower wagering (25x-35x) scores higher than excessive requirements (50x+).",
    factors: ["Bonus amount vs deposit", "Wagering multiplier", "Maximum cashout limits", "Game contribution rates"],
  },
  {
    icon: Shield,
    title: "Casino Licensing & Security",
    weight: "25%",
    description:
      "Only bonuses from licensed, regulated casinos make our list. We verify Malta Gaming Authority, UKGC, and other reputable licensing.",
    factors: ["Valid gaming license", "SSL encryption", "Fair gaming certification", "Responsible gambling tools"],
  },
  {
    icon: Clock,
    title: "Terms & Conditions Fairness",
    weight: "20%",
    description:
      "We scrutinize bonus terms for hidden clauses, reasonable time limits, and fair game restrictions. Transparent terms score higher.",
    factors: ["Bonus validity period", "Maximum bet limits", "Restricted games", "Clear terms language"],
  },
  {
    icon: Users,
    title: "Player Experience & Support",
    weight: "15%",
    description: "Customer service quality, withdrawal speeds, and overall user experience factor into our ratings.",
    factors: [
      "Customer support quality",
      "Withdrawal processing time",
      "Mobile compatibility",
      "User interface quality",
    ],
  },
  {
    icon: Star,
    title: "Bonus Variety & Frequency",
    weight: "10%",
    description: "Casinos offering diverse bonus types and regular promotions score higher than one-time offers only.",
    factors: ["Welcome package structure", "Ongoing promotions", "VIP program benefits", "Seasonal offers"],
  },
]

export default function HowWeRateBonuses() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How We Rate Casino Bonuses</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our expert team uses a comprehensive <strong>casino bonus rating system</strong> to evaluate and rank the{" "}
            <strong>best casino bonuses</strong>. We test every offer personally, analyzing wagering requirements, terms
            fairness, and real player value to ensure our recommendations are trustworthy and accurate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {ratingCriteria.map((criteria, index) => {
            const IconComponent = criteria.icon
            return (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl">{criteria.title}</div>
                      <Badge className="bg-yellow-600 text-white mt-1">{criteria.weight} Weight</Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">{criteria.description}</p>

                  <h4 className="text-white font-semibold mb-3">Key Evaluation Factors:</h4>
                  <div className="space-y-2">
                    {criteria.factors.map((factor, factorIndex) => (
                      <div key={factorIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {factor}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Rating Process */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-700/30">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our 5-Step Bonus Testing Process</h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Sign Up", desc: "Create real accounts using our own funds" },
              { step: "2", title: "Claim Bonus", desc: "Test the claiming process and requirements" },
              { step: "3", title: "Play Games", desc: "Test wagering on different game types" },
              { step: "4", title: "Withdraw", desc: "Attempt withdrawal after meeting requirements" },
              { step: "5", title: "Rate & Review", desc: "Score based on our criteria and experience" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-3">
                  {process.step}
                </div>
                <h4 className="text-white font-semibold mb-2">{process.title}</h4>
                <p className="text-gray-300 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-800 rounded-lg p-6 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-3">Transparency Promise</h4>
            <p className="text-gray-300 leading-relaxed">
              We maintain complete editorial independence and never accept payment for rankings. Our team consists of
              experienced casino players and industry professionals who understand what makes a truly valuable bonus
              offer. All recommendations are based solely on merit and player value.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
