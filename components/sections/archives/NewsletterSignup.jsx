'use client'
import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="bg-primary-container py-24 px-8 text-white text-center relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div className="grid grid-cols-12 h-full w-full">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="col-span-1 border-r border-white" />
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="font-headline text-4xl mb-6">Stay Updated</h2>
        <p className="text-white/70 mb-10 text-lg font-light">
          Subscribe to receive news about upcoming events, newly released publications, and
          breakthroughs in convergent research.
        </p>

        {submitted ? (
          <p className="text-tertiary-fixed-dim font-semibold text-lg">
            Thank you for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full px-6 py-4 focus:ring-1 focus:ring-tertiary-fixed-dim focus:bg-white/20 transition-all outline-none"
            />
            <button
              type="submit"
              className="bg-tertiary-fixed-dim text-on-tertiary-fixed px-10 py-4 rounded-full font-semibold hover:bg-on-tertiary-container transition-all shadow-lg active:scale-95"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
