import AboutHero from '@/components/sections/about/AboutHero'
import OurMission from '@/components/sections/about/OurMission'
import VisionMission from '@/components/sections/about/VisionMission'
import FounderAbout from '@/components/sections/about/FounderAbout'
import GovernanceStructure from '@/components/sections/about/GovernanceStructure'
import ExpectedOutcomes from '@/components/sections/about/ExpectedOutcomes'

export const metadata = {
  title: 'About | Convergence Research Foundation (CRF)',
  description:
    "Learn about CRF's vision, mission, governance structure, and expected outcomes as we drive interdisciplinary research and social transformation.",
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutHero />
      <OurMission />
      <VisionMission />
      <FounderAbout />
      <GovernanceStructure />
      <ExpectedOutcomes />
    </main>
  )
}
