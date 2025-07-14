import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { TestTube, Bot, Monitor, GitBranch } from "lucide-react"

export function TestingStrategy() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <TestTube className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Testing & Quality Assurance</h2>
            <p className="text-xl text-gray-600">Comprehensive testing strategy with automated CI/CD integration</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-6 h-6 text-blue-600" />
                  Acceptance Criteria
                </CardTitle>
                <CardDescription>Clear success metrics for validation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      ✓
                    </Badge>
                    <span className="text-sm">GSC shows complete GameList content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      ✓
                    </Badge>
                    <span className="text-sm">Fetch as Googlebot validates content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      ✓
                    </Badge>
                    <span className="text-sm">SSR completes within 500ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      ✓
                    </Badge>
                    <span className="text-sm">No JavaScript dependency for content</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="w-6 h-6 text-purple-600" />
                  CI/CD Integration
                </CardTitle>
                <CardDescription>Automated testing in deployment pipeline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      Auto
                    </Badge>
                    <span className="text-sm">Playwright SEO tests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      Auto
                    </Badge>
                    <span className="text-sm">Googlebot simulation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      Auto
                    </Badge>
                    <span className="text-sm">Performance monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      Auto
                    </Badge>
                    <span className="text-sm">Weekly crawl validation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="manual-testing">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-blue-600" />
                  Manual Testing Procedures
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Puppeteer Googlebot Simulation</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        {`const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Simulate Googlebot
  await page.setUserAgent('Googlebot/2.1');
  await page.goto('https://example.com/games');
  
  const content = await page.content();
  const hasGameContent = content.includes('game-title');
  
  console.log(hasGameContent ? 'Success: Games found' : 'Failure: No games');
  await browser.close();
})();`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Manual Testing Checklist</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Use GSC "Inspect URL" to verify crawled content</li>
                      <li>• Test with JavaScript disabled in Chrome DevTools</li>
                      <li>• Validate on staging environment before production</li>
                      <li>• Check meta tags and structured data presence</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="automated-testing">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-green-600" />
                  Automated Testing Implementation
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Playwright SEO Test</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        {`// tests/seo.test.js
const { test, expect } = require('@playwright/test');

test('GameList renders in SSR for Googlebot', async ({ page }) => {
  await page.setExtraHTTPHeaders({
    'User-Agent': 'Googlebot/2.1'
  });
  
  await page.goto('https://example.com/games');
  
  // Verify game content is present
  const gameList = await page.locator('.game-list');
  await expect(gameList).toBeVisible();
  
  const gameItems = await page.locator('.game-item');
  await expect(gameItems).toHaveCountGreaterThan(0);
  
  // Check for specific game content
  await expect(page.locator('h2')).toContainText('Game');
});`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">GitHub Actions Workflow</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        {`# .github/workflows/seo.yml
name: SEO Tests
on: [push, pull_request]

jobs:
  seo-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: { node-version: '18' }
      - run: npm install
      - run: npm run build
      - run: npm run test:playwright
      - run: npm run test:seo-crawl`}
                      </pre>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="unit-tests">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <TestTube className="w-5 h-5 text-orange-600" />
                  Unit & Regression Tests
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">GameList Component Unit Test</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        {`// components/__tests__/GameList.test.js
import { render, screen } from '@testing-library/react';
import GameList from '../GameList';

test('renders games from props', () => {
  const games = [
    { 
      id: 1, 
      title: 'Game 1', 
      description: 'Desc 1', 
      image: 'img1.jpg' 
    }
  ];
  
  render(<GameList games={games} />);
  
  expect(screen.getByText('Game 1')).toBeInTheDocument();
  expect(screen.getByText('Desc 1')).toBeInTheDocument();
  expect(screen.getByAltText('Game 1')).toHaveAttribute('src', 'img1.jpg');
});

test('does not fetch data on client', () => {
  jest.spyOn(global, 'fetch');
  render(<GameList games={[]} />);
  expect(global.fetch).not.toHaveBeenCalled();
});`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">Component Library Integration</h5>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Add tests to component library test suite</li>
                      <li>• Enforce SSR compatibility rules</li>
                      <li>• Use ESLint rules to flag client-side data fetching</li>
                      <li>• Implement regression tests for future changes</li>
                    </ul>
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
