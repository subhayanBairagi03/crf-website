const upcomingFeatures = [
  {
    icon: 'calendar_month',
    title: 'Event Archives',
    description:
      'A complete record of all CRF conferences, workshops, colloquia, and residencies — with photos, summaries, speaker profiles, and session recordings as available.',
  },
  {
    icon: 'library_books',
    title: 'Publications Repository',
    description:
      'Searchable archive of CRF-published journals, research monographs, edited volumes, policy briefs, and conference proceedings under the CRF imprint.',
  },
  {
    icon: 'edit_note',
    title: 'Creative Writing Collection',
    description:
      'A curated gallery of literary works, anthologies, translations, and creative nonfiction produced through CRF mentorship programs and writing residencies.',
  },
  {
    icon: 'filter_alt',
    title: 'Filter & Search',
    description:
      'Browse archives by year, theme, domain, author, or event type — with dedicated views for past events, publications, and stories of convergence in action.',
  },
  {
    icon: 'article',
    title: 'Research Stories',
    description:
      'In-depth narratives documenting the impact of CRF initiatives — scholar journeys, community outcomes, and moments where inquiry met inspiration.',
  },
  {
    icon: 'download',
    title: 'Open Access Downloads',
    description:
      'Select publications and research outputs available for free download, aligned with CRF\'s commitment to open-access knowledge sharing and dissemination.',
  },
]

export default function ArchivesStatic() {
  return (
    <>
      {/* Coming Soon Banner */}
      <section className="bg-[#F5E6C0] py-16 sm:py-20 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <span className="material-symbols-outlined text-[#C9960C] text-5xl block">archive</span>
          <h2 className="font-headline text-3xl sm:text-4xl text-[#1B2E6E]">
            The CRF Archive is Being Built
          </h2>
          <p className="text-[#1B2E6E]/70 leading-relaxed text-sm sm:text-base">
            As CRF launches its programs and events, all records — past events, publications, creative works,
            and research stories — will be preserved and made accessible here. This archive will grow with every
            workshop held, every journal published, and every story of convergence created.
          </p>
          <p className="text-[#1B2E6E]/60 text-sm italic">
            Check back as we announce our first events and publications in 2026.
          </p>
          <a
            href="mailto:convergenceofknowledge17@gmail.com?subject=Archive%20Inquiry"
            className="inline-block mt-2 bg-[#C9960C] text-[#261900] font-label font-bold uppercase tracking-widest text-xs px-8 py-3 rounded-full hover:bg-[#1B2E6E] hover:text-white transition-colors"
          >
            Write to Us
          </a>
        </div>
      </section>

      {/* What the archive will contain */}
      <section className="bg-[#1B2E6E] py-16 sm:py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-label text-xs uppercase tracking-[0.3em] font-bold text-[#C9960C] block mb-4">
              Coming Next
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-white">
              What the Archive Will Contain
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-sm hover:border-[#C9960C]/40 transition-colors"
              >
                <span className="material-symbols-outlined text-[#C9960C] text-3xl mb-4 block">
                  {feature.icon}
                </span>
                <h3 className="font-headline text-lg sm:text-xl text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Static info section */}
      <section className="bg-[#FAFAF7] py-16 sm:py-20 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="border-l-4 border-[#C9960C] pl-6 sm:pl-8 space-y-3">
            <h3 className="font-headline text-2xl text-[#1B2E6E]">About the CRF Archive</h3>
            <p className="text-on-surface-variant leading-relaxed">
              The Convergence Research Foundation believes in transparency, memory, and the power of
              institutional record. Our archive is not merely a storage facility — it is a living testament
              to the intellectual and creative work of our scholars, fellows, and collaborators. Every event
              held, every paper published, and every story written will find its permanent home here.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#F5E6C0] p-6 rounded-sm">
              <span className="material-symbols-outlined text-[#C9960C] mb-3 block">lock_open</span>
              <h4 className="font-headline text-lg text-[#1B2E6E] mb-2">Open Access Commitment</h4>
              <p className="text-sm text-[#1B2E6E]/70 leading-relaxed">
                CRF is committed to making its research and creative outputs freely accessible. Select
                publications and event summaries will be available for open download.
              </p>
            </div>
            <div className="bg-[#F5E6C0] p-6 rounded-sm">
              <span className="material-symbols-outlined text-[#C9960C] mb-3 block">groups</span>
              <h4 className="font-headline text-lg text-[#1B2E6E] mb-2">Community Contributions</h4>
              <p className="text-sm text-[#1B2E6E]/70 leading-relaxed">
                Fellows, scholars, and collaborators are encouraged to contribute their work for archiving.
                Write to us to submit papers, creative works, or event documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
