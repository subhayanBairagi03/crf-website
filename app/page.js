import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import FounderMessage from '@/components/sections/FounderMessage'
import AreasOfWork from '@/components/sections/AreasOfWork'
import ThematicFocus from '@/components/sections/ThematicFocus'
import EventsSection from '@/components/sections/EventsSection'
import KeyInitiatives from '@/components/sections/KeyInitiatives'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FounderMessage />
      <AreasOfWork />
      <ThematicFocus />
      <EventsSection />
      <KeyInitiatives />
      <ContactSection />
    </main>
  )
}
