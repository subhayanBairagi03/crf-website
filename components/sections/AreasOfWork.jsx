'use client'
import { useState } from 'react'
import useScrollReveal from '@/hooks/useScrollReveal'
import ComingSoonModal from '@/components/ui/ComingSoonModal'

const pillars = [
  {
    icon: 'science',
    title: 'Research Assistance',
    description:
      'Guidance in research design, methodology, and data collection. Mentorship for M.Phil., Ph.D., and postdoctoral scholars, with consultancy for interdisciplinary and funded research proposals.',
    link: 'Explore Research',
    modalTitle: 'Research Assistance',
  },
  {
    icon: 'auto_stories',
    title: 'Publication Assistance',
    description:
      'Editorial and peer-review support for scholars and institutions. In-house publication of research journals, edited volumes, and conference proceedings under the CRF imprint.',
    link: 'Read Journals',
    modalTitle: 'Publication Assistance',
  },
  {
    icon: 'edit_note',
    title: 'Creative Writing & Cultural Studies',
    description:
      'Mentoring programs for poets, fiction writers, playwrights, and translators. Publication of literary anthologies, hosting writing residencies, and documentation of indigenous and folk narratives.',
    link: 'View Works',
    modalTitle: 'Creative Writing & Cultural Studies',
  },
]

export default function AreasOfWork() {
  const ref = useScrollReveal()
  const [activeModal, setActiveModal] = useState(null)

  return (
    <>
      <section className="py-20 sm:py-32 bg-[#1b2e6e] text-white">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="font-headline text-3xl sm:text-4xl mb-12 sm:mb-16 text-center">Major Areas of Work</h2>
          <div ref={ref} className="reveal-stagger grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#243580] border border-[#C9960C]/20 p-6 md:p-10 rounded-lg hover:border-[#C9960C] hover:-translate-y-1 transition-all duration-500 group"
              >
                <span className="material-symbols-outlined text-[#C9960C] text-5xl mb-6 block">
                  {pillar.icon}
                </span>
                <h3 className="font-headline text-xl sm:text-2xl mb-4">{pillar.title}</h3>
                <p className="text-[#8798df] text-sm leading-relaxed mb-8">{pillar.description}</p>
                <button
                  onClick={() => setActiveModal(pillar.modalTitle)}
                  className="text-[#C9960C] font-label text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 inline-flex items-center gap-1 transition-transform"
                >
                  {pillar.link}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeModal && (
        <ComingSoonModal title={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  )
}
