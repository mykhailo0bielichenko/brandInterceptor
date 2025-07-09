"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Clock, Gift, Zap, Users, Trophy } from "lucide-react"
import Image from "next/image"
import { useAuth } from "@/components/auth/auth-provider"

export function Hero() {
  const { openSignup, openLogin } = useAuth()

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Trust Badges Bar */}
      <div className="relative bg-black/30 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <Image src="/licenses/malta-gaming-authority.png" alt="Malta Gaming Authority" width={40} height={30} />
              <span className="text-xs text-gray-300">Licensed by MGA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src="/licenses/ecogra-certified.png" alt="eCOGRA Certified" width={40} height={30} />
              <span className="text-xs text-gray-300">eCOGRA Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src="/licenses/ssl-secure.png" alt="SSL Secure" width={40} height={30} />
              <span className="text-xs text-gray-300">SSL Secured</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Live Stats */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">2,847 players online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-yellow-400" />
                <span className="text-yellow-400">$2.4M won today</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Win Big
                </span>
                <br />
                <span className="text-white">at Xemeaino</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Experience the ultimate online casino with over 3,000 games, instant payouts, and exclusive bonuses up
                to $5,000.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Gift className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <div className="font-semibold">$5,000 Bonus</div>
                  <div className="text-sm text-gray-400">Welcome Package</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold">Instant Payouts</div>
                  <div className="text-sm text-gray-400">24/7 Withdrawals</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold">100% Secure</div>
                  <div className="text-sm text-gray-400">SSL Encrypted</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold">3,000+ Games</div>
                  <div className="text-sm text-gray-400">Top Providers</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={openSignup}
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold text-lg px-8 py-4 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                <Gift className="mr-2 h-5 w-5" />
                Join Now - Claim $5,000 Bonus
              </Button>
              <Button
                onClick={openLogin}
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-xl bg-transparent"
              >
                Sign In Here
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Licensed & Regulated</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Game Preview */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Featured Games</h3>
              <p className="text-gray-400">Try our most popular games</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer group">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <Image
                      src="/colorful-slot-machine.png"
                      alt="Mega Fortune Slot"
                      width={200}
                      height={120}
                      className="w-full h-24 object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <Badge className="absolute top-2 right-2 bg-red-600 text-white text-xs">HOT</Badge>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Mega Fortune</h4>
                  <p className="text-xs text-gray-400">Progressive Jackpot: $2.4M</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer group">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <Image
                      src="/elegant-blackjack-table.png"
                      alt="Live Blackjack"
                      width={200}
                      height={120}
                      className="w-full h-24 object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-600 text-white text-xs">LIVE</Badge>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Live Blackjack</h4>
                  <p className="text-xs text-gray-400">Professional Dealers</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer group">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <Image
                      src="/lightning-roulette-wheel.png"
                      alt="Lightning Roulette"
                      width={200}
                      height={120}
                      className="w-full h-24 object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <Badge className="absolute top-2 right-2 bg-yellow-600 text-black text-xs">NEW</Badge>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Lightning Roulette</h4>
                  <p className="text-xs text-gray-400">Up to 500x Multipliers</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer group">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <Image
                      src="/mystical-dragon-slot-machine.png"
                      alt="Dragon's Fortune"
                      width={200}
                      height={120}
                      className="w-full h-24 object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <Badge className="absolute top-2 right-2 bg-purple-600 text-white text-xs">BONUS</Badge>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Dragon's Fortune</h4>
                  <p className="text-xs text-gray-400">Free Spins Available</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-400">98.5%</div>
                  <div className="text-xs text-gray-400">RTP Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-xs text-gray-400">Live Tables</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">$847M</div>
              <div className="text-sm text-gray-400">Total Winnings Paid</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">150K+</div>
              <div className="text-sm text-gray-400">Active Players</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">3,000+</div>
              <div className="text-sm text-gray-400">Casino Games</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
