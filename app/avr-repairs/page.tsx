import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

/* ─────────────────────────────────────────
   SEO — Advanced
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'AVR Repairs Gauteng | Automatic Voltage Regulator Repair & Replacement',
  description:
    'AVR and automatic voltage regulator repairs across Gauteng. Voltage fluctuations, low output, no power from a running generator — we diagnose and restore stable power. Call 060 316 0484.',
  keywords: [
    'AVR repair Gauteng',
    'automatic voltage regulator repair Gauteng',
    'generator AVR replacement Johannesburg',
    'generator voltage regulator repair Gauteng',
    'generator no output voltage Gauteng',
    'generator voltage fluctuation repair Gauteng',
    'generator voltage unstable Gauteng',
    'AVR calibration Gauteng',
    'generator alternator repair Gauteng',
    'generator producing no power Gauteng',
    'generator low voltage repair Gauteng',
    'AVR fault diagnosis Gauteng',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/avr-repairs',
  },
  openGraph: {
    title: 'AVR Repairs Gauteng | Automatic Voltage Regulator Repair & Replacement',
    description:
      'AVR and automatic voltage regulator repairs across Gauteng. Voltage fluctuations, low output, complete power loss from a running generator — expert diagnosis and repair. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/avr-repairs',
    type: 'website',
  },
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const symptoms = [
  {
    step: '01',
    title: 'No output voltage',
    desc: 'Engine runs normally but the generator produces no usable power. A common sign of total AVR failure or excitation winding fault.',
  },
  {
    step: '02',
    title: 'Unstable or fluctuating voltage',
    desc: 'Output voltage rises and falls with load changes instead of holding steady. Causes equipment damage and tripping of sensitive devices.',
  },
  {
    step: '03',
    title: 'Voltage too high or too low',
    desc: 'Consistently over or under target voltage across all loads. Usually an AVR calibration failure or replacement with an incorrectly matched unit.',
  },
  {
    step: '04',
    title: 'Controller fault codes',
    desc: 'Digital panels displaying voltage-related alarms or shutdown codes that persist after resetting, pointing to an AVR or excitation fault.',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Full electrical diagnosis',
    body: 'We test AVR output signals, excitation winding resistance, and voltage response under load using specialised test equipment — not guesswork.',
  },
  {
    num: '02',
    title: 'Component-level repair where possible',
    body: 'On repairable AVR units, we replace failed internal components to restore function at a lower cost than outright replacement.',
  },
  {
    num: '03',
    title: 'Matched replacement sourcing',
    body: 'Where replacement is required, we source a compatible unit matched to your alternator make and model — not a generic substitute.',
  },
  {
    num: '04',
    title: 'Calibration & load verification',
    body: 'After installation, the AVR is calibrated to your specific alternator and tested across the full load range to confirm stable output.',
  },
]

const relatedServices = [
  { href: '/control-panel-repairs', label: 'Control Panel Repairs', desc: 'AMF / ATS controllers' },
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'Full repair service' },
  { href: '/generator-rewinding', label: 'Generator Rewinding', desc: 'Alternator & stator rewinds' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts', desc: 'Same-day response' },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function AVRRepairsPage() {
  return (
    <>
      <ServiceSchema
        name="AVR & Voltage Regulator Repairs"
        description="AVR and automatic voltage regulator repairs across Gauteng. Expert diagnosis, component-level repair, and matched replacement to restore stable generator output voltage."
        url="/avr-repairs"
      />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'AVR Repairs' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/avr-repair-technician.png"
            alt="Automatic voltage regulator AVR repair and replacement for generators in Gauteng"
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
              AVR & Voltage Repairs · Gauteng
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            AVR & Voltage Regulator Repairs.<br />
            <span className="text-[#c8a84b]">Stable Power Restored.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Voltage fluctuations, no output from a running generator, or high voltage damaging
            your equipment — all point to the AVR. We diagnose accurately and repair or replace
            to restore clean, stable power output across all of Gauteng.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['All AVR types & makes', 'Component-level repair', 'Matched replacement sourcing', 'Calibrated & load-tested'].map((t) => (
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

      {/* ── Symptoms ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="symptoms-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Common Symptoms</p>
            <h2 id="symptoms-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              Signs Your AVR Has Failed
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]/10">
            {symptoms.map((item) => (
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
                Expert AVR Diagnosis & Repair Across Gauteng
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  The Automatic Voltage Regulator is the component responsible for maintaining
                  stable output voltage regardless of load changes. When it fails, the symptoms
                  range from complete loss of output voltage to fluctuating power that damages
                  connected equipment. Generator Repair Services diagnoses and repairs AVR faults
                  across all generator makes and models throughout Gauteng.
                </p>
                <p>
                  AVR failures can result from age, heat exposure, power surges, moisture ingress,
                  or manufacturing defects. A common misdiagnosis is assuming the alternator or
                  engine is at fault when the generator produces no power — in many cases, the
                  engine is running perfectly and only the AVR has failed. Accurate diagnosis
                  using the correct test equipment prevents unnecessary and costly component
                  replacements.
                </p>
                <p>
                  Our technicians test AVR output signals, excitation winding resistance, and
                  voltage behaviour under load to isolate the fault precisely. Where the AVR unit
                  is repairable, we replace failed internal components to restore function at
                  lower cost than full replacement. Where replacement is the correct solution,
                  we source a compatible unit matched to your specific alternator — correct
                  matching and calibration are critical, as an incorrectly matched AVR causes
                  the same problems as the failed one.
                </p>
              </div>

              {/* Image 1 */}
              <div className="mt-10 relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/avr-repair-technician.png"
                  alt="Generator Repair Services technician testing an AVR automatic voltage regulator during generator repair in Gauteng"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent px-5 py-4">
                  <p className="text-white/80 text-xs">AVR diagnosis — specialised test equipment, not guesswork</p>
                </div>
              </div>

              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70 mt-8">
                <p>
                  After installation, every AVR repair is completed with calibration and a
                  full load-range verification test. We confirm stable voltage output at light,
                  medium, and heavy load before closing the job. This ensures the repair holds
                  under real operating conditions, not just at idle.
                </p>
                <p>
                  We work across all major alternator brands and AVR types — Stamford, Leroy Somer,
                  Mecc Alte, Marathon, and others. If your generator make or model is unusual,
                  we can source and match appropriate AVR units and carry out the correct
                  calibration procedure for that specific alternator.
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
                <p className="text-white font-bold mb-1">Voltage problem with your generator?</p>
                <p className="text-white/50 text-sm mb-4">Call for expert AVR diagnosis and repair across Gauteng.</p>
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

      {/* ── Why matching matters — image break ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="matching-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image 2 */}
            <div className="relative aspect-[4/3] overflow-hidden order-2 md:order-1">
              <Image
                src="/images/avr-replacement-calibration.png"
                alt="AVR automatic voltage regulator replacement and calibration on a commercial standby generator in Johannesburg"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Why It Matters</p>
              <h2 id="matching-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Correct Matching & Calibration Are Non-Negotiable
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base leading-relaxed text-[#1a1a1a]/70">
                <p>
                  A replacement AVR that is not matched to your alternator will produce the exact
                  same symptoms as the failed unit — or cause new ones. Voltage that is too high
                  damages connected equipment. Voltage that is too low cannot power your loads.
                  Unstable voltage under load creates problems across your entire electrical
                  installation.
                </p>
                <p>
                  We do not fit generic units and hand the problem back. Every replacement is
                  sourced to match the alternator specifications, installed correctly, and
                  calibrated using the manufacturer procedure for that specific unit. The result
                  is verified under load before we close the job.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  ['All alternator brands', 'Stamford, Leroy Somer, Mecc Alte & more'],
                  ['Correct calibration', 'Matched to your specific alternator'],
                  ['Load-range tested', 'Verified at light, medium & heavy load'],
                  ['Repair or replace', 'Component repair where economical'],
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
              AVR and voltage regulator repairs are available across all Gauteng areas including
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
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need AVR Repairs?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Call to discuss your voltage problem and get a diagnosis. We cover all of Gauteng
                from Johannesburg and Pretoria to Centurion, Midrand, and beyond.
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
