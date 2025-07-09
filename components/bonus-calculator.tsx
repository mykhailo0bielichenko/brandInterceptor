"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, DollarSign } from "lucide-react"
import { useState } from "react"

export function BonusCalculator() {
  const [depositAmount, setDepositAmount] = useState("")
  const [bonusType, setBonusType] = useState("")
  const [result, setResult] = useState<{
    bonusAmount: number
    totalBalance: number
    wagering: number
    freeSpins: number
  } | null>(null)

  const bonusTypes = {
    welcome100: { match: 100, max: 500, wagering: 35, spins: 100 },
    welcome75: { match: 75, max: 750, wagering: 30, spins: 75 },
    reload50: { match: 50, max: 300, wagering: 25, spins: 50 },
    weekend75: { match: 75, max: 500, wagering: 30, spins: 0 },
  }

  const calculateBonus = () => {
    if (!depositAmount || !bonusType) return

    const deposit = Number.parseFloat(depositAmount)
    const bonus = bonusTypes[bonusType as keyof typeof bonusTypes]

    if (!bonus || deposit <= 0) return

    const bonusAmount = Math.min((deposit * bonus.match) / 100, bonus.max)
    const totalBalance = deposit + bonusAmount
    const wagering = (deposit + bonusAmount) * bonus.wagering
    const freeSpins = bonus.spins

    setResult({
      bonusAmount,
      totalBalance,
      wagering,
      freeSpins,
    })
  }

  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Calculator className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Bonus Calculator</h2>
          <p className="text-gray-400 text-lg">Calculate your potential bonus and winnings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-400" />
                Calculate Your Bonus
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="deposit" className="text-white">
                  Deposit Amount ($)
                </Label>
                <Input
                  id="deposit"
                  type="number"
                  placeholder="Enter deposit amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div>
                <Label htmlFor="bonus-type" className="text-white">
                  Bonus Type
                </Label>
                <Select value={bonusType} onValueChange={setBonusType}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select bonus type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="welcome100">Welcome 100% (up to $500)</SelectItem>
                    <SelectItem value="welcome75">Welcome 75% (up to $750)</SelectItem>
                    <SelectItem value="reload50">Reload 50% (up to $300)</SelectItem>
                    <SelectItem value="weekend75">Weekend 75% (up to $500)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={calculateBonus}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold"
              >
                Calculate Bonus
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Calculation Results</CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <span className="text-gray-300">Your Deposit:</span>
                    <span className="text-white font-semibold">${Number.parseFloat(depositAmount).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-600/20 rounded-lg border border-green-600/30">
                    <span className="text-gray-300">Bonus Amount:</span>
                    <span className="text-green-400 font-bold">${result.bonusAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-600/20 rounded-lg border border-blue-600/30">
                    <span className="text-gray-300">Total Balance:</span>
                    <span className="text-blue-400 font-bold">${result.totalBalance.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-600/20 rounded-lg border border-yellow-600/30">
                    <span className="text-gray-300">Wagering Requirement:</span>
                    <span className="text-yellow-400 font-semibold">${result.wagering.toFixed(2)}</span>
                  </div>
                  {result.freeSpins > 0 && (
                    <div className="flex justify-between items-center p-3 bg-purple-600/20 rounded-lg border border-purple-600/30">
                      <span className="text-gray-300">Free Spins:</span>
                      <span className="text-purple-400 font-semibold">{result.freeSpins} spins</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calculator className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">
                    Enter your deposit amount and select a bonus type to see the calculation
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
