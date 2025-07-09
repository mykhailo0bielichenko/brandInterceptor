import { Hero } from "@/components/hero"
import{ FeaturedGames} from "@/components/featured-games"
import{ LiveStats} from "@/components/live-stats"
import { Promotions} from "@/components/promotions"
import{ CasinoGamesGuide} from "@/components/seo/casino-games-guide"
import{ CasinoExperienceContent} from "@/components/seo/casino-experience-content"
import { CasinoBonusesOverview } from "@/components/seo/casino-bonuses-overview"
import {  CasinoReviewsTestimonials } from "@/components/seo/casino-reviews-testimonials"
import CasinoFaqSeo from "@/components/seo/casino-faq-seo"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />
      <FeaturedGames />
      <LiveStats />
      <Promotions />
      <CasinoGamesGuide />
      <CasinoExperienceContent />
      <CasinoBonusesOverview />
      <CasinoReviewsTestimonials />
      <CasinoFaqSeo />
    </main>
  )
}
