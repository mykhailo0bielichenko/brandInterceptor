import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Lock, CheckCircle, AlertTriangle } from "lucide-react"

const withdrawalRules = [
  {
    condition: "Wagering Incomplete",
    restriction: "No withdrawals allowed",
    description: "Must complete wagering requirements first",
    status: "blocked",
  },
  {
    condition: "Wagering Complete",
    restriction: "Minimum $50",
    description: "Minimum withdrawal amount after wagering completion",
    status: "allowed",
  },
  {
    condition: "Maximum Cashout",
    restriction: "Varies by bonus",
    description: "Some bonuses have maximum withdrawal limits",
    status: "limited",
  },
  {
    condition: "Verification Required",
    restriction: "Account must be verified",
    description: "KYC documents required before first withdrawal",
    status: "required",
  },
]

export function WithdrawalRestrictions() {
  return (
    <Card className="bg-gray-800 border-gray-700 mb-8">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-green-400" />
          Withdrawal Restrictions & Requirements
        </CardTitle>
        <p className="text-gray-400 text-sm">
          Understand the withdrawal rules and restrictions that apply when using bonuses
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/30">
            <div className="flex items-start">
              <Lock className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white mb-2">Withdrawal Lock During Bonus Play</h4>
                <p className="text-gray-300 text-sm">
                  While you have an active bonus with incomplete wagering requirements, all withdrawal functions are
                  disabled. This includes both bonus funds and your own deposited funds until wagering is complete.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {withdrawalRules.map((rule, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  {rule.status === "blocked" && <Lock className="h-5 w-5 text-red-400 mr-3" />}
                  {rule.status === "allowed" && <CheckCircle className="h-5 w-5 text-green-400 mr-3" />}
                  {rule.status === "limited" && <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3" />}
                  {rule.status === "required" && <AlertTriangle className="h-5 w-5 text-blue-400 mr-3" />}
                  <div>
                    <h4 className="font-semibold text-white">{rule.condition}</h4>
                    <p className="text-gray-400 text-sm">{rule.description}</p>
                  </div>
                </div>
                <Badge
                  className={`${
                    rule.status === "blocked"
                      ? "bg-red-600"
                      : rule.status === "allowed"
                        ? "bg-green-600"
                        : rule.status === "limited"
                          ? "bg-yellow-600"
                          : "bg-blue-600"
                  } text-white`}
                >
                  {rule.restriction}
                </Badge>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
              <h4 className="font-semibold text-white mb-2">Processing Times</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• E-wallets: 24-48 hours</li>
                <li>• Credit/Debit Cards: 3-5 business days</li>
                <li>• Bank Transfer: 5-7 business days</li>
                <li>• Cryptocurrency: 1-24 hours</li>
              </ul>
            </div>
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-700/30">
              <h4 className="font-semibold text-white mb-2">Maximum Cashout Limits</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• No Deposit Bonus: $100 maximum</li>
                <li>• Free Spins: $200 maximum</li>
                <li>• Welcome Bonus: No limit</li>
                <li>• Reload Bonus: No limit</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30">
            <h4 className="font-semibold text-white mb-2">Successful Withdrawal Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ Complete all wagering requirements</li>
                <li>✓ Account fully verified (KYC)</li>
                <li>✓ Meet minimum withdrawal amount</li>
                <li>✓ Use same payment method as deposit</li>
              </ul>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ No active bonuses with pending wagering</li>
                <li>✓ Comply with anti-money laundering rules</li>
                <li>✓ Account in good standing</li>
                <li>✓ Respect maximum cashout limits (if applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
