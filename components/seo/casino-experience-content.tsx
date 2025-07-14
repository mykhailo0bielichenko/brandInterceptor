import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Smartphone, CreditCard, Headphones, Award, Zap, Lock } from "lucide-react"

const experienceFeatures = [
  {
    icon: Shield,
    title: "Licensed & Secure Gaming",
    description:
      "Malta Gaming Authority licensed casino with SSL encryption, ensuring safe and fair gaming for all players.",
    keywords: ["licensed casino", "secure gaming", "Malta gaming license", "SSL encryption"],
  },
  {
    icon: Smartphone,
    title: "Mobile Casino Gaming",
    description:
      "Play your favorite casino games on any device with our responsive mobile casino platform and dedicated apps.",
    keywords: ["mobile casino", "casino app", "mobile gaming", "responsive design"],
  },
  {
    icon: CreditCard,
    title: "Fast & Secure Payments",
    description:
      "Multiple payment methods including credit cards, e-wallets, and cryptocurrency with instant deposits and quick withdrawals.",
    keywords: ["casino payments", "fast withdrawals", "secure deposits", "payment methods"],
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Expert customer service available around the clock via live chat, email, and phone support in multiple languages.",
    keywords: ["customer support", "live chat", "24/7 support", "casino help"],
  },
  {
    icon: Award,
    title: "VIP & Loyalty Program",
    description:
      "Exclusive VIP benefits, loyalty rewards, and personalized service for our most valued casino players.",
    keywords: ["VIP casino", "loyalty program", "casino rewards", "exclusive benefits"],
  },
  {
    icon: Zap,
    title: "Instant Play Casino",
    description: "No download required - play instantly in your browser with our cutting-edge HTML5 casino technology.",
    keywords: ["instant play", "no download casino", "browser gaming", "HTML5 casino"],
  },
]

export function CasinoExperienceContent() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Premium Online Casino Experience</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Xemeaino, we've crafted the ultimate online casino experience combining cutting-edge technology,
            world-class games, and exceptional service. Whether you're a seasoned gambler or new to online casino
            gaming, our platform offers everything you need for an unforgettable gaming adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experienceFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.keywords.map((keyword, keyIndex) => (
                      <Badge key={keyIndex} variant="outline" className="border-gray-600 text-gray-400 text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Casino Gaming Statistics */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Leading Online Casino Platform</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Casino Games</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">Max RTP</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-gray-300">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>

        {/* Gaming Responsible Section */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-8 border border-red-700/30">
          <div className="flex items-start">
            <Lock className="h-8 w-8 text-red-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Responsible Gaming & Player Protection</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We are committed to promoting responsible gambling and providing a safe gaming environment. Our
                comprehensive player protection tools include deposit limits, time restrictions, self-exclusion options,
                and access to professional gambling support services. Remember: gambling should be entertaining, not a
                way to make money.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Deposit Limits</h4>
                  <p className="text-gray-400 text-sm">Set daily, weekly, or monthly spending limits</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Self-Exclusion</h4>
                  <p className="text-gray-400 text-sm">Take a break with cooling-off periods</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Support Resources</h4>
                  <p className="text-gray-400 text-sm">Access to professional gambling help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
