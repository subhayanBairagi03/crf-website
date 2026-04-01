import ArchivesHero from '@/components/sections/archives/ArchivesHero'
import ArchivesStatic from '@/components/sections/archives/ArchivesStatic'

export const metadata = {
  title: 'CRF Archives | Convergence Research Foundation',
  description:
    'The CRF Archives — a growing repository of events, publications, research records, and cultural milestones.',
}

export default function ArchivesPage() {
  return (
    <main>
      <ArchivesHero />
      <ArchivesStatic />
    </main>
  )
}
