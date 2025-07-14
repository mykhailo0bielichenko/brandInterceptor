import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, CheckCircle, Calendar, Shield } from "lucide-react"
import Image from "next/image"

interface ContentAuthorshipProps {
  author: {
    name: string
    role: string
    credentials: string[]
    image: string
  }
  factChecker?: {
    name: string
    role: string
    credentials: string[]
    image: string
  }
  publishDate: string
  lastUpdated: string
  reviewProcess?: string[]
}

export default function ContentAuthorship({
  author,
  factChecker,
  publishDate,
  lastUpdated,
  reviewProcess,
}: ContentAuthorshipProps) {
  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-700/30">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Expert Content Authorship</h3>
            <p className="text-gray-300">
              This content has been created and verified by our team of gaming industry professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Author Information */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <User className="h-5 w-5 text-blue-400 mr-2" />
                  <h4 className="text-lg font-semibold text-white">Content Author</h4>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={author.image || "/placeholder.svg"}
                      alt={author.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold">{author.name}</h5>
                    <p className="text-blue-400 text-sm">{author.role}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {author.credentials.map((credential, index) => (
                    <div key={index} className="flex items-start text-gray-300 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {credential}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fact Checker Information */}
            {factChecker && (
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <h4 className="text-lg font-semibold text-white">Fact-Checked By</h4>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={factChecker.image || "/placeholder.svg"}
                        alt={factChecker.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold">{factChecker.name}</h5>
                      <p className="text-green-400 text-sm">{factChecker.role}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {factChecker.credentials.map((credential, index) => (
                      <div key={index} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {credential}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Publication Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-yellow-400 mr-3" />
              <div>
                <p className="text-gray-400 text-sm">Published</p>
                <p className="text-white font-semibold">{publishDate}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-blue-400 mr-3" />
              <div>
                <p className="text-gray-400 text-sm">Last Updated</p>
                <p className="text-white font-semibold">{lastUpdated}</p>
              </div>
            </div>
          </div>

          {/* Review Process */}
          {reviewProcess && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Our Review Process</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {reviewProcess.map((step, index) => (
                  <div key={index} className="flex items-start text-gray-300 text-sm">
                    <Badge className="bg-blue-600 text-white mr-3 mt-0.5 text-xs">{index + 1}</Badge>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm text-center">
              <strong>Editorial Independence:</strong> Our content is created independently and is not influenced by
              casino operators. All recommendations are based on expert analysis and player value.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
