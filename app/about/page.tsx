"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Award,
  ExternalLink,
  Phone,
  Mail,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import { CalendlyScheduler } from "@/components/calendly-scheduler"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const experiences = [
    {
      title: "Consultant",
      company: "Eviny",
      period: "2023 - Jun 2025 · 2 yrs 6 mos",
      location: "Bergen, Vestland, Norway · On-site",
      type: "Full-time",
      skills: [
        "English",
        "HTML",
        "Search Engine Optimization (SEO)",
        "SEOmoz",
        "Google Analytics",
        "Search Engine Technology",
        "Next.js",
        "React.js",
        "TanStack Query",
        "TypeScript",
        "Application Programming Interfaces (API)",
      ],
      description: "Technical SEO consulting with modern web technologies including Next.js 15 and React development.",
      color: "border-green-500 bg-green-900/10",
    },
    {
      title: "SEO Manager",
      company: "LeadsMarket.com",
      period: "Nov 2021 - Dec 2022 · 1 yr 2 mos",
      location: "Kyiv, Kyiv City, Ukraine",
      type: "Full-time",
      achievements: [
        "Business plan creation and C-level presentation for product approval",
        "Technical SEO management for 300 B2C and 10 B2B company sites",
        "Participation in link building, content creation, and design",
        "SWOT SEO analysis for new site categories and functionality improvements",
        "Freelancer management and testing on various platforms",
        "ROI maximization workshops organization",
        "User intention hypothesis formation resulting in 21% conversion increase and 60% bounce rate reduction",
      ],
      skills: [
        "Data Analysis",
        "Product Management",
        "Visual Communication",
        "Key Performance Indicators",
        "Content Strategy",
        "Analytics",
        "Leadership",
        "Team Management",
        "Marketing Analytics",
        "Web Design",
      ],
      color: "border-blue-500 bg-blue-900/10",
    },
    {
      title: "Search Engine Optimization Specialist",
      company: "EvoPlay",
      period: "Mar 2016 - Oct 2021 · 5 yrs 8 mos",
      location: "Kyiv, Kyiv City, Ukraine",
      type: "Full-time",
      description:
        "Built international aggregator of online casino and betting offers from scratch. Created unique complaints system helping players resolve issues with online casinos and recover funds. Developed advanced casino ranking algorithm.",
      responsibilities: [
        "Market research and competitive analysis for online casino portal",
        "Defining short and long-term product vision and roadmap",
        "User stories writing workshops and backlog feature creation",
        "Roadmap communication to stakeholders",
        "Team assembly and management (content managers, dev team, UX/UI designers)",
        "Writing user stories, epics, and acceptance criteria",
        "Backlog management",
      ],
      skills: [
        "Product Development",
        "Search Engine Optimization (SEO)",
        "Content Strategy",
        "Leadership Development",
        "Marketing Automation",
        "Team Management",
        "Google Search Console",
      ],
      color: "border-purple-500 bg-purple-900/10",
    },
    {
      title: "Search Engine Optimization Manager",
      company: "Boosta",
      period: "May 2014 - Feb 2016 · 1 yr 10 mos",
      location: "Kiev Region, Ukraine",
      type: "Full-time",
      description:
        "Created and promoted several international online casino sites. Developed complex security systems to solve SEO challenges in the gambling industry.",
      skills: [
        "Visual Communication",
        "Content Strategy",
        "Analytics",
        "Marketing Automation",
        "Data Analytics",
        "Google Search Console",
        "Cascading Style Sheets (CSS)",
      ],
      color: "border-yellow-500 bg-yellow-900/10",
    },
    {
      title: "SEO Specialist",
      company: "Devellar",
      period: "Oct 2013 - May 2014 · 8 mos",
      location: "Kiev Region, Ukraine",
      type: "Full-time",
      description:
        "Spearheaded promotion of educational products in the US market through comprehensive SEO strategies.",
      achievements: [
        "Increased organic traffic by 75% within six months",
        "Achieved top 5 rankings for 20+ high-volume educational keywords",
        "Boosted conversion rates by 30% through optimized landing pages",
        "Conducted in-depth competitor analysis and backlink profiling",
        "Created optimized landing pages with targeted keyword focus",
        "Developed UX, content, and link-building requirements",
        "Performed cyclical analysis using Google Analytics, SEMrush, and Ahrefs",
      ],
      skills: ["Analytics", "Communication", "Cascading Style Sheets (CSS)"],
      color: "border-red-500 bg-red-900/10",
    },
    {
      title: "Head of SEO",
      company: "Dreamvention",
      period: "2011 - 2013 · 2 yrs",
      location: "Global",
      description: "Provided SEO services for clients around the world, leading SEO strategy and implementation.",
      skills: ["E-commerce SEO", "Content Strategy", "Analytics", "Communication"],
      color: "border-indigo-500 bg-indigo-900/10",
    },
    {
      title: "SEO Specialist",
      company: "TurboSeo",
      period: "Nov 2010 - Aug 2012 · 1 yr 10 mos",
      location: "Global",
      description: "Delivered SEO services for international clients across various industries.",
      skills: ["Preventive Maintenance", "Analytics"],
      color: "border-pink-500 bg-pink-900/10",
    },
  ]

  const keyAchievements = [
    {
      metric: "300+",
      description: "B2C & B2B Sites Managed",
      icon: TrendingUp,
    },
    {
      metric: "75%",
      description: "Organic Traffic Increase",
      icon: Award,
    },
    {
      metric: "21%",
      description: "Conversion Rate Improvement",
      icon: Users,
    },
    {
      metric: "15+",
      description: "Years SEO Experience",
      icon: Calendar,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Platform Overview
            </Button>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Mykhailo Bielichenko</h1>
            <p className="text-xl text-gray-300 mb-6">
              SEO Expert & Product Manager | 15+ Years Experience in Casino & Tech Industries
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <a href="tel:+4793931970" className="hover:text-white transition-colors">
                  +47 939 31 970
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <a href="mailto:mykhailo@seoplatform.com" className="hover:text-white transition-colors">
                  mykhailo@seoplatform.com
                </a>
              </div>
              <div className="flex  items-center gap-2 text-gray-300">
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

            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGnp-SN_r_IXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692018574723?e=1758153600&v=beta&t=6mRTEGRrqhbeQsuwUbNBhLV94D1cQ3W5MweguOsxPTA"
                  alt="Mykhailo Bielichenko - SEO Expert & Product Manager"
                  className="w-32 h-32 rounded-full border-4 border-purple-500/30 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why This Platform */}
        <Card className="bg-gradient-to-r from-purple-900 to-pink-900 border-purple-500 mb-12">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Why I'm Building This Platform</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 15 years of SEO experience and 5+ years specifically in the casino industry, I've witnessed
              firsthand how new casino operators consistently neglect SEO while pouring millions into paid advertising.
              At EvoPlay, I built a casino aggregator from scratch and saw the massive opportunity in branded search
              traffic. This platform combines my deep technical SEO knowledge, casino industry expertise, and modern
              development skills (Next.js, TypeScript, AI) to create an automated system that captures this untapped
              market systematically.
            </p>
          </CardContent>
        </Card>

        {/* Experience Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className={`bg-white/5 border-white/10 ${exp.color}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                      <p className="text-purple-300 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {exp.description && <p className="text-gray-300 mb-4">{exp.description}</p>}

                  {exp.achievements && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.responsibilities && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="text-white font-semibold mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integrated Calendly Scheduler */}
        <div className="mb-12">
          <CalendlyScheduler />
        </div>
      </div>
            <Footer />

    </main>
  )
}
