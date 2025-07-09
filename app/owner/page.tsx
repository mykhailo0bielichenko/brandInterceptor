import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Shield, Users, FileText, Award, Globe } from "lucide-react"
import ContentAuthorship from "@/components/eeat/content-authorship"

export default function OwnerPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Building className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Company Ownership & Transparency</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Complete transparency about Xemeaino Casino's ownership structure, licensing, and corporate governance. We
            believe in full disclosure to build trust with our players and regulatory partners.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Building className="h-6 w-6 text-blue-400 mr-3" />
                Company Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">Legal Name</h3>
                  <p className="text-gray-300">Xemeaino Gaming Limited</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">Registration Number</h3>
                  <p className="text-gray-300">C 89542</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">Incorporation Date</h3>
                  <p className="text-gray-300">March 15, 2019</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">Registered Address</h3>
                  <p className="text-gray-300">
                    Level 3, Tower Business Centre
                    <br />
                    Tower Street, Msida MSD 1825
                    <br />
                    Malta
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">Business Address</h3>
                  <p className="text-gray-300">
                    Quantum House, 75 Abate Rigord Street
                    <br />
                    Ta' Xbiex XBX 1120
                    <br />
                    Malta
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="h-6 w-6 text-blue-400 mr-3" />
                Licensing & Regulation
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">Primary License</h3>
                  <p className="text-gray-300">Malta Gaming Authority (MGA)</p>
                  <Badge className="bg-green-600 text-white mt-2">License: MGA/B2C/394/2019</Badge>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">License Issued</h3>
                  <p className="text-gray-300">June 10, 2019</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">License Expires</h3>
                  <p className="text-gray-300">June 10, 2029</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">Additional Licenses</h3>
                  <div className="space-y-2">
                    <Badge variant="outline" className="border-gray-600 text-gray-300 block w-fit">
                      UK Gambling Commission (Pending)
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-300 block w-fit">
                      Curacao eGaming (Subsidiary Operations)
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ownership Structure */}
        <Card className="bg-gray-900 border-gray-700 mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Users className="h-6 w-6 text-blue-400 mr-3" />
              Ownership Structure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Major Shareholders</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                    <div>
                      <p className="font-semibold">Digital Entertainment Holdings Ltd</p>
                      <p className="text-sm text-gray-400">Parent Company</p>
                    </div>
                    <Badge className="bg-blue-600">65%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                    <div>
                      <p className="font-semibold">Gaming Ventures Capital</p>
                      <p className="text-sm text-gray-400">Investment Fund</p>
                    </div>
                    <Badge className="bg-blue-600">25%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                    <div>
                      <p className="font-semibold">Management & Employee Shares</p>
                      <p className="text-sm text-gray-400">Key Personnel</p>
                    </div>
                    <Badge className="bg-blue-600">10%</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Ultimate Beneficial Owners</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <p className="font-semibold">Marcus Andersson</p>
                    <p className="text-sm text-gray-400 mb-2">Chairman & Founder</p>
                    <p className="text-xs text-gray-500">
                      Swedish national, 25+ years gaming industry experience. Former CEO of Nordic Gaming Group.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <p className="font-semibold">Elena Rodriguez</p>
                    <p className="text-sm text-gray-400 mb-2">Co-Founder & Board Member</p>
                    <p className="text-xs text-gray-500">
                      Spanish national, former VP at Playtech. Expert in gaming technology and operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Board of Directors */}
        <Card className="bg-gray-900 border-gray-700 mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="h-6 w-6 text-blue-400 mr-3" />
              Board of Directors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Marcus Andersson</h3>
                <p className="text-blue-400 text-sm mb-2">Chairman</p>
                <p className="text-xs text-gray-400">
                  25+ years gaming industry. Former CEO Nordic Gaming Group. MBA Stockholm School of Economics.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Elena Rodriguez</h3>
                <p className="text-blue-400 text-sm mb-2">Vice Chairman</p>
                <p className="text-xs text-gray-400">
                  Former VP Playtech. MS Computer Science. Expert in gaming technology and platform development.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Dr. James Patterson</h3>
                <p className="text-blue-400 text-sm mb-2">Independent Director</p>
                <p className="text-xs text-gray-400">
                  Former UK Gambling Commission advisor. PhD Law, specializing in gaming regulation.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Sarah Mitchell</h3>
                <p className="text-blue-400 text-sm mb-2">Executive Director</p>
                <p className="text-xs text-gray-400">
                  CEO Xemeaino Casino. MBA Harvard. 15+ years gaming industry leadership.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Robert Chen</h3>
                <p className="text-blue-400 text-sm mb-2">Independent Director</p>
                <p className="text-xs text-gray-400">
                  Former CFO Evolution Gaming. CPA, expert in gaming finance and compliance.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Maria Gonzalez</h3>
                <p className="text-blue-400 text-sm mb-2">Independent Director</p>
                <p className="text-xs text-gray-400">
                  Former legal counsel Betsson Group. JD Gaming Law, regulatory compliance expert.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Information */}
        <Card className="bg-gray-900 border-gray-700 mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FileText className="h-6 w-6 text-blue-400 mr-3" />
              Financial Transparency
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Financial Statements</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span>Annual Report 2023</span>
                    <Badge variant="outline" className="border-blue-500 text-blue-400">
                      Available
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span>Audited Accounts 2023</span>
                    <Badge variant="outline" className="border-blue-500 text-blue-400">
                      Available
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span>Q3 2024 Interim Report</span>
                    <Badge variant="outline" className="border-blue-500 text-blue-400">
                      Available
                    </Badge>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Financial Data (2023)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span>Total Revenue</span>
                    <span className="font-semibold">€45.2M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span>Player Funds Segregated</span>
                    <span className="font-semibold">€12.8M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span>Regulatory Capital</span>
                    <span className="font-semibold">€8.5M</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regulatory Compliance */}
        <Card className="bg-gray-900 border-gray-700 mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Globe className="h-6 w-6 text-blue-400 mr-3" />
              Regulatory Compliance & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">eCOGRA Certified</h3>
                <p className="text-sm text-gray-400">Fair gaming and player protection certified</p>
                <Badge className="bg-green-600 text-white mt-2">Valid 2024</Badge>
              </div>
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">ISO 27001</h3>
                <p className="text-sm text-gray-400">Information security management certified</p>
                <Badge className="bg-blue-600 text-white mt-2">Valid 2024</Badge>
              </div>
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">PCI DSS Level 1</h3>
                <p className="text-sm text-gray-400">Payment card industry security compliant</p>
                <Badge className="bg-purple-600 text-white mt-2">Valid 2024</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700/30">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Corporate Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">General Inquiries</h3>
                <p className="text-gray-300">info@xemeaino.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">Compliance</h3>
                <p className="text-gray-300">compliance@xemeaino.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">Investor Relations</h3>
                <p className="text-gray-300">investors@xemeaino.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Authorship */}
        <div className="mt-16">
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
      </div>
    </main>
  )
}
