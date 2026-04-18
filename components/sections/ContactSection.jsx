export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#001757]">
      <div className="container mx-auto px-4 sm:px-8">

        {/* Heading */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="font-label text-xs uppercase tracking-[0.3em] font-bold text-[#C9960C] block mb-4">
            Get in Touch
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl text-white mb-4">
            Join the{' '}
            <span className="text-[#f6be3c] italic">Conversation.</span>
          </h2>
          <p className="text-[#8798df] text-base max-w-xl mx-auto leading-relaxed">
            We welcome scholars, researchers, writers, institutions, and collaborators. Reach out to us directly — no forms, no bots.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Main Contact Card */}
          <div className="lg:col-span-2 bg-[#243580] border border-[#C9960C]/20 rounded-sm p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-[#C9960C] text-2xl">mail</span>
              <h3 className="font-headline text-xl text-white">Send Us a Mail</h3>
            </div>
            <p className="text-[#8798df] text-sm leading-relaxed">
              To contact us, send a prospectus, or write to us regarding any inquiry — email us at:
            </p>
            <a
              href="mailto:convergenceofknowledge17@gmail.com"
              className="block text-[#f6be3c] font-headline text-lg sm:text-xl hover:underline break-all"
            >
              convergenceofknowledge17@gmail.com
            </a>
            <div className="bg-[#1b2e6e] border border-white/10 rounded-sm p-5 space-y-3 text-sm text-[#8798df]">
              <p className="text-white font-semibold text-xs uppercase tracking-widest mb-3 font-label">How to format your email</p>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#C9960C] text-base mt-0.5">label</span>
                <span><span className="text-white font-medium">Subject:</span> Your area of interest (e.g. Research Fellowship, Publication Support, Creative Writing)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#C9960C] text-base mt-0.5">person</span>
                <span><span className="text-white font-medium">Full Name:</span> Include your full name at the start of the message</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#C9960C] text-base mt-0.5">edit_note</span>
                <span><span className="text-white font-medium">Message:</span> Briefly describe your purpose, background, or proposal</span>
              </div>
            </div>
          </div>

          {/* Info & Phone Card */}
          <div className="flex flex-col gap-6">
<div className="bg-[#243580] border border-[#C9960C]/20 rounded-sm p-8 space-y-4 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-[#C9960C] text-2xl">call</span>
                <h3 className="font-headline text-lg text-white">Phone</h3>
              </div>
              <p className="text-[#8798df] text-sm">Reach us directly:</p>
              <a
                href="tel:+918017957018"
                className="block text-[#f6be3c] font-label font-bold text-lg hover:underline"
              >
                +91 80179 57018
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
