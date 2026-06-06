import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Generator Services Gauteng | Repairs, Servicing, Maintenance & More',
  description:
    'Full range of professional generator services across Gauteng. Expert repairs, scheduled servicing, emergency callouts, AVR repairs, load testing & installation. Call 060 316 0484.',
  keywords: [
    'generator services Gauteng',
    'generator repair services Johannesburg',
    'generator servicing Gauteng',
    'emergency generator repair Gauteng',
    'generator maintenance Gauteng',
    'generator installation Gauteng',
    'AVR repair Gauteng',
    'load bank testing Gauteng',
    'generator control panel repair',
    'generator rewinding Gauteng',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/services',
  },
  openGraph: {
    title: 'Generator Services Gauteng | Repairs, Servicing & Maintenance',
    description: 'Full range of professional generator services across Gauteng. Emergency callouts, all brands. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/services',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Generator Services — Generator Repair Services Gauteng',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Generator Repairs', url: 'https://www.generatorrepairservices.co.za/generator-repairs' },
    { '@type': 'ListItem', position: 2, name: 'Generator Servicing', url: 'https://www.generatorrepairservices.co.za/generator-servicing' },
    { '@type': 'ListItem', position: 3, name: 'Generator Maintenance Plans', url: 'https://www.generatorrepairservices.co.za/generator-maintenance' },
    { '@type': 'ListItem', position: 4, name: 'Emergency Generator Callouts', url: 'https://www.generatorrepairservices.co.za/emergency-generator-repair' },
    { '@type': 'ListItem', position: 5, name: 'Generator Installation', url: 'https://www.generatorrepairservices.co.za/generator-installation' },
    { '@type': 'ListItem', position: 6, name: 'Load Bank Testing', url: 'https://www.generatorrepairservices.co.za/load-bank-testing' },
    { '@type': 'ListItem', position: 7, name: 'AVR & Voltage Regulator Repairs', url: 'https://www.generatorrepairservices.co.za/avr-repairs' },
    { '@type': 'ListItem', position: 8, name: 'Control Panel Repairs', url: 'https://www.generatorrepairservices.co.za/control-panel-repairs' },
    { '@type': 'ListItem', position: 9, name: 'Fuel System Repairs', url: 'https://www.generatorrepairservices.co.za/fuel-system-repairs' },
    { '@type': 'ListItem', position: 10, name: 'Generator Rewinding', url: 'https://www.generatorrepairservices.co.za/generator-rewinding' },
  ],
}

