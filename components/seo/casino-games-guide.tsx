import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Spade, Diamond, Heart, Club, Zap, Trophy, Star, TrendingUp, Users, Clock } from "lucide-react"

const gameCategories = [
  {
    title: "Online Slots & Slot Machines",
    icon: Zap,
    description:
      "Experience the thrill of premium online slots with progressive jackpots, free spins, and bonus rounds. Our extensive collection features classic fruit machines, video slots, and modern 3D slot games from top software providers.",
    games: ["Progressive Jackpot Slots", "Video Slots", "Classic Slots", "Megaways Slots", "3D Slots"],
    features: ["RTP up to 98%", "Free Spins Bonus", "Progressive Jackpots", "Mobile Optimized"],
    color: "from-purple-600 to-pink-600",
  },
  {
    title: "Blackjack & Card Games",
    icon: Spade,
    description:
      "Master the art of 21 with our comprehensive blackjack collection. From classic blackjack to innovative variants, perfect your strategy and enjoy the best odds in online casino gaming.",
    games: ["Classic Blackjack", "European Blackjack", "Multi-Hand Blackjack", "Blackjack Switch", "Perfect Pairs"],
    features: ["Low House Edge", "Strategy Cards", "Side Bets Available", "Live Dealers"],
    color: "from-gray-700 to-gray-900",
  },
  {
    title: "Roulette Games",
    icon: Diamond,
    description:
      "Spin the wheel of fortune with European, American, and French roulette variants. Experience the excitement of live dealer roulette with real-time gameplay and professional croupiers.",
    games: ["European Roulette", "American Roulette", "French Roulette", "Lightning Roulette", "Speed Roulette"],
    features: ["Live Dealers", "Multiple Variants", "Special Bets", "HD Streaming"],
    color: "from-red-600 to-red-800",
  },
  {
    title: "Poker & Texas Hold'em",
    icon: Heart,
    description:
      "Join poker tournaments and cash games featuring Texas Hold'em, Omaha, and Stud poker. Compete against players worldwide or practice your skills in our poker training modes.",
    games: ["Texas Hold'em", "Omaha Poker", "Seven Card Stud", "Caribbean Stud", "Three Card Poker"],
    features: ["Tournaments", "Cash Games", "Sit & Go", "Poker Training"],
    color: "from-green-600 to-emerald-700",
  },
  {
    title: "Baccarat & Table Games",
    icon: Club,
    description:
      "Experience the elegance of baccarat, craps, and other classic table games. Our live casino offers authentic gaming atmosphere with professional dealers and high-quality streaming.",
    games: ["Punto Banco", "Chemin de Fer", "Baccarat Squeeze", "Mini Baccarat", "Dragon Tiger"],
    features: ["Live Dealers", "VIP Tables", "Side Bets", "Mobile Play"],
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Live Casino Experience",
    icon: Users,
    description:
      "Immerse yourself in authentic casino atmosphere with live dealers, real-time interaction, and HD streaming. Play live blackjack, roulette, baccarat, and game shows from professional studios.",
    games: ["Live Blackjack", "Live Roulette", "Live Baccarat", "Game Shows", "Live Poker"],
    features: ["HD Streaming", "Chat Function", "Multiple Angles", "24/7 Available"],
    color: "from-orange-600 to-yellow-600",
  },
]

export function CasinoGamesGuide() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Complete Online Casino Games Collection</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the ultimate online casino gaming experience with over 500 premium games. From classic slot
            machines and table games to live dealer experiences, our comprehensive collection offers something for every
            type of player. Enjoy fair gaming, secure transactions, and professional customer support available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {gameCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300"
              >
                <CardHeader className={`bg-gradient-to-r ${category.color} text-white`}>
                  <CardTitle className="flex items-center text-2xl">
                    <IconComponent className="h-8 w-8 mr-3" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Popular Games:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.games.map((game, gameIndex) => (
                        <Badge key={gameIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                          {game}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <Star className="h-4 w-4 text-yellow-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90`}>
                    Explore {category.title}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-700/30">
          <div className="text-center">
            <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Why Choose Xemeaino for Online Casino Gaming?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">High RTP Games</h4>
                <p className="text-gray-300">
                  Our games feature industry-leading Return to Player rates, giving you better odds and more winning
                  opportunities.
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Live Dealer Games</h4>
                <p className="text-gray-300">
                  Experience authentic casino atmosphere with professional dealers streaming live from premium studios.
                </p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">24/7 Gaming</h4>
                <p className="text-gray-300">
                  Play anytime, anywhere with our mobile-optimized platform and round-the-clock customer support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
