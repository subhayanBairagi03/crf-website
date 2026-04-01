import { pastEvents } from '@/data/events'

const publications = [
  {
    id: 1,
    title: 'Convergent Dynamics in Multi-Agent Neural Systems',
    year: '2024',
    type: 'Journal Article',
    authors: 'Dr. Helena Thorne, Marc-Aurele Rivera, et al.',
    abstract:
      'This paper explores the emergent behaviors in high-density multi-agent environments where local learning rules lead to global cognitive alignment, providing a new framework for decentralized AI governance...',
    url: '#',
  },
  {
    id: 2,
    title: 'The Ethics of Synthetic Life: A Consensus Report',
    year: '2024',
    type: 'Policy Paper',
    authors: 'CRF Ethics Committee, Lead Editor: Prof. Julian Vance',
    abstract:
      'A comprehensive summary of the 2023 Ethics Summit, outlining a tripartite protocol for the responsible creation and monitoring of synthetic biological entities with non-standard metabolic paths...',
    url: '#',
  },
  {
    id: 3,
    title: 'Graph Topology in Trans-Hemispheric Data Transfer',
    year: '2023',
    type: 'Whitepaper',
    authors: 'Ingrid Berg, Samuel Chen',
    abstract:
      'Investigating the efficiency gains of non-Euclidean data storage structures for low-latency scientific collaboration across planetary-scale distributed networks...',
    url: '#',
  },
  {
    id: 4,
    title: 'Convergence: The First Five Years',
    year: '2023',
    type: 'Monograph',
    authors: 'CRF Archival Press',
    abstract:
      'A celebratory retrospective on the foundational missions that launched the Foundation, featuring previously unpublished field notes and internal research memos from 2018–2023...',
    url: '#',
  },
]

export default function PublicationsArchive() {
  // pastEvents imported per project requirement; available for related-event linking if needed
  const relatedEventTitles = pastEvents.map((e) => e.title)

  return (
    <section className="bg-primary-container py-24 px-8 text-white relative">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-tertiary-fixed-dim font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Publications
          </span>
          <h2 className="font-headline text-4xl text-white">The Intellectual Record</h2>
        </div>

        {/* Publication list */}
        <div className="space-y-12">
          {publications.map((pub) => (
            <div key={pub.id} className="group flex flex-col md:flex-row gap-8 items-start">
              {/* Accent bar */}
              <div className="w-1 bg-tertiary-fixed-dim self-stretch shrink-0" />

              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h3 className="font-headline text-2xl group-hover:text-tertiary-fixed-dim transition-colors cursor-pointer">
                    {pub.title}
                  </h3>
                  <span className="bg-white/10 text-white/90 text-[10px] px-2 py-1 border border-white/20 uppercase tracking-widest">
                    {pub.year} · {pub.type}
                  </span>
                </div>
                <p className="text-tertiary-fixed-dim font-medium text-sm mb-4">{pub.authors}</p>
                <p className="text-white/70 max-w-4xl text-sm leading-relaxed mb-6 font-light italic">
                  Abstract: {pub.abstract}
                </p>
                <a
                  href={pub.url}
                  className="text-tertiary-fixed-dim font-medium text-sm flex items-center hover:underline decoration-1 underline-offset-4"
                >
                  Download / View <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
