import HeroSection from '@/components/sections/HeroSection'
import PublishWithUs from '@/components/sections/PublishWithUs'
import FounderMessage from '@/components/sections/FounderMessage'
import AreasOfWork from '@/components/sections/AreasOfWork'
import ThematicFocus from '@/components/sections/ThematicFocus'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PublishWithUs />
      <FounderMessage />
      <AreasOfWork />
      <ThematicFocus />
      <ContactSection />
    </main>
  )
}
