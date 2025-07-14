import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Gift, Sparkles, DollarSign } from "lucide-react"

export function BonusHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-yellow-600 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Gift className="h-20 w-20 text-yellow-400 animate-bounce" />
              <Sparkles className="h-8 w-8 text-yellow-300 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Exclusive Xemeaino Bonuses
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock incredible bonus offers, free spins, and exclusive promotions designed to maximize your gaming
            experience and boost your winnings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 text-white border-0 text-center">
            <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-200" />
            <h3 className="text-2xl font-bold mb-2">$2,500</h3>
            <p className="text-green-200">Maximum Welcome Bonus</p>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-violet-700 p-8 text-white border-0 text-center">
            <Sparkles className="h-12 w-12 mx-auto mb-4 text-purple-200" />
            <h3 className="text-2xl font-bold mb-2">500</h3>
            <p className="text-purple-200">Free Spins Available</p>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600 to-red-700 p-8 text-white border-0 text-center">
            <Gift className="h-12 w-12 mx-auto mb-4 text-orange-200" />
            <h3 className="text-2xl font-bold mb-2">15+</h3>
            <p className="text-orange-200">Active Promotions</p>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-12 py-4 text-lg"
          >
            Claim Your Bonus Now
          </Button>
        </div>
      </div>
    </section>
  )
}
