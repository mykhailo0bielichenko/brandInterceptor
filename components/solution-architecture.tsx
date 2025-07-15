const SolutionArchitecture = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Solution Architecture</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-2">
          This document outlines the architecture of our AI-powered content generation solution. The system is designed
          to automate the creation of high-quality, structured content for various use cases, including casino reviews,
          product descriptions, and marketing materials.
        </p>
        <p>
          The architecture consists of three main agents: the Template Agent, the Content Agent, and the Delivery Agent.
          Each agent plays a specific role in the content generation pipeline, ensuring a seamless and efficient
          process.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Template Agent</h2>
        <p className="mb-2">
          The Template Agent is responsible for defining the structure and layout of the content. It creates templates
          that specify the components, fields, and data types required for a particular type of content. These templates
          serve as blueprints for the Content Agent.
        </p>
        <p>Key responsibilities of the Template Agent include:</p>
        <ul className="list-disc pl-5 mb-2">
          <li>Defining content structure using a schema language (e.g., JSON Schema, Zod).</li>
          <li>Specifying required components and their properties.</li>
          <li>Defining data types and validation rules for each field.</li>
          <li>Creating reusable templates for different content types.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Example: Casino Review Template</h3>
        <p className="mb-2">A casino review template might include components such as:</p>
        <ul className="list-disc pl-5 mb-2">
          <li>Header (casino logo, name, navigation)</li>
          <li>Hero section (introduction, bonus offer, call to action)</li>
          <li>Bonus card (bonus details, wagering requirements)</li>
          <li>Game grid (featured games, filters)</li>
          <li>Pros and cons (advantages and disadvantages)</li>
          <li>Payment methods (supported payment options)</li>
          <li>FAQ section (frequently asked questions)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Content Agent</h2>
        <p className="mb-2">
          The Content Agent is the core of the content generation process. It takes a template from the Template Agent
          and uses it to generate content by interacting with a Large Language Model (LLM). The Content Agent ensures
          that the generated content adheres to the structure and data types defined in the template.
        </p>
        <p>Key responsibilities of the Content Agent include:</p>
        <ul className="list-disc pl-5 mb-2">
          <li>Receiving a template from the Template Agent.</li>
          <li>Generating content using an LLM based on the template.</li>
          <li>Validating the generated content against the template schema.</li>
          <li>Ensuring data type consistency and validation.</li>
          <li>Handling errors and retrying content generation if necessary.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Template Agent Code Example</h3>
        <p className="mb-2">This example demonstrates how a template might be defined using Zod:</p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code>
            {`
import { z } from 'zod';

// Define a simple schema for a product description
const productSchema = z.object({
  name: z.string().describe('Product name'),
  description: z.string().describe('Detailed product description'),
  price: z.number().positive().describe('Product price in USD'),
  imageUrl: z.string().url().describe('URL of the product image'),
  category: z.enum(['electronics', 'clothing', 'home']).describe('Product category'),
});

export type Product = z.infer<typeof productSchema>;

// Example usage
const generateProductDescription = async (templateData: any) => {
  const prompt = \`
    Generate a product description.
    Template: \${JSON.stringify(templateData)}

    Requirements:
    - Highlight key features
    - Use persuasive language
    - Include a call to action

    Return valid JSON matching the ProductSchema.
  \`;

  const response = await llm.generateStructuredOutput({
    schema: productSchema,
    prompt,
  });

  return response; // Guaranteed to match schema
};
            `}
          </code>
        </pre>

        <p className="mt-2">
          This example shows how the Content Agent uses the <code>productSchema</code> to generate a product
          description, ensuring that the output is always a valid <code>Product</code> object.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">CK444 Casino Review - Zod Content Schema Example</h3>
        <p className="mb-2"></p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code>
            {`
// REAL EXAMPLE: CK444 Casino Review Content Schema
// This schema matches the template structure from the previous section

import { z } from 'zod'

// SUB-SCHEMA: Individual game in the game grid
const gameSchema = z.object({
  name: z.string().describe('Game title, e.g., "Starburst"'),
  provider: z.string().describe('Game provider, e.g., "NetEnt"'),
  rtp: z.number().min(80).max(99).describe('Return to Player percentage'),
  volatility: z.enum(['low', 'medium', 'high']).describe('Game volatility level'),
  thumbnail: z.string().url().describe('Game thumbnail image URL'),
})

// SUB-SCHEMA: Payment method details
const paymentMethodSchema = z.object({
  name: z.string().describe('Payment method name, e.g., "Visa", "Bitcoin"'),
  type: z.enum(['credit_card', 'e_wallet', 'crypto', 'bank_transfer']).describe('Payment method type'),
  minDeposit: z.number().positive().describe('Minimum deposit amount'),
  maxDeposit: z.number().positive().describe('Maximum deposit amount'),
  processingTime: z.string().describe('Processing time, e.g., "instant", "24 hours"'),
})

// SUB-SCHEMA: FAQ item
const faqItemSchema = z.object({
  question: z.string().describe('The FAQ question'),
  answer: z.string().describe('The detailed answer'),
  category: z.enum(['bonuses', 'games', 'payments', 'account']).describe('FAQ category'),
})

// MAIN SCHEMA: CK444 Casino Review Content
export const ck444ContentSchema = z.object({
  page: z.literal('/review').describe('Page type identifier'),
  brand: z.literal('CK444').describe('Casino brand name'),
  layout: z.literal('casino-review').describe('Layout template identifier'),
  
  seoMeta: z.object({
    title: z.string().describe('SEO title for the review page'),
    description: z.string().describe('Meta description for search engines'),
    keywords: z.array(z.string()).describe('Target keywords for SEO'),
  }),
  
  components: z.array(z.discriminatedUnion('key', [
    // Header component
    z.object({
      key: z.literal('HEADER'),
      props: z.object({
        title: z.string().describe('Main header title'),
        subtitle: z.string().describe('Header subtitle'),
        logo: z.string().url().describe('Casino logo URL'),
        navigation: z.array(z.string()).describe('Navigation menu items'),
      }),
    }),
    
    // Hero section
    z.object({
      key: z.literal('HERO'),
      props: z.object({
        title: z.string().describe('Hero section main title'),
        subtitle: z.string().describe('Hero section subtitle'),
        backgroundImage: z.string().url().describe('Hero background image URL'),
        ctaText: z.string().describe('Call-to-action button text'),
        ctaUrl: z.string().url().describe('Call-to-action button URL'),
        trustBadges: z.array(z.string()).describe('Trust badges to display'),
      }),
    }),
    
    // Bonus card
    z.object({
      key: z.literal('BONUS_CARD'),
      props: z.object({
        bonus: z.number().positive().describe('Bonus percentage, e.g., 500 for 500%'),
        currency: z.string().describe('Currency code, e.g., "USD"'),
        wager: z.number().positive().describe('Wagering requirement multiplier'),
        minDeposit: z.number().positive().describe('Minimum deposit to claim bonus'),
        ctaUrl: z.string().url().describe('Bonus claim URL'),
        terms: z.array(z.string()).describe('Bonus terms and conditions'),
        validUntil: z.string().describe('Bonus expiration date'),
        bonusCode: z.string().optional().describe('Bonus code if required'),
      }),
    }),
    
    // Game grid
    z.object({
      key: z.literal('GAME_GRID'),
      props: z.object({
        games: z.array(gameSchema).describe('Array of featured games'),
        filterOptions: z.array(z.string()).describe('Available filter options'),
        sortBy: z.string().describe('Default sorting method'),
      }),
    }),
    
    // Pros and cons
    z.object({
      key: z.literal('PROS_CONS'),
      props: z.object({
        pros: z.array(z.string()).describe('List of casino advantages'),
        cons: z.array(z.string()).describe('List of casino disadvantages'),
        overallRating: z.number().min(0).max(10).describe('Overall expert rating out of 10'),
      }),
    }),
    
    // Payment methods
    z.object({
      key: z.literal('PAYMENT_METHODS'),
      props: z.object({
        methods: z.array(paymentMethodSchema).describe('Available payment methods'),
        currencies: z.array(z.string()).describe('Supported currencies'),
        fees: z.string().describe('Fee information'),
      }),
    }),
    
    // FAQ section
    z.object({
      key: z.literal('FAQ'),
      props: z.object({
        categories: z.array(z.string()).describe('FAQ categories'),
        items: z.array(faqItemSchema).describe('FAQ questions and answers'),
        searchable: z.boolean().describe('Whether FAQ is searchable'),
      }),
    }),
  ])).describe('Array of page components with their props'),
})

export type CK444Content = z.infer<typeof ck444ContentSchema>

// USAGE EXAMPLE: How the Content Agent uses this schema
const generateCK444Content = async (templateData: any) => {
  const prompt = \`
    Generate content for CK444 casino review page.
    Template: \${JSON.stringify(templateData)}
    
    Requirements:
    - 500% welcome bonus with 40x wagering
    - Include NetEnt and Play'n GO games
    - Highlight fast withdrawals and 24/7 support
    - Include both crypto and traditional payment methods
    - Generate realistic FAQ items
    
    Return valid JSON matching the CK444ContentSchema.
  \`
  
  const response = await llm.generateStructuredOutput({
    schema: ck444ContentSchema,
    prompt,
  })
  
  return response // Guaranteed to match schema
}
            `}
          </code>
        </pre>

        <p className="mt-2">
          This schema demonstrates how the Content Agent ensures type-safe, structured content generation that perfectly
          matches the component requirements defined in the template phase.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Delivery Agent</h2>
        <p className="mb-2">
          The Delivery Agent is responsible for taking the generated content and delivering it to the appropriate
          channels. This might involve rendering the content on a website, sending it in an email, or publishing it to a
          social media platform.
        </p>
        <p>Key responsibilities of the Delivery Agent include:</p>
        <ul className="list-disc pl-5 mb-2">
          <li>Receiving validated content from the Content Agent.</li>
          <li>Rendering the content using appropriate templates and styles.</li>
          <li>Delivering the content to the target channels.</li>
          <li>Monitoring content performance and making adjustments as needed.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p>
          This architecture provides a robust and scalable solution for automating content generation. By separating the
          template definition, content generation, and delivery processes, we can ensure high-quality, consistent
          content across all channels.
        </p>
      </section>
    </div>
  )
}

export default SolutionArchitecture
export { SolutionArchitecture }
