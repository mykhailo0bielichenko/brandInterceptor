import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertTriangle, Search, Code, Monitor } from "lucide-react"

export function ProblemIdentification() {
  return (
    <section id="problem-identification" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Problem Identification</h2>
            <p className="text-xl text-gray-600">
              Understanding how SSR indexation issues manifest and impact search visibility
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-6 h-6 text-blue-600" />
                Issue Description
              </CardTitle>
              <CardDescription>
                GameList component content invisible to Googlebot despite being visible to users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                When inspecting pages in Google Search Console, the rendered HTML does not include the content of the
                GameList component, even though users see the games on the page. This indicates that Googlebot is not
                seeing the dynamically loaded content, likely because the GameList component renders after Google's
                crawler downloads the page.
              </p>
            </CardContent>
          </Card>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="identification-methods">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-green-600" />
                  How the Issue is Identified
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Google Search Console (GSC)</h4>
                    <p className="text-sm text-gray-600">
                      Using the "Inspect URL" feature, the "View Crawled Page" section shows the HTML without the
                      GameList content, despite it being visible in the browser.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Fetch as Googlebot Tools</h4>
                    <p className="text-sm text-gray-600">
                      Tools like Screaming Frog or custom fetch-as-Googlebot scripts reveal that the server-rendered
                      HTML lacks the game list.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">User-Agent Testing</h4>
                    <p className="text-sm text-gray-600">
                      Simulating Googlebot's user-agent in a headless browser shows missing game content in the initial
                      HTML response.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="root-causes">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-red-600" />
                  Potential Development Implementation Errors
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-700">Client-Side Data Fetching</h4>
                    <p className="text-sm text-gray-600">
                      GameList component relies on client-side JavaScript (useEffect) to fetch game data
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-700">Improper SSR Implementation</h4>
                    <p className="text-sm text-gray-600">
                      Component not pre-rendered during getServerSideProps or getStaticProps
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-700">Delayed API Response</h4>
                    <p className="text-sm text-gray-600">
                      API providing game data is slow, causing server to send response before data is available
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700">Dynamic Imports</h4>
                    <p className="text-sm text-gray-600">
                      GameList component dynamically imported on client side, bypassing SSR
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
