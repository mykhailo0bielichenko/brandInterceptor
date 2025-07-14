"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Calculator, TrendingUp } from "lucide-react"
import { useState } from "react"

export function WageringRequirementsCalculator() {
  const [deposit, setDeposit] = useState("")
  const [bonus, setBonus] = useState("")
  const [wagered, setWagered] = useState("")
  const [result, setResult] = useState<{
    totalRequired: number
    remaining: number
    progress: number
  } | null>(null)

  const calculateWagering = () => {
    const depositAmount = Number.parseFloat(deposit) || 0
    const bonusAmount = Number.parseFloat(bonus) || 0
    const wageredAmount = Number.parseFloat(wagered) || 0

    const totalRequired = (depositAmount + bonusAmount) * 35 // 35x wagering
    const remaining = Math.max(0, totalRequired - wageredAmount)
    const progress = Math.min(100, (wageredAmount / totalRequired) * 100)

    setResult({
      totalRequired,
      remaining,
      progress,
    })
  }

  return (
    <Card className="bg-gray-800 border-gray-700 mb-8">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Calculator className="h-5 w-5 mr-2 text-blue-400" />
          Wagering Requirements Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="deposit" className="text-white">
              Deposit Amount ($)
            </Label>
            <Input
              id="deposit"
              type="number"
              placeholder="100"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="bonus" className="text-white">
              Bonus Amount ($)
            </Label>
            <Input
              id="bonus"
              type="number"
              placeholder="100"
              value={bonus}
              onChange={(e) => setBonus(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="wagered" className="text-white">
              Already Wagered ($)
            </Label>
            <Input
              id="wagered"
              type="number"
              placeholder="0"
              value={wagered}
              onChange={(e) => setWagered(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
        </div>

        <Button onClick={calculateWagering} className="w-full bg-blue-600 hover:bg-blue-700">
          Calculate Wagering Requirements
        </Button>

        {result && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30 text-center">
                <p className="text-gray-300 text-sm">Total Required</p>
                <p className="text-2xl font-bold text-blue-400">${result.totalRequired.toFixed(2)}</p>
              </div>
              <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30 text-center">
                <p className="text-gray-300 text-sm">Remaining</p>
                <p className="text-2xl font-bold text-yellow-400">${result.remaining.toFixed(2)}</p>
              </div>
              <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30 text-center">
                <p className="text-gray-300 text-sm">Progress</p>
                <p className="text-2xl font-bold text-green-400">{result.progress.toFixed(1)}%</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Wagering Progress</span>
                <span>{result.progress.toFixed(1)}% Complete</span>
              </div>
              <Progress value={result.progress} className="h-3" />
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Calculation Breakdown
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Wagering Multiplier: 35x (deposit + bonus)</li>
                <li>
                  • Formula: ({deposit || 0} + {bonus || 0}) × 35 = ${result.totalRequired.toFixed(2)}
                </li>
                <li>• You need to wager ${result.remaining.toFixed(2)} more to complete requirements</li>
                <li>• Maximum bet allowed: $5 per spin/hand</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
