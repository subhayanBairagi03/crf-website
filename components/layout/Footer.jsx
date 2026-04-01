import Image from 'next/image'
import Link from 'next/link'

const quickLinks = [
  { label: 'About CRF', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'Events', href: '/archives' },
  { label: 'Contact', href: '/#footer' },
]
const programs = ['Creative Writing', 'Research Methodology', 'Academic Publishing', 'Cultural Studies']
const legal = ['Terms of Service', 'Privacy Policy', 'Ethics Charter']

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1B2E6E] pt-16 pb-8 border-t border-[#C9960C]/30 text-slate-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 px-6 sm:px-12 max-w-7xl mx-auto mb-16">

        {/* Brand with Logo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/crf-logo.jpeg"
              alt="CRF Logo"
              width={52}
              height={52}
              className="rounded-full object-cover border-2 border-[#C9960C]/60"
            />
            <span className="font-headline text-xl font-bold text-[#C9960C] italic">CRF</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Where Minds Converge for Creativity, Innovation, and Insight.
          </p>
          <div className="space-y-1 pt-2">
            <a href="mailto:convergenceofknowledge17@gmail.com" className="block text-xs text-[#C9960C] hover:text-white transition-colors break-all">
              convergenceofknowledge17@gmail.com
            </a>
            <a href="mailto:Info@crf.tech" className="block text-xs text-slate-400 hover:text-white transition-colors">
              Info@crf.tech
            </a>
            <a href="tel:+918017957018" className="block text-xs text-slate-400 hover:text-white transition-colors">
              +91 80179 57018
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-[#C9960C] font-semibold mb-6 uppercase tracking-widest text-xs">Quick Links</h5>
          <ul className="space-y-4 text-sm font-label">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link className="hover:text-white transition-colors" href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h5 className="text-[#C9960C] font-semibold mb-6 uppercase tracking-widest text-xs">Programs</h5>
          <ul className="space-y-4 text-sm font-label">
            {programs.map((p) => (
              <li key={p}>
                <a className="hover:text-white transition-colors" href="#">{p}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact CTA */}
        <div>
          <h5 className="text-[#C9960C] font-semibold mb-6 uppercase tracking-widest text-xs">Get Involved</h5>
          <p className="text-xs leading-relaxed mb-6">
            Interested in research collaboration, publishing, or fellowship opportunities? Write to us directly with your area of interest as subject.
          </p>
          <a
            href="mailto:convergenceofknowledge17@gmail.com"
            className="inline-block bg-[#C9960C] text-[#261900] font-label font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-full hover:bg-[#f6be3c] transition-colors"
          >
            Write to Us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest">
          © 2026 Convergence Research Foundation. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest">
          {legal.map((item) => (
            <a key={item} className="hover:text-white transition-colors" href="#">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
