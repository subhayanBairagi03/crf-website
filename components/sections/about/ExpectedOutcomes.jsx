const outcomes = [
  {
    icon: 'verified',
    title: 'Reputed Research Hub',
    description:
      'Establishment of a reputed interdisciplinary research hub in India, driving convergent knowledge across disciplines.',
  },
  {
    icon: 'library_books',
    title: 'High-Quality Publications',
    description:
      'Development of high-quality scholarly and creative publications under the CRF imprint, including journals and monographs.',
  },
  {
    icon: 'group_add',
    title: 'Emerging Researcher Visibility',
    description:
      'Enhanced visibility of young and emerging researchers through fellowships, grants, and publication avenues.',
  },
  {
    icon: 'interpreter_mode',
    title: 'Academia–Industry Linkages',
    description:
      'Strengthened linkages between academia and creative industries through collaborative research and CSR partnerships.',
  },
  {
    icon: 'eco',
    title: 'Global Dialogue',
    description:
      'Contribution to national and global dialogues on education, culture, and sustainability through research and policy engagement.',
    wide: true,
  },
]

export default function ExpectedOutcomes() {
  return (
    <section className="bg-primary-container py-20 md:py-[80px] px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-serif text-4xl max-w-md">
            Expected Outcomes &amp; Institutional Impact
          </h2>
          <div className="h-px flex-grow mx-8 bg-white/20 hidden md:block mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className={`flex gap-6 items-start${outcome.wide ? ' md:col-span-2 md:max-w-xl' : ''}`}
            >
              <div className="bg-tertiary-fixed-dim/20 p-3 rounded-DEFAULT">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">{outcome.icon}</span>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">{outcome.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{outcome.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
