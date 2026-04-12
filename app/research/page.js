import ResearchHero from '@/components/sections/research/ResearchHero'
import FounderPublications from '@/components/sections/FounderPublications'
import PublicationFundedByCRF from '@/components/sections/research/PublicationFundedByCRF'
import ResearchCTA from '@/components/sections/research/ResearchCTA'
import ResearchInitiatives from '@/components/sections/research/ResearchInitiatives'

export const metadata = {
  title: 'Research & Publication | Convergence Research Foundation',
  description:
    'Advancing the frontiers of knowledge through interdisciplinary convergence. Explore CRF research support, publication services, and initiatives.',
}

export default function ResearchPage() {
  return (
    <main className="pt-20">
      <ResearchHero />
      <FounderPublications />
      <PublicationFundedByCRF />
      <ResearchCTA />
      <ResearchInitiatives />
    </main>
  )
}
