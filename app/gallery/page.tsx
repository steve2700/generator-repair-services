import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/breadcrumbs'
import GalleryGrid from '@/components/gallery-grid'

export const metadata: Metadata = {
  title: 'Generator Repair Gallery | Our Work Across Gauteng',
  description:
    'View our generator repair, servicing, maintenance and installation work across Gauteng. Real jobs, real results — all brands, residential and commercial.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/gallery',
  },
  openGraph: {
    title: 'Generator Repair Gallery | Our Work Across Gauteng',
    description: 'Real generator repair, servicing and maintenance work completed across Gauteng.',
    url: 'https://www.generatorrepairservices.co.za/gallery',
    type: 'website',
  },
}

export default function GalleryPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]} />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/2026-06-11_Generator_Preventative_Maintenance.webp"
            alt="Generator preventative maintenance work in Gauteng"
            fill
            priority
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-[#c8a84b] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Real Work. Real Results.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-3xl">
            Our Work Across Gauteng
          </h1>
          <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Every image here is a real job — generator repairs, preventative maintenance,
            emergency callouts and installations completed for homes and businesses across
            Gauteng. No stock photos, no staged shots.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0603160484"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#b91c1c] text-white font-bold text-base hover:bg-red-800 transition-colors"
              aria-label="Call 060 316 0484"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call 060 316 0484
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-[#c8a84b]/50 text-[#c8a84b] font-semibold text-base hover:bg-[#c8a84b] hover:text-[#0a0a0a] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-[#1a1a1a] border-b border-white/5" aria-label="Company stats">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {[
              { stat: 'All Brands', label: 'Cummins, Perkins, CAT & more' },
              { stat: '2–4 hr', label: 'Emergency response time' },
              { stat: 'All Gauteng', label: 'Service coverage area' },
              { stat: 'Guaranteed', label: 'Workmanship on every job' },
            ].map((item) => (
              <div key={item.stat} className="md:px-8 first:pl-0 last:pr-0">
                <p className="text-[#c8a84b] font-black text-xl md:text-2xl leading-none mb-1">
                  {item.stat}
                </p>
                <p className="text-white/40 text-xs leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#c8a84b] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                Browse by Category
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-tight">
                Jobs Completed
              </h2>
            </div>
            <p className="hidden md:block text-sm text-[#1a1a1a]/40 font-medium">
              Click any image to view full size
            </p>
          </div>
          <GalleryGrid />
        </div>
      </section>

      {/* ── Services link-out ── */}
      <section className="py-14 bg-white border-t border-[#1a1a1a]/8" aria-labelledby="services-link-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="services-link-heading" className="text-xl font-bold text-[#1a1a1a] mb-6">
            Services You See in This Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/generator-repairs', label: 'Generator Repairs', sub: 'All brands & fault types' },
              { href: '/generator-maintenance', label: 'Maintenance Plans', sub: 'Scheduled & preventative' },
              { href: '/emergency-generator-repair', label: 'Emergency Callouts', sub: '2–4 hr response' },
              { href: '/generator-servicing', label: 'Generator Servicing', sub: 'Oil, filters, full check' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-4 bg-[#f5f4f0] border border-[#1a1a1a]/8 hover:border-[#c8a84b]/40 transition-colors"
              >
                <p className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#c8a84b] transition-colors mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-[#1a1a1a]/50">{item.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emergency CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Emergency callout CTA">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Need Generator Service Today?
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Emergency or planned, we cover all of Gauteng. Call now for a same-day
                callout or to schedule a service at a time that suits you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:0603160484"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                060 316 0484
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold text-base hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
