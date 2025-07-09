import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, Star, TrendingDown, Clock } from "lucide-react"

export default function BonusPageHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="bg-white/20 text-white mb-4 text-sm">Updated January 2025</Badge>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Best Casino Bonuses in 2025 – Huge Welcome Offers & Free Spins
        </h1>

        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Discover the <strong>highest casino bonuses</strong> and <strong>biggest welcome offers</strong> available
          right now. Our expert team has tested and ranked the <strong>top casino bonuses 2025</strong> to help you find
          <strong>exclusive casino offers</strong> with fair wagering requirements and maximum value. Compare{" "}
          <strong>no deposit bonuses</strong>, <strong>free spins</strong>, and <strong>matched deposit bonuses</strong>
          from licensed operators.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-4">
            <Gift className="mr-2 h-5 w-5" />
            View Top Bonuses
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 bg-transparent"
          >
            <TrendingDown className="mr-2 h-5 w-5" />
            Jump to Bonus Table
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Star className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">$2,500+</div>
            <div className="text-white/80 text-sm">Highest Welcome Bonus</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Gift className="h-8 w-8 text-green-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-white/80 text-sm">Free Spins Available</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Clock className="h-8 w-8 text-blue-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-white/80 text-sm">Expert Support</div>
          </div>
        </div>

        <p className="text-white/70 text-sm mt-6">
          <strong>18+ only.</strong> Please gamble responsibly. Wagering requirements apply to all bonuses.
        </p>
      </div>
    </section>
  )
}
