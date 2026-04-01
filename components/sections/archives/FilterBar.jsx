'use client'
import { useState } from 'react'

const FILTERS = ['All', 'Events', 'Publications', 'Stories']

export default function FilterBar({ onFilterChange, onSearchChange }) {
  const [active, setActive] = useState('All')

  function handleFilter(label) {
    setActive(label)
    onFilterChange?.(label)
  }

  return (
    <section className="sticky top-0 z-40 bg-surface border-b border-outline-variant/10 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Filter pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {FILTERS.map((label) => (
            <button
              key={label}
              onClick={() => handleFilter(label)}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                active === label
                  ? 'bg-primary-container text-white'
                  : 'bg-[#F5E6C0] text-primary-container border border-tertiary-fixed-dim/30 hover:bg-tertiary-fixed-dim hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Filter records..."
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="w-full bg-surface-container-low border-none text-sm py-2 px-4 rounded-lg focus:ring-1 focus:ring-tertiary-fixed-dim outline-none"
          />
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-primary opacity-40 text-base">
            search
          </span>
        </div>
      </div>
    </section>
  )
}
