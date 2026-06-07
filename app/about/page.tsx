import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'About Us | Generator Repair Services Gauteng — 15+ Years Experience',
  description:
    "Gauteng's most trusted generator repair specialists since 2009. Factory-certified technicians, same-day emergency response, transparent pricing and a workmanship guarantee. Serving Johannesburg, Pretoria, Sandton & all of Gauteng.",
  keywords: [
    'about generator repair services Gauteng',
    'generator technicians Johannesburg',
    'certified generator repair specialists',
    'trusted generator service Gauteng',
    'generator repair company Johannesburg',
    'professional generator maintenance Gauteng',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/about',
  },
  openGraph: {
    title: 'About Generator Repair Services | Gauteng\'s Trusted Specialists',
    description: '15+ years repairing generators across Gauteng. Certified technicians, same-day callouts, workmanship guarantee. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/about',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://www.generatorrepairservices.co.za/about',
  name: 'About Generator Repair Services',
  url: 'https://www.generatorrepairservices.co.za/about',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.generatorrepairservices.co.za/#business',
    name: 'Generator Repair Services',
    foundingDate: '2009',
    description: 'Professional generator repair, servicing and maintenance across Gauteng.',
    telephone: '+27603160484',
    email: 'info@generatorrepairservices.co.za',
    url: 'https://www.generatorrepairservices.co.za',
    areaServed: { '@type': 'State', name: 'Gauteng' },
  },
}

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '18', label: 'Gauteng Areas Covered' },
  { value: '2–4hr', label: 'Emergency Response' },
  { value: '100%', label: 'Workmanship Guaranteed' },
]

const pillars = [
  {
    heading: '15+ Years Experience',
    body: 'Decades of hands-on work across every generator brand and size in South Africa — from small residential petrol units to large industrial diesel standby systems.',
  },
  {
    heading: 'Same-Day Emergency Response',
    body: 'When your generator fails during loadshedding, we mobilise fast. Most Gauteng callouts receive an on-site technician within 2–4 hours of your call.',
  },
  {
    heading: 'Transparent Pricing',
    body: 'You receive a clear written quote before a single bolt is turned. No hidden fees, no surprise call-out charges — just honest pricing every time.',
  },
  {
    heading: 'Workmanship Guarantee',
    body: 'Every repair we carry out is backed by a workmanship guarantee. If something we fixed fails again, we return and resolve it — no arguments, no charge.',
  },
  {
    heading: 'Factory-Certified Technicians',
    body: 'Our team holds certifications across Cummins, Perkins, Caterpillar, Deutz, Volvo, FG Wilson and more. Your equipment is always in qualified hands.',
  },
  {
    heading: 'Mobile Workshop Fleet',
    body: 'Our vehicles are stocked with diagnostic tools and common failure parts. Most repairs are completed on-site on the first visit — no towing, no delays.',
  },
]

const expertise = [
  'Complete generator repairs and rebuilds',
  'Preventive maintenance and scheduled servicing',
  'Emergency breakdown callouts',
  'AVR and control panel diagnostics',
  'Alternator testing and rewinding',
  'Fuel system repairs and cleaning',
  'Load bank testing and certification',
  'New generator installation and commissioning',
]

const brands = [
  'Cummins', 'Caterpillar', 'Perkins', 'FG Wilson',
  'Deutz', 'Volvo', 'John Deere', 'SDMO',
  'Kipor', 'Honda', 'Yamaha', 'Atlas Copco',
]

