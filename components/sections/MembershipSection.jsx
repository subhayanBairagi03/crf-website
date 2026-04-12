'use client'
import useScrollReveal from '@/hooks/useScrollReveal'

const benefits = [
  {
    number: '01',
    icon: 'workspace_premium',
    title: 'No Renewal Certificate',
    description: 'Valid for any API scores and recognition — a lifetime credential from CRF, Kolkata.',
  },
  {
    number: '02',
    icon: 'groups',
    title: 'Lifetime Networking',
    description: 'Permanent access to CRF events, conferences, workshops, and networking opportunities.',
  },
  {
    number: '03',
    icon: 'menu_book',
    title: 'Free Research Publication',
    description: 'One free research paper publication every two years in any edited volume, plus one free workshop or paper presentation every year.',
  },
  {
    number: '04',
    icon: 'auto_stories',
    title: 'Book Funding Support',
    description: 'Partial funding for any upcoming book — up to 50 copies — from any of CRF\'s collaborating publishers.',
  },
  {
    number: '05',
    icon: 'percent',
    title: '30% Edited Volume Funding',
    description: '30% funding for any Edited Volume of Book from any of the Collaborating Publishers.',
  },
  {
    number: '06',
    icon: 'support_agent',
    title: 'Research & Award Assistance',
    description: 'Professional guidance for research projects, publication pipelines, and academic award applications.',
  },
  {
    number: '07',
    icon: 'star',
    title: 'Executive Board Eligibility',
    description: 'Chance to become an Executive Board Member of CRF, Kolkata — subject to availability.',
  },
]

export default function MembershipSection() {
  const headingRef = useScrollReveal()
  const gridRef = useScrollReveal()
  const ctaRef = useScrollReveal()
  const memberHeadingRef = useScrollReveal()
  const memberCardRef = useScrollReveal()

  return (
    <>
      {/* ── Sub-section A: Life Membership Benefits ── */}
      <section className="py-20 sm:py-32 bg-[#001757]">
        <div className="container mx-auto px-4 sm:px-8">

          {/* Heading */}
          <div ref={headingRef} className="reveal text-center mb-12 sm:mb-16">
            <span className="font-label text-xs uppercase tracking-widest font-bold text-[#C9960C]">
              Convergence Research Foundation, Kolkata
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-white mt-2 mb-3">
              Become a Life Member
            </h2>
            <p className="text-white/50 font-label text-sm">
              A Govt. Registered Organisation &nbsp;·&nbsp; One-time charge: ₹9,999
            </p>
            <div className="w-16 h-1 bg-[#C9960C] mx-auto mt-5" />
          </div>

          {/* Benefits grid */}
          <div
            ref={gridRef}
            className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14"
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="bg-white/5 border border-white/10 p-6 space-y-3 hover:bg-white/10 hover:border-[#C9960C]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#C9960C] text-2xl">
                    {benefit.icon}
                  </span>
                  <span className="font-headline text-4xl font-black text-white/10">
                    {benefit.number}
                  </span>
                </div>
                <h4 className="font-headline text-base text-white font-bold">
                  {benefit.title}
                </h4>
                <p className="text-white/50 text-xs leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            ))}

            {/* Apply card — fills the 8th slot in the 4-col grid */}
            <div className="bg-[#C9960C] p-6 flex flex-col justify-between space-y-6">
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-[#5c4300] mb-2">
                  Get Certified
                </p>
                <h4 className="font-headline text-xl text-[#001757] font-bold leading-snug">
                  Apply for Life Membership Today
                </h4>
              </div>
              <a
                href="mailto:convergenceofknowledge17@gmail.com?subject=Life%20Membership%20Application"
                className="inline-block bg-[#001757] text-white font-label font-bold text-xs uppercase tracking-widest px-5 py-3 text-center hover:bg-[#1B2E6E] transition-colors"
              >
                Apply Now →
              </a>
            </div>
          </div>

          {/* Contact strip */}
          <div ref={ctaRef} className="reveal border border-white/10 px-6 py-5 text-center space-y-1">
            <p className="text-white/60 text-xs font-label">
              Send your Application to:{' '}
              <a
                href="mailto:convergenceofknowledge17@gmail.com"
                className="text-[#C9960C] hover:underline"
              >
                convergenceofknowledge17@gmail.com
              </a>
            </p>
            <p className="text-white/60 text-xs font-label">
              Dr. Debdoot Mukherjee, Chairman, CRF, Kolkata &nbsp;·&nbsp; Contact: 8017957018
            </p>
          </div>

        </div>
      </section>

      {/* ── Sub-section B: Life Members (coming soon) ── */}
      <section className="py-20 sm:py-28 bg-[#F5E6C0]">
        <div className="container mx-auto px-4 sm:px-8">

          <div ref={memberHeadingRef} className="reveal mb-10">
            <span className="font-label text-xs uppercase tracking-widest font-bold text-[#5c4300]">
              Life Members
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#001757] mt-2">
              Our Life Members
            </h2>
            <div className="w-16 h-1 bg-[#C9960C] mt-4" />
          </div>

          <div ref={memberCardRef} className="reveal">
            <div className="border border-[#C9960C]/40 bg-white/60 px-8 py-10 max-w-xl text-center space-y-3">
              <span className="material-symbols-outlined text-[#C9960C] text-3xl">schedule</span>
              <p className="font-headline text-xl text-[#001757]">
                Life members will be listed here.
              </p>
              <p className="font-label text-sm text-[#5c4300]/70 leading-relaxed">
                New members will be added from next month. Check back in May 2026.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
