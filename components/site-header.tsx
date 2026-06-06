'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

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
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setIsMenuOpen(false) }, [pathname])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_1px_0_rgba(200,168,75,0.15)]'
          : 'bg-[#0a0a0a]'
      }`}
    >
      {/* ── Top bar — desktop ── */}
      <div className="hidden md:block border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 h-9 flex justify-between items-center">
          <p className="text-white/45 text-xs tracking-wide">
            Serving all of Gauteng — Johannesburg · Pretoria · Sandton · Centurion &amp; more
          </p>
          <a
            href="tel:0603160484"
            className="text-[#c8a84b] hover:text-white transition-colors text-xs font-semibold tracking-widest font-mono"
            aria-label="Call us on 060 316 0484"
          >
            060 316 0484
          </a>
        </div>
      </div>

      {/* ── Main nav row ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-[68px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="Generator Repair Services — home"
          >
            <Image
              src="/logo_lite.png"
              alt="Generator Repair Services logo"
              width={38}
              height={38}
              className="object-contain"
              priority
            />
            <div className="leading-none">
              <span className="block text-white font-black text-[13px] tracking-[0.18em] uppercase group-hover:text-[#c8a84b] transition-colors">
                Generator
              </span>
              <span className="flex items-center gap-1 mt-[2px]">
                <span className="block h-px w-3 bg-[#c8a84b]" />
                <span className="text-[#c8a84b] text-[9px] font-bold tracking-[0.28em] uppercase">
                  Repair Services
                </span>
                <span className="block h-px w-3 bg-[#c8a84b]" />
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    active
                      ? 'text-[#c8a84b]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Active underline */}
                  {active && (
                    <span className="absolute inset-x-3 bottom-0 h-[2px] bg-[#c8a84b] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:0603160484"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#b91c1c] text-white text-[13px] font-bold tracking-wide hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            aria-label="Call Generator Repair Services"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Now
          </a>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="tel:0603160484"
              className="text-[#c8a84b] font-mono text-sm font-semibold tracking-wider"
              aria-label="Call us"
            >
              060 316 0484
            </a>
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-white focus:outline-none focus:ring-2 focus:ring-[#c8a84b] focus:ring-offset-1 focus:ring-offset-[#0a0a0a]"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              <span
                className={`block w-5 h-[2px] bg-current origin-center transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-current transition-opacity duration-200 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-current origin-center transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu drawer ── */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Gold top rule */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#c8a84b]/50 to-transparent" />

        <div className="bg-[#0d0d0d] px-6 pt-4 pb-6">
          <ul className="space-y-1">
            {navLinks.map((link, i) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between w-full py-3 text-base font-medium border-b border-white/[0.06] transition-colors ${
                      active ? 'text-[#c8a84b]' : 'text-white/80 hover:text-white'
                    }`}
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    {link.label}
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile emergency CTA */}
          <a
            href="tel:0603160484"
            className="mt-5 flex items-center justify-center gap-2 w-full py-4 bg-[#b91c1c] text-white font-bold text-base tracking-wide hover:bg-red-800 transition-colors"
            aria-label="Call Generator Repair Services emergency line"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Emergency? Call 060 316 0484
          </a>
        </div>
      </div>
    </header>
  )
}
