import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Generator Repair Service Areas Gauteng | All Towns & Suburbs',
  description:
    'Generator repairs and servicing across all of Gauteng — Johannesburg, Pretoria, Sandton, Midrand, Centurion, East Rand, West Rand & more. Mobile technicians come to you. Call 060 316 0484.',
  keywords: [
    'generator repairs Gauteng',
    'generator repair near me Gauteng',
    'generator repairs Johannesburg',
    'generator repairs Pretoria',
    'generator repairs Sandton',
    'generator repairs Midrand',
    'generator repairs Centurion',
    'generator repairs East Rand',
    'generator repairs West Rand',
    'generator service areas Gauteng',
    'mobile generator repair Gauteng',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/areas',
  },
  openGraph: {
    title: 'Generator Repair Service Areas Gauteng | All Towns & Suburbs',
    description:
      'Mobile generator repair technicians covering all of Gauteng. Same-day emergency callouts. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/areas',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Generator Repair Services — Gauteng service areas' }],
  },
}

const areaSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.generatorrepairservices.co.za/#business',
  name: 'Generator Repair Services',
  telephone: '+27603160484',
  url: 'https://www.generatorrepairservices.co.za',
  areaServed: [
    'Johannesburg', 'Pretoria', 'Sandton', 'Midrand', 'Centurion',
    'Randburg', 'Roodepoort', 'Kempton Park', 'Boksburg', 'Benoni',
    'Germiston', 'Alberton', 'Edenvale', 'Krugersdorp', 'Springs',
    'Soweto', 'Fourways', 'Vereeniging',
  ].map((name) => ({ '@type': 'City', name, containedInPlace: { '@type': 'State', name: 'Gauteng' } })),
}

// Areas grouped by region for better UX and semantic SEO
const regions = [
  {
    name: 'Johannesburg & CBD',
    description: 'The economic heart of South Africa. We serve all Johannesburg suburbs, business districts and industrial zones.',
    image: '/images/areas/johannesburg.png',
    imageAlt: 'Generator repairs in Johannesburg CBD and surrounding suburbs',
    areas: [
      { slug: 'johannesburg', name: 'Johannesburg' },
      { slug: 'soweto', name: 'Soweto' },
      { slug: 'randburg', name: 'Randburg' },
      { slug: 'roodepoort', name: 'Roodepoort' },
      { slug: 'krugersdorp', name: 'Krugersdorp' },
      { slug: 'fourways', name: 'Fourways' },
    ],
  },
  {
    name: 'Pretoria & North',
    description: 'Full coverage across Pretoria and the northern Gauteng corridor — from Centurion to Midrand.',
    image: '/images/areas/pretoria.png',
    imageAlt: 'Generator repair services in Pretoria and northern Gauteng',
    areas: [
      { slug: 'pretoria', name: 'Pretoria' },
      { slug: 'centurion', name: 'Centurion' },
      { slug: 'midrand', name: 'Midrand' },
      { slug: 'sandton', name: 'Sandton' },
    ],
  },
  {
    name: 'East Rand',
    description: 'Serving the industrial and residential areas of the East Rand — from Kempton Park through to Springs.',
    image: '/images/areas/east-rand.png',
    imageAlt: 'Generator repairs across the East Rand including Boksburg, Benoni and Germiston',
    areas: [
      { slug: 'kempton-park', name: 'Kempton Park' },
      { slug: 'boksburg', name: 'Boksburg' },
      { slug: 'benoni', name: 'Benoni' },
      { slug: 'germiston', name: 'Germiston' },
      { slug: 'alberton', name: 'Alberton' },
      { slug: 'edenvale', name: 'Edenvale' },
      { slug: 'springs', name: 'Springs' },
    ],
  },
  {
    name: 'South Gauteng',
    description: 'Coverage across the Vaal Triangle and southern Gauteng industrial corridor.',
    image: '/images/areas/vereeniging.png',
    imageAlt: 'Generator repair services in Vereeniging and south Gauteng',
    areas: [
      { slug: 'vereeniging', name: 'Vereeniging' },
    ],
  },
]

// Flat list for the full A–Z grid
const allAreas = [
  { slug: 'alberton', name: 'Alberton' },
  { slug: 'benoni', name: 'Benoni' },
  { slug: 'boksburg', name: 'Boksburg' },
  { slug: 'centurion', name: 'Centurion' },
  { slug: 'edenvale', name: 'Edenvale' },
  { slug: 'fourways', name: 'Fourways' },
  { slug: 'germiston', name: 'Germiston' },
  { slug: 'johannesburg', name: 'Johannesburg' },
  { slug: 'kempton-park', name: 'Kempton Park' },
  { slug: 'krugersdorp', name: 'Krugersdorp' },
  { slug: 'midrand', name: 'Midrand' },
  { slug: 'pretoria', name: 'Pretoria' },
  { slug: 'randburg', name: 'Randburg' },
  { slug: 'roodepoort', name: 'Roodepoort' },
  { slug: 'sandton', name: 'Sandton' },
  { slug: 'soweto', name: 'Soweto' },
  { slug: 'springs', name: 'Springs' },
  { slug: 'vereeniging', name: 'Vereeniging' },
]

