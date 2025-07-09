import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, Eye, FileText } from "lucide-react"

export const metadata = {
  title: "Anti-Money Laundering Policy - Xemeaino",
  description: "Anti-Money Laundering (AML) and Know Your Customer (KYC) policies and procedures.",
}

export default function AMLPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Anti-Money Laundering Policy</h1>
          <p className="text-gray-400 text-lg">Protecting the integrity of our gaming platform</p>
          <Badge className="mt-2 bg-green-600">Compliance Required</Badge>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">1. Policy Overview</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Xemeaino Limited is committed to preventing money laundering and terrorist financing. We comply with
                    all applicable anti-money laundering (AML) laws and regulations, including the EU Anti-Money
                    Laundering Directives and Malta's Prevention of Money Laundering Act.
                  </p>
                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30">
                    <h4 className="font-semibold text-white mb-2">Our Commitment</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Implement robust customer due diligence procedures</li>
                      <li>• Monitor transactions for suspicious activity</li>
                      <li>• Report suspicious transactions to authorities</li>
                      <li>• Maintain comprehensive records</li>
                      <li>• Train staff on AML compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">2. Know Your Customer (KYC) Requirements</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-blue-400" />
                      Standard Verification (Required for all players)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                        <h5 className="font-semibold text-white mb-2">Identity Documents</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Government-issued photo ID</li>
                          <li>• Passport or driver's license</li>
                          <li>• National identity card</li>
                        </ul>
                      </div>
                      <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-700/30">
                        <h5 className="font-semibold text-white mb-2">Address Verification</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Utility bill (last 3 months)</li>
                          <li>• Bank statement</li>
                          <li>• Government correspondence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Eye className="h-5 w-5 mr-2 text-yellow-400" />
                      Enhanced Due Diligence (High-risk customers)
                    </h4>
                    <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30">
                      <p className="text-gray-300 text-sm mb-3">Additional verification may be required for:</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• High-value transactions (€10,000+)</li>
                        <li>• Politically Exposed Persons (PEPs)</li>
                        <li>• Customers from high-risk jurisdictions</li>
                        <li>• Unusual transaction patterns</li>
                        <li>• Source of funds verification</li>
                        <li>• Source of wealth documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">3. Transaction Monitoring</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Automated Monitoring Systems</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      We use advanced automated systems to monitor all transactions for suspicious patterns:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Large or unusual deposit amounts</li>
                        <li>• Rapid deposit and withdrawal cycles</li>
                        <li>• Minimal or no gaming activity</li>
                        <li>• Structuring transactions to avoid thresholds</li>
                      </ul>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Multiple accounts from same source</li>
                        <li>• Transactions from high-risk countries</li>
                        <li>• Use of multiple payment methods</li>
                        <li>• Inconsistent betting patterns</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/30">
                    <h4 className="font-semibold text-white mb-2">Reporting Thresholds</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Single transactions: €15,000 or equivalent</li>
                      <li>• Cumulative transactions: €15,000 in 30 days</li>
                      <li>• Suspicious transactions: Any amount</li>
                      <li>• Cash transactions: €10,000 or equivalent</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">4. Suspicious Activity Indicators</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Customer Behavior</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Reluctance to provide identification</li>
                      <li>• Providing false or inconsistent information</li>
                      <li>• Unusual nervousness or evasiveness</li>
                      <li>• Requesting anonymity or secrecy</li>
                      <li>• Multiple failed verification attempts</li>
                      <li>• Use of multiple identities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Transaction Patterns</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Deposits followed by immediate withdrawals</li>
                      <li>• Large deposits with minimal gaming</li>
                      <li>• Frequent small deposits to avoid detection</li>
                      <li>• Transactions inconsistent with profile</li>
                      <li>• Use of multiple payment methods</li>
                      <li>• Transactions from high-risk jurisdictions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">5. Compliance Procedures</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Account Freezing</h4>
                    <p className="text-gray-300 text-sm">
                      We may freeze accounts pending investigation if suspicious activity is detected. Customers will be
                      notified unless prohibited by law enforcement.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Suspicious Activity Reports (SARs)</h4>
                    <p className="text-gray-300 text-sm">
                      We file SARs with the Financial Intelligence Analysis Unit (FIAU) Malta within required timeframes
                      for all suspicious transactions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Record Keeping</h4>
                    <p className="text-gray-300 text-sm">
                      All customer identification documents and transaction records are maintained for a minimum of 5
                      years after account closure.
                    </p>
                  </div>
                  <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-700/30">
                    <h4 className="font-semibold text-white mb-2">Customer Cooperation</h4>
                    <p className="text-gray-300 text-sm">
                      Customers must cooperate with all AML procedures. Failure to provide requested documentation may
                      result in account restrictions or closure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-400">6. Sanctions and Prohibited Persons</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Sanctions Screening</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      We screen all customers against international sanctions lists including:
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• UN Security Council Consolidated List</li>
                      <li>• EU Consolidated List</li>
                      <li>• OFAC Specially Designated Nationals List</li>
                      <li>• UK HM Treasury Consolidated List</li>
                      <li>• National sanctions lists</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/30">
                    <h4 className="font-semibold text-white mb-2">Prohibited Persons</h4>
                    <p className="text-gray-300 text-sm">
                      We cannot provide services to individuals or entities on sanctions lists, or those acting on
                      behalf of sanctioned parties. Accounts will be immediately frozen if sanctions matches are
                      identified.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <Card className="bg-green-900/20 border-green-700/50 mt-8">
          <CardContent className="p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Compliance Contact</h3>
                <p className="text-gray-300 text-sm mb-4">
                  For AML compliance matters, questions, or to report suspicious activity:
                </p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>Email: compliance@xemeaino.com</li>
                  <li>Phone: +356 2123 4567 (Compliance Department)</li>
                  <li>Address: Compliance Officer, 123 Gaming Street, St. Julian's, Malta</li>
                  <li>MLRO: John Smith, Certified Anti-Money Laundering Specialist</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
