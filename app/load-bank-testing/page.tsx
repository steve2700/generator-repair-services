import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

/* ─────────────────────────────────────────
   SEO — Advanced
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Load Bank Testing Gauteng | Generator Capacity Verification',
  description:
    'Professional load bank testing for standby generators across Gauteng. Verify rated output, clear wet stacking, and get compliance documentation for insurers. Tested at 50%, 75% and 100% capacity. Call 060 316 0484.',
  keywords: [
    'load bank testing Gauteng',
    'load bank testing Johannesburg',
    'generator load testing Gauteng',
    'generator capacity testing Gauteng',
    'wet stacking treatment Gauteng',
    'generator compliance testing Gauteng',
    'standby generator load test Johannesburg',
    'generator output verification Gauteng',
    'generator insurance testing Gauteng',
    'load bank test diesel generator Gauteng',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/load-bank-testing',
  },
  openGraph: {
    title: 'Load Bank Testing Gauteng | Generator Capacity Verification',
    description:
      'Load bank testing for standby generators across Gauteng. Rated output verified at 50%, 75% and 100% capacity. Compliance documentation included. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/load-bank-testing',
    type: 'website',
  },
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const testingStages = [
  {
    step: '50%',
    title: 'Half-load test',
    desc: 'Initial warm-up stage. Voltage, frequency and temperature rise monitored as the generator stabilises under load.',
  },
  {
    step: '75%',
    title: 'Three-quarter load',
    desc: 'Load increased to 75% of rated capacity. Fuel consumption, cooling performance and output stability checked.',
  },
  {
    step: '100%',
    title: 'Full rated capacity',
    desc: 'Generator tested at its full rated kVA output. Any capacity shortfalls, voltage droop or thermal issues are identified here.',
  },
]

const whatWeCheck = [
  {
    num: '01',
    title: 'Output voltage stability',
    desc: 'Voltage is measured under increasing load to confirm it stays within acceptable limits at all stages.',
  },
  {
    num: '02',
    title: 'Frequency regulation',
    desc: 'Engine speed and governor response are verified to maintain correct Hz output under varying load.',
  },
  {
    num: '03',
    title: 'Thermal performance',
    desc: 'Coolant temperature, oil temperature, and exhaust temperature are monitored throughout the test.',
  },
  {
    num: '04',
    title: 'Wet stacking clearance',
    desc: 'Full-load operation burns off unburned fuel deposits in the exhaust system of diesel generators.',
  },
  {
    num: '05',
    title: 'Fuel consumption rate',
    desc: 'Actual fuel burn at rated load is measured and compared against manufacturer specifications.',
  },
  {
    num: '06',
    title: 'Compliance documentation',
    desc: 'A full test report is issued on completion, suitable for insurers, asset managers, and compliance records.',
  },
]

const relatedServices = [
  { href: '/generator-servicing', label: 'Generator Servicing', desc: 'Oil, filters, full inspection' },
  { href: '/generator-maintenance', label: 'Maintenance Plans', desc: 'Scheduled service contracts' },
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'All faults, all brands' },
  { href: '/fuel-system-repairs', label: 'Fuel System Repairs', desc: 'Injectors & pumps' },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function LoadBankTestingPage() {
  return (
    <>
      <ServiceSchema
        name="Load Bank Testing"
        description="Professional load bank testing for generators across Gauteng. Verify rated output capacity, clear wet stacking, and receive compliance documentation. All generator sizes."
        url="/load-bank-testing"
      />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Load Bank Testing' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/load-bank-testing.png"
            alt="Load bank testing of an industrial standby generator to verify rated output capacity in Gauteng"
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
              Load Bank Testing · Gauteng
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Load Bank Testing.<br />
            <span className="text-[#c8a84b]">Know Before You Need It.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Standby generators that rarely run under full load develop faults that only emerge
            during a real power event. Load bank testing verifies your generator can deliver
            its rated output — before that moment arrives.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Tested at 50%, 75% & 100%', 'Clears diesel wet stacking', 'Compliance documentation issued', 'All generator sizes'].map((t) => (
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
              Book a Load Test
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

      {/* ── Testing stages ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="stages-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Testing Stages</p>
            <h2 id="stages-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              Stepped Load Testing to Full Capacity
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-[#1a1a1a]/10">
            {testingStages.map((item) => (
              <div key={item.step} className="bg-[#f5f4f0] p-8 hover:bg-white transition-colors group">
                <span className="text-[#c8a84b] font-black text-[42px] leading-none block mb-4">{item.step}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2 group-hover:text-[#c8a84b] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we check + body copy ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">

            {/* Body copy */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">The Service</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Why Load Bank Testing Matters
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  Standby generators often run only during testing or actual power outages, rarely
                  experiencing their full rated load. Over time, light-duty operation leads to
                  problems that only emerge under heavy load — precisely when you need the generator
                  most. Load bank testing reveals these hidden issues before they cause failures
                  during actual emergencies.
                </p>
                <p>
                  A load bank places a controlled electrical load on the generator, allowing us to
                  test performance at 50%, 75%, and 100% of rated capacity. During testing, we
                  monitor voltage stability, frequency regulation, temperature rise, fuel
                  consumption, and overall operating behaviour. This data confirms whether your
                  generator can actually deliver the power it is rated for.
                </p>
                <p>
                  Load bank testing also addresses a common diesel generator problem called wet
                  stacking — unburned fuel and carbon deposits that accumulate in the exhaust system
                  when engines run under light loads for extended periods. Running the generator
                  under full load burns off these deposits, restoring proper combustion and
                  preventing long-term engine damage.
                </p>
                <p>
                  We recommend load bank testing annually for critical standby generators, or after
                  any major repair. The test provides documented proof of generator capacity, which
                  is important for insurance compliance, asset management, and your own confidence
                  that backup power will perform when needed.
                </p>
              </div>
            </div>

            {/* What we check sidebar */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">What We Monitor</p>
              <div className="space-y-0 mb-6">
                {whatWeCheck.map((item, i) => (
                  <div key={item.num} className={`flex gap-4 py-4 ${i < whatWeCheck.length - 1 ? 'border-b border-[#1a1a1a]/8' : ''}`}>
                    <span className="text-[#c8a84b]/40 font-black text-[18px] leading-none w-8 shrink-0 pt-0.5">{item.num}</span>
                    <div>
                      <h3 className="font-bold text-[#0a0a0a] text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-[#1a1a1a]/55 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-[#0a0a0a]">
                <p className="text-white font-bold mb-1">When did you last test?</p>
                <p className="text-white/50 text-sm mb-4">Book a load bank test and know your generator is ready.</p>
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

      {/* ── Coverage ── */}
      <section className="py-12 bg-[#f5f4f0] border-t border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-white border-l-2 border-[#c8a84b]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#c8a84b]" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            <p className="text-[#1a1a1a]/70 text-sm leading-relaxed">
              <strong className="text-[#0a0a0a] font-bold">Service coverage:</strong>{' '}
              Load bank testing is available across all Gauteng areas including Johannesburg,
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
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Load Bank Testing?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Schedule a load bank test across Gauteng and get documented proof your
                generator can deliver when it matters most.
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
