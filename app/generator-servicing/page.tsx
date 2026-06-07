import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

/* ─────────────────────────────────────────
   SEO — Advanced
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Generator Servicing Gauteng | Oil Changes, Filters & Full Inspection',
  description:
    'Professional generator servicing across Gauteng. Comprehensive oil and filter changes, coolant inspection, belt checks, battery testing and full load test. Keeps your generator reliable during loadshedding. Call 060 316 0484.',
  keywords: [
    'generator servicing Gauteng',
    'generator service Johannesburg',
    'generator oil change Gauteng',
    'generator filter replacement Gauteng',
    'diesel generator service Gauteng',
    'generator annual service Johannesburg',
    'standby generator service Gauteng',
    'generator preventative maintenance Gauteng',
    'generator coolant check Gauteng',
    'generator battery test Gauteng',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-servicing',
  },
  openGraph: {
    title: 'Generator Servicing Gauteng | Oil Changes, Filters & Full Inspection',
    description:
      'Comprehensive generator servicing across Gauteng. Oil & filter changes, coolant, belts, battery & load test. All brands. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/generator-servicing',
    type: 'website',
  },
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const serviceIncludes = [
  {
    step: '01',
    title: 'Engine Oil & Filter Change',
    desc: 'Drained and replaced with quality-spec lubricants matched to your engine type and manufacturer requirements.',
  },
  {
    step: '02',
    title: 'Fuel Filter Replacement',
    desc: 'Old fuel filter removed and replaced to ensure clean, unrestricted fuel delivery to the injection system.',
  },
  {
    step: '03',
    title: 'Air Filter Inspection',
    desc: 'Air filter inspected and replaced if blocked or deteriorated. Critical for efficient combustion and engine longevity.',
  },
  {
    step: '04',
    title: 'Coolant System Check',
    desc: 'Coolant level and condition inspected, topped up if needed, hoses and connections checked for leaks or wear.',
  },
  {
    step: '05',
    title: 'Battery & Charging Test',
    desc: 'Battery voltage, capacity and terminals tested. Charging system output verified to ensure reliable auto-start.',
  },
  {
    step: '06',
    title: 'Full Operational Load Test',
    desc: 'Generator run under load to confirm it produces correct output voltage and frequency before we leave the site.',
  },
]

const intervals = [
  { type: 'Standby Generator', freq: 'Annual or every 200–250 hours', note: 'Whichever comes first' },
  { type: 'Prime Power Generator', freq: 'Every 250–500 hours', note: 'Based on load and usage' },
  { type: 'Lightly Used Units', freq: 'Annual minimum', note: 'Even if hours are low' },
]

const relatedServices = [
  { href: '/generator-maintenance', label: 'Maintenance Plans', desc: 'Scheduled service contracts' },
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'All faults, all brands' },
  { href: '/load-bank-testing', label: 'Load Bank Testing', desc: 'Capacity verification' },
  { href: '/fuel-system-repairs', label: 'Fuel System Repairs', desc: 'Injectors & pumps' },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function GeneratorServicingPage() {
  return (
    <>
      <ServiceSchema
        name="Generator Servicing"
        description="Professional generator servicing across Gauteng. Comprehensive oil and filter changes, coolant inspection, belt checks, battery testing and full load test. All brands."
        url="/generator-servicing"
      />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Generator Servicing' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generator-servicing.png"
            alt="Technician performing a full generator service including oil change and filter replacement in Gauteng"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-[#c8a84b]" />
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase">
              Generator Servicing · Gauteng
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Generator Servicing<br />
            <span className="text-[#c8a84b]">That Prevents Breakdowns.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            A properly serviced generator starts when you need it, runs efficiently, and lasts
            for years. Neglected generators fail during loadshedding — when you need them most.
            We change that.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Oil & filter change', 'Coolant system check', 'Battery & charging test', 'Full load test'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" stroke="#c8a84b" strokeWidth="1"/>
                  <path d="M4 7l2 2 4-4" stroke="#c8a84b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white/65 text-sm">{t}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0603160484"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#b91c1c] text-white font-black text-base hover:bg-red-800 transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Book a Service
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#c8a84b]/40 text-[#c8a84b] font-semibold text-base hover:bg-[#c8a84b] hover:text-[#0a0a0a] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="includes-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">What's Included</p>
            <h2 id="includes-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              Our Comprehensive Service Checklist
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]/10">
            {serviceIncludes.map((item) => (
              <div key={item.step} className="bg-[#f5f4f0] p-6 hover:bg-white transition-colors group">
                <span className="text-[#c8a84b]/40 font-black text-[28px] leading-none block mb-3">{item.step}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2 group-hover:text-[#c8a84b] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service detail copy ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">The Service</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Why Regular Servicing Matters
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  Regular servicing is the key to generator reliability. A well-maintained
                  generator starts when you need it, runs efficiently, and lasts for years.
                  Neglected generators fail at the worst possible moments — typically during
                  extended loadshedding when they run longer than usual under higher thermal stress.
                </p>
                <p>
                  Our standard service goes beyond a simple oil change. We inspect the entire
                  system — fuel lines, hoses, connections, belts, and electrical circuits — for
                  signs of wear or deterioration. Issues caught during a service cost a fraction
                  of what they cost when they cause an unplanned breakdown.
                </p>
                <p>
                  Service intervals depend on your generator type and usage. Standby generators
                  typically need servicing annually or every 200–250 hours. Prime power generators
                  running continuously require more frequent attention. We help you establish the
                  right schedule for your specific equipment and situation.
                </p>
                <p>
                  Every service includes a detailed report documenting your generator's condition
                  and any developing issues we have identified. These records are useful for warranty
                  purposes, asset management, and insurance compliance.
                </p>
              </div>
            </div>

            {/* Service intervals + CTA */}
            <div>
              <div className="mb-6">
                <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-4">Service Intervals</p>
                <div className="space-y-0">
                  {intervals.map((row, i) => (
                    <div key={row.type} className={`py-4 ${i < intervals.length - 1 ? 'border-b border-[#1a1a1a]/8' : ''}`}>
                      <p className="font-bold text-[#0a0a0a] text-sm mb-0.5">{row.type}</p>
                      <p className="text-[#c8a84b] text-sm font-semibold">{row.freq}</p>
                      <p className="text-xs text-[#1a1a1a]/40 mt-0.5">{row.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA card */}
              <div className="p-5 bg-[#0a0a0a]">
                <p className="text-white font-bold mb-1">When was your last service?</p>
                <p className="text-white/50 text-sm mb-4">Book a service and keep your generator ready for the next outage.</p>
                <a
                  href="tel:0603160484"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#b91c1c] text-white font-bold text-sm hover:bg-red-800 transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  060 316 0484
                </a>
              </div>

              {/* Maintenance plan upsell */}
              <Link
                href="/generator-maintenance"
                className="mt-3 flex items-center justify-between p-4 border border-[#c8a84b]/25 hover:border-[#c8a84b]/60 transition-colors group"
              >
                <div>
                  <p className="text-sm font-bold text-[#0a0a0a] group-hover:text-[#c8a84b] transition-colors">
                    Want us to track it for you?
                  </p>
                  <p className="text-xs text-[#1a1a1a]/45 mt-0.5">View our Maintenance Plans →</p>
                </div>
                <span className="text-[#c8a84b] text-lg" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coverage ── */}
      <section className="py-12 bg-[#f5f4f0] border-t border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-white border-l-2 border-[#c8a84b]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#c8a84b]" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            <p className="text-[#1a1a1a]/70 text-sm leading-relaxed">
              <strong className="text-[#0a0a0a] font-bold">Service coverage:</strong>{' '}
              Generator servicing is available across all Gauteng areas including Johannesburg,
              Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton Park, Boksburg,
              Benoni, Germiston, Alberton, Fourways, and surrounding regions.{' '}
              <Link href="/areas" className="text-[#c8a84b] hover:text-[#0a0a0a] font-semibold transition-colors">
                View all service areas →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      <section className="py-14 bg-white border-t border-[#1a1a1a]/8" aria-labelledby="related-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="related-heading" className="text-lg font-bold text-[#0a0a0a] mb-6">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group p-4 bg-[#f5f4f0] border border-[#1a1a1a]/8 hover:border-[#c8a84b]/40 transition-colors"
              >
                <p className="font-bold text-sm text-[#0a0a0a] group-hover:text-[#c8a84b] transition-colors mb-1">{s.label}</p>
                <p className="text-xs text-[#1a1a1a]/45">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Call to action">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Generator Servicing?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Schedule your service today and keep your backup power ready for the next
                outage. We cover all of Gauteng.
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
