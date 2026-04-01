'use client'
import { useEffect } from 'react'

export default function ComingSoonModal({ title, onClose }) {
  // Close on Escape key
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      {/* Glass card */}
      <div
        className="relative w-full max-w-md rounded-2xl p-8 sm:p-12 text-center space-y-6 border border-white/20 shadow-2xl"
        style={{
          background: 'rgba(27,46,110,0.55)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-[#C9960C]/20 border border-[#C9960C]/40 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#C9960C] text-4xl">hourglass_top</span>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h3 className="font-headline text-2xl sm:text-3xl text-white">
            {title} — <span className="text-[#f6be3c] italic">Coming Soon</span>
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            This section is currently being developed. We are working to bring you the best experience.
            Check back soon or reach out to us for more information.
          </p>
        </div>

        {/* Contact CTA */}
        <a
          href="mailto:convergenceofknowledge17@gmail.com?subject=Inquiry"
          className="inline-block bg-[#C9960C] text-[#261900] font-label font-bold uppercase tracking-widest text-xs px-8 py-3 rounded-full hover:bg-[#f6be3c] transition-colors"
        >
          Contact Us
        </a>

        {/* Dismiss */}
        <button
          onClick={onClose}
          className="block w-full text-white/40 text-xs font-label uppercase tracking-widest hover:text-white/70 transition-colors pt-2"
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}
