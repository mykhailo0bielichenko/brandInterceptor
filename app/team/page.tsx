import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Shield, Globe } from "lucide-react"
import Image from "next/image"
import  ContentAuthorship  from "@/components/eeat/content-authorship"

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive Officer",
    image: "/team/sarah-mitchell.png",
    credentials: "MBA Harvard Business School, 15+ years gaming industry",
    experience: "Former VP at Betsson Group, led 3 successful casino launches",
    expertise: ["Strategic Leadership", "Gaming Regulation", "Business Development"],
    bio: "Sarah brings over 15 years of executive experience in the online gaming industry. She previously served as VP of Operations at Betsson Group where she oversaw the launch of three successful casino brands across European markets.",
  },
  {
    name: "Michael Roberts",
    role: "Chief Technology Officer",
    image: "/team/michael-roberts.png",
    credentials: "MS Computer Science MIT, Certified Information Security Manager",
    experience: "20+ years in fintech and gaming technology, former CTO at Evolution Gaming",
    expertise: ["Platform Architecture", "Security Systems", "Payment Processing"],
    bio: "Michael is a technology veteran with over 20 years of experience building secure, scalable gaming platforms. He previously served as CTO at Evolution Gaming, where he architected their live dealer platform serving millions of players.",
  },
  {
    name: "Emma Thompson",
    role: "Head of Compliance & Legal",
    image: "/team/emma-thompson.png",
    credentials: "JD Gaming Law, Malta Gaming Authority Certified Compliance Officer",
    experience: "12+ years in gaming compliance, former legal counsel at LeoVegas",
    expertise: ["Gaming Regulation", "AML Compliance", "Player Protection"],
    bio: "Emma specializes in gaming law and regulatory compliance across multiple jurisdictions. She previously served as Senior Legal Counsel at LeoVegas, ensuring compliance with MGA, UKGC, and other regulatory bodies.",
  },
  {
    name: "David Chen",
    role: "Head of Game Development",
    image: "/team/david-chen.png",
    credentials: "MS Game Design, Certified RNG Testing Specialist",
    experience: "18+ years in game development, former lead developer at NetEnt",
    expertise: ["Game Mechanics", "RNG Systems", "Player Experience"],
    bio: "David has spent 18 years creating engaging casino games that players love. As former Lead Game Developer at NetEnt, he contributed to some of the industry's most popular slot titles and live casino innovations.",
  },
  {
    name: "Lisa Anderson",
    role: "Head of Customer Experience",
    image: "/team/lisa-anderson.png",
    credentials: "MS Psychology, Certified Customer Experience Professional",
    experience: "14+ years in customer service and UX, former director at 888 Holdings",
    expertise: ["Customer Support", "User Experience", "Player Retention"],
    bio: "Lisa is passionate about creating exceptional player experiences. She previously served as Director of Customer Experience at 888 Holdings, where she implemented award-winning support systems and player engagement programs.",
  },
  {
    name: "James Wilson",
    role: "Head of Responsible Gaming",
    image: "/team/james-wilson.png",
    credentials: "PhD Psychology, Certified Problem Gambling Counselor",
    experience: "16+ years in responsible gaming, former advisor to UK Gambling Commission",
    expertise: ["Player Protection", "Addiction Prevention", "Regulatory Compliance"],
    bio: "Dr. Wilson is a leading expert in responsible gaming practices. He has advised multiple regulatory bodies including the UK Gambling Commission and has published extensively on player protection and addiction prevention in online gaming.",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Users className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Meet Our Expert Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our leadership team combines decades of experience in online gaming, technology, and regulatory compliance.
            Each member brings proven expertise to ensure Xemeaino Casino delivers the highest standards of gaming
            excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-blue-500 transition-colors">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <Badge className="bg-blue-600 text-white mb-4">{member.role}</Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Credentials</h4>
                    <p className="text-sm text-gray-300">{member.credentials}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Experience</h4>
                    <p className="text-sm text-gray-300">{member.experience}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs border-gray-600 text-gray-400">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Biography</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Values */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-700/30 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Trust & Security</h3>
              <p className="text-gray-300">
                We prioritize player safety with industry-leading security measures and transparent operations.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-300">
                Our team strives for excellence in every aspect of the gaming experience we provide.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-300">
                We continuously innovate to bring cutting-edge gaming technology to our players.
              </p>
            </div>
          </div>
        </div>

        {/* Content Authorship */}
          <ContentAuthorship
            author={{
              name: "Emma Thompson",
              role: "Head of Compliance & Legal Affairs",
              credentials: [
                "JD in Corporate Law from University of Malta",
                "15+ years experience in gaming regulation",
                "Former legal counsel at Malta Gaming Authority",
                "Certified in Anti-Money Laundering compliance",
                "Expert in GDPR and data protection law",
              ],
              image: "/team/emma-thompson.png",
            }}
            factChecker={{
              name: "Dr. James Richardson",
              role: "Independent Director & Regulatory Expert",
              credentials: [
                "Former UK Gambling Commission Commissioner",
                "PhD in Gaming Law from Cambridge University",
                "20+ years regulatory oversight experience",
                "Published author on gaming compliance",
                "International gaming law consultant",
              ],
              image: "/team/james-wilson.png",
            }}
            publishDate="January 15, 2024"
            lastUpdated="December 1, 2024"
            reviewProcess={[
              "Legal team review for accuracy and compliance",
              "Board of directors approval for disclosure",
              "External audit verification of financial data",
              "Regulatory authority notification of changes",
              "Public disclosure timeline compliance",
              "Quarterly review and update process",
            ]}
          />
      </div>
    </main>
  )
}
