'use client'
import { useState } from 'react'
import ComingSoonModal from '@/components/ui/ComingSoonModal'

const domains = [
  'Education & Pedagogy',
  'Literature & Cultural Heritage',
  'Environmental Studies',
  'Media & Digital Humanities',
  'Science & Society',
  'Peace & Human Rights',
  'Gender & Diversity',
  'Public Policy',
]

const initiatives = [
  {
    number: '01',
    title: 'Convergence Research Summit',
    description: 'Annual summit focusing on emerging interdisciplinary issues, featuring national and international colloquia on arts, education, and social change.',
    cta: 'Learn More',
  },
  {
    number: '02',
    title: 'Research Fellowships & Grants',
    description: 'Research Fellowships and Writing Grants providing institutional and financial support for early-career scholars and emerging creative voices.',
    cta: 'Apply Now',
  },
  {
    number: '03',
    title: 'Online Certificate Programs',
    description: 'Online certificate programs in academic and creative writing, research methodology, and academic publishing for scholars at all stages.',
    cta: 'Browse Modules',
  },
]

export default function ResearchInitiatives() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <>
      {/* Foundational Domains */}
      <section className="bg-[#FAFAF7] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center mb-16">
          <h2 className="font-headline text-4xl text-primary mb-6">Foundational Domains</h2>
          <p className="text-on-surface-variant text-lg">
            While we embrace all forms of rigorous inquiry, our current research focus areas center around these
            critical humanistic and scientific pillars.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {domains.map((domain) => (
              <div
                key={domain}
                className="bg-[#F5E6C0] border border-[#C9960C]/30 px-4 py-4 text-center hover:bg-[#C9960C] hover:text-white transition-all cursor-default text-primary font-medium tracking-wide text-sm"
              >
                {domain}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Cards */}
      <section className="bg-primary-container py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {initiatives.map(({ number, title, description, cta }) => (
              <div
                key={number}
                className="flex-1 bg-white/5 border border-white/10 p-8 md:p-10 relative group hover:bg-white/[0.08] transition-all"
              >
                <span className="font-headline text-5xl text-[#C9960C]/30 absolute top-6 right-8">{number}</span>
                <h3 className="font-headline text-2xl md:text-3xl text-white mb-6 mt-8">{title}</h3>
                <p className="text-on-primary-container mb-10 leading-relaxed text-sm md:text-base">{description}</p>
                <button
                  onClick={() => setActiveModal(title)}
                  className="inline-flex items-center gap-2 text-[#C9960C] font-bold tracking-widest uppercase text-sm group-hover:gap-4 transition-all"
                >
                  {cta}
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
