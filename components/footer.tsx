"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, Linkedin, ExternalLink } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home page with anchor
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    // If we're on the home page, scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-black/40 border-t border-white/10 py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SEO Traffic Intercept Platform</h3>
            <p className="text-gray-400 text-sm mb-4">
              Automated casino brand traffic capture system. Built for scale, designed for results.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white/20 hover:bg-white/10 bg-transparent"
              onClick={() => (window.location.href = "/about")}
            >
              About the Founder
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Mykhailo Bielichenko</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <a href="tel:+4793931970" className="hover:text-white transition-colors">
                  +47 939 31 970
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:maikl.seo@gmail.com" className="hover:text-white transition-colors">
                  maikl.seo@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/mykhailo-bielichenko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SEO Traffic Intercept Platform. Founded by Mykhailo Bielichenko. Prepared January 15, 2025.
          </p>
        </div>
      </div>
    </footer>
  )
}
