import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

/* ─────────────────────────────────────────
   SEO — Advanced
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Control Panel Repairs Gauteng | Generator Controller & AMF Repair',
  description:
    'Generator control panel repairs across Gauteng. Failed relays, fault codes, AMF and ATS controller faults, Deep Sea and ComAp programming. Expert diagnosis and repair. Call 060 316 0484.',
  keywords: [
    'generator control panel repairs Gauteng',
    'generator controller repair Johannesburg',
    'AMF controller repair Gauteng',
    'ATS controller repair Gauteng',
    'Deep Sea Electronics repair Gauteng',
    'ComAp controller repair Gauteng',
    'generator not starting control panel fault',
    'generator fault codes Gauteng',
    'generator relay replacement Gauteng',
    'automatic transfer switch repair Gauteng',
    'generator control board repair Gauteng',
    'generator panel repair Johannesburg',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/control-panel-repairs',
  },
  openGraph: {
    title: 'Control Panel Repairs Gauteng | Generator Controller & AMF Repair',
    description:
      'Generator control panel and controller repairs across Gauteng. AMF, ATS, Deep Sea, ComAp, relay failures and fault codes. Expert diagnosis. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/control-panel-repairs',
    type: 'website',
  },
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const faultTypes = [
  {
    step: '01',
    title: 'Failed start relays',
    desc: 'The generator cranks but does not start, or fails to crank at all despite battery power. Start relay or fuel solenoid failure are common culprits.',
  },
  {
    step: '02',
    title: 'Controller fault codes',
    desc: 'AMF and ATS digital controllers displaying persistent fault codes — sensor alarms, communication errors, over-speed, under-speed, or shutdown faults.',
  },
  {
    step: '03',
    title: 'Automatic transfer failure',
    desc: 'Generator starts but does not transfer the load, or fails to retransfer back to mains. ATS contactor or controller configuration faults.',
  },
  {
    step: '04',
    title: 'Sensor & sender faults',
    desc: 'Oil pressure, coolant temperature, and fuel level senders sending incorrect readings, causing nuisance shutdowns or masking real faults.',
  },
  {
    step: '05',
    title: 'Wiring & connection damage',
    desc: 'Corroded terminals, rodent damage, vibration-induced chafing, and failed circuit breakers inside the control panel causing intermittent faults.',
  },
  {
    step: '06',
    title: 'Controller programming & upgrades',
    desc: 'Incorrect settings, outdated firmware, or older mechanical panels requiring upgrade to modern digital controllers for reliable automatic operation.',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Systematic fault diagnosis',
    body: 'We read fault logs, test sensors and relays individually, and trace wiring methodically. We find the root cause, not just the symptom.',
  },
  {
    num: '02',
    title: 'Targeted component repair',
    body: 'Relays, solenoids, breakers, and sensors replaced as required. We do not swap out the whole panel when a single component has failed.',
  },
  {
    num: '03',
    title: 'Controller programming & configuration',
    body: 'We read, adjust, and restore settings on Deep Sea, ComAp, Woodward, and other major controller brands — including firmware updates where needed.',
  },
  {
    num: '04',
    title: 'Full function test before handover',
    body: 'Auto-start sequence, load transfer, shutdown protection, and fault alarm testing confirmed before leaving site.',
  },
]

const relatedServices = [
  { href: '/avr-repairs', label: 'AVR & Voltage Repairs', desc: 'Stable power output' },
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'Full repair service' },
  { href: '/generator-installation', label: 'Generator Installation', desc: 'Complete setup & commissioning' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts', desc: 'Same-day response' },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function ControlPanelRepairsPage() {
  return (
    <>
      <ServiceSchema
        name="Control Panel Repairs"
        description="Generator control panel and controller repairs across Gauteng. AMF and ATS controller faults, relay replacements, Deep Sea Electronics and ComAp programming, sensor faults, and wiring repairs."
        url="/control-panel-repairs"
      />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Control Panel Repairs' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/control-panel-repairs-hero.png"
            alt="Generator control panel and AMF controller repair service in Gauteng"
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
              Control Panel Repairs · Gauteng
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Control Panel Repairs.<br />
            <span className="text-[#c8a84b]">From Relays to Controllers.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            The control panel is the brain of your generator. When it fails, the engine may not
            start, the load may not transfer, or persistent fault codes prevent operation. We
            diagnose and repair control systems across all generator types throughout Gauteng.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['AMF & ATS controllers', 'Deep Sea & ComAp', 'Relays, sensors & wiring', 'Controller programming'].map((t) => (
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
              Common Control Panel Faults
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
                Generator Control Panel Repair Across Gauteng
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  The control panel manages every aspect of your generator's operation — starting
                  sequences, engine parameter monitoring, output control, and automatic load
                  transfer in standby applications. When panel components fail, the consequences
                  range from a generator that will not start at all, to one that runs but shuts
                  down unexpectedly under load, or fails to transfer power to your building when
                  mains is lost.
                </p>
                <p>
                  Control panel problems range from straightforward component failures to complex
                  controller malfunctions. A failed start relay, a faulty fuel solenoid, or a
                  defective oil pressure sender are discrete, repairable faults. A malfunctioning
                  AMF controller with persistent fault codes, a misconfigured ATS that fails to
                  transfer, or corrupted firmware on a digital controller require a different
                  approach. Our technicians are experienced with both.
                </p>
                <p>
                  We work with all major controller brands — Deep Sea Electronics, ComAp, Woodward,
                  Deepsea, SmartGen, and others. We can read and interpret fault logs, adjust
                  operational settings, update firmware, replace failed controller modules, and
                  reconfigure systems following a change in installation requirements. If your
                  generator uses a proprietary panel from the original manufacturer, we can
                  diagnose it at the component level rather than replacing the whole assembly.
                </p>
              </div>

              {/* Image 1 */}
              <div className="mt-10 relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/control-panel-repair-technician.png"
                  alt="Generator Repair Services technician diagnosing a Deep Sea AMF control panel fault on a standby generator in Gauteng"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent px-5 py-4">
                  <p className="text-white/80 text-xs">Control panel diagnosis — fault codes read and interpreted on-site</p>
                </div>
              </div>

              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70 mt-8">
                <p>
                  For older generators operating with basic mechanical controls, we offer upgrades
                  to modern digital AMF controller systems. These upgrades deliver significant
                  improvements in reliability, monitoring depth, and automatic operation — including
                  remote monitoring capabilities for facilities that need off-site visibility of
                  generator status. We assess your specific installation and recommend an upgrade
                  path that adds genuine value without unnecessary complexity.
                </p>
                <p>
                  Every control panel repair is completed with a full function test. We verify
                  the auto-start sequence, load transfer operation, shutdown protection activation,
                  and fault alarm behaviour before leaving site. The generator must perform
                  correctly through a complete operational cycle — not just power on — before the
                  job is closed.
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
                <p className="text-white font-bold mb-1">Control panel fault on your generator?</p>
                <p className="text-white/50 text-sm mb-4">Call for expert diagnosis and repair across Gauteng.</p>
                <a
                  href="tel:0603160484"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#b91c1c] text-white font-bold text-sm hover:bg-red-800 transition-colors"
                >
                  060 316 0484
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Controller brands + image break ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="brands-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image 2 */}
            <div className="relative aspect-[4/3] overflow-hidden order-2 md:order-1">
              <Image
                src="/images/generator-controller-programming.png"
                alt="Deep Sea Electronics and ComAp generator controller programming and configuration in Gauteng"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Controller Expertise</p>
              <h2 id="brands-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                All Major Controller Brands Supported
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base leading-relaxed text-[#1a1a1a]/70">
                <p>
                  Modern standby generators use sophisticated digital controllers that monitor
                  dozens of engine and electrical parameters simultaneously. These systems provide
                  detailed fault logging, configurable alarm thresholds, and remote monitoring
                  capabilities — but require proper setup and maintenance to function correctly.
                </p>
                <p>
                  We are experienced across all major brands in use across Gauteng. Deep Sea
                  Electronics controllers — from basic DSE 6020 units to advanced DSE 8610 MKII
                  modules — are among the most common, and we handle fault diagnosis, configuration,
                  and replacement across the full DSE range. We carry the same capability for
                  ComAp, Woodward, and SmartGen systems.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  ['Deep Sea Electronics', 'Full range, all models'],
                  ['ComAp controllers', 'InteliGen, InteliLite & more'],
                  ['Woodward systems', 'EasyGen series'],
                  ['SmartGen & others', 'All brands diagnosed'],
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
              Control panel and controller repairs are available across all Gauteng areas including
              Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton
              Park, Boksburg, Benoni, Germiston, Alberton, Fourways, and surrounding regions.{' '}
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
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Control Panel Repairs?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Call to discuss your control panel fault and get a diagnosis. We cover all
                of Gauteng from Johannesburg and Pretoria to Centurion, Midrand, and beyond.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:0603160484"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors"
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
