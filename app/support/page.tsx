import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  CreditCard,
  Shield,
  User,
  Search,
  ChevronRight,
} from "lucide-react"
import { StructuredData } from "@/components/seo/structured-data"

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Click the 'Sign Up' button, fill in your details, verify your email, and complete the age verification process. You must be 18+ to register.",
  },
  {
    question: "What documents do I need for verification?",
    answer:
      "You'll need a government-issued photo ID (passport, driver's license) and a recent utility bill or bank statement for address verification.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "E-wallets: 24-48 hours, Credit/Debit cards: 3-5 business days, Bank transfers: 5-7 business days. First withdrawal requires account verification.",
  },
  {
    question: "Are the games fair?",
    answer:
      "Yes, all our games use certified Random Number Generators (RNG) tested by independent laboratories like eCOGRA to ensure fair play.",
  },
  {
    question: "What are wagering requirements?",
    answer:
      "Wagering requirements are the number of times you must play through a bonus before you can withdraw. For example, a 35x requirement on a $100 bonus means you must wager $3,500.",
  },
  {
    question: "How do I set deposit limits?",
    answer:
      "Go to your account settings, select 'Responsible Gaming', and set daily, weekly, or monthly deposit limits. Changes take 24 hours to take effect.",
  },
  {
    question: "Can I self-exclude?",
    answer:
      "Yes, we offer 24-hour cooling off, temporary exclusion (1 week to 6 months), and permanent self-exclusion options in your account settings.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we use 256-bit SSL encryption, are PCI DSS compliant, and follow strict data protection regulations including GDPR.",
  },
]

export const metadata = {
  title: "Support Center - Get Help 24/7 | Xemeaino Casino",
  description:
    "Get instant help with our comprehensive support center. Live chat, email support, FAQs, and guides for account, payments, and gaming questions.",
  keywords: "casino support, help center, customer service, live chat, FAQ, account help, payment support",
}

export default function SupportPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-16">
      <StructuredData type="faq" data={{ faqs }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Support Center</h1>
          <p className="text-gray-400 text-lg">Get the help you need, when you need it</p>
          <Badge className="mt-2 bg-green-600">24/7 Available</Badge>
        </div>

        {/* Contact Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-blue-400" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Get instant help from our gaming experts</p>
                <div className="flex items-center text-green-400 text-sm mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  Available 24/7
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Live Chat</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="h-6 w-6 mr-2 text-green-400" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Detailed assistance for complex queries</p>
                <div className="flex items-center text-yellow-400 text-sm mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  Response within 2 hours
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Mail className="h-4 w-4 mr-2" />
                  support@xemeaino.com
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Phone className="h-6 w-6 mr-2 text-purple-400" />
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Speak directly with our support team</p>
                <div className="flex items-center text-blue-400 text-sm mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  Daily 8AM - 2AM CET
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Phone className="h-4 w-4 mr-2" />
                  +356 2123 4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Help Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Quick Help Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <User className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Account Help</h3>
                <p className="text-gray-400 text-sm mb-4">Registration, verification, login issues</p>
                <ChevronRight className="h-5 w-5 text-gray-400 mx-auto" />
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <CreditCard className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Payments</h3>
                <p className="text-gray-400 text-sm mb-4">Deposits, withdrawals, payment methods</p>
                <ChevronRight className="h-5 w-5 text-gray-400 mx-auto" />
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <HelpCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Bonuses</h3>
                <p className="text-gray-400 text-sm mb-4">Bonus terms, wagering, promotions</p>
                <ChevronRight className="h-5 w-5 text-gray-400 mx-auto" />
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                <p className="text-gray-400 text-sm mb-4">Account security, responsible gaming</p>
                <ChevronRight className="h-5 w-5 text-gray-400 mx-auto" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Search Help */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-700/50">
            <CardContent className="p-8 text-center">
              <Search className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-gray-300 mb-6">
                Our comprehensive help center has detailed guides and tutorials for all aspects of gaming with Xemeaino.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Search className="h-4 w-4 mr-2" />
                  Search Help Center
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-400 bg-transparent">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Expert Team */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Expert Support Team</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  AL
                </div>
                <h4 className="text-lg font-semibold text-white">Anna Lopez</h4>
                <p className="text-blue-400 text-sm">Senior Support Manager</p>
                <p className="text-gray-400 text-sm mt-2">
                  8+ years in customer support, specializes in account and payment issues
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  DK
                </div>
                <h4 className="text-lg font-semibold text-white">David Kim</h4>
                <p className="text-green-400 text-sm">Technical Support Lead</p>
                <p className="text-gray-400 text-sm mt-2">
                  Gaming industry veteran, expert in game mechanics and technical issues
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  EB
                </div>
                <h4 className="text-lg font-semibold text-white">Emma Brown</h4>
                <p className="text-orange-400 text-sm">VIP Support Specialist</p>
                <p className="text-gray-400 text-sm mt-2">
                  Dedicated to high-value players, certified in responsible gaming practices
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
