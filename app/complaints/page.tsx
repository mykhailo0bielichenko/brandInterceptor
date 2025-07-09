import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Clock, CheckCircle, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Complaints Procedure - Xemeaino",
  description: "How to file a complaint and our dispute resolution process.",
}

export default function ComplaintsPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <MessageSquare className="h-16 w-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Complaints Procedure</h1>
          <p className="text-gray-400 text-lg">Fair and transparent dispute resolution</p>
          <Badge className="mt-2 bg-blue-600">Free Service</Badge>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">1. How to File a Complaint</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30 text-center">
                      <Mail className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-2">Step 1: Contact Us</h4>
                      <p className="text-gray-300 text-sm">Email complaints@xemeaino.com with full details</p>
                    </div>
                    <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30 text-center">
                      <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-2">Step 2: Investigation</h4>
                      <p className="text-gray-300 text-sm">We investigate within 24-48 hours</p>
                    </div>
                    <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30 text-center">
                      <CheckCircle className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-2">Step 3: Resolution</h4>
                      <p className="text-gray-300 text-sm">Final response within 8 weeks</p>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                    <h4 className="font-semibold text-white mb-2">Required Information</h4>
                    <p className="text-gray-300 text-sm mb-3">To process your complaint efficiently, please include:</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Your full name and account username</li>
                      <li>• Date and time of the incident</li>
                      <li>• Detailed description of the issue</li>
                      <li>• Any relevant screenshots or documentation</li>
                      <li>• Transaction IDs or game round numbers</li>
                      <li>• Your preferred resolution</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Complaint Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Account & Payment Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Deposit or withdrawal problems</li>
                    <li>• Account verification delays</li>
                    <li>• Unauthorized account access</li>
                    <li>• Payment method issues</li>
                    <li>• Account closure disputes</li>
                    <li>• Bonus terms disagreements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Gaming & Technical Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Game malfunctions or errors</li>
                    <li>• Disputed game outcomes</li>
                    <li>• Technical connectivity issues</li>
                    <li>• Live dealer disputes</li>
                    <li>• Software bugs or glitches</li>
                    <li>• RNG fairness concerns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Resolution Timeline</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-900/20 rounded-lg border border-green-700/30">
                    <div>
                      <h4 className="font-semibold text-white">Acknowledgment</h4>
                      <p className="text-gray-300 text-sm">We confirm receipt of your complaint</p>
                    </div>
                    <Badge className="bg-green-600">Within 24 hours</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
                    <div>
                      <h4 className="font-semibold text-white">Initial Response</h4>
                      <p className="text-gray-300 text-sm">First assessment and update</p>
                    </div>
                    <Badge className="bg-yellow-600">Within 48 hours</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-900/20 rounded-lg border border-blue-700/30">
                    <div>
                      <h4 className="font-semibold text-white">Investigation</h4>
                      <p className="text-gray-300 text-sm">Thorough review of all evidence</p>
                    </div>
                    <Badge className="bg-blue-600">Within 2 weeks</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-900/20 rounded-lg border border-purple-700/30">
                    <div>
                      <h4 className="font-semibold text-white">Final Response</h4>
                      <p className="text-gray-300 text-sm">Complete resolution or explanation</p>
                    </div>
                    <Badge className="bg-purple-600">Within 8 weeks</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">4. External Dispute Resolution</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Malta Gaming Authority (MGA)</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      If you're not satisfied with our final response, you can escalate your complaint to our licensing
                      authority:
                    </p>
                    <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Website: mga.org.mt</li>
                        <li>• Email: complaints@mga.org.mt</li>
                        <li>• Phone: +356 2546 9000</li>
                        <li>• Address: Triq l-Imdina, Zone 1, Central Business District, Birkirkara CBD 1010, Malta</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Alternative Dispute Resolution (ADR)</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      We also work with independent ADR providers for impartial resolution:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30">
                        <h5 className="font-semibold text-white mb-2">eCOGRA</h5>
                        <p className="text-gray-300 text-sm">
                          Independent dispute resolution service for online gaming
                        </p>
                      </div>
                      <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-700/30">
                        <h5 className="font-semibold text-white mb-2">IBAS</h5>
                        <p className="text-gray-300 text-sm">Independent Betting Adjudication Service</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Complaints Department</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-700 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-400 mr-3" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300 text-sm">complaints@xemeaino.com</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-700 rounded-lg">
                    <Phone className="h-5 w-5 text-green-400 mr-3" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-300 text-sm">+356 2123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-700 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-purple-400 mr-3" />
                    <div>
                      <p className="text-white font-medium">Live Chat</p>
                      <p className="text-gray-300 text-sm">Available 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Postal Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="text-white font-medium mb-2">Complaints Manager</p>
                    <p className="text-gray-300 text-sm">
                      Xemeaino Limited
                      <br />
                      123 Gaming Street
                      <br />
                      St. Julian's STJ 1234
                      <br />
                      Malta
                    </p>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
                    <p className="text-yellow-400 text-sm font-medium">Important Note:</p>
                    <p className="text-gray-300 text-sm">
                      Email complaints are processed faster than postal mail. We recommend using electronic
                      communication for urgent matters.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        <Card className="bg-blue-900/20 border-blue-700/50 mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Need to File a Complaint?</h3>
              <p className="text-gray-300 text-sm mb-6">
                We're committed to resolving all complaints fairly and promptly. Don't hesitate to contact us if you
                have any concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Complaint
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-400 bg-transparent">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Chat Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
