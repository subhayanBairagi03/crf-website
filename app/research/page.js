import ResearchHero from '@/components/sections/research/ResearchHero'
import ResearchAssistance from '@/components/sections/research/ResearchAssistance'
import PublicationAssistance from '@/components/sections/research/PublicationAssistance'
import ResearchInitiatives from '@/components/sections/research/ResearchInitiatives'
import ResearchCTA from '@/components/sections/research/ResearchCTA'

export const metadata = {
  title: 'Research & Publication | Convergence Research Foundation',
  description:
    'Advancing the frontiers of knowledge through interdisciplinary convergence. Explore CRF research support, publication services, and initiatives.',
}

export default function ResearchPage() {
  return (
    <main className="pt-20">
      <ResearchHero />
      <ResearchAssistance />
      <PublicationAssistance />
      <ResearchInitiatives />
      <ResearchCTA />
    </main>
  )
}