const areas = [
  { slug: 'johannesburg', name: 'Johannesburg' },
  { slug: 'pretoria', name: 'Pretoria' },
  { slug: 'sandton', name: 'Sandton' },
  { slug: 'midrand', name: 'Midrand' },
  { slug: 'centurion', name: 'Centurion' },
  { slug: 'randburg', name: 'Randburg' },
  { slug: 'roodepoort', name: 'Roodepoort' },
  { slug: 'kempton-park', name: 'Kempton Park' },
  { slug: 'boksburg', name: 'Boksburg' },
  { slug: 'benoni', name: 'Benoni' },
  { slug: 'germiston', name: 'Germiston' },
  { slug: 'alberton', name: 'Alberton' },
  { slug: 'edenvale', name: 'Edenvale' },
  { slug: 'krugersdorp', name: 'Krugersdorp' },
  { slug: 'springs', name: 'Springs' },
  { slug: 'soweto', name: 'Soweto' },
  { slug: 'fourways', name: 'Fourways' },
  { slug: 'vereeniging', name: 'Vereeniging' },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
        </div>
      </div>

      {/* ── Page hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_generator_repair_services.png"
            alt="Generator Repair Services team working on industrial generators across Gauteng"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/55" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-[#c8a84b] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-3xl">
            Gauteng&apos;s Trusted Generator Repair Specialists
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            Founded in 2009, Generator Repair Services has spent 15+ years building a
            reputation for fast, honest and expert generator repair and maintenance across
            all of Gauteng province.
          </p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-[#111111] border-b border-[#c8a84b]/15" aria-label="Company statistics">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/[0.07]">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center md:px-8">
                <dt className="text-3xl md:text-4xl font-black text-[#c8a84b] mb-1">{s.value}</dt>
                <dd className="text-white/45 text-xs font-medium uppercase tracking-wider">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Our story ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="story-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-[#c8a84b] text-xs font-bold tracking-[0.35em] uppercase mb-4">Our Story</p>
              <h2 id="story-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                Built on Trust,<br />Driven by Expertise
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-6" />
              <div className="space-y-4 text-[#1a1a1a]/70 text-base leading-relaxed">
                <p>
                  Generator Repair Services was founded in 2009 with a straightforward
                  mission: give Gauteng businesses and homeowners a generator repair
                  partner they could genuinely rely on — not one that kept them waiting,
                  overcharged them, or sent unqualified technicians.
                </p>
                <p>
                  Over 15 years, our team has grown from a handful of technicians to a
                  Gauteng-wide mobile service fleet, serving thousands of clients across
                  the province. We have repaired generators on game farms, in data centres,
                  at hospitals, on construction sites and in suburban homes — every
                  environment, every brand, every size.
                </p>
                <p>
                  What has not changed is the commitment to arriving prepared, diagnosing
                  accurately, quoting honestly, and fixing it right the first time.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src="/images/generator-repair-technician.png"
                alt="Generator Repair Services certified technician working on a diesel generator in Gauteng"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c8a84b]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c8a84b]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why choose us — 6 pillars ── */}
      <section className="py-16 md:py-24 bg-[#f5f4f0]" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#c8a84b] text-xs font-bold tracking-[0.35em] uppercase mb-4">Why Choose Us</p>
          <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 max-w-xl leading-tight">
            What Sets Us Apart
          </h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]/8">
            {pillars.map((p) => (
              <div key={p.heading} className="bg-white p-7 md:p-8">
                <div className="w-8 h-[2px] bg-[#c8a84b] mb-5" />
                <dt className="font-bold text-[#1a1a1a] text-base mb-3">{p.heading}</dt>
                <dd className="text-[#1a1a1a]/60 text-sm leading-relaxed">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Expertise + brands ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="expertise-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Expertise list */}
            <div>
              <p className="text-[#c8a84b] text-xs font-bold tracking-[0.35em] uppercase mb-4">What We Do</p>
              <h2 id="expertise-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                Our Areas of Expertise
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-7" />
              <p className="text-[#1a1a1a]/65 text-base leading-relaxed mb-7">
                Our technicians are factory-trained and certified across all major brands.
                We handle every aspect of generator care in-house — no subcontracting,
                no outsourcing critical work.
              </p>
              <ul className="space-y-3">
                {expertise.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1a1a1a]/75">
                    <span className="mt-0.5 shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="7.5" stroke="#c8a84b" strokeWidth="1"/>
                        <path d="M5 8l2 2 4-4" stroke="#c8a84b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Brands */}
            <div>
              <p className="text-[#c8a84b] text-xs font-bold tracking-[0.35em] uppercase mb-4">Brands We Service</p>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                All Major Generator Brands
              </h3>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-7" />
              <p className="text-[#1a1a1a]/65 text-sm leading-relaxed mb-7">
                Whether your generator is a small residential Honda or a large industrial
                Cummins, our technicians have the training and tooling to service it correctly.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {brands.map((brand) => (
                  <div
                    key={brand}
                    className="px-3 py-3 bg-[#f5f4f0] border border-[#1a1a1a]/8 text-center text-sm font-semibold text-[#1a1a1a]/70"
                  >
                    {brand}
                  </div>
                ))}
              </div>

              {/* Image below brands */}
              <div className="relative aspect-[16/9] mt-8 overflow-hidden group">
                <Image
                  src="/images/generator-repairs.png"
                  alt="Certified generator repair workshop servicing all major brands in Gauteng"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-[#c8a84b]" />
                <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-[#c8a84b]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas ── */}
      <section className="py-14 bg-[#f5f4f0] border-t border-[#1a1a1a]/8" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="areas-heading" className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3">
            Areas We Serve
          </h2>
          <p className="text-[#1a1a1a]/55 text-base mb-8 max-w-2xl">
            We provide generator repair services throughout Gauteng province. Our mobile
            technicians travel to your site — no drop-off required.
          </p>
          <nav aria-label="Service areas">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/generator-repairs-${area.slug}`}
                    className="group flex items-center justify-between px-4 py-3 bg-white border border-[#1a1a1a]/10 hover:border-[#c8a84b] transition-colors"
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
          <div className="mt-6">
            <Link href="/areas" className="text-sm font-semibold tracking-wide uppercase text-[#c8a84b] hover:text-[#1a1a1a] transition-colors">
              View full service area information
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Contact Generator Repair Services">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Ready to Get Your Generator Fixed?
              </h2>
              <p className="text-white/55 text-base leading-relaxed">
                Contact us for a free assessment and quote. Emergency callouts available
                across all of Gauteng — call now and we will get a technician to you today.
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
