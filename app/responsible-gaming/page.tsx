import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Clock, AlertTriangle, Phone, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Responsible Gaming - Xemeaino",
  description: "Responsible gaming tools, resources, and support for safe gambling practices.",
}

export default function ResponsibleGamingPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heart className="h-16 w-16 text-red-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Responsible Gaming</h1>
          <p className="text-gray-400 text-lg">Your wellbeing is our priority</p>
          <Badge className="mt-2 bg-red-600">Player Protection</Badge>
        </div>

        <Card className="bg-red-900/20 border-red-700/50 mb-8">
          <CardContent className="p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Important Reminder</h3>
                <p className="text-gray-300 text-sm">
                  Gambling should be entertaining and fun. If gambling is no longer enjoyable or is causing problems in
                  your life, we encourage you to seek help. Remember: gambling can be addictive.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Self-Assessment Tools</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Problem Gambling Warning Signs</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Spending more money than you can afford</li>
                        <li>• Gambling for longer than intended</li>
                        <li>• Chasing losses with bigger bets</li>
                        <li>• Borrowing money to gamble</li>
                        <li>• Neglecting work, family, or social activities</li>
                      </ul>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Feeling anxious or depressed about gambling</li>
                        <li>• Lying about gambling activities</li>
                        <li>• Unable to stop despite wanting to</li>
                        <li>• Gambling to escape problems</li>
                        <li>• Mood swings related to wins/losses</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30">
                    <h4 className="font-semibold text-white mb-2">Self-Assessment Questions</h4>
                    <p className="text-gray-300 text-sm mb-3">Ask yourself these questions honestly:</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>1. Do you gamble more than you originally planned?</li>
                      <li>2. Have you ever lied about your gambling activities?</li>
                      <li>3. Do you feel the need to bet more money to get the same excitement?</li>
                      <li>4. Have you tried to cut back on gambling but couldn't?</li>
                      <li>5. Do you gamble to escape from problems or feelings?</li>
                    </ul>
                    <p className="text-yellow-400 text-sm mt-3 font-medium">
                      If you answered "yes" to any of these questions, consider seeking help.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Player Protection Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-400" />
                    Time Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 text-sm space-y-2 mb-4">
                    <li>• Session time limits (1-24 hours)</li>
                    <li>• Daily time limits</li>
                    <li>• Reality check reminders</li>
                    <li>• Automatic logout after inactivity</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Set Time Limits</Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-400" />
                    Spending Controls
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 text-sm space-y-2 mb-4">
                    <li>• Daily deposit limits</li>
                    <li>• Weekly/monthly deposit limits</li>
                    <li>• Loss limits</li>
                    <li>• Wager limits per bet</li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Set Deposit Limits</Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Self-Exclusion Options</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-700/30 text-center">
                      <h4 className="font-semibold text-white mb-2">24 Hour Break</h4>
                      <p className="text-gray-300 text-sm mb-3">Take a short break from gambling</p>
                      <Button size="sm" variant="outline" className="border-orange-400 text-orange-400 bg-transparent">
                        Take Break
                      </Button>
                    </div>
                    <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30 text-center">
                      <h4 className="font-semibold text-white mb-2">Temporary Exclusion</h4>
                      <p className="text-gray-300 text-sm mb-3">1 week to 6 months exclusion</p>
                      <Button size="sm" variant="outline" className="border-yellow-400 text-yellow-400 bg-transparent">
                        Self-Exclude
                      </Button>
                    </div>
                    <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/30 text-center">
                      <h4 className="font-semibold text-white mb-2">Permanent Exclusion</h4>
                      <p className="text-gray-300 text-sm mb-3">Permanent account closure</p>
                      <Button size="sm" variant="outline" className="border-red-400 text-red-400 bg-transparent">
                        Permanent Ban
                      </Button>
                    </div>
                  </div>
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/30">
                    <h4 className="font-semibold text-white mb-2">Important Notes</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Self-exclusion cannot be reversed during the chosen period</li>
                      <li>• We will close your account and return any remaining balance</li>
                      <li>• Marketing communications will be stopped immediately</li>
                      <li>• Consider registering with GAMSTOP for UK-wide exclusion</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Support Organizations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">International Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-white">GamCare</h4>
                      <p className="text-gray-300 text-sm">UK-based support service</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-white">BeGambleAware</h4>
                      <p className="text-gray-300 text-sm">Information and support</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-white">Gambling Therapy</h4>
                      <p className="text-gray-300 text-sm">Global online support</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Helplines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-green-900/20 rounded-lg border border-green-700/30">
                    <div className="flex items-center mb-2">
                      <Phone className="h-4 w-4 text-green-400 mr-2" />
                      <h4 className="font-semibold text-white">GamCare Helpline</h4>
                    </div>
                    <p className="text-green-400 font-mono">0808 8020 133</p>
                    <p className="text-gray-300 text-sm">Free, confidential, 24/7</p>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-700/30">
                    <div className="flex items-center mb-2">
                      <Phone className="h-4 w-4 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-white">National Problem Gambling Helpline</h4>
                    </div>
                    <p className="text-blue-400 font-mono">1-800-522-4700</p>
                    <p className="text-gray-300 text-sm">US & Canada, 24/7</p>
                  </div>
                  <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-700/30">
                    <div className="flex items-center mb-2">
                      <Phone className="h-4 w-4 text-purple-400 mr-2" />
                      <h4 className="font-semibold text-white">Gambling Help Online</h4>
                    </div>
                    <p className="text-purple-400 font-mono">1800 858 858</p>
                    <p className="text-gray-300 text-sm">Australia, 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Underage Gambling Prevention</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Age Verification</h4>
                    <p className="text-gray-300 text-sm">
                      We use advanced age verification systems to prevent underage gambling. All players must be 18+ or
                      the legal gambling age in their jurisdiction.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Parental Controls</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Use parental control software to block gambling sites</li>
                      <li>• Monitor your children's internet activity</li>
                      <li>• Educate children about gambling risks</li>
                      <li>• Report suspected underage gambling to us immediately</li>
                    </ul>
                  </div>
                  <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-700/30">
                    <h4 className="font-semibold text-white mb-2">Report Underage Gambling</h4>
                    <p className="text-gray-300 text-sm">
                      If you suspect someone under 18 is using our services, please contact us immediately at
                      compliance@casinoroyal.com or call +356 2123 4567.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <Card className="bg-red-900/20 border-red-700/50 mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Need Help Right Now?</h3>
              <p className="text-gray-300 text-sm mb-6">
                If you're struggling with gambling problems, don't wait. Help is available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-red-600 hover:bg-red-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Helpline Now
                </Button>
                <Button variant="outline" className="border-red-400 text-red-400 bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Chat Support
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
