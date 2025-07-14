import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MapPin, Calendar, CreditCard, AlertTriangle } from "lucide-react"

const eligibilityRules = [
  {
    category: "Age Requirements",
    icon: Calendar,
    requirements: [
      "Must be 18+ years old (or legal gambling age in your jurisdiction)",
      "Age verification required before first withdrawal",
      "Underage gambling strictly prohibited",
      "Account closure for false age information",
    ],
    status: "mandatory",
  },
  {
    category: "Geographic Restrictions",
    icon: MapPin,
    requirements: [
      "Available in licensed jurisdictions only",
      "Restricted countries: USA, France, Turkey, Iran, North Korea",
      "VPN usage to bypass restrictions is prohibited",
      "IP address verification performed",
    ],
    status: "mandatory",
  },
  {
    category: "Account Limitations",
    icon: Users,
    requirements: [
      "One account per person/household/IP address",
      "Multiple accounts will be closed",
      "Shared computers require separate verification",
      "Family members need different payment methods",
    ],
    status: "mandatory",
  },
  {
    category: "Payment Method Requirements",
    icon: CreditCard,
    requirements: [
      "Payment method must be in your name",
      "Third-party payments not accepted",
      "Verification documents may be required",
      "Some bonuses exclude certain payment methods",
    ],
    status: "important",
  },
]

export function EligibilityRequirements() {
  return (
    <Card className="bg-gray-800 border-gray-700 mb-8">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Users className="h-5 w-5 mr-2 text-purple-400" />
          Eligibility Requirements
        </CardTitle>
        <p className="text-gray-400 text-sm">
          You must meet all eligibility requirements to claim bonuses and use our services
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/30">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white mb-2">Eligibility Violations</h4>
                <p className="text-gray-300 text-sm">
                  Failure to meet eligibility requirements will result in account closure, bonus forfeiture, and
                  confiscation of winnings. We perform regular compliance checks and reserve the right to request
                  additional verification at any time.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {eligibilityRules.map((rule, index) => {
              const IconComponent = rule.icon
              return (
                <div key={index} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white flex items-center">
                      <IconComponent className="h-5 w-5 mr-2 text-blue-400" />
                      {rule.category}
                    </h4>
                    <Badge className={`${rule.status === "mandatory" ? "bg-red-600" : "bg-yellow-600"} text-white`}>
                      {rule.status}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {rule.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
              <h4 className="font-semibold text-white mb-2">Verification Process</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Identity verification (government ID)</li>
                <li>• Address verification (utility bill)</li>
                <li>• Payment method verification</li>
                <li>• Enhanced due diligence (if required)</li>
              </ul>
            </div>
            <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30">
              <h4 className="font-semibold text-white mb-2">Compliance Monitoring</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Automated eligibility checks</li>
                <li>• Regular account reviews</li>
                <li>• Geolocation verification</li>
                <li>• Anti-fraud monitoring</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30">
            <h4 className="font-semibold text-white mb-2">Special Considerations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <h5 className="font-medium text-white mb-1">Excluded Bonuses</h5>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Players from certain countries</li>
                  <li>• Specific payment method users</li>
                  <li>• Previously self-excluded players</li>
                  <li>• Bonus abuse history</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-white mb-1">Additional Restrictions</h5>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Professional gamblers</li>
                  <li>• Affiliate/competitor accounts</li>
                  <li>• Accounts with chargebacks</li>
                  <li>• Dormant account reactivation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