const whyPoints = [
  {
    heading: 'Mobile Workshop, No Drop-Off',
    body: 'Our technicians come to your site fully equipped. Most repairs are completed on-site on the first visit — no towing, no waiting.',
  },
  {
    heading: 'Same-Day Emergency Response',
    body: 'When your generator fails, we mobilise fast. Most Gauteng callouts receive a technician within 2–4 hours.',
  },
  {
    heading: 'All Gauteng Areas Covered',
    body: 'From Sandton office parks to Vereeniging farms and everything in between — if you are in Gauteng, we can reach you.',
  },
  {
    heading: 'All Generator Brands & Sizes',
    body: 'Cummins, Perkins, Caterpillar, Deutz, Volvo, John Deere — diesel, petrol and gas, residential to industrial.',
  },
]

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Areas' }]} />
        </div>
      </div>

      {/* ── Page hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_generator_repair_services.png"
            alt="Generator repair services covering all of Gauteng province"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-[#c8a84b] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Where We Work
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-3xl">
            Generator Repairs Across All of Gauteng
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Our mobile technicians cover every part of Gauteng province — Johannesburg,
            Pretoria, the East Rand, West Rand and south through to Vereeniging. We come
            to you, fully equipped to repair on-site.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0603160484"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#b91c1c] text-white font-bold text-base hover:bg-red-800 transition-colors"
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

      {/* ── Why we cover Gauteng — 4 pillars ── */}
      <section className="bg-white border-b border-[#1a1a1a]/8" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8">
            Why Choose a Mobile Generator Service?
          </h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((p) => (
              <div key={p.heading} className="border-l-2 border-[#c8a84b] pl-4">
                <dt className="font-bold text-[#1a1a1a] text-sm mb-2">{p.heading}</dt>
                <dd className="text-[#1a1a1a]/60 text-sm leading-relaxed">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Regions with images ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="regions-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="regions-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3">
            Gauteng Service Regions
          </h2>
          <p className="text-[#1a1a1a]/60 text-lg mb-12 max-w-2xl">
            We group our coverage into four regions. Click any area to see dedicated
            service information for that location.
          </p>

          <div className="space-y-12">
            {regions.map((region, index) => {
              const isEven = index % 2 === 0
              return (
                <article
                  key={region.name}
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden group">
                    <Image
                      src={region.image}
                      alt={region.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-[#c8a84b]" />
                    <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-[#c8a84b]" />
                    {/* Region label overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent px-5 py-4">
                      <p className="text-white font-black text-lg leading-tight">{region.name}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 md:px-8 py-8 md:py-6">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-2">
                      {region.name}
                    </h3>
                    <div className="w-8 h-0.5 bg-[#c8a84b] mb-4" />
                    <p className="text-[#1a1a1a]/65 text-base leading-relaxed mb-6">
                      {region.description}
                    </p>
                    <nav aria-label={`Areas in ${region.name}`}>
                      <ul className="flex flex-wrap gap-2">
                        {region.areas.map((area) => (
                          <li key={area.slug}>
                            <Link
                              href={`/generator-repairs-${area.slug}`}
                              className="inline-block px-4 py-2 bg-[#f5f4f0] border border-[#1a1a1a]/10 text-[#1a1a1a] text-sm font-medium hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
                            >
                              {area.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Full A–Z area directory ── */}
      <section className="py-14 md:py-18 bg-white" aria-labelledby="directory-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="directory-heading" className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3">
            Full Area Directory
          </h2>
          <p className="text-[#1a1a1a]/55 text-base mb-8">
            Generator repair and servicing available in all the following Gauteng locations.
          </p>
          <nav aria-label="Full list of service areas">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {allAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/generator-repairs-${area.slug}`}
                    className="group flex items-center justify-between px-4 py-3 border border-[#1a1a1a]/10 bg-[#f5f4f0] hover:border-[#c8a84b] hover:bg-white transition-colors"
                  >
                    <span className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#c8a84b] transition-colors">
                      {area.name}
                    </span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-[#c8a84b] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                      <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* ── Services available in all areas ── */}
      <section className="py-14 bg-[#f5f4f0] border-t border-[#1a1a1a]/8" aria-labelledby="services-all-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="services-all-heading" className="text-2xl font-bold text-[#1a1a1a] mb-3">
            Services Available Across All Gauteng Areas
          </h2>
          <p className="text-[#1a1a1a]/60 text-base mb-8 max-w-2xl">
            Wherever you are in Gauteng, all of the following services are available to you.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { href: '/generator-repairs', label: 'Generator Repairs' },
              { href: '/generator-servicing', label: 'Generator Servicing' },
              { href: '/generator-maintenance', label: 'Maintenance Plans' },
              { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
              { href: '/generator-installation', label: 'Generator Installation' },
              { href: '/load-bank-testing', label: 'Load Bank Testing' },
              { href: '/avr-repairs', label: 'AVR Repairs' },
              { href: '/control-panel-repairs', label: 'Control Panel Repairs' },
              { href: '/fuel-system-repairs', label: 'Fuel System Repairs' },
              { href: '/generator-rewinding', label: 'Generator Rewinding' },
            ].map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="block px-4 py-3 bg-white border border-[#1a1a1a]/10 text-sm font-medium text-[#1a1a1a] hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Emergency CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Emergency generator repair callout">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Need Generator Service in Gauteng?
              </h2>
              <p className="text-white/55 text-base leading-relaxed">
                Emergency or planned, we cover all of Gauteng. Call now for a same-day
                callout or to schedule a service visit at your location.
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
