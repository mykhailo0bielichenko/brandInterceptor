import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, RotateCcw, Trophy, Star, Zap } from "lucide-react"

const bonusCategories = [
  {
    id: 1,
    title: "Welcome Package",
    description: "New player exclusive bonus package with multiple deposit matches",
    bonuses: [
      { deposit: "1st Deposit", match: "100%", max: "$500", spins: "100 FS" },
      { deposit: "2nd Deposit", match: "75%", max: "$750", spins: "75 FS" },
      { deposit: "3rd Deposit", match: "50%", max: "$1,250", spins: "50 FS" },
    ],
    totalValue: "$2,500 + 225 FS",
    icon: Gift,
    color: "from-purple-600 to-pink-600",
    popular: true,
  },
  {
    id: 2,
    title: "Reload Bonuses",
    description: "Regular bonuses for existing players to keep the excitement going",
    bonuses: [
      { name: "Monday Reload", match: "50%", max: "$300", code: "MONDAY50" },
      { name: "Weekend Boost", match: "75%", max: "$500", code: "WEEKEND75" },
      { name: "Midweek Special", match: "25%", max: "$200", code: "MIDWEEK25" },
    ],
    totalValue: "Up to $1,000/week",
    icon: RotateCcw,
    color: "from-blue-600 to-cyan-600",
    popular: false,
  },
  {
    id: 3,
    title: "Free Spins",
    description: "No deposit and deposit-based free spins on popular slot games",
    bonuses: [
      { name: "Daily Free Spins", amount: "20 FS", requirement: "No Deposit", game: "Starburst" },
      { name: "Spin Boost", amount: "100 FS", requirement: "$50 Deposit", game: "Book of Dead" },
      { name: "Mega Spins", amount: "200 FS", requirement: "$100 Deposit", game: "Gonzo's Quest" },
    ],
    totalValue: "320+ Free Spins",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    popular: true,
  },
  {
    id: 4,
    title: "VIP Program",
    description: "Exclusive benefits and personalized bonuses for high-value players",
    bonuses: [
      { level: "Bronze", cashback: "5%", bonus: "Monthly 25%", manager: "No" },
      { level: "Silver", cashback: "7%", bonus: "Monthly 50%", manager: "Yes" },
      { level: "Gold", cashback: "10%", bonus: "Weekly 75%", manager: "Yes" },
      { level: "Platinum", cashback: "15%", bonus: "Daily 100%", manager: "Personal" },
    ],
    totalValue: "Up to 15% Cashback",
    icon: Trophy,
    color: "from-amber-600 to-yellow-600",
    popular: false,
  },
]

export function BonusCategories() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Bonus Categories</h2>
          <p className="text-gray-400 text-lg">Choose from our wide range of bonus offers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {bonusCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.id} className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${category.color} text-white relative`}>
                  {category.popular && (
                    <Badge className="absolute top-4 right-4 bg-yellow-500 text-black">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  <div className="flex items-center gap-4">
                    <IconComponent className="h-10 w-10" />
                    <div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <p className="text-white/80 mt-1">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="space-y-4 mb-6">
                    {category.id === 1 &&
                      category.bonuses.map((bonus, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                          <div>
                            <span className="text-white font-medium">{bonus.deposit}</span>
                            <div className="text-sm text-gray-400">
                              {bonus.match} match up to {bonus.max}
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-purple-600 text-white">
                            {bonus.spins}
                          </Badge>
                        </div>
                      ))}

                    {category.id === 2 &&
                      category.bonuses.map((bonus, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                          <div>
                            <span className="text-white font-medium">{bonus.name}</span>
                            <div className="text-sm text-gray-400">
                              {bonus.match} up to {bonus.max}
                            </div>
                          </div>
                          <Badge variant="outline" className="border-blue-400 text-blue-400">
                            {bonus.code}
                          </Badge>
                        </div>
                      ))}

                    {category.id === 3 &&
                      category.bonuses.map((bonus, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                          <div>
                            <span className="text-white font-medium">{bonus.name}</span>
                            <div className="text-sm text-gray-400">
                              {bonus.requirement} • {bonus.game}
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-yellow-600 text-white">
                            {bonus.amount}
                          </Badge>
                        </div>
                      ))}

                    {category.id === 4 &&
                      category.bonuses.map((bonus, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                          <div>
                            <span className="text-white font-medium">{bonus.level} Level</span>
                            <div className="text-sm text-gray-400">
                              {bonus.cashback} cashback • {bonus.bonus}
                            </div>
                          </div>
                          <Badge
                            variant={bonus.manager === "Personal" ? "default" : "secondary"}
                            className={bonus.manager === "Personal" ? "bg-gold-600 text-white" : ""}
                          >
                            {bonus.manager === "Personal"
                              ? "Personal Manager"
                              : bonus.manager === "Yes"
                                ? "Manager"
                                : "Self-Service"}
                          </Badge>
                        </div>
                      ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-400">Total Value</span>
                      <div className="text-xl font-bold text-yellow-400">{category.totalValue}</div>
                    </div>
                    <Button className={`bg-gradient-to-r ${category.color} hover:opacity-90 text-white font-semibold`}>
                      Claim Bonus
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
