'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/areas', label: 'Areas' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-brand-black text-brand-white">
      {/* Top bar - desktop only */}
      <div className="hidden md:block border-b border-brand-white/10">
        <div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <span className="text-brand-white/70">Serving all of Gauteng</span>
          <a 
            href="tel:0603160484" 
            className="text-brand-gold hover:text-brand-white transition-colors font-mono"
          >
            060 316 0484
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Generator Repair Services
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-white/80 hover:text-brand-gold transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: Phone + Menu */}
        <div className="flex items-center gap-4 md:hidden">
          <a 
            href="tel:0603160484" 
            className="text-brand-gold font-mono text-sm"
          >
            060 316 0484
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-brand-white"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-brand-white/10 bg-brand-black">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-brand-white/80 hover:text-brand-gold transition-colors py-2 text-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
