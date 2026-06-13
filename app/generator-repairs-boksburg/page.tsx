import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Boksburg | Same-Day Service, Commercial & Industrial',
  description:
    'Professional generator repairs, servicing and emergency callouts across Boksburg. Bartlett, Sunward Park, Dawn Park, Cloverdene — mobile technicians come to you. Call 060 316 0484.',
  keywords: [
    'generator repairs Boksburg',
    'generator repair Boksburg',
    'generator repair Bartlett',
    'generator repair Sunward Park',
    'generator repair Dawn Park',
    'generator repair Cloverdene',
    'generator repair East Rand',
    'emergency generator repair Boksburg',
    'generator servicing Boksburg',
    'industrial generator repair Boksburg',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-boksburg',
  },
  openGraph: {
    title: 'Generator Repairs Boksburg | Same-Day Service, Commercial & Industrial',
    description:
      'Expert generator repairs and emergency callouts across Boksburg. Mobile technicians, same-day response. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/generator-repairs-boksburg',
    type: 'website',
  },
}

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

const boksburgAreas = [
  'Boksburg CBD', 'Bartlett', 'Cloverdene', 'Sunward Park', 'Dawn Park',
  'Boksburg North', 'Boksburg East', 'Parkrand', 'Vosloorus', 'Wychwood',
  'Klippoortje', 'Impala Park', 'Cossbow', 'Crockett', 'Casterbridge',
  'Cloverglen', 'Ravenswood', 'Cloverton', 'Witfield', 'Jet Park',
]

const whyPoints = [
  {
    num: '01',
    title: 'Heavy industrial expertise',
    body: "Boksburg's foundries, factories, and engineering operations run large diesel generators under demanding conditions. Our technicians have the experience to service and repair industrial-scale equipment — not just domestic units.",
  },
  {
    num: '02',
    title: 'Mobile workshop — we come to you',
    body: 'Our vehicles arrive at your Boksburg facility fully equipped for on-site diagnosis and repair. Most faults are resolved on the first visit — no delays waiting for parts or return trips.',
  },
  {
    num: '03',
    title: 'Same-day emergency response',
    body: 'Industrial operations cannot absorb extended downtime. We mobilise fast and prioritise getting your production or operations back online as quickly as possible.',
  },
  {
    num: '04',
    title: 'Upfront diagnosis, no surprises',
    body: 'We diagnose fully before quoting. You receive a clear explanation of the fault and an accurate repair cost before work begins — no hidden charges, no open-ended estimates.',
  },
]

const nearbyAreas = [
  { href: '/generator-repairs-johannesburg', name: 'Johannesburg' },
  { href: '/generator-repairs-kempton-park', name: 'Kempton Park' },
  { href: '/generator-repairs-benoni', name: 'Benoni' },
  { href: '/generator-repairs-germiston', name: 'Germiston' },
  { href: '/generator-repairs-springs', name: 'Springs' },
  { href: '/generator-repairs-brakpan', name: 'Brakpan' },
]

export default function BoksburgPage() {
  return (
    <>
      <AreaSchema areaName="Boksburg" url="/generator-repairs-boksburg" />

      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Areas', href: '/areas' },
              { label: 'Boksburg' },
            ]}
          />
        </div>
      </div>

      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generator-repair-technician-onsite-midrand.webp"
            alt="Generator repair and servicing across Boksburg — mobile technicians covering commercial, industrial and residential areas on the East Rand"
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
              Generator Repairs · Boksburg
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Generator Repairs in Boksburg.<br />
            <span className="text-[#c8a84b]">Mobile Service, Commercial & Industrial.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            From Bartlett and the industrial zones through to Sunward Park, Dawn Park, and
            Vosloorus — our mobile technicians cover all of Boksburg, arriving equipped to
            diagnose and repair on-site the same day.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Same-day emergency callouts', 'All generator makes & sizes', 'Heavy industrial experience', 'On-site repairs, first visit'].map((t) => (
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

      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Why Choose Us</p>
            <h2 id="why-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              Generator Service Built for Boksburg
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

      <section className="py-16 md:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Boksburg</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Expert Generator Service Across All of Boksburg
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  Boksburg is one of Johannesburg's most established industrial centres —
                  a key node on the East Rand with a concentration of manufacturing,
                  engineering, foundries, and heavy industry that has defined the area
                  for decades. These operations depend on large standby generators that
                  run under demanding load conditions. Generator Repair Services provides
                  the technical depth and response capability these environments require,
                  covering all of Boksburg with fully equipped mobile technicians.
                </p>
                <p>
                  Our coverage extends across the full area: the CBD and surrounding
                  industrial zones, Bartlett, Cloverdene, Sunward Park, Dawn Park,
                  Parkrand, Vosloorus, Witfield, and Jet Park. We service generators
                  at factories, foundries, warehouses, commercial properties, and
                  residential estates. Our technicians carry diagnostic equipment
                  and a comprehensive parts inventory — resolving the majority of
                  faults on the first visit without the need for follow-up trips.
                </p>
                <p>
                  Industrial generators face conditions that quickly expose poor
                  maintenance — heavy load cycling, dust, heat, and extended running
                  hours all accelerate wear on fuel systems, cooling components, and
                  alternators. Our technicians are experienced with large diesel
                  systems and understand the difference between a fault that can
                  be repaired on-site and one that requires a controlled shutdown
                  and component exchange.
                </p>
                <p>
                  For operations that cannot absorb unexpected downtime, our
                  maintenance contracts provide scheduled servicing, load bank
                  testing, and detailed service records. A generator on a documented
                  maintenance programme is predictable; one that only gets attention
                  when it fails is a risk to your entire operation.
                </p>
              </div>

              <div className="mt-10 p-6 bg-[#f5f4f0] border-l-2 border-[#c8a84b]">
                <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">Areas Covered</p>
                <div className="flex flex-wrap gap-2">
                  {boksburgAreas.map((area) => (
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

            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">Services in Boksburg</p>
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
                <p className="text-white font-bold mb-1">Generator problem in Boksburg?</p>
                <p className="text-white/50 text-sm mb-4">Call now for same-day service across all Boksburg areas.</p>
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

      <section className="bg-[#0a0a0a] text-white" aria-label="Call to action">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Generator Service in Boksburg?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Emergency or planned, we cover all of Boksburg. Call now for a
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
