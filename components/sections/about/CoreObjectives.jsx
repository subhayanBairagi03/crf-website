const objectives = [
  {
    icon: 'hub',
    title: 'Interdisciplinary Research',
    description: 'Promote interdisciplinary and cross-sectoral research in arts, humanities, science, and technology.',
  },
  {
    icon: 'school',
    title: 'Research & Publication Support',
    description: 'Assist researchers and institutions with proposal development, data analysis, and publication support.',
  },
  {
    icon: 'edit_note',
    title: 'Creative & Scholarly Writing',
    description: 'Encourage creative and scholarly writing through mentorship, workshops, and publication opportunities.',
  },
  {
    icon: 'handshake',
    title: 'Foster Collaboration',
    description: 'Foster collaboration between academia, industry, and community organizations for sustainable social and intellectual growth.',
  },
  {
    icon: 'public',
    title: 'Open-Access Knowledge',
    description: 'Develop open-access platforms for knowledge sharing and research dissemination across India and beyond.',
  },
]

function ObjectiveCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 border-t-4 border-tertiary-fixed-dim editorial-shadow transition-transform hover:-translate-y-1">
      <span className="material-symbols-outlined text-primary mb-6 text-3xl">{icon}</span>
      <h3 className="font-serif text-xl text-primary-container mb-4">{title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default function CoreObjectives() {
  return (
    <section className="bg-primary-container py-20 md:py-[80px] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-white text-4xl mb-4">Core Objectives</h2>
          <div className="h-1 w-20 bg-tertiary-fixed-dim"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.slice(0, 3).map((obj) => (
            <ObjectiveCard key={obj.title} {...obj} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:max-w-4xl mx-auto">
          {objectives.slice(3).map((obj) => (
            <ObjectiveCard key={obj.title} {...obj} />
          ))}
        </div>
      </div>
    </section>
  )
}
