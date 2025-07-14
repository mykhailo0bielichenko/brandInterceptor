"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Trophy } from "lucide-react"
import { useEffect, useState } from "react"

export function LiveStats() {
  const [stats, setStats] = useState({
    onlineUsers: 12847,
    totalWinnings: 2847392,
    gamesPlayed: 45821,
    jackpotAmount: 1247583,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        onlineUsers: prev.onlineUsers + Math.floor(Math.random() * 10) - 5,
        totalWinnings: prev.totalWinnings + Math.floor(Math.random() * 1000),
        gamesPlayed: prev.gamesPlayed + Math.floor(Math.random() * 20),
        jackpotAmount: prev.jackpotAmount + Math.floor(Math.random() * 100),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Live Casino Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm">Online Players</p>
                <p className="text-2xl font-bold">{stats.onlineUsers.toLocaleString()}</p>
              </div>
              <Users className="h-8 w-8 text-blue-300" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-green-600 to-green-800 p-6 text-white border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-200 text-sm">Total Winnings</p>
                <p className="text-2xl font-bold">${stats.totalWinnings.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-300" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 text-white border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-200 text-sm">Games Played</p>
                <p className="text-2xl font-bold">{stats.gamesPlayed.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-300" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-600 to-orange-600 p-6 text-white border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-200 text-sm">Mega Jackpot</p>
                <p className="text-2xl font-bold">${stats.jackpotAmount.toLocaleString()}</p>
              </div>
              <Trophy className="h-8 w-8 text-yellow-300" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
