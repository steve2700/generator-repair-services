import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FAQSchema } from '@/components/faq-schema'

export const metadata: Metadata = {
  title: 'Generator Repair Cost South Africa 2026 | Gauteng Price Guide',
  description:
    'Transparent generator repair pricing for Gauteng 2026. Minor repairs from R600 to full engine overhauls. Honest written quotes before any work starts. Call 060 316 0484.',
  keywords: [
    'generator repair cost South Africa 2026',
    'generator repair price Gauteng',
    'how much does generator repair cost',
    'generator service cost Johannesburg',
    'generator AVR replacement cost',
    'generator overhaul cost South Africa',
    'generator callout fee Gauteng',
    'generator maintenance cost 2026',
    'generator rewinding cost Gauteng',
    'generator repair rates Pretoria',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repair-cost',
  },
  openGraph: {
    title: 'Generator Repair Cost South Africa 2026 | Gauteng Price Guide',
    description:
      'Transparent generator repair pricing for Gauteng 2026. Minor repairs to full overhauls. Honest written quotes. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/generator-repair-cost',
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const costSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.generatorrepairservices.co.za/generator-repair-cost#article',
  headline: 'Generator Repair Cost South Africa 2026 — Gauteng Price Guide',
  description:
    'Transparent generator repair pricing guide for South Africa 2026. Covering minor repairs, major overhauls, callout fees and factors that affect cost.',
  dateModified: '2026-01-01',
  author: {
    '@type': 'Organization',
    '@id': 'https://www.generatorrepairservices.co.za/#business',
    name: 'Generator Repair Services',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.generatorrepairservices.co.za/#business',
    name: 'Generator Repair Services',
  },
  mainEntityOfPage: 'https://www.generatorrepairservices.co.za/generator-repair-cost',
}

const pricingFaqs = [
  {
    question: 'How much does a basic generator service cost in South Africa in 2026?',
    answer:
      'A basic generator service including oil change, filter replacement and inspection costs between R900 and R1,800 depending on generator size and oil specification required. Larger diesel generators cost more than small petrol units due to oil volume and filter pricing.',
  },
  {
    question: 'What does it cost to repair a generator that will not start?',
    answer:
      'Diagnosing and repairing starting failures typically costs R600–R3,500. This covers battery testing and replacement, starter motor inspection, fuel system checks, glow plug or spark plug replacement, and control panel fault diagnosis. Simple faults like a flat battery are at the lower end; starter motor replacements or fuel pump failures fall in the middle range.',
  },
  {
    question: 'How much does AVR replacement cost in Gauteng?',
    answer:
      'AVR (Automatic Voltage Regulator) replacement costs R2,200–R9,000 depending on the generator brand and AVR type. OEM parts cost more than quality aftermarket alternatives. We source the correct match for your unit and test voltage stability under load before sign-off.',
  },
  {
    question: 'Is it worth repairing an old generator or should I replace it?',
    answer:
      'As a rule of thumb, if the repair cost exceeds 50–60% of the replacement value of an equivalent unit, replacement is usually the better long-term investment. For generators under 10 years old in otherwise good condition, repair is almost always the better option. We give an honest assessment before quoting so you can make an informed decision.',
  },
  {
    question: 'Are there hidden callout fees?',
    answer:
      'No. We provide a clear written assessment of the fault and repair cost before any work begins. Standard callout fees apply for the visit, and the diagnostic assessment is included in the repair cost — you are not charged twice. Emergency after-hours callouts carry a higher callout fee which we communicate upfront.',
  },
]

const minorRepairs = [
  { label: 'Oil & filter change', range: 'R600 – R1,400' },
  { label: 'Air filter replacement', range: 'R250 – R700' },
  { label: 'Spark plug replacement (petrol)', range: 'R200 – R500' },
  { label: 'Glow plug replacement (diesel)', range: 'R900 – R2,800' },
  { label: 'Battery replacement', range: 'R900 – R2,800' },
  { label: 'Belt replacement', range: 'R450 – R1,400' },
  { label: 'Full basic service (inspection + fluids)', range: 'R900 – R1,800' },
  { label: 'Fuel filter replacement', range: 'R300 – R800' },
]

const moderateRepairs = [
  { label: 'Fuel pump repair / replacement', range: 'R1,800 – R4,500' },
  { label: 'Carburetor cleaning / rebuild', range: 'R900 – R2,200' },
  { label: 'Starter motor repair / replacement', range: 'R1,400 – R4,000' },
  { label: 'Cooling system repair', range: 'R1,800 – R5,000' },
  { label: 'Exhaust system repair', range: 'R1,200 – R3,500' },
  { label: 'Fuel system cleaning & polishing', range: 'R1,500 – R3,500' },
  { label: 'Voltage fluctuation diagnosis & repair', range: 'R1,500 – R5,000' },
]

const majorRepairs = [
  { label: 'AVR replacement', range: 'R2,200 – R9,000' },
  { label: 'Control panel repair / reprogramming', range: 'R3,500 – R14,000' },
  { label: 'Injector replacement (diesel)', range: 'R3,000 – R9,000' },
  { label: 'Alternator rewinding', range: 'R6,000 – R18,000+' },
  { label: 'Engine overhaul', range: 'R9,000 – R28,000+' },
  { label: 'Complete rebuild', range: 'R18,000 – R55,000+' },
]

const calloutFees = [
  { label: 'Diagnostic assessment', range: 'FREE with repair' },
  { label: 'Standard callout (business hours)', range: 'R400 – R700' },
  { label: 'Emergency callout (after hours)', range: 'R700 – R1,400' },
  { label: 'Load bank testing', range: 'R2,800 – R5,500' },
]

const factors = [
  {
    title: 'Generator size & kVA rating',
    body: 'Larger generators require more materials, more oil, larger filters and longer labour time. A 10kVA residential unit costs significantly less to service than a 500kVA industrial standby system.',
  },
  {
    title: 'Brand & model',
    body: 'Premium brands such as Cummins, Caterpillar and Perkins use quality OEM parts that carry a cost premium. Generic Chinese-built generators often have cheaper parts but sourcing them can be slow and unreliable.',
  },
  {
    title: 'Parts availability',
    body: 'Common parts are stocked on our vehicles and available immediately. Rare or imported components may need to be ordered — we communicate lead times clearly before work begins.',
  },
  {
    title: 'Repair complexity',
    body: 'Most repairs are completed on-site on the first visit. Some major faults — alternator rewinds, full engine rebuilds — require workshop time and specialist equipment, which is reflected in the cost.',
  },
  {
    title: 'OEM vs quality aftermarket',
    body: 'We offer both OEM and quality aftermarket parts depending on your preference and budget. We recommend OEM for critical components and quality aftermarket for serviceable items where supply is reliable.',
  },
  {
    title: 'Emergency vs planned work',
    body: 'Emergency after-hours callouts carry a higher callout fee than scheduled service appointments. A maintenance contract reduces your emergency risk and often includes discounted callout rates.',
  },
]

function PricingRow({ label, range }: { label: string; range: string }) {
  const isFree = range === 'FREE with repair'
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-[#1a1a1a]/8 last:border-0 gap-4">
      <span className="text-sm text-[#1a1a1a]/75 leading-snug">{label}</span>
      <span className={`text-sm font-bold shrink-0 ${isFree ? 'text-[#c8a84b]' : 'text-[#1a1a1a]'}`}>
        {range}
      </span>
    </div>
  )
}

function PricingCard({
  title,
  badge,
  badgeColor,
  rows,
}: {
  title: string
  badge: string
  badgeColor: string
  rows: { label: string; range: string }[]
}) {
  return (
    <div className="bg-white border border-[#1a1a1a]/8">
      <div className="px-6 py-5 border-b border-[#1a1a1a]/8 flex items-center justify-between gap-4">
        <h3 className="font-black text-[#1a1a1a] text-base">{title}</h3>
        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 shrink-0 ${badgeColor}`}>
          {badge}
        </span>
      </div>
      <div className="px-6">
        {rows.map((row) => (
          <PricingRow key={row.label} {...row} />
        ))}
      </div>
    </div>
  )
}

export default function GeneratorRepairCostPage() {
  return (
    <>
      <FAQSchema faqs={pricingFaqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(costSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Generator Repair Cost' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-[#0a0a0a] border-b border-[#c8a84b]/15">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-4">
              Pricing Guide · 2026
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              Generator Repair Cost in Gauteng — 2026 Guide
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-8">
              Transparent, up-to-date pricing for every type of generator repair across
              Gauteng. From a basic service to a full engine overhaul — know what to
              expect before you call.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0603160484"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#b91c1c] text-white font-bold text-base hover:bg-red-800 transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Get a Free Quote
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#c8a84b]/40 text-[#c8a84b] font-semibold text-base hover:bg-[#c8a84b] hover:text-[#0a0a0a] transition-colors"
              >
                Request Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key callout bar ── */}
      <section className="bg-[#111111] border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            {[
              { label: 'Written quote before any work', highlight: true },
              { label: 'All brands & generator sizes', highlight: false },
              { label: 'Diagnostic included with repair', highlight: false },
              { label: '3-month workmanship warranty', highlight: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a84b] shrink-0" />
                <span className={`text-sm ${item.highlight ? 'text-[#c8a84b] font-semibold' : 'text-white/50'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="py-14 md:py-20 bg-[#f5f4f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-start">

            {/* Left: pricing tables */}
            <div className="space-y-6">

              {/* Intro */}
              <div className="bg-white border border-[#1a1a1a]/8 px-6 py-6">
                <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">Overview</p>
                <h2 className="text-xl md:text-2xl font-black text-[#1a1a1a] mb-4">
                  2026 Generator Repair Pricing — Gauteng
                </h2>
                <div className="w-8 h-0.5 bg-[#c8a84b] mb-5" />
                <p className="text-sm leading-relaxed text-[#1a1a1a]/65 mb-3">
                  Prices below reflect 2026 market rates for Gauteng including parts and labour.
                  All prices are estimates — the actual cost for your generator depends on its
                  make, model, size and the specific fault. We provide a written quote after
                  on-site assessment before any work begins.
                </p>
                <p className="text-sm leading-relaxed text-[#1a1a1a]/65">
                  Prices have been updated to reflect current parts costs and rand exchange rate
                  movements affecting imported components. Generator repair remains significantly
                  more cost-effective than replacement in most scenarios.
                </p>
              </div>

              {/* Minor */}
              <PricingCard
                title="Minor Repairs & Routine Maintenance"
                badge="R600 – R2,800"
                badgeColor="bg-[#f5f4f0] text-[#1a1a1a]/60 border border-[#1a1a1a]/10"
                rows={minorRepairs}
              />

              {/* Moderate */}
              <PricingCard
                title="Moderate Repairs"
                badge="R900 – R5,000"
                badgeColor="bg-[#c8a84b]/10 text-[#c8a84b] border border-[#c8a84b]/25"
                rows={moderateRepairs}
              />

              {/* Major */}
              <PricingCard
                title="Major Repairs & Overhauls"
                badge="R2,200 – R55,000+"
                badgeColor="bg-[#b91c1c]/10 text-[#b91c1c] border border-[#b91c1c]/20"
                rows={majorRepairs}
              />

              {/* Callout fees */}
              <PricingCard
                title="Service & Callout Fees"
                badge="Transparent pricing"
                badgeColor="bg-[#0a0a0a] text-white"
                rows={calloutFees}
              />

              {/* Disclaimer */}
              <div className="border-l-2 border-[#c8a84b] bg-white px-6 py-5">
                <p className="text-[#c8a84b] text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
                  Important Notes
                </p>
                <ul className="space-y-2.5">
                  {[
                    'All prices are estimates — your generator may cost more or less depending on make, model and condition.',
                    'Large industrial generators (100kVA+) typically incur higher labour and parts costs.',
                    'OEM manufacturer parts cost more than quality aftermarket alternatives — we advise on the best option for your unit.',
                    'Every repair includes our standard 3-month workmanship warranty on parts and labour.',
                    'We provide a written quote before starting any work — you decide, no obligation.',
                    'Prices updated January 2026 and reflect current Gauteng market rates.',
                  ].map((note) => (
                    <li key={note} className="flex items-start gap-3 text-sm text-[#1a1a1a]/60 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1a1a1a]/30 shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24">

              {/* CTA card */}
              <div className="bg-[#0a0a0a]">
                <div className="px-6 pt-6 pb-5">
                  <div className="w-7 h-0.5 bg-[#c8a84b] mb-4" />
                  <p className="text-white font-black text-lg leading-snug mb-2">
                    Get an accurate quote for your generator
                  </p>
                  <p className="text-white/45 text-sm mb-5 leading-relaxed">
                    Call us or send a message — free written assessment, no obligation.
                  </p>
                  <a
                    href="tel:0603160484"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#b91c1c] text-white font-bold text-base hover:bg-red-800 transition-colors mb-3"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                    060 316 0484
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full py-3 border border-white/15 text-white text-sm font-semibold hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>

              {/* Repair vs replace */}
              <div className="bg-white border border-[#1a1a1a]/8">
                <div className="px-5 py-4 border-b border-[#1a1a1a]/8">
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1a1a1a]/40">Quick Rule</p>
                </div>
                <div className="px-5 py-5">
                  <p className="text-sm font-bold text-[#1a1a1a] mb-2">Repair or Replace?</p>
                  <p className="text-xs text-[#1a1a1a]/55 leading-relaxed">
                    If the repair cost exceeds 50–60% of the replacement value of an
                    equivalent unit, replacement is usually the better long-term investment.
                    For generators under 10 years old in good condition, repair almost
                    always wins. We give an honest assessment.
                  </p>
                </div>
              </div>

              {/* Related links */}
              <div className="bg-white border border-[#1a1a1a]/8">
                <div className="px-5 py-4 border-b border-[#1a1a1a]/8">
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1a1a1a]/40">Related</p>
                </div>
                <ul className="divide-y divide-[#1a1a1a]/8">
                  {[
                    { href: '/generator-repairs', label: 'Generator Repairs' },
                    { href: '/generator-servicing', label: 'Generator Servicing' },
                    { href: '/generator-maintenance', label: 'Maintenance Plans' },
                    { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
                    { href: '/faq', label: 'Full FAQ' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between px-5 py-3.5 text-sm text-[#1a1a1a]/65 hover:text-[#c8a84b] hover:bg-[#f5f4f0] transition-colors group"
                      >
                        {link.label}
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity text-[#c8a84b]" aria-hidden="true">
                          <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ── Factors affecting cost ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="factors-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">Pricing Factors</p>
            <h2 id="factors-heading" className="text-2xl md:text-3xl font-black text-[#1a1a1a] leading-tight max-w-xl">
              What Determines the Final Cost of Your Generator Repair?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]/8">
            {factors.map((f, i) => (
              <div key={f.title} className="bg-white p-6 md:p-7 group hover:bg-[#f5f4f0] transition-colors">
                <span className="text-[#c8a84b]/25 font-black text-2xl leading-none block mb-3 group-hover:text-[#c8a84b]/50 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold text-[#1a1a1a] text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-[#1a1a1a]/55 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-4">Pricing FAQ</p>
              <h2 id="faq-heading" className="text-2xl md:text-3xl font-black text-[#1a1a1a] leading-tight mb-4">
                Common Cost Questions
              </h2>
              <div className="w-8 h-0.5 bg-[#c8a84b] mb-5" />
              <p className="text-[#1a1a1a]/50 text-sm leading-relaxed">
                Straight answers on pricing, quoting and what to expect when you call us.
              </p>
            </div>
            <div className="border-t border-[#1a1a1a]/10">
              {pricingFaqs.map((faq) => (
                <details key={faq.question} className="group border-b border-[#1a1a1a]/10">
                  <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer list-none select-none">
                    <h3 className="text-sm font-bold text-[#1a1a1a] leading-snug group-open:text-[#c8a84b] transition-colors pr-2">
                      {faq.question}
                    </h3>
                    <span className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center border border-[#1a1a1a]/20 group-open:border-[#c8a84b] group-open:bg-[#c8a84b] transition-colors">
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-open:hidden" aria-hidden="true">
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="hidden group-open:block text-white" aria-hidden="true">
                        <path d="M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </summary>
                  <div className="pb-5 pr-9">
                    <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Get a quote">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Get a Free Quote for Your Generator Repair
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                Call us or send a message — we assess your generator, explain the fault
                in plain language and give you a written quote before any work begins.
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
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
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


done
Done
