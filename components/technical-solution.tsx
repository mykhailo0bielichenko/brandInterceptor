import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Zap, Shield } from "lucide-react"

export function TechnicalSolution() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Code className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Solution</h2>
            <p className="text-xl text-gray-600">Comprehensive development specification with implementation details</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-blue-600" />
                  Objective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Ensure the GameList component is fully rendered in the initial HTML response for Googlebot, making all
                  game content indexable in Google Search Console.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-green-600" />
                  Performance Target
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">SSR: &lt;500ms</Badge>
                  <Badge variant="outline">API Response: &lt;300ms</Badge>
                  <Badge variant="outline">95% Success Rate</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="ssr-implementation">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-blue-600" />
                  Server-Side Rendering Implementation
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Updated GameList Component</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        {`function GameList({ games }) {
  return (
    <div className="game-list">
      {games.map((game) => (
        <div key={game.id} className="game-item">
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <img src={game.image || "/placeholder.svg"} alt={game.title} />
        </div>
      ))}
    </div>
  );
}`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Page with getServerSideProps</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        {`// pages/games.js
import GameList from '../components/GameList';
import { fetchGames } from '../lib/api';

export async function getServerSideProps() {
  try {
    const games = await fetchGames();
    return { props: { games } };
  } catch (error) {
    console.error('Error fetching games:', error);
    return { props: { games: [] } };
  }
}

export default function GamesPage({ games }) {
  return (
    <>
      <Head>
        <title>Game Catalog</title>
        <meta name="description" content="Browse our latest games" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: games.map((game, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Game',
                name: game.title,
                description: game.description
              },
            })),
          })}
        </script>
      </Head>
      <GameList games={games} />
    </>
  );
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="api-optimization">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  API Performance Optimization
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Optimized API with Caching</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        {`// lib/api.js
import cache from 'redis';

export async function fetchGames() {
  const cacheKey = 'games_data';
  const cachedGames = await cache.get(cacheKey);
  
  if (cachedGames) {
    return JSON.parse(cachedGames);
  }
  
  const response = await fetch('https://api.example.com/games', {
    timeout: 500
  });
  const games = await response.json();
  
  // Cache for 1 hour
  await cache.set(cacheKey, JSON.stringify(games), { EX: 3600 });
  
  return games;
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Performance Requirements</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• API response time: &lt;300ms for 95% of requests</li>
                      <li>• Implement Redis caching with 1-hour TTL</li>
                      <li>• Add request timeout of 500ms</li>
                      <li>• Log performance metrics for monitoring</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="error-handling">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  Error Handling & Fallbacks
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">Fallback Strategy</h5>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Render empty list with placeholder content if API fails</li>
                      <li>• Include static meta tags even when dynamic content fails</li>
                      <li>• Log all errors for monitoring and debugging</li>
                      <li>• Implement graceful degradation for partial data</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
                      {`// Error handling in getServerSideProps
export async function getServerSideProps() {
  try {
    const games = await fetchGames();
    return { 
      props: { 
        games,
        hasError: false 
      } 
    };
  } catch (error) {
    console.error('SSR Error:', error);
    
    return { 
      props: { 
        games: [],
        hasError: true,
        errorMessage: 'Unable to load games at this time'
      } 
    };
  }
}`}
                    </pre>
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
