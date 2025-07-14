"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Zap, Trophy, Heart, TrendingUp } from "lucide-react"

const gameCategories = [
  { id: "popular", label: "Popular", icon: TrendingUp },
  { id: "slots", label: "Slots", icon: Zap },
  { id: "table", label: "Table Games", icon: Trophy },
  { id: "live", label: "Live Casino", icon: Heart },
]

const games = {
  popular: [
    {
      id: 1,
      title: "Mystic Dragon Fortune",
      provider: "NetEnt",
      rtp: "96.8%",
      jackpot: "$1,234,567",
      image: "/mystical-dragon-slot-machine.png",
      category: "Progressive Jackpot",
      rating: 4.9,
      players: "2.1K playing",
    },
    {
      id: 2,
      title: "Lightning Roulette",
      provider: "Evolution Gaming",
      rtp: "97.3%",
      multiplier: "Up to 500x",
      image: "/lightning-roulette-wheel.png",
      category: "Live Casino",
      rating: 4.8,
      players: "856 playing",
    },
    {
      id: 3,
      title: "Blackjack Premium",
      provider: "Pragmatic Play",
      rtp: "99.4%",
      feature: "Perfect Pairs",
      image: "/elegant-blackjack-table.png",
      category: "Table Game",
      rating: 4.7,
      players: "1.3K playing",
    },
    {
      id: 4,
      title: "Mega Fortune Dreams",
      provider: "NetEnt",
      rtp: "96.4%",
      jackpot: "$2,891,456",
      image: "/colorful-slot-machine.png",
      category: "Progressive Jackpot",
      rating: 4.9,
      players: "3.2K playing",
    },
  ],
  slots: [
    {
      id: 5,
      title: "Starburst Deluxe",
      provider: "NetEnt",
      rtp: "96.1%",
      feature: "Expanding Wilds",
      image: "/colorful-slot-machine.png",
      category: "Video Slot",
      rating: 4.6,
      players: "1.8K playing",
    },
    {
      id: 6,
      title: "Book of Dead",
      provider: "Play'n GO",
      rtp: "96.2%",
      feature: "Free Spins",
      image: "/mystical-dragon-slot-machine.png",
      category: "Adventure Slot",
      rating: 4.7,
      players: "2.4K playing",
    },
  ],
  table: [
    {
      id: 7,
      title: "European Roulette",
      provider: "Microgaming",
      rtp: "97.3%",
      feature: "Single Zero",
      image: "/lightning-roulette-wheel.png",
      category: "Roulette",
      rating: 4.5,
      players: "967 playing",
    },
    {
      id: 8,
      title: "Baccarat Elite",
      provider: "Evolution Gaming",
      rtp: "98.9%",
      feature: "Side Bets",
      image: "/baccarat-elite-table.png",
      category: "Baccarat",
      rating: 4.6,
      players: "543 playing",
    },
  ],
  live: [
    {
      id: 9,
      title: "Live Poker Championship",
      provider: "Evolution Gaming",
      rtp: "97.8%",
      feature: "Tournament Mode",
      image: "/poker-championship-table.png",
      category: "Live Poker",
      rating: 4.8,
      players: "234 playing",
    },
    {
      id: 10,
      title: "Speed Blackjack",
      provider: "Pragmatic Play Live",
      rtp: "99.3%",
      feature: "Fast Dealing",
      image: "/elegant-blackjack-table.png",
      category: "Live Blackjack",
      rating: 4.7,
      players: "1.1K playing",
    },
  ],
}

export function FeaturedGames() {
  const [activeCategory, setActiveCategory] = useState("popular")

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Featured Casino Games</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular casino games with the highest RTPs, biggest jackpots, and most exciting features.
            From classic slots to live dealer tables, find your next favorite game.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {gameCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`px-6 py-3 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <IconComponent className="h-5 w-5 mr-2" />
                {category.label}
              </Button>
            )
          })}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games[activeCategory as keyof typeof games].map((game) => (
            <Card
              key={game.id}
              className="bg-gray-900 border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Game Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-purple-600/90 text-white mb-2">{game.category}</Badge>
                  <div className="text-white font-bold text-lg">{game.title}</div>
                  <div className="text-gray-300 text-sm">{game.provider}</div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Play className="h-5 w-5 mr-2" />
                    Play Now
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Game Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wide">RTP</div>
                    <div className="text-white font-semibold">{game.rtp}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wide">
                      {game.jackpot ? "Jackpot" : game.multiplier ? "Max Win" : "Feature"}
                    </div>
                    <div className="text-white font-semibold">{game.jackpot || game.multiplier || game.feature}</div>
                  </div>
                </div>

                {/* Rating and Players */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-white text-sm font-medium">{game.rating}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{game.players}</div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-sm">
                    Play Real
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 text-sm bg-transparent"
                  >
                    Try Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Games CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Explore 500+ More Games</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Discover our complete collection of slots, table games, live casino, and progressive jackpots. New games
              added weekly from top providers.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8"
            >
              View All Games
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
