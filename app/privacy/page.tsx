import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Database } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - Xemeaino",
  description: "Privacy policy and data protection information for Xemeaino users.",
}

export default function PrivacyPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-lg">Last Updated: January 8, 2025</p>
          <Badge className="mt-2 bg-blue-600">GDPR Compliant</Badge>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Data Controller Information</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Xemeaino Limited is the data controller for your personal information. We are committed to
                    protecting your privacy and ensuring compliance with applicable data protection laws, including the
                    General Data Protection Regulation (GDPR).
                  </p>
                  <div className="bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Contact Details:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>Data Protection Officer: dpo@xemeaino.com</li>
                      <li>Address: 123 Gaming Street, St. Julian's, Malta</li>
                      <li>Registration: C12345, Malta</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Information We Collect</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Database className="h-5 w-5 mr-2 text-blue-400" />
                      Personal Information
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-2 ml-7">
                      <li>• Full name, date of birth, and contact information</li>
                      <li>• Government-issued identification documents</li>
                      <li>• Address verification documents</li>
                      <li>• Payment method information</li>
                      <li>• Employment and income information (for VIP accounts)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Eye className="h-5 w-5 mr-2 text-blue-400" />
                      Usage Information
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-2 ml-7">
                      <li>• Gaming activity and transaction history</li>
                      <li>• Device information and IP addresses</li>
                      <li>• Browser type and operating system</li>
                      <li>• Website navigation patterns</li>
                      <li>• Communication records with customer support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Lock className="h-5 w-5 mr-2 text-blue-400" />
                      Cookies and Tracking
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-2 ml-7">
                      <li>• Essential cookies for website functionality</li>
                      <li>• Analytics cookies for service improvement</li>
                      <li>• Marketing cookies for personalized offers</li>
                      <li>• Session cookies for security purposes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">3. How We Use Your Information</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Service Provision</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Account creation and management</li>
                      <li>• Processing deposits and withdrawals</li>
                      <li>• Providing gaming services</li>
                      <li>• Customer support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Legal Compliance</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Identity verification (KYC)</li>
                      <li>• Anti-money laundering (AML)</li>
                      <li>• Responsible gambling monitoring</li>
                      <li>• Regulatory reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Security & Fraud Prevention</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Account security monitoring</li>
                      <li>• Fraud detection and prevention</li>
                      <li>• Risk assessment</li>
                      <li>• System security</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Marketing & Communication</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Promotional offers (with consent)</li>
                      <li>• Service updates</li>
                      <li>• Account notifications</li>
                      <li>• Customer surveys</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Your Rights Under GDPR</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30">
                      <h4 className="font-semibold text-white mb-2">Right of Access</h4>
                      <p className="text-gray-300 text-sm">Request a copy of your personal data we hold</p>
                    </div>
                    <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                      <h4 className="font-semibold text-white mb-2">Right to Rectification</h4>
                      <p className="text-gray-300 text-sm">Correct inaccurate or incomplete data</p>
                    </div>
                    <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/30">
                      <h4 className="font-semibold text-white mb-2">Right to Erasure</h4>
                      <p className="text-gray-300 text-sm">Request deletion of your personal data</p>
                    </div>
                    <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30">
                      <h4 className="font-semibold text-white mb-2">Right to Portability</h4>
                      <p className="text-gray-300 text-sm">Receive your data in a structured format</p>
                    </div>
                  </div>
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-700/30">
                    <h4 className="font-semibold text-white mb-2">How to Exercise Your Rights</h4>
                    <p className="text-gray-300 text-sm">
                      Contact our Data Protection Officer at dpo@xemeaino.com or use the data request form in your
                      account settings. We will respond within 30 days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Data Sharing and Third Parties</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Service Providers</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      We share data with trusted third parties who provide services on our behalf:
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1 ml-4">
                      <li>• Payment processors for transaction handling</li>
                      <li>• Identity verification services</li>
                      <li>• Customer support platforms</li>
                      <li>• Marketing and analytics providers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Legal Requirements</h4>
                    <p className="text-gray-300 text-sm">
                      We may disclose information when required by law, court order, or regulatory authority, including
                      anti-money laundering and responsible gambling obligations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Data Security and Retention</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Security Measures</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• 256-bit SSL encryption for data transmission</li>
                      <li>• Secure data centers with physical access controls</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Employee training on data protection</li>
                      <li>• Multi-factor authentication for account access</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Data Retention</h4>
                    <p className="text-gray-300 text-sm">
                      We retain personal data for as long as necessary to provide services and comply with legal
                      obligations. Account data is typically retained for 7 years after account closure for regulatory
                      compliance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <Card className="bg-blue-900/20 border-blue-700/50 mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Questions About This Policy?</h3>
              <p className="text-gray-300 text-sm mb-4">
                If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to
                contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-sm">
                  <strong className="text-white">Email:</strong>
                  <span className="text-gray-300 ml-2">dpo@xemeaino.com</span>
                </div>
                <div className="text-sm">
                  <strong className="text-white">Phone:</strong>
                  <span className="text-gray-300 ml-2">+356 2123 4567</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
