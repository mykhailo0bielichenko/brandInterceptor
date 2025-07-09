import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, FileText } from "lucide-react"

export const metadata = {
  title: "Terms & Conditions - Xemeaino",
  description: "Complete terms and conditions for Xemeaino online gaming platform.",
}

export default function TermsPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-400 text-lg">Last Updated: January 8, 2025</p>
          <Badge className="mt-2 bg-green-600">Version 2.1</Badge>
        </div>

        <Card className="bg-red-900/20 border-red-700/50 mb-8">
          <CardContent className="p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Important Notice</h3>
                <p className="text-gray-300 text-sm">
                  By accessing and using Casino Royal services, you agree to be bound by these Terms and Conditions.
                  Please read them carefully before proceeding. If you do not agree with any part of these terms, you
                  must not use our services.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">1. Definitions and Interpretation</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">"Company", "We", "Us", "Our"</h4>
                    <p className="text-gray-300 text-sm">
                      Refers to Xemeaino Limited, a company incorporated under the laws of Malta, holding license
                      MGA/B2C/123/2024 issued by the Malta Gaming Authority.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">"Player", "User", "You", "Your"</h4>
                    <p className="text-gray-300 text-sm">
                      Refers to any individual who registers an account and uses our gaming services.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">"Services"</h4>
                    <p className="text-gray-300 text-sm">
                      All gaming services, software, and related services provided through our platform.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">"Account"</h4>
                    <p className="text-gray-300 text-sm">
                      The personal gaming account created by a Player to access our Services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">2. Eligibility and Account Registration</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">2.1 Age Requirements</h4>
                    <p className="text-gray-300 text-sm">
                      You must be at least 18 years old or the legal gambling age in your jurisdiction, whichever is
                      higher, to create an account and use our services.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">2.2 Geographic Restrictions</h4>
                    <p className="text-gray-300 text-sm">
                      Our services are not available to residents of the United States, France, Turkey, and other
                      restricted jurisdictions as listed in our Geographic Restrictions policy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">2.3 Account Limitations</h4>
                    <p className="text-gray-300 text-sm">
                      Each person may only maintain one account. Multiple accounts will result in closure of all
                      accounts and forfeiture of funds.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">2.4 Verification Requirements</h4>
                    <p className="text-gray-300 text-sm">
                      You must provide accurate, complete, and current information during registration. We reserve the
                      right to verify your identity at any time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">3. Deposits and Withdrawals</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">3.1 Deposit Methods</h4>
                    <p className="text-gray-300 text-sm">
                      We accept deposits via credit/debit cards, e-wallets, bank transfers, and cryptocurrencies.
                      Minimum deposit is $20. Maximum deposit limits apply based on payment method.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">3.2 Withdrawal Processing</h4>
                    <p className="text-gray-300 text-sm">
                      Withdrawals are processed within 24-72 hours after approval. First withdrawal requires account
                      verification. Minimum withdrawal is $50.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">3.3 Anti-Money Laundering</h4>
                    <p className="text-gray-300 text-sm">
                      All deposits must be wagered at least once before withdrawal. We reserve the right to request
                      additional documentation for large transactions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">4. Bonuses and Promotions</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">4.1 Bonus Terms</h4>
                    <p className="text-gray-300 text-sm">
                      All bonuses are subject to specific terms and conditions. Wagering requirements must be completed
                      before withdrawal of bonus funds.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">4.2 Bonus Abuse</h4>
                    <p className="text-gray-300 text-sm">
                      We reserve the right to void bonuses and winnings if we detect bonus abuse, including but not
                      limited to irregular play patterns.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">4.3 Promotional Changes</h4>
                    <p className="text-gray-300 text-sm">
                      We reserve the right to modify or cancel promotions at any time with reasonable notice.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">5. Game Rules and Fair Play</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">5.1 Random Number Generation</h4>
                    <p className="text-gray-300 text-sm">
                      All games use certified Random Number Generators (RNG) tested by independent testing laboratories
                      to ensure fair play.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">5.2 Game Malfunctions</h4>
                    <p className="text-gray-300 text-sm">
                      In case of game malfunction, all affected bets and payouts are void. We will investigate and
                      resolve such issues promptly.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">5.3 Prohibited Activities</h4>
                    <p className="text-gray-300 text-sm">
                      Cheating, collusion, use of automated software, and any form of advantage play are strictly
                      prohibited and will result in account closure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">6. Account Closure and Suspension</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">6.1 Voluntary Closure</h4>
                    <p className="text-gray-300 text-sm">
                      You may close your account at any time by contacting customer support. Outstanding balances will
                      be returned after verification.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">6.2 Involuntary Closure</h4>
                    <p className="text-gray-300 text-sm">
                      We reserve the right to close accounts for violation of terms, suspicious activity, or regulatory
                      requirements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">6.3 Dormant Accounts</h4>
                    <p className="text-gray-300 text-sm">
                      Accounts inactive for 12 months may be charged a monthly maintenance fee. Accounts inactive for 24
                      months may be closed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">7. Limitation of Liability</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">7.1 Service Availability</h4>
                    <p className="text-gray-300 text-sm">
                      We do not guarantee uninterrupted service availability. We are not liable for losses due to
                      service interruptions or technical issues.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">7.2 Maximum Liability</h4>
                    <p className="text-gray-300 text-sm">
                      Our total liability to you shall not exceed the amount in your account balance at the time of the
                      incident.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">8. Governing Law and Disputes</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">8.1 Governing Law</h4>
                    <p className="text-gray-300 text-sm">
                      These terms are governed by the laws of Malta. Any disputes will be resolved in the courts of
                      Malta.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">8.2 Dispute Resolution</h4>
                    <p className="text-gray-300 text-sm">
                      We encourage resolution through our internal complaint procedure. Unresolved disputes may be
                      referred to the Malta Gaming Authority.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <Card className="bg-blue-900/20 border-blue-700/50 mt-8">
          <CardContent className="p-6">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>
                <p className="text-gray-300 text-sm mb-2">
                  For questions about these Terms & Conditions, please contact:
                </p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>Email: support@xemeaino.com</li>
                  <li>Phone: +356 2123 4567</li>
                  <li>Address: 123 Gaming Street, St. Julian's, Malta</li>
                  <li>License: MGA/B2C/123/2024</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
