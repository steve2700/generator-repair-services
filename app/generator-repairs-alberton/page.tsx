import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Alberton | Same-Day Service, Commercial & Industrial',
  description:
    'Professional generator repairs, servicing and emergency callouts across Alberton. Brackenhurst, Meyersdal, New Redruth, Alberante — mobile technicians come to you. Call 060 316 0484.',
  keywords: [
    'generator repairs Alberton',
    'generator repair Alberton',
    'generator repair Brackenhurst',
    'generator repair Meyersdal',
    'generator repair New Redruth',
    'generator repair Alberante',
    'generator repair Verwoerdpark',
    'emergency generator repair Alberton',
    'generator servicing Alberton',
    'generator repair south Johannesburg',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-alberton',
  },
  openGraph: {
    title: 'Generator Repairs Alberton | Same-Day Service, Commercial & Industrial',
    description:
      'Expert generator repairs and emergency callouts across Alberton. Mobile technicians, same-day response. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/generator-repairs-alberton',
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

const albertonAreas = [
  'Alberton CBD', 'Brackenhurst', 'Meyersdal', 'New Redruth', 'Alberante',
  'Verwoerdpark', 'Brackendowns', 'Florentia', 'Randhart', 'Glenanda',
  'Roodekrans', 'Palmridge', 'Alberton North', 'Eden Glen', 'Likole',
  'Spruitview', 'Mayfield', 'Henville', 'Raceview', 'Newmarket',
]

const whyPoints = [
  {
    num: '01',
    title: "Residential to commercial — full coverage",
    body: "Alberton covers the full spectrum from secure residential estates through to retail centres, schools, and medical facilities. We service generators across all these environments — no job is too small or too large.",
  },
  {
    num: '02',
    title: "Mobile workshop — we come to you",
    body: "Our technicians arrive at your Alberton property fully equipped. Diagnostic tools, replacement parts, and the expertise to resolve most faults on the first visit — no delays, no unnecessary return trips.",
  },
  {
    num: '03',
    title: "Same-day emergency response",
    body: "When loadshedding hits and your generator fails to start, every minute without power has a cost. We mobilise fast and treat every emergency callout with the urgency it deserves — regardless of the time of day.",
  },
  {
    num: '04',
    title: "Upfront diagnosis, no surprises",
    body: "We diagnose fully before quoting. You receive a clear explanation of the fault and an accurate repair cost before work begins — complete transparency, no open-ended estimates or hidden charges.",
  },
]

const nearbyAreas = [
  { href: '/generator-repairs-johannesburg', name: 'Johannesburg' },
  { href: '/generator-repairs-germiston', name: 'Germiston' },
  { href: '/generator-repairs-boksburg', name: 'Boksburg' },
  { href: '/generator-repairs-benoni', name: 'Benoni' },
  { href: '/generator-repairs-edenvale', name: 'Edenvale' },
  { href: '/generator-repairs-kempton-park', name: 'Kempton Park' },
]

export default function AlbertonPage() {
  return (
    <>
      <AreaSchema areaName="Alberton" url="/generator-repairs-alberton" />

      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Areas', href: '/areas' },
              { label: 'Alberton' },
            ]}
          />
        </div>
      </div>

      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/areas/alberton.png"
            alt="Generator repair and servicing across Alberton — mobile technicians covering residential, commercial and light industrial areas"
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
              Generator Repairs · Alberton
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Generator Repairs in Alberton.<br />
            <span className="text-[#c8a84b]">Mobile Service, Residential & Commercial.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            From Brackenhurst and Meyersdal through to New Redruth, Randhart, and Brackendowns —
            our mobile technicians cover all of Alberton, arriving equipped to diagnose
            and repair on-site the same day.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Same-day emergency callouts', 'All generator makes & sizes', 'Residential & commercial service', 'On-site repairs, first visit'].map((t) => (
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
              Generator Service Built for Alberton
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
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Alberton</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Expert Generator Service Across All of Alberton
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  Alberton is one of the most established communities south of Johannesburg —
                  a well-developed area combining mature residential suburbs, active retail
                  precincts, schools, medical facilities, and a growing light industrial
                  sector. Across all of these, the impact of load shedding on daily life
                  and business operations has made reliable backup power a genuine necessity
                  rather than a luxury. Generator Repair Services provides comprehensive
                  generator repair, servicing, and maintenance throughout Alberton.
                </p>
                <p>
                  Our coverage extends across Alberton in full: Brackenhurst, Meyersdal,
                  New Redruth, Alberante, Verwoerdpark, Brackendowns, Florentia, Randhart,
                  Glenanda, and surrounding areas. We service generators at shopping centres,
                  medical practices, schools, gated estates, office parks, and individual
                  homes. Our mobile technicians arrive equipped to assess and resolve faults
                  in a single visit — carrying the parts and diagnostic tools to handle
                  the most common failure types on-site.
                </p>
                <p>
                  Residential generators in Alberton face a specific challenge: they sit
                  idle for extended periods, then are expected to start and carry full load
                  immediately during an outage. Fuel degradation, battery failure, cooling
                  issues, and control faults are all more common in units that aren&apos;t
                  regularly exercised and serviced. Our maintenance visits address each
                  of these points systematically, giving you confidence that your generator
                  will perform when the grid goes down.
                </p>
                <p>
                  For commercial clients, retail centres, and estates with formal uptime
                  requirements, our maintenance contracts provide scheduled servicing,
                  load bank testing, and documented service history. A generator on a
                  proactive maintenance programme rarely fails unexpectedly — and when
                  a fault does develop, it is caught and resolved before it becomes a
                  complete breakdown.
                </p>
              </div>

              <div className="mt-10 p-6 bg-[#f5f4f0] border-l-2 border-[#c8a84b]">
                <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">Areas Covered</p>
                <div className="flex flex-wrap gap-2">
                  {albertonAreas.map((area) => (
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
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">Services in Alberton</p>
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
                <p className="text-white font-bold mb-1">Generator problem in Alberton?</p>
                <p className="text-white/50 text-sm mb-4">Call now for same-day service across all Alberton areas.</p>
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
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Generator Service in Alberton?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Emergency or planned, we cover all of Alberton. Call now for a
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