const services = [
  {
    href: '/generator-repairs',
    title: 'Generator Repairs',
    shortTitle: 'Repairs',
    image: '/images/generator-repairs.png',
    alt: 'Generator repair technician diagnosing a diesel generator fault in Gauteng',
    badge: 'Most Requested',
    badgeColor: 'bg-[#c8a84b] text-[#0a0a0a]',
    description:
      'From minor electrical faults to major mechanical failures, our certified technicians diagnose and repair all generator types quickly and correctly. We carry common parts on every vehicle, meaning most repairs are completed on the first visit — no waiting for parts to arrive before work begins.',
    points: [
      'All brands: Cummins, Perkins, Caterpillar, Deutz, Volvo & more',
      'Diesel and petrol generators of all sizes',
      'Diagnostic tools for fast, accurate fault-finding',
      'Workmanship guarantee on every repair',
    ],
  },
  {
    href: '/generator-servicing',
    title: 'Generator Servicing',
    shortTitle: 'Servicing',
    image: '/images/generator-servicing.png',
    alt: 'Technician performing a full generator service including oil change and filter replacement',
    badge: null,
    badgeColor: '',
    description:
      'Regular servicing is the single most effective way to extend your generator\'s lifespan and prevent unexpected breakdowns. Our comprehensive service includes oil and filter changes, coolant inspection, belt checks, battery testing, and a full load test to verify the generator performs to its rated output.',
    points: [
      'Full oil and filter change with quality-spec lubricants',
      'Coolant system inspection and top-up',
      'Air and fuel filter replacement',
      'Battery and charging system check',
    ],
  },
  {
    href: '/generator-maintenance',
    title: 'Maintenance Plans',
    shortTitle: 'Maintenance',
    image: '/images/generator-maintenance.png',
    alt: 'Planned maintenance schedule for standby generators across Gauteng businesses',
    badge: 'Popular for Business',
    badgeColor: 'bg-[#1a1a1a] text-white border border-white/20',
    description:
      'A maintenance plan removes the guesswork entirely. We track your generator\'s service intervals, contact you when it\'s due, and handle everything from scheduling to paperwork. Businesses and property managers across Gauteng rely on our maintenance contracts to keep standby systems ready for loadshedding.',
    points: [
      'Customised service schedules by hours run or calendar interval',
      'Priority callout response for contracted clients',
      'Full service records and compliance documentation',
      'Discounted rates on parts and emergency callouts',
    ],
  },
  {
    href: '/emergency-generator-repair',
    title: 'Emergency Callouts',
    shortTitle: 'Emergency',
    image: '/images/emergency-generator-repair.png',
    alt: 'Emergency generator repair technician responding to a breakdown in Johannesburg',
    badge: '2–4 Hour Response',
    badgeColor: 'bg-[#b91c1c] text-white',
    description:
      'When your generator fails mid-loadshedding or during a critical power event, every minute counts. Our emergency response team is deployed across Gauteng, with most callouts receiving an on-site technician within 2–4 hours of your call. We prioritise essential services, hospitals, data centres, and commercial operations.',
    points: [
      'Same-day emergency callouts across all of Gauteng',
      'Mobile workshops stocked with common failure parts',
      'Priority dispatch for contracted maintenance clients',
      'Available for residential, commercial and industrial emergencies',
    ],
  },
  {
    href: '/generator-installation',
    title: 'Generator Installation',
    shortTitle: 'Installation',
    image: '/images/generator-installation.png',
    alt: 'Professional generator installation including electrical connections and changeover switch',
    badge: null,
    badgeColor: '',
    description:
      'A professional installation is critical to the safety and longevity of your generator. Our team handles the complete process: site assessment, foundation or mounting, fuel line installation, electrical connections, changeover switch wiring, and commissioning. All work complies with SANS standards.',
    points: [
      'Site assessment and generator sizing advice',
      'Automatic and manual changeover switch installation',
      'Fuel tank and supply line installation',
      'SANS-compliant electrical connections',
    ],
  },
  {
    href: '/load-bank-testing',
    title: 'Load Bank Testing',
    shortTitle: 'Load Testing',
    image: '/images/load-bank-testing.png',
    alt: 'Load bank testing of an industrial standby generator to verify rated output capacity',
    badge: null,
    badgeColor: '',
    description:
      'Standby generators that rarely run under full load accumulate wet stacking — unburned fuel deposits in the exhaust system — which reduces efficiency and can cause premature failure. Load bank testing applies a controlled electrical load to your generator, verifying it can deliver its rated output and clearing any wet stacking.',
    points: [
      'Tests generator at 50%, 75% and 100% rated capacity',
      'Clears wet stacking in diesel generators',
      'Provides compliance documentation for insurers',
      'Identifies capacity shortfalls before they become emergencies',
    ],
  },
  {
    href: '/avr-repairs',
    title: 'AVR & Voltage Regulator Repairs',
    shortTitle: 'AVR Repairs',
    image: '/images/avr-repairs.png',
    alt: 'Automatic voltage regulator repair and replacement for generators in Gauteng',
    badge: null,
    badgeColor: '',
    description:
      'A faulty Automatic Voltage Regulator causes fluctuating or incorrect output voltage, which can damage connected equipment. Our technicians diagnose AVR faults, replace failed units with quality-matched components, and test voltage stability under load to confirm a clean, consistent power output.',
    points: [
      'Diagnosis of voltage fluctuation and instability faults',
      'AVR replacement with OEM-spec or quality aftermarket units',
      'Voltage output testing under varying load conditions',
      'Applicable to all generator brands and alternator types',
    ],
  },
  {
    href: '/control-panel-repairs',
    title: 'Control Panel Repairs',
    shortTitle: 'Control Panels',
    image: '/images/control-panel-repairs.png',
    alt: 'Generator control panel repair and programming service in Gauteng',
    badge: null,
    badgeColor: '',
    description:
      'Modern generators rely on digital control panels and AMF (Automatic Main Failure) controllers to manage automatic starting and load transfer. When these systems fault, your generator may fail to start automatically when power is lost. We repair, reprogram and replace control panels across all major controller brands.',
    points: [
      'AMF and ATS controller diagnosis and repair',
      'DSE, ComAp, Deepsea and SmartGen controller support',
      'Relay, fuse and circuit board replacement',
      'Full auto-start and shutdown cycle testing',
    ],
  },
  {
    href: '/fuel-system-repairs',
    title: 'Fuel System Repairs',
    shortTitle: 'Fuel Systems',
    image: '/images/fuel-system-repairs.png',
    alt: 'Generator fuel system repair including injector cleaning and fuel pump replacement',
    badge: null,
    badgeColor: '',
    description:
      'Diesel degradation, water contamination, and blocked injectors are among the most common causes of generator failure in South Africa. Our fuel system service covers fuel polishing, injector cleaning and replacement, lift pump and injection pump repairs, and fuel tank cleaning to restore proper fuel delivery.',
    points: [
      'Fuel polishing and contamination removal',
      'Injector cleaning, testing and replacement',
      'Fuel lift pump and injection pump repairs',
      'Fuel tank inspection and internal cleaning',
    ],
  },
  {
    href: '/generator-rewinding',
    title: 'Generator Rewinding',
    shortTitle: 'Rewinding',
    image: '/images/generator-rewinding.png',
    alt: 'Generator alternator rewinding service at our Gauteng workshop',
    badge: 'Workshop Service',
    badgeColor: 'bg-[#1a1a1a] text-white border border-white/20',
    description:
      'When a generator alternator suffers winding failure — usually from insulation breakdown, overloading, or moisture ingress — rewinding is often the most cost-effective solution compared to replacing the entire alternator. Our workshop rewinds stators and rotors to factory specifications, with full testing before return.',
    points: [
      'Stator and rotor rewinding to OEM specifications',
      'Insulation resistance testing before and after rewind',
      'Suitable for all alternator brands and frame sizes',
      'Often 40–60% cheaper than full alternator replacement',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
        </div>
      </div>

      {/* ── Page hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_generator_repair_services.png"
            alt="Generator repair services across Gauteng"
            fill
            priority
            className="object-cover object-center opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-[#c8a84b] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            What We Do
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-3xl">
            Professional Generator Services Across Gauteng
          </h1>
          <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            From emergency repairs during loadshedding to long-term maintenance contracts,
            our certified technicians handle every aspect of generator care — all brands,
            all sizes, across all of Gauteng.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0603160484"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#b91c1c] text-white font-bold text-base hover:bg-red-800 transition-colors"
              aria-label="Call 060 316 0484"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call 060 316 0484
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-[#c8a84b]/50 text-[#c8a84b] font-semibold text-base hover:bg-[#c8a84b] hover:text-[#0a0a0a] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick-nav chips ── */}
      <section className="bg-white border-b border-[#1a1a1a]/8 overflow-x-auto" aria-label="Jump to service">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex items-center gap-1 py-3 min-w-max">
            {services.map((s) => (
              <li key={s.href}>
                <a
                  href={`#${s.href.replace('/', '')}`}
                  className="inline-block px-3.5 py-1.5 text-[12px] font-medium text-[#1a1a1a]/70 hover:text-[#c8a84b] hover:bg-[#f5f4f0] transition-colors rounded-sm whitespace-nowrap border border-transparent hover:border-[#c8a84b]/20"
                >
                  {s.shortTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Service entries ── */}
      <div>
        {services.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <section
              key={service.href}
              id={service.href.replace('/', '')}
              className={`py-16 md:py-20 ${isEven ? 'bg-[#f5f4f0]' : 'bg-white'}`}
              aria-labelledby={`service-${index}`}
            >
              <div className="max-w-6xl mx-auto px-6">
                <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}>

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gold corner accent */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c8a84b]" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c8a84b]" />
                    {/* Badge */}
                    {service.badge && (
                      <div className={`absolute top-4 right-4 px-3 py-1 text-[11px] font-bold tracking-wider uppercase ${service.badgeColor}`}>
                        {service.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h2 id={`service-${index}`} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4 leading-tight">
                      <Link href={service.href} className="hover:text-[#c8a84b] transition-colors">
                        {service.title}
                      </Link>
                    </h2>
                    <div className="w-10 h-0.5 bg-[#c8a84b] mb-5" />
                    <p className="text-base md:text-lg leading-relaxed text-[#1a1a1a]/70 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-[#1a1a1a]/75">
                          <span className="mt-1 w-4 h-4 shrink-0 flex items-center justify-center">
                            {/* Gold checkmark */}
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <circle cx="7" cy="7" r="6.5" stroke="#c8a84b" strokeWidth="1"/>
                              <path d="M4 7l2 2 4-4" stroke="#c8a84b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#1a1a1a] text-white font-semibold text-sm hover:bg-[#c8a84b] hover:text-[#0a0a0a] transition-colors"
                      >
                        Learn more
                      </Link>
                      <a
                        href="tel:0603160484"
                        className="inline-flex items-center justify-center px-6 py-3 border border-[#1a1a1a]/20 text-[#1a1a1a] font-semibold text-sm hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
                      >
                        Book this service
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* ── Internal linking — related pages ── */}
      <section className="py-14 bg-[#f5f4f0] border-t border-[#1a1a1a]/8" aria-labelledby="related-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="related-heading" className="text-xl font-bold text-[#1a1a1a] mb-6">
            Explore More
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/areas', label: 'Service Areas', sub: 'All Gauteng locations' },
              { href: '/generator-repair-cost', label: 'Repair Costs', sub: 'Honest pricing guide' },
              { href: '/faq', label: 'FAQ', sub: 'Common questions answered' },
              { href: '/contact', label: 'Get a Quote', sub: 'Free assessment' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-4 bg-white border border-[#1a1a1a]/8 hover:border-[#c8a84b]/40 transition-colors"
              >
                <p className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#c8a84b] transition-colors mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-[#1a1a1a]/50">{item.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emergency CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Emergency callout CTA">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Need Generator Service Today?
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Emergency or planned, we cover all of Gauteng. Call now for a same-day
                callout or to schedule a service appointment at a time that suits you.
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
