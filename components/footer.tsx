import Link from "next/link"
import { Crown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Shield, Award } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">Xemeaino</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Experience the ultimate thrill of premium online gaming with our exclusive collection of casino games and
              bonuses.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/qpkgf" className="text-gray-400 hover:text-white">
                  Bonuses
                </Link>
              </li>
              <li>
                <Link href="#games" className="text-gray-400 hover:text-white">
                  Games
                </Link>
              </li>
              <li>
                <Link href="#tournaments" className="text-gray-400 hover:text-white">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Security</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-gray-400 hover:text-white">
                  Responsible Gaming
                </Link>
              </li>
              <li>
                <Link href="/aml-policy" className="text-gray-400 hover:text-white">
                  AML Policy
                </Link>
              </li>
              <li>
                <Link href="/complaints" className="text-gray-400 hover:text-white">
                  Complaints
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Licenses</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-400">support@istfmsq.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-400">+356 2123 4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-400">24/7 Live Chat Support</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-gray-400 text-sm">MGA License: MGA/B2C/123/2024</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-400 text-sm">eCOGRA Certified</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Xemeaino Limited. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">18+ Only</span>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-gray-400 text-sm">Play Responsibly</span>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-gray-400 text-sm">Licensed in Malta</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
