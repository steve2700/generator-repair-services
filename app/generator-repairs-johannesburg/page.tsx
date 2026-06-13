import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

/* ─────────────────────────────────────────
   SEO — Advanced
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Generator Repairs Johannesburg | Same-Day Service, All JHB Areas',
  description:
    'Professional generator repairs, servicing and emergency callouts across Johannesburg. CBD, northern suburbs, southern industrial zones — mobile technicians come to you. Call 060 316 0484.',
  keywords: [
    'generator repairs Johannesburg',
    'generator repair Johannesburg CBD',
    'generator repair northern suburbs Johannesburg',
    'generator repair Bryanston',
    'generator repair Sandton',
    'generator repair Rosebank',
    'generator repair Parktown',
    'generator repair Soweto',
    'emergency generator repair Johannesburg',
    'generator servicing Johannesburg',
    'generator maintenance Johannesburg',
    'generator installation Johannesburg',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-johannesburg',
  },
  openGraph: {
    title: 'Generator Repairs Johannesburg | Same-Day Service, All JHB Areas',
    description:
      'Expert generator repairs and emergency callouts across all of Johannesburg. Mobile technicians, same-day response. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/generator-repairs-johannesburg',
    type: 'website',
  },
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const services = [
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'All faults, all makes' },
  { href: '/generator-servicing', label: 'Generator Servicing', desc: 'Oil, filters, full inspection' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts', desc: 'Same-day response' },
  { href: '/generator-maintenance', label: 'Maintenance Plans', desc: 'Scheduled service contracts' },
  { href: '/generator-installation', label: 'Generator Installation', desc: 'Complete setup & commissioning' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs', desc: 'AMF / ATS controllers' },
  { href: '/avr-repairs', label: 'AVR & Voltage Repairs', desc: 'Stable power output' },
  { href: '/fuel-system-repairs', label: 'Fuel System Repairs', desc: 'Injectors & pumps' },
  { href: '/load-bank-testing', label: 'Load Bank Testing', desc: 'Capacity verification' },
  { href: '/generator-rewinding', label: 'Generator Rewinding', desc: 'Alternator rewinding' },
]

const jhbAreas = [
  'Bryanston', 'Sandton', 'Rosebank', 'Parktown', 'Houghton',
  'Melrose', 'Norwood', 'Kensington', 'Bedfordview', 'Fourways',
  'Randburg', 'Roodepoort', 'Soweto', 'Johannesburg CBD', 'Krugersdorp',
  'Midrand', 'Edenvale', 'Germiston', 'Alberton', 'Boksburg',
]

const whyPoints = [
  {
    num: '01',
    title: 'Mobile workshop — we come to you',
    body: 'Our technicians arrive at your site fully equipped. Most Johannesburg repairs are completed on the first visit — no towing, no drop-off, no waiting.',
  },
  {
    num: '02',
    title: 'Same-day emergency response',
    body: 'When your generator fails during loadshedding or a critical outage, we mobilise fast. Most Johannesburg callouts receive a technician within 2–4 hours.',
  },
  {
    num: '03',
    title: 'All makes and sizes',
    body: 'Cummins, Perkins, Caterpillar, Deutz, Volvo, John Deere — residential, commercial and industrial generators serviced across the full kVA range.',
  },
  {
    num: '04',
    title: 'Upfront diagnosis, no surprises',
    body: 'We diagnose fully before quoting. You receive a clear explanation of the fault and an accurate repair cost before any work begins.',
  },
]

const nearbyAreas = [
  { href: '/generator-repairs-sandton', name: 'Sandton' },
  { href: '/generator-repairs-randburg', name: 'Randburg' },
  { href: '/generator-repairs-roodepoort', name: 'Roodepoort' },
  { href: '/generator-repairs-fourways', name: 'Fourways' },
  { href: '/generator-repairs-soweto', name: 'Soweto' },
  { href: '/generator-repairs-midrand', name: 'Midrand' },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function JohannesburgPage() {
  return (
    <>
      <AreaSchema areaName="Johannesburg" url="/generator-repairs-johannesburg" />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Areas', href: '/areas' },
              { label: 'Johannesburg' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero — single image only ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generator-repair-services-technicians.webp"
            alt="Generator repair and servicing across Johannesburg — mobile technicians covering all JHB suburbs and the CBD"
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
              Generator Repairs · Johannesburg
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Generator Repairs in Johannesburg.<br />
            <span className="text-[#c8a84b]">Mobile Service, All JHB Areas.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            From the CBD and northern suburbs through to the southern industrial zones —
            our mobile technicians cover all of Johannesburg, arriving equipped to diagnose
            and repair on-site the same day.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Same-day emergency callouts', 'All generator makes & sizes', 'On-site repairs, first visit', 'Full service scope'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
                <span className="text-white/65 text-sm">{t}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0603160484"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#b91c1c] text-white font-black text-base hover:bg-red-800 transition-colors"
            >
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

      {/* ── Why choose us — 4 pillars ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Why Choose Us</p>
            <h2 id="why-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              Generator Service Built for Johannesburg
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]/10">
            {whyPoints.map((item) => (
              <div key={item.num} className="bg-[#f5f4f0] p-6 hover:bg-white transition-colors group">
                <span className="text-[#c8a84b]/40 font-black text-[28px] leading-none block mb-3">{item.num}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2 group-hover:text-[#c8a84b] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body copy + services sidebar ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">

            {/* Left — body copy */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Johannesburg</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Expert Generator Service Across All of Johannesburg
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  As South Africa's economic hub, Johannesburg carries the heaviest consequences
                  from generator failure. Businesses in the CBD and office parks across the
                  northern suburbs cannot afford extended downtime during loadshedding. Industrial
                  operations in the southern zones run on generators that must start every time.
                  Generator Repair Services provides the full range of generator repair, servicing,
                  and maintenance services across all of Johannesburg — with the response speed
                  the city demands.
                </p>
                <p>
                  Our service coverage spans the full Johannesburg area. From Bryanston, Sandton,
                  and Rosebank in the north, through Parktown, Houghton, and the CBD, to the
                  industrial corridors of the south and Soweto — our mobile technicians reach you.
                  We carry diagnostic equipment and a comprehensive stock of common parts, which
                  means most faults are diagnosed and repaired in a single visit without scheduling
                  return trips for parts.
                </p>
                <p>
                  Emergency callouts across Johannesburg receive priority response. When your
                  generator fails during an outage, every minute of downtime is a direct cost.
                  We assess your situation on the call, dispatch accordingly, and provide upfront
                  communication about arrival time, fault diagnosis, and repair cost before
                  work begins. No surprises on the invoice.
                </p>
                <p>
                  Beyond emergency repairs, we offer scheduled servicing and maintenance contracts
                  for businesses that need reliable standby power throughout the year.
                  A properly maintained generator that starts every time is worth considerably
                  more than one that only runs when the fault is obvious. We work with businesses
                  across Johannesburg to establish service intervals appropriate for their
                  generator's usage pattern and operating environment.
                </p>
              </div>

              {/* JHB suburbs coverage box */}
              <div className="mt-10 p-6 bg-[#f5f4f0] border-l-2 border-[#c8a84b]">
                <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">Areas Covered</p>
                <div className="flex flex-wrap gap-2">
                  {jhbAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 bg-white border border-[#1a1a1a]/10 text-[#1a1a1a]/70 text-xs font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — services */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">Services in Johannesburg</p>
              {services.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between gap-4 py-4 group hover:text-[#c8a84b] transition-colors ${i < services.length - 1 ? 'border-b border-[#1a1a1a]/8' : ''}`}
                >
                  <div>
                    <p className="font-bold text-[#0a0a0a] text-sm group-hover:text-[#c8a84b] transition-colors">{item.label}</p>
                    <p className="text-xs text-[#1a1a1a]/50 mt-0.5">{item.desc}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#c8a84b]/40 group-hover:text-[#c8a84b] transition-colors" aria-hidden="true">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}

              <div className="mt-6 p-5 bg-[#0a0a0a]">
                <p className="text-white font-bold mb-1">Generator problem in Johannesburg?</p>
                <p className="text-white/50 text-sm mb-4">Call now for same-day service across all JHB areas.</p>
                <a
                  href="tel:0603160484"
                  className="flex items-center justify-center w-full py-3 bg-[#b91c1c] text-white font-bold text-sm hover:bg-red-800 transition-colors"
                >
                  060 316 0484
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nearby areas ── */}
      <section className="py-12 bg-[#f5f4f0] border-t border-[#1a1a1a]/8" aria-labelledby="nearby-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="nearby-heading" className="text-lg font-bold text-[#0a0a0a] mb-6">Nearby Service Areas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group p-4 bg-white border border-[#1a1a1a]/8 hover:border-[#c8a84b]/40 transition-colors text-center"
              >
                <p className="font-bold text-sm text-[#0a0a0a] group-hover:text-[#c8a84b] transition-colors">{area.name}</p>
              </Link>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link href="/areas" className="text-[#c8a84b] text-sm font-semibold hover:text-[#0a0a0a] transition-colors">
              View all Gauteng areas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Call to action">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Generator Service in Johannesburg?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Emergency or planned, we cover all of Johannesburg. Call now for a
                same-day callout or to schedule a service visit at your location.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:0603160484"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors"
              >
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
