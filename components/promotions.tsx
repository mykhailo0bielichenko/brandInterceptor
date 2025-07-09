import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, Clock, Percent, Trophy } from "lucide-react"
import Link from "next/link"

const promotions = [
  {
    id: 1,
    title: "Welcome Bonus",
    description: "Get 100% match bonus up to $1,000 + 100 free spins on your first deposit",
    bonus: "100% + 100 FS",
    timeLeft: "Permanent",
    icon: Gift,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Weekend Reload",
    description: "50% bonus every weekend up to $500 for all registered players",
    bonus: "50% up to $500",
    timeLeft: "2 days left",
    icon: Percent,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "VIP Tournament",
    description: "Exclusive tournament with $50,000 prize pool for VIP members only",
    bonus: "$50,000 Prize",
    timeLeft: "5 days left",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
  },
]

export function Promotions() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Exclusive Promotions</h2>
          <p className="text-gray-400 text-lg">Don't miss out on our amazing bonus offers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {promotions.map((promo) => {
            const IconComponent = promo.icon
            return (
              <Card key={promo.id} className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${promo.color} text-white`}>
                  <div className="flex items-center justify-between">
                    <IconComponent className="h-8 w-8" />
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      <Clock className="h-3 w-3 mr-1" />
                      {promo.timeLeft}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{promo.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4">{promo.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-400">{promo.bonus}</span>
                    <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold">
                      Claim Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/qpkgf">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4"
            >
              <Gift className="mr-2 h-5 w-5" />
              View All Bonuses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
