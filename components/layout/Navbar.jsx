'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'Events', href: '/archives' },
  { label: 'Contact', href: '/#footer' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#1B2E6E] shadow-lg border-b-2 border-[#C9960C]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="logo-float shrink-0">
            <Image
              src="/images/crf-logo.jpeg"
              alt="CRF Logo"
              width={52}
              height={52}
              className="rounded-full object-cover"
              priority
            />
          </div>
          <span className="hidden md:block font-headline font-bold tracking-tight text-lg text-white">
            Convergence Research Foundation
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                pathname === link.href
                  ? 'text-[#C9960C] border-b-2 border-[#C9960C] pb-1 font-label text-sm uppercase tracking-widest font-semibold'
                  : 'text-slate-100 hover:text-[#C9960C] transition-colors font-label text-sm uppercase tracking-widest'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/#footer"
            className="bg-[#f6be3c] text-[#261900] px-6 py-2 rounded-full font-label font-bold text-sm tracking-wide hover:bg-[#c69306] transition-all active:scale-95"
          >
            Get Involved
          </Link>
          {/* Hamburger */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1B2E6E] border-t border-[#C9960C]/30 px-8 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                pathname === link.href
                  ? 'text-[#C9960C] font-label text-sm uppercase tracking-widest font-semibold'
                  : 'text-slate-100 hover:text-[#C9960C] transition-colors font-label text-sm uppercase tracking-widest'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
