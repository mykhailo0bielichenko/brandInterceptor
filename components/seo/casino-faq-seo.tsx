"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export default function CasinoFaqSeo() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "Creating an account is simple! Click the 'Sign Up' button, provide your email, create a secure password, and verify your account through the email we send you. The entire process takes less than 2 minutes.",
        },
        {
          question: "What documents do I need for verification?",
          answer:
            "For account verification, you'll need a government-issued photo ID (passport, driver's license, or national ID card) and a recent utility bill or bank statement showing your address. This helps us ensure secure and responsible gaming.",
        },
        {
          question: "Is it safe to play online casino games?",
          answer:
            "Yes, our casino is fully licensed and regulated. We use 256-bit SSL encryption to protect your data, and all our games are tested for fairness by independent auditors. We're committed to providing a safe and secure gaming environment.",
        },
        {
          question: "Can I play for free before depositing money?",
          answer:
            "Most of our slot games offer a demo mode where you can play with virtual credits. This lets you learn the games and have fun without risking real money. Simply select 'Demo Play' on any eligible game.",
        },
      ],
    },
    {
      title: "Deposits & Withdrawals",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit/debit cards (Visa, Mastercard), e-wallets (PayPal, Skrill, Neteller), bank transfers, and cryptocurrencies (Bitcoin, Ethereum). All transactions are processed securely with industry-standard encryption.",
        },
        {
          question: "How long do withdrawals take?",
          answer:
            "Withdrawal times vary by method: e-wallets (0-24 hours), credit/debit cards (1-3 business days), bank transfers (3-5 business days), and cryptocurrencies (0-1 hour). First-time withdrawals may take longer due to verification requirements.",
        },
        {
          question: "Are there any fees for deposits or withdrawals?",
          answer:
            "We don't charge fees for deposits or withdrawals. However, your bank or payment provider may charge their own fees. We recommend checking with your payment provider for their fee structure.",
        },
        {
          question: "What's the minimum deposit amount?",
          answer:
            "The minimum deposit is $10 for most payment methods. Some methods like bank transfers may have higher minimums. You can see the exact limits for each payment method during the deposit process.",
        },
      ],
    },
    {
      title: "Bonuses & Promotions",
      questions: [
        {
          question: "How do casino bonuses work?",
          answer:
            "Casino bonuses give you extra funds to play with. For example, a 100% match bonus doubles your deposit. Most bonuses have wagering requirements, meaning you need to play through the bonus amount a certain number of times before you can withdraw winnings.",
        },
        {
          question: "What are wagering requirements?",
          answer:
            "Wagering requirements specify how many times you must play through a bonus before you can withdraw winnings. For example, a $100 bonus with 30x wagering means you need to wager $3,000 total. Different games contribute differently to these requirements.",
        },
        {
          question: "Can I withdraw my bonus immediately?",
          answer:
            "No, bonuses cannot be withdrawn immediately. You must complete the wagering requirements first. However, any winnings from playing with bonus funds can be withdrawn once you've met the requirements.",
        },
        {
          question: "Do bonuses expire?",
          answer:
            "Yes, most bonuses have expiration dates, typically 7-30 days from when they're credited to your account. Make sure to use your bonuses and complete wagering requirements before they expire, or you'll lose the bonus and any associated winnings.",
        },
      ],
    },
    {
      title: "Games & Software",
      questions: [
        {
          question: "What types of games do you offer?",
          answer:
            "We offer a comprehensive selection including 500+ slot games, classic table games (blackjack, roulette, baccarat), live dealer games with real dealers, video poker, and specialty games. All games are provided by top-tier software developers.",
        },
        {
          question: "Are the games fair and random?",
          answer:
            "Yes, all our games use certified Random Number Generators (RNG) and are regularly audited by independent testing agencies like eCOGRA and iTech Labs. Game RTPs (Return to Player percentages) are clearly displayed and verified.",
        },
        {
          question: "Can I play on my mobile device?",
          answer:
            "Our casino is fully optimized for mobile play. You can access all games and features through your mobile browser - no app download required. The mobile experience is designed to be just as smooth as desktop play.",
        },
        {
          question: "What's the difference between RTP and house edge?",
          answer:
            "RTP (Return to Player) is the percentage of wagered money a game returns to players over time. House edge is the casino's mathematical advantage. For example, a 96% RTP means a 4% house edge. Higher RTP games are generally better for players.",
        },
      ],
    },
    {
      title: "Account & Security",
      questions: [
        {
          question: "How do I reset my password?",
          answer:
            "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a secure reset link. Follow the instructions in the email to create a new password. For security, reset links expire after 24 hours.",
        },
        {
          question: "Can I set deposit limits?",
          answer:
            "Yes, we offer comprehensive responsible gaming tools including daily, weekly, and monthly deposit limits. You can also set loss limits, session time limits, and take cooling-off periods. These tools help you maintain control over your gaming.",
        },
        {
          question: "How do I close my account?",
          answer:
            "You can temporarily suspend or permanently close your account by contacting our customer support team. We also offer cooling-off periods (24 hours to 6 weeks) if you need a break but don't want to close your account permanently.",
        },
        {
          question: "Is my personal information secure?",
          answer:
            "Yes, we use bank-level 256-bit SSL encryption to protect all personal and financial data. We never share your information with third parties without your consent, and we comply with strict data protection regulations including GDPR.",
        },
      ],
    },
    {
      title: "Customer Support",
      questions: [
        {
          question: "How can I contact customer support?",
          answer:
            "Our customer support team is available 24/7 through live chat, email (support@casino.com), and phone. Live chat is the fastest way to get help, with average response times under 2 minutes during peak hours.",
        },
        {
          question: "What languages do you support?",
          answer:
            "Our casino and customer support are available in English, Spanish, French, German, Italian, and Portuguese. You can change your language preference in your account settings or by contacting support.",
        },
        {
          question: "Do you have a VIP program?",
          answer:
            "Yes, our VIP program offers exclusive benefits including personal account managers, higher deposit/withdrawal limits, faster payouts, exclusive bonuses, and invitations to special events. VIP status is earned through regular play and loyalty.",
        },
        {
          question: "How do I make a complaint?",
          answer:
            "If you have a complaint, first contact our customer support team who will work to resolve the issue quickly. If you're not satisfied with the resolution, you can escalate to our complaints department or contact our licensing authority's dispute resolution service.",
        },
      ],
    },
  ]

  let questionIndex = 0

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">
            Find answers to the most common questions about our casino, games, bonuses, and more.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">{category.title}</h3>
              <div className="space-y-4">
                {category.questions.map((faq) => {
                  const currentIndex = questionIndex++
                  const isOpen = openItems.includes(currentIndex)

                  return (
                    <Card key={currentIndex} className="bg-gray-800 border-gray-700">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(currentIndex)}
                          className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
                        >
                          <h4 className="text-lg font-semibold text-white pr-4">{faq.question}</h4>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-blue-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-700/30">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Our customer support team is available 24/7 to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Live Chat Support
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
