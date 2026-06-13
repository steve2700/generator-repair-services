import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Krugersdorp | Same-Day Service, West Rand',
  description:
    'Professional generator repairs, servicing and emergency callouts across Krugersdorp. Noordheuwel, Monument, Kenmare, West Rand industrial sites — mobile technicians come to you. Call 060 316 0484.',
  keywords: [
    'generator repairs Krugersdorp',
    'generator repair Krugersdorp',
    'generator repair Noordheuwel',
    'generator repair Monument',
    'generator repair Kenmare',
    'generator repair West Rand',
    'emergency generator repair Krugersdorp',
    'generator servicing Krugersdorp',
    'generator maintenance Krugersdorp',
    'industrial generator repair West Rand',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-krugersdorp',
  },
  openGraph: {
    title: 'Generator Repairs Krugersdorp | Same-Day Service, West Rand',
    description:
      'Expert generator repairs and emergency callouts across Krugersdorp and the West Rand. Mobile technicians, same-day response. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/generator-repairs-krugersdorp',
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

const krugersdorpAreas = [
  'Noordheuwel', 'Monument', 'Kenmare', 'Krugersdorp North', 'Krugersdorp CBD',
  'Azaadville', 'Chamdor', 'Munsieville', 'Rant en Dal', 'Mindalore',
  'Kagiso', 'Muldersdrift', 'Hekpoort', 'Magaliesburg', 'Randfontein',
  'Westonaria', 'Boltonia', 'Dersley', 'Luipaardsvlei', 'West Rand Ext',
]

const whyPoints = [
  {
    num: '01',
    title: 'Mobile workshop — we come to you',
    body: 'Our technicians arrive at your Krugersdorp site fully equipped. Most repairs are completed on the first visit — including at industrial sites, farms, and game lodges.',
  },
  {
    num: '02',
    title: 'Same-day emergency response',
    body: 'When your generator fails during loadshedding or a critical outage, we mobilise fast. West Rand callouts receive priority dispatch and clear communication on arrival times.',
  },
  {
    num: '03',
    title: 'Industrial & agricultural expertise',
    body: 'Mining operations, manufacturing facilities, farms, and game lodges have unique power requirements. Our technicians understand specialised needs across all environments.',
  },
  {
    num: '04',
    title: 'Upfront diagnosis, no surprises',
    body: 'We diagnose fully before quoting. You receive a clear explanation of the fault and an accurate repair cost before any work begins.',
  },
]

const nearbyAreas = [
  { href: '/generator-repairs-johannesburg', name: 'Johannesburg' },
  { href: '/generator-repairs-roodepoort', name: 'Roodepoort' },
  { href: '/generator-repairs-randburg', name: 'Randburg' },
  { href: '/generator-repairs-soweto', name: 'Soweto' },
  { href: '/generator-repairs-fourways', name: 'Fourways' },
  { href: '/generator-repairs-midrand', name: 'Midrand' },
]

export default function KrugersdorpPage() {
  return (
    <>
      <AreaSchema areaName="Krugersdorp" url="/generator-repairs-krugersdorp" />

      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Areas', href: '/areas' },
              { label: 'Krugersdorp' },
            ]}
          />
        </div>
      </div>

      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generator-repair-services-technicians.webp"
            alt="Generator repair and servicing across Krugersdorp and the West Rand — mobile technicians covering all areas"
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
              Generator Repairs · Krugersdorp
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Generator Repairs in Krugersdorp.<br />
            <span className="text-[#c8a84b]">Mobile Service, West Rand.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            From Noordheuwel and Kenmare through to Chamdor, Muldersdrift, and beyond —
            our mobile technicians cover Krugersdorp and the wider West Rand, arriving
            equipped to diagnose and repair on-site the same day.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Same-day emergency callouts', 'All generator makes & sizes', 'Industrial & agricultural service', 'On-site repairs, first visit'].map((t) => (
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
              Generator Service Built for Krugersdorp
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
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Krugersdorp</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Expert Generator Service Across Krugersdorp & the West Rand
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  Krugersdorp's rich mining heritage has shaped a town with deep industrial roots.
                  Today the area combines active mining operations, manufacturing facilities,
                  agricultural properties, and tourism destinations — all of which depend on
                  reliable power. Generator Repair Services provides professional generator
                  repair, servicing, and maintenance across Krugersdorp and the wider West Rand,
                  with the response speed and technical capability this diverse region demands.
                </p>
                <p>
                  Our coverage extends across Krugersdorp CBD, Noordheuwel, Monument, Kenmare,
                  and Krugersdorp North, through Chamdor's industrial zone, Muldersdrift, and
                  out to Magaliesburg and Hekpoort for agricultural and tourism clients. Our
                  mobile technicians carry diagnostic equipment and a comprehensive parts
                  inventory — meaning most faults across all these environments are resolved
                  on the first visit.
                </p>
                <p>
                  Industrial and agricultural clients on the West Rand often operate in
                  environments that place unique demands on generators — extended run times,
                  variable load profiles, remote locations, and fuel supply challenges.
                  Our technicians understand these conditions and provide servicing and repair
                  work appropriate for each operating environment, not a one-size-fits-all
                  approach.
                </p>
                <p>
                  For businesses and properties that need year-round reliability, we offer
                  scheduled maintenance contracts calibrated to your generator's actual usage
                  pattern. Whether you run a generator daily through loadshedding or hold it
                  in standby for emergencies, the correct service interval is different —
                  and we set it accordingly.
                </p>
              </div>

              <div className="mt-10 p-6 bg-[#f5f4f0] border-l-2 border-[#c8a84b]">
                <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">Areas Covered</p>
                <div className="flex flex-wrap gap-2">
                  {krugersdorpAreas.map((area) => (
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
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">Services in Krugersdorp</p>
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
                <p className="text-white font-bold mb-1">Generator problem in Krugersdorp?</p>
                <p className="text-white/50 text-sm mb-4">Call now for same-day service across the West Rand.</p>
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
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Generator Service in Krugersdorp?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Emergency or planned, we cover Krugersdorp and the West Rand. Call now for a
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
