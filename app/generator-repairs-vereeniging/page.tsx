import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Vereeniging | Industrial & Residential Service, Vaal Triangle',
  description:
    'Professional generator repairs, servicing and emergency callouts across Vereeniging and the Vaal Triangle. Industrial, commercial and residential generators — mobile technicians come to you. Call 060 316 0484.',
  keywords: [
    'generator repairs Vereeniging',
    'generator repair Vaal Triangle',
    'generator repair Vanderbijlpark',
    'generator repair Three Rivers',
    'generator repair Duncanville',
    'generator repair Unitas Park',
    'industrial generator repair Vereeniging',
    'emergency generator repair Vereeniging',
    'generator servicing Vereeniging',
    'generator maintenance Vaal',
    'generator installation Vereeniging',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-vereeniging',
  },
  openGraph: {
    title: 'Generator Repairs Vereeniging | Industrial & Residential, Vaal Triangle',
    description:
      'Expert generator repairs and emergency callouts across Vereeniging and the Vaal Triangle. Mobile technicians, same-day response. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/generator-repairs-vereeniging',
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

const vereenigingAreas = [
  'Vereeniging CBD', 'Three Rivers', 'Duncanville', 'Unitas Park',
  'Vanderbijlpark', 'Roshnee', 'Boipatong', 'Sharpeville',
  'Arcon Park', 'Bedworth Park', 'Meyerton', 'Midvaal',
]

const whyPoints = [
  {
    num: '01',
    title: 'Industrial-grade expertise',
    body: 'Vereeniging runs heavy industry. Our technicians have hands-on experience with the large-capacity diesel generators and complex power systems that industrial operations depend on.',
  },
  {
    num: '02',
    title: 'Same-day emergency response',
    body: 'When your generator fails during a critical production run or loadshedding, we mobilise fast. Most Vereeniging callouts receive a technician within 2–4 hours.',
  },
  {
    num: '03',
    title: 'Mobile workshop — we come to you',
    body: 'Our technicians arrive fully equipped with diagnostic tools and common parts. Most repairs — including industrial generator faults — are completed on-site on the first visit.',
  },
  {
    num: '04',
    title: 'Upfront diagnosis, no surprises',
    body: 'We diagnose fully before quoting. You receive a clear explanation of the fault and an accurate repair cost — written — before any work begins.',
  },
]

const nearbyAreas = [
  { href: '/generator-repairs-johannesburg', name: 'Johannesburg' },
  { href: '/generator-repairs-alberton', name: 'Alberton' },
  { href: '/generator-repairs-germiston', name: 'Germiston' },
  { href: '/generator-repairs-boksburg', name: 'Boksburg' },
  { href: '/generator-repairs-springs', name: 'Springs' },
  { href: '/generator-repairs-benoni', name: 'Benoni' },
]

export default function VereenigingPage() {
  return (
    <>
      <AreaSchema areaName="Vereeniging" url="/generator-repairs-vereeniging" />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Areas', href: '/areas' },
              { label: 'Vereeniging' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/areas/vereeniging.png"
            alt="Generator repair and servicing across Vereeniging and the Vaal Triangle — industrial and residential callouts"
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
              Generator Repairs · Vereeniging
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Generator Repairs in Vereeniging.<br />
            <span className="text-[#c8a84b]">Industrial &amp; Residential, Vaal Triangle.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Vereeniging anchors the Vaal Triangle — one of South Africa&apos;s most significant
            industrial regions. Our mobile technicians cover Vereeniging, Vanderbijlpark
            and the surrounding Vaal area, arriving equipped to handle generators of
            any size, from small residential units to large industrial standby systems.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Same-day emergency callouts', 'Industrial generator specialists', 'On-site repairs, first visit', 'All generator makes & sizes'].map((t) => (
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

      {/* ── Why choose us ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Why Choose Us</p>
            <h2 id="why-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              Generator Service Built for the Vaal Triangle
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]/10">
            {whyPoints.map((item) => (
              <div key={item.num} className="bg-[#f5f4f0] p-6 hover:bg-white transition-colors group">
                <span className="text-[#c8a84b]/40 font-black text-[28px] leading-none block mb-3">{item.num}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2 group-hover:text-[#c8a84b] transition-colors text-sm">{item.title}</h3>
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
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Vereeniging</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Expert Generator Service Across Vereeniging &amp; the Vaal
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  Vereeniging anchors the Vaal Triangle industrial region — an area with
                  significant steel, engineering, chemicals and manufacturing operations that
                  depend on reliable standby power. Heavy industry cannot afford generator
                  failures. Generator Repair Services provides industrial-strength generator
                  repair, servicing and maintenance across Vereeniging, Vanderbijlpark and the
                  surrounding Vaal area, with the technical depth and response speed that
                  industrial clients require.
                </p>
                <p>
                  Our coverage spans the full Vereeniging area — the CBD, Three Rivers, Duncanville,
                  Unitas Park, Vanderbijlpark, Roshnee, Arcon Park, Bedworth Park, Meyerton and
                  surrounding zones. We service heavy industrial clients running large diesel
                  standby systems as well as commercial and residential customers throughout the
                  region. Every scenario, every scale.
                </p>
                <p>
                  Industrial operations in the Vaal frequently run generators at high sustained
                  load — a different challenge from the intermittent loadshedding use common
                  elsewhere. Our technicians understand high-load diesel operation, wet stacking
                  prevention, fuel system maintenance for extended runtimes, and the control
                  systems that manage industrial generator sets. We carry the parts and tooling
                  for these systems on every call-out vehicle.
                </p>
                <p>
                  For Vereeniging clients on maintenance contracts, we schedule service visits
                  around operational requirements — minimising disruption to production schedules.
                  For emergency breakdowns, we prioritise dispatch and provide realistic, upfront
                  timelines. Industrial clients need accurate information quickly, and that is
                  exactly what we deliver.
                </p>
              </div>

              {/* Areas coverage */}
              <div className="mt-10 p-6 bg-[#f5f4f0] border-l-2 border-[#c8a84b]">
                <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">Areas Covered</p>
                <div className="flex flex-wrap gap-2">
                  {vereenigingAreas.map((area) => (
                    <span key={area} className="px-3 py-1.5 bg-white border border-[#1a1a1a]/10 text-[#1a1a1a]/70 text-xs font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — services */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">Services in Vereeniging</p>
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
                <p className="text-white font-bold mb-1">Generator problem in Vereeniging?</p>
                <p className="text-white/50 text-sm mb-4">Call now for same-day service across the Vaal Triangle.</p>
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
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Generator Service in Vereeniging?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Emergency or planned, we cover all of Vereeniging and the Vaal Triangle.
                Call now for a same-day callout or to schedule a service visit.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="tel:0603160484" className="inline-flex items-center justify-center px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors">
                060 316 0484
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors">
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
