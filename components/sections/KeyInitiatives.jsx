'use client'
import useScrollReveal from '@/hooks/useScrollReveal'

const goals = [
  {
    number: '01',
    title: 'Research & Publication',
    description: 'Launch of the Interdisciplinary Journal of Convergence Studies (IJCS) and annual publication of Convergence Research Monographs.',
  },
  {
    number: '02',
    title: 'Training & Capacity Building',
    description: 'Workshops on Research Methodology, Academic Publishing, and Creative Nonfiction, along with fellowships and writing grants for early-career scholars.',
  },
  {
    number: '03',
    title: 'Conferences & Symposia',
    description: 'Annual Convergence Research Summit on emerging interdisciplinary issues, plus national and international colloquia on arts, education, and social change.',
  },
  {
    number: '04',
    title: 'Community & Policy Engagement',
    description: 'Research-based community development initiatives, policy briefs for government and NGOs, and citizen research and participatory documentation projects.',
  },
]

export default function KeyInitiatives() {
  const ref = useScrollReveal()

  return (
    <section className="py-32 bg-[#1b2e6e]">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl text-white mb-12 sm:mb-16 text-center">Key Initiatives</h2>
        <div ref={ref} className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {goals.map((goal) => (
            <div key={goal.number} className="bg-white p-6 md:p-10 space-y-4 sm:space-y-6 hover:-translate-y-1 transition-transform">
              <span className="block font-headline text-6xl text-[#f6be3c] font-black opacity-40">
                {goal.number}
              </span>
              <h4 className="font-headline text-xl text-[#001757] font-bold">{goal.title}</h4>
              <p className="text-on-surface-variant text-sm font-light">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
