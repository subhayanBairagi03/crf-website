import ArchivesHero from '@/components/sections/archives/ArchivesHero'
import EventsSection from '@/components/sections/EventsSection'
import MembershipSection from '@/components/sections/MembershipSection'
import ArchivesStatic from '@/components/sections/archives/ArchivesStatic'

export const metadata = {
  title: 'Events & Archives | Convergence Research Foundation',
  description:
    'Upcoming events, life membership, and the growing CRF archive of conferences, publications, and cultural milestones.',
}

export default function ArchivesPage() {
  return (
    <main>
      <ArchivesHero />
      <EventsSection />
      <MembershipSection />
      <ArchivesStatic />
    </main>
  )
}
