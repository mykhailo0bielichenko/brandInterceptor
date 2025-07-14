"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Gift, Users, Building, HelpCircle, Shield } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { openSignup } = useAuth()

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Bonuses", href: "/qpkgf", icon: Gift },
    { name: "Our Team", href: "/team", icon: Users },
    { name: "Company Info", href: "/owner", icon: Building },
    { name: "Support", href: "/support", icon: HelpCircle },
    { name: "Responsible Gaming", href: "/responsible-gaming", icon: Shield },
  ]

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">Xemeaino</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              )
            })}
            <Button onClick={openSignup} className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold">
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              {navigation.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                )
              })}
              <div className="px-3 py-2">
                <Button
                  onClick={() => {
                    openSignup()
                    setIsOpen(false)
                  }}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold"
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
