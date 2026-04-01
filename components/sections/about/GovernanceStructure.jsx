const boards = [
  {
    title: 'Board of Trustees / Governing Council',
    description:
      'Provides strategic direction and policy guidance to ensure the Foundation\'s mission, sustainability, and institutional integrity.',
  },
  {
    title: 'Advisory Board of Experts',
    description:
      'Includes eminent scholars, writers, and professionals across disciplines who guide research standards and publication quality.',
  },
  {
    title: 'Research and Publication Division',
    description:
      'Oversees academic and creative publication initiatives, including the IJCS journal, monographs, and peer-review processes.',
  },
  {
    title: 'Administrative and Outreach Unit',
    description:
      'Coordinates workshops, conferences, and collaborations with universities, NGOs, industry partners, and international networks.',
  },
]

export default function GovernanceStructure() {
  return (
    <section className="bg-[#FAFAF7] py-20 md:py-[80px] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-primary-container mb-4">Governance Structure</h2>
          <p className="text-on-surface-variant tracking-widest uppercase text-xs">
            Integrity through collective oversight
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {boards.map((board) => (
            <div
              key={board.title}
              className="bg-[#F5E6C0] p-10 border border-tertiary-fixed-dim transition-all hover:bg-white hover:shadow-xl group"
            >
              <h3 className="font-serif text-2xl text-primary-container mb-4">{board.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{board.description}</p>
              <div className="mt-6 flex justify-end">
                <span className="material-symbols-outlined text-tertiary-fixed-dim group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
