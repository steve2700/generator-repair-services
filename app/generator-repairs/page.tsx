import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

/* ─────────────────────────────────────────
   SEO — Advanced
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Generator Repairs Gauteng | Same-Day Fault Diagnosis & Repair',
  description:
    'Expert generator repair services across Gauteng. Certified technicians diagnose and fix all faults — electrical, mechanical, fuel & control systems — on all brands. Most repairs completed on the first visit. Call 060 316 0484.',
  keywords: [
    'generator repairs Gauteng',
    'generator repair Johannesburg',
    'diesel generator repair Gauteng',
    'generator fault diagnosis Gauteng',
    'generator technician Johannesburg',
    'Cummins generator repair Gauteng',
    'Perkins generator repair Gauteng',
    'generator electrical fault repair',
    'generator won\'t start Gauteng',
    'generator repair same day Johannesburg',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs',
  },
  openGraph: {
    title: 'Generator Repairs Gauteng | Same-Day Fault Diagnosis & Repair',
    description:
      'Certified generator repair technicians across Gauteng. All brands, all faults. Most repairs completed on the first visit. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/generator-repairs',
    type: 'website',
  },
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const faults = [
  { label: 'Won\'t Start', desc: 'Battery, starter motor, control system or fuel delivery faults diagnosed fast.' },
  { label: 'No Output Voltage', desc: 'AVR failure, alternator winding faults or excitation circuit issues.' },
  { label: 'Overheating', desc: 'Coolant leaks, thermostat failure, blocked radiator or low coolant levels.' },
  { label: 'Excessive Smoke', desc: 'Black, white or blue smoke diagnosed — injectors, rings, oil or fuel issues.' },
  { label: 'Control Panel Fault', desc: 'AMF/ATS controller errors, alarm codes, relay and circuit board failures.' },
  { label: 'Mechanical Noise', desc: 'Bearing wear, loose components, coupling faults and engine knock diagnosed.' },
]

const brands = [
  'Cummins', 'Perkins', 'Caterpillar', 'Deutz', 'Volvo', 'John Deere',
  'Generac', 'Kohler', 'Wilson', 'FG Wilson', 'Olympian', 'Sdmo',
]

const whyUs = [
  {
    num: '01',
    title: 'Root-cause diagnosis first',
    body: 'We never guess or swap parts hoping to find the fault. Systematic testing finds the real problem — saving you money.',
  },
  {
    num: '02',
    title: 'Parts on every vehicle',
    body: 'Our mobile workshops carry common failure parts. Most repairs are completed on the first visit, not days later.',
  },
  {
    num: '03',
    title: 'All brands, all sizes',
    body: 'From small petrol units to large industrial diesel sets, our technicians are trained across all major generator brands.',
  },
  {
    num: '04',
    title: 'Workmanship guarantee',
    body: 'Every repair is backed by a workmanship guarantee. If the same fault recurs, we return and fix it at no charge.',
  },
]

const relatedServices = [
  { href: '/emergency-generator-repair', label: 'Emergency Callouts', desc: '2–4 hr response' },
  { href: '/generator-servicing', label: 'Generator Servicing', desc: 'Oil, filters, full inspection' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs', desc: 'AMF / ATS controllers' },
  { href: '/avr-repairs', label: 'AVR & Voltage Repairs', desc: 'Stable output voltage' },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function GeneratorRepairsPage() {
  return (
    <>
      <ServiceSchema
        name="Generator Repairs"
        description="Professional generator repair services across Gauteng. Expert diagnosis and repair of all generator faults — electrical, mechanical, fuel and control systems. All brands."
        url="/generator-repairs"
      />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Generator Repairs' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Industrial_Generator_Repair_Team.webp"
            alt="Generator repair technician diagnosing a diesel generator fault in Gauteng"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-[#c8a84b]" />
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase">
              Generator Repairs · Gauteng
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Expert Generator Repairs.<br />
            <span className="text-[#c8a84b]">First Visit, Fixed.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Our certified technicians diagnose and repair all generator faults — electrical,
            mechanical, fuel and control systems — across all brands and sizes. Most repairs
            are completed on the first visit.
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['All brands serviced', 'Same-day response', 'Workmanship guarantee', 'Parts on every vehicle'].map((t) => (
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
              Call 060 316 0484
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

      {/* ── What we repair ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="faults-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Common Faults</p>
            <h2 id="faults-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              Generator Problems We Fix
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]/10">
            {faults.map((f) => (
              <div key={f.label} className="bg-[#f5f4f0] p-6 hover:bg-white transition-colors group">
                <h3 className="font-bold text-[#0a0a0a] mb-2 group-hover:text-[#c8a84b] transition-colors">
                  {f.label}
                </h3>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About the service (rich content for SEO) ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
            {/* Body copy */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">The Service</p>
              <h2 id="about-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Professional Generator Repairs Across Gauteng
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  When your generator fails, you need technicians who can quickly identify the
                  problem and implement an effective repair. Generator Repair Services brings over
                  a decade of hands-on experience to every job, diagnosing and repairing generators
                  of all makes, models, and sizes across Gauteng.
                </p>
                <p>
                  Generator failures stem from numerous causes: electrical faults in the alternator
                  or control systems, mechanical wear in the engine, fuel delivery problems, cooling
                  system failures, or age-related component degradation. Our technicians carry
                  diagnostic equipment and common replacement parts, enabling us to complete many
                  repairs on the first visit — no waiting for parts to arrive before work begins.
                </p>
                <p>
                  We work on residential standby generators, commercial backup systems, and
                  industrial power plants. Whether you have a small petrol generator or a large
                  diesel unit, our team has the training and experience to get it running again.
                  We service all major brands including Cummins, Perkins, Caterpillar, Deutz,
                  Volvo, John Deere, Generac, and many others.
                </p>
                <p>
                  Every repair begins with a thorough diagnosis. We do not guess or swap parts
                  hoping to find the fault. We systematically test and inspect until we identify
                  the root cause, then provide you with a clear explanation and honest quote before
                  proceeding. This approach saves you money and ensures the repair actually solves
                  your problem.
                </p>
              </div>
            </div>

            {/* Why us sidebar */}
            <div className="space-y-0">
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">Why Choose Us</p>
              {whyUs.map((item, i) => (
                <div key={item.num} className={`flex gap-5 py-5 ${i < whyUs.length - 1 ? 'border-b border-[#1a1a1a]/8' : ''}`}>
                  <span className="text-[#c8a84b]/40 font-black text-[22px] leading-none w-8 shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[#0a0a0a] mb-1.5">{item.title}</h3>
                    <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}

              {/* CTA card */}
              <div className="mt-6 p-5 bg-[#0a0a0a]">
                <p className="text-white font-bold mb-1">Generator not working?</p>
                <p className="text-white/50 text-sm mb-4">Call now for same-day diagnosis across Gauteng.</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="py-12 bg-[#f5f4f0] border-t border-[#1a1a1a]/8" aria-labelledby="brands-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p id="brands-heading" className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#1a1a1a]/35 mb-6 text-center">
            Brands We Service
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {brands.map((b) => (
              <span
                key={b}
                className="px-4 py-1.5 border border-[#1a1a1a]/12 text-[12px] font-semibold text-[#1a1a1a]/50 tracking-wide uppercase hover:border-[#c8a84b]/50 hover:text-[#c8a84b] transition-colors cursor-default"
              >
                {b}
              </span>
            ))}
            <span className="px-4 py-1.5 border border-[#c8a84b]/30 text-[12px] font-semibold text-[#c8a84b] tracking-wide uppercase">
              + Many More
            </span>
          </div>
        </div>
      </section>

      {/* ── Coverage note ── */}
      <section className="py-12 bg-white border-t border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-[#f5f4f0] border-l-2 border-[#c8a84b]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#c8a84b]" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            <p className="text-[#1a1a1a]/70 text-sm leading-relaxed">
              <strong className="text-[#0a0a0a] font-bold">Service coverage:</strong>{' '}
              Generator repairs are available across all Gauteng areas including Johannesburg,
              Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton Park,
              Boksburg, Benoni, Germiston, Alberton, Fourways, and surrounding regions.{' '}
              <Link href="/areas" className="text-[#c8a84b] hover:text-[#0a0a0a] font-semibold transition-colors">
                View all service areas →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      <section className="py-14 bg-[#f5f4f0] border-t border-[#1a1a1a]/8" aria-labelledby="related-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="related-heading" className="text-lg font-bold text-[#0a0a0a] mb-6">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group p-4 bg-white border border-[#1a1a1a]/8 hover:border-[#c8a84b]/40 transition-colors"
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
              <h2 className="text-2xl md:text-3xl font-black mb-3">Generator Not Running?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Call now for same-day diagnosis and repair across Gauteng. Emergency callouts
                available. Most repairs completed on the first visit.
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
