import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

/* ─────────────────────────────────────────
   SEO — Advanced
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Fuel System Repairs Gauteng | Injector, Pump & Contamination Service',
  description:
    'Generator fuel system repairs across Gauteng. Contaminated diesel, clogged injectors, failed lift pumps, blocked fuel lines — expert diagnosis and repair. Call 060 316 0484.',
  keywords: [
    'generator fuel system repairs Gauteng',
    'generator injector repair Gauteng',
    'generator fuel pump repair Johannesburg',
    'contaminated diesel generator repair Gauteng',
    'generator fuel contamination Gauteng',
    'generator not starting fuel problem Gauteng',
    'generator black smoke repair Gauteng',
    'diesel fuel polishing Gauteng',
    'generator lift pump repair Gauteng',
    'generator fuel filter blocked Gauteng',
    'generator fuel line repair Gauteng',
    'generator rough running repair Gauteng',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/fuel-system-repairs',
  },
  openGraph: {
    title: 'Fuel System Repairs Gauteng | Injector, Pump & Contamination Service',
    description:
      'Generator fuel system repairs across Gauteng. Contaminated diesel, clogged injectors, failed lift pumps, blocked fuel lines. Expert diagnosis. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/fuel-system-repairs',
    type: 'website',
  },
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const faultTypes = [
  {
    step: '01',
    title: 'Contaminated or degraded diesel',
    desc: 'Standby generators that sit unused accumulate bacteria, fungal growth, and sludge in the tank. Degraded diesel blocks filters and injectors and prevents reliable starting.',
  },
  {
    step: '02',
    title: 'Clogged or worn injectors',
    desc: 'Injectors that cannot atomise fuel correctly cause rough running, black smoke, loss of power, and excessive fuel consumption. We test spray patterns and flow rates.',
  },
  {
    step: '03',
    title: 'Lift pump failure',
    desc: 'A failed mechanical or electric lift pump starves the injection system of fuel, causing hard starting, running under light load only, or total failure to run.',
  },
  {
    step: '04',
    title: 'Air in the fuel system',
    desc: 'Cracked or deteriorated fuel lines, loose fittings, or a failed injector return allow air ingress, causing loss of prime and intermittent shutdowns under load.',
  },
  {
    step: '05',
    title: 'Water in the tank',
    desc: 'Water condensation in storage tanks accelerates diesel degradation, promotes bacterial growth, and causes corrosion in injectors and pump components.',
  },
  {
    step: '06',
    title: 'Blocked fuel lines & fittings',
    desc: 'Sludge and debris from contaminated fuel blocks supply lines and fittings, restricting fuel flow and causing fuel starvation at load.',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Fuel quality assessment',
    body: 'We test fuel condition and inspect the tank for contamination, water, and sludge before any other diagnosis to establish whether the fuel itself is the source of the fault.',
  },
  {
    num: '02',
    title: 'System flow & pressure testing',
    body: 'Lift pump output, fuel pressure at the injection pump, and filter condition are tested to identify restrictions or pump failures at each stage of the system.',
  },
  {
    num: '03',
    title: 'Injector testing & service',
    body: 'Injectors are tested for spray pattern, opening pressure, and flow rate. Serviceable units are cleaned and reset; worn units replaced with quality matched replacements.',
  },
  {
    num: '04',
    title: 'Fuel polishing or tank clean',
    body: 'Contaminated fuel is polished or drained and replaced. Tanks are flushed and cleaned where required before refilling with clean fuel and new filters.',
  },
]

const relatedServices = [
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'Full repair service' },
  { href: '/generator-servicing', label: 'Generator Servicing', desc: 'Oil, filters, full inspection' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts', desc: 'Same-day response' },
  { href: '/generator-maintenance', label: 'Maintenance Plans', desc: 'Scheduled service contracts' },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function FuelSystemRepairsPage() {
  return (
    <>
      <ServiceSchema
        name="Fuel System Repairs"
        description="Generator fuel system repairs across Gauteng. Contaminated diesel, clogged injectors, failed lift pumps, air in the system, and blocked fuel lines — expert diagnosis and repair."
        url="/fuel-system-repairs"
      />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Fuel System Repairs' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fuel-system-repairs-hero.png"
            alt="Generator fuel system repair service including injectors and lift pumps in Gauteng"
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
              Fuel System Repairs · Gauteng
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Fuel System Repairs.<br />
            <span className="text-[#c8a84b]">Injectors, Pumps & Contamination.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Fuel problems are among the most common causes of generator failure — particularly in
            standby units that sit between uses. We diagnose and repair the full fuel system, from
            tank contamination through to injectors, across all diesel generator types in Gauteng.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Injector testing & service', 'Lift pump repair', 'Fuel polishing & tank clean', 'Air ingress diagnosis'].map((t) => (
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

      {/* ── Fault types grid ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="faults-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">What We Fix</p>
            <h2 id="faults-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              Common Fuel System Faults
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]/10">
            {faultTypes.map((item) => (
              <div key={item.step} className="bg-[#f5f4f0] p-6 hover:bg-white transition-colors group">
                <span className="text-[#c8a84b]/40 font-black text-[28px] leading-none block mb-3">{item.step}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2 group-hover:text-[#c8a84b] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body copy + process sidebar ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">

            {/* Left — body copy */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">The Service</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Generator Fuel System Diagnosis & Repair Across Gauteng
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  Fuel system faults are responsible for a significant proportion of generator
                  failures, particularly in standby units that are infrequently run. Diesel fuel
                  degrades over time — bacteria and fungi grow in the tank, producing sludge that
                  blocks filters and injectors. Water condensation accelerates this process.
                  A generator that starts reliably during monthly test runs can fail completely
                  when called upon during an actual outage, because the fuel system was never
                  fully loaded.
                </p>
                <p>
                  Generator Repair Services diagnoses and repairs fuel system problems across all
                  diesel generator types throughout Gauteng. We begin with a fuel quality assessment
                  before moving to component testing — because the condition of the fuel itself
                  determines what repairs are actually needed. Replacing injectors into a system
                  still carrying contaminated fuel produces the same outcome as the original fault.
                </p>
                <p>
                  Injector problems are a common result of long-term fuel contamination. Worn or
                  clogged injectors cannot atomise fuel correctly, producing incomplete combustion
                  that manifests as rough running, black smoke from the exhaust, reduced power
                  output, and high fuel consumption. We test each injector for spray pattern,
                  opening pressure, and flow rate. Where injectors are serviceable, we clean
                  and reset them. Where they are worn beyond specification, we replace them with
                  quality matched units.
                </p>
              </div>

              {/* Image 1 */}
              <div className="mt-10 relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/fuel-system-repair-technician.png"
                  alt="Generator Repair Services technician inspecting generator fuel injectors and pump during fuel system repair in Gauteng"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent px-5 py-4">
                  <p className="text-white/80 text-xs">Injector testing — spray pattern, opening pressure and flow rate verified</p>
                </div>
              </div>

              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70 mt-8">
                <p>
                  Lift pump failures are another frequent cause of fuel starvation. A failing
                  mechanical or electric lift pump reduces fuel delivery pressure progressively —
                  the generator may start and run under light load but shut down when a full
                  load is applied, or may fail to start entirely if delivery pressure drops
                  below what the injection pump requires. We test lift pump output and replace
                  failed units with correct-spec replacements.
                </p>
                <p>
                  Fuel line condition is inspected as part of every fuel system repair. Cracked,
                  hardened, or deteriorated lines introduce air into the system — air ingress
                  causes loss of prime and intermittent shutdowns that are difficult to diagnose
                  without a systematic approach. All connections are pressure-tested and confirmed
                  leak-free before the job is closed.
                </p>
              </div>
            </div>

            {/* Right — process */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">Our Repair Process</p>
              {processSteps.map((item, i) => (
                <div key={item.num} className={`flex gap-5 py-5 ${i < processSteps.length - 1 ? 'border-b border-[#1a1a1a]/8' : ''}`}>
                  <span className="text-[#c8a84b]/40 font-black text-[22px] leading-none w-8 shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[#0a0a0a] mb-1.5">{item.title}</h3>
                    <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-5 bg-[#0a0a0a]">
                <p className="text-white font-bold mb-1">Fuel problem with your generator?</p>
                <p className="text-white/50 text-sm mb-4">Call for expert fuel system diagnosis and repair across Gauteng.</p>
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

      {/* ── Standby note + image break ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="standby-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image 2 */}
            <div className="relative aspect-[4/3] overflow-hidden order-2 md:order-1">
              <Image
                src="/images/diesel-fuel-polishing-tank.png"
                alt="Diesel fuel polishing and generator tank cleaning service for standby generators in Gauteng"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Standby Generators</p>
              <h2 id="standby-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Fuel Degradation Is the Silent Threat to Standby Units
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base leading-relaxed text-[#1a1a1a]/70">
                <p>
                  Standby generators that run for monthly test cycles only are particularly
                  vulnerable to fuel system problems. Short test runs do not fully cycle the
                  fuel system — bacteria and fungi continue to grow in the tank between tests,
                  producing sludge deposits that accumulate on filters and injector tips.
                </p>
                <p>
                  By the time the fault becomes obvious — a generator that fails to carry load
                  during a real outage — the contamination is often advanced. We fuel-polish
                  or drain and clean the tank, replace all filters, and flush the system before
                  refilling with fresh diesel and treating against future microbial growth.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  ['Fuel quality testing', 'Before any component repair'],
                  ['Fuel polishing', 'Restore degraded diesel in-tank'],
                  ['Tank clean & flush', 'Remove sludge and water'],
                  ['Microbial treatment', 'Prevent future contamination'],
                ].map(([title, sub]) => (
                  <div key={title} className="p-4 bg-white border border-[#1a1a1a]/8">
                    <p className="font-bold text-[#0a0a0a] text-sm mb-0.5">{title}</p>
                    <p className="text-xs text-[#1a1a1a]/50">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coverage ── */}
      <section className="py-12 bg-white border-t border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-[#f5f4f0] border-l-2 border-[#c8a84b]">
            <p className="text-[#1a1a1a]/70 text-sm leading-relaxed">
              <strong className="text-[#0a0a0a] font-bold">Service coverage:</strong>{' '}
              Fuel system repairs are available across all Gauteng areas including Johannesburg,
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
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Fuel System Repairs?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Call to discuss your fuel system problem and get a diagnosis. We cover all
                of Gauteng from Johannesburg and Pretoria to Centurion, Midrand, and beyond.
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
