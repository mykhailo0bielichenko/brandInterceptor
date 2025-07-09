import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ThumbsUp, Award, Users } from "lucide-react"

const playerReviews = [
  {
    name: "Sarah M.",
    location: "United Kingdom",
    rating: 5,
    title: "Best Online Casino Experience",
    review:
      "I've been playing at Xemeaino for 6 months and it's by far the best online casino I've tried. The slot games have great RTPs, withdrawals are fast, and customer support is excellent. The welcome bonus was generous with fair wagering requirements.",
    gameType: "Slots Player",
    verified: true,
    keywords: ["best online casino", "fast withdrawals", "slot games", "welcome bonus"],
  },
  {
    name: "Michael R.",
    location: "Canada",
    rating: 5,
    title: "Excellent Live Casino Games",
    review:
      "The live dealer games are fantastic - HD quality streaming and professional dealers. I mainly play live blackjack and roulette, and the experience feels just like being in a real casino. Mobile app works perfectly too.",
    gameType: "Live Casino Player",
    verified: true,
    keywords: ["live casino", "live blackjack", "live roulette", "mobile casino"],
  },
  {
    name: "Emma L.",
    location: "Australia",
    rating: 5,
    title: "Great Bonuses and Fair Terms",
    review:
      "What I love most is the transparency - no hidden terms in bonuses, reasonable wagering requirements, and they actually pay out winnings quickly. The VIP program has great perks and my account manager is very helpful.",
    gameType: "VIP Player",
    verified: true,
    keywords: ["casino bonuses", "VIP program", "fair terms", "quick payouts"],
  },
  {
    name: "David K.",
    location: "Germany",
    rating: 4,
    title: "Secure and Trustworthy",
    review:
      "As someone who values security, I appreciate that Xemeaino is properly licensed and regulated. The games are provably fair, and I feel confident that my personal and financial information is protected. Good selection of payment methods.",
    gameType: "Security-Conscious Player",
    verified: true,
    keywords: ["secure casino", "licensed casino", "fair games", "payment security"],
  },
  {
    name: "Lisa T.",
    location: "Sweden",
    rating: 5,
    title: "Amazing Game Variety",
    review:
      "Over 500 games to choose from! I love trying new slot releases and they're always adding fresh content. The progressive jackpots are huge and I've won several smaller jackpots. Customer support helped me set up responsible gaming limits easily.",
    gameType: "Casual Player",
    verified: true,
    keywords: ["game variety", "progressive jackpots", "new slots", "responsible gaming"],
  },
  {
    name: "James W.",
    location: "Norway",
    rating: 5,
    title: "Professional Poker Experience",
    review:
      "The poker tournaments are well-organized with good prize pools. I appreciate the variety of stakes and game types available. The software runs smoothly and I've never experienced any technical issues during important hands.",
    gameType: "Poker Player",
    verified: true,
    keywords: ["poker tournaments", "poker games", "prize pools", "poker software"],
  },
]

const trustIndicators = [
  {
    icon: Award,
    title: "Industry Recognition",
    stats: "Best New Casino 2024",
    description: "Awarded by Casino Review Magazine",
  },
  {
    icon: Users,
    title: "Player Community",
    stats: "50,000+ Active Players",
    description: "Growing community worldwide",
  },
  {
    icon: Star,
    title: "Player Rating",
    stats: "4.8/5 Stars",
    description: "Based on verified reviews",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Rate",
    stats: "96% Positive",
    description: "Customer satisfaction score",
  },
]

export function CasinoReviewsTestimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">What Players Say About Xemeaino Casino</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Read authentic reviews from real players about their online casino gaming experience. Our community of
            satisfied players shares their thoughts on games, bonuses, customer service, and overall satisfaction with
            our casino platform.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {trustIndicators.map((indicator, index) => {
            const IconComponent = indicator.icon
            return (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-6">
                  <IconComponent className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">{indicator.stats}</div>
                  <div className="text-lg font-semibold text-gray-300 mb-2">{indicator.title}</div>
                  <div className="text-sm text-gray-400">{indicator.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Player Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {playerReviews.map((review, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <h4 className="text-lg font-semibold text-white mr-2">{review.name}</h4>
                      {review.verified && <Badge className="bg-green-600 text-white text-xs">Verified Player</Badge>}
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      {review.location} • {review.gameType}
                    </div>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-gray-600" />
                </div>

                <h5 className="text-xl font-semibold text-white mb-3">{review.title}</h5>

                <p className="text-gray-300 leading-relaxed mb-4">{review.review}</p>

                <div className="flex flex-wrap gap-2">
                  {review.keywords.map((keyword, keyIndex) => (
                    <Badge key={keyIndex} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Summary */}
        <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-8 border border-green-700/30">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Join Thousands of Satisfied Casino Players</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience why Xemeaino is rated as one of the best online casinos. Join our community of players who
              enjoy fair games, generous bonuses, fast payouts, and exceptional customer service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">4.8★</div>
                <div className="text-gray-300">Average Rating</div>
                <div className="text-sm text-gray-400">From 2,500+ Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">96%</div>
                <div className="text-gray-300">Would Recommend</div>
                <div className="text-sm text-gray-400">To Friends & Family</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24hrs</div>
                <div className="text-gray-300">Avg. Support Response</div>
                <div className="text-sm text-gray-400">Customer Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
