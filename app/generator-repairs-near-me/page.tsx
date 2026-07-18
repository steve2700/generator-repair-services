import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Generator Repairs Near Me | Gauteng — Same-Day Mobile Service',
  description:
    'Looking for generator repairs near you in Gauteng? Our mobile technicians come to your location — Johannesburg, Pretoria, Sandton, Centurion & all Gauteng areas. Same-day emergency callouts. Call 060 316 0484.',
  keywords: [
    'generator repairs near me',
    'generator repair near me Gauteng',
    'generator repair near me Johannesburg',
    'fix generator near me',
    'generator service near me',
    'generator technician near me Gauteng',
    'mobile generator repair Gauteng',
    'generator repair near me Pretoria',
    'generator repairs near me same day',
    'genset repair near me Gauteng',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-near-me',
  },
  openGraph: {
    title: 'Generator Repairs Near Me | Gauteng — Same-Day Mobile Service',
    description:
      'Mobile generator repair technicians covering all of Gauteng. We come to you — same-day emergency callouts. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/generator-repairs-near-me',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Generator Repairs Near Me — Gauteng Mobile Service' }],
  },
}

const nearMeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.generatorrepairservices.co.za/#business',
      name: 'Generator Repair Services',
      description:
        'Mobile generator repair technicians serving all of Gauteng. Same-day emergency callouts — we come to your location.',
      url: 'https://www.generatorrepairservices.co.za',
      telephone: '+27603160484',
      email: 'info@generatorrepairservices.co.za',
      areaServed: [
        'Johannesburg', 'Pretoria', 'Sandton', 'Midrand', 'Centurion',
        'Randburg', 'Roodepoort', 'Kempton Park', 'Boksburg', 'Benoni',
        'Germiston', 'Alberton', 'Edenvale', 'Krugersdorp', 'Springs',
        'Soweto', 'Fourways', 'Vereeniging',
      ].map((name) => ({ '@type': 'City', name, containedInPlace: { '@type': 'State', name: 'Gauteng' } })),
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.generatorrepairservices.co.za/generator-repairs-near-me',
      name: 'Generator Repairs Near Me — Gauteng Mobile Service',
      description: 'Find generator repairs near you anywhere in Gauteng. Mobile technicians come to your location.',
      url: 'https://www.generatorrepairservices.co.za/generator-repairs-near-me',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.generatorrepairservices.co.za' },
          { '@type': 'ListItem', position: 2, name: 'Generator Repairs Near Me' },
        ],
      },
    },
  ],
}

const allAreas = [
  { name: 'Johannesburg', slug: 'johannesburg' },
  { name: 'Pretoria', slug: 'pretoria' },
  { name: 'Sandton', slug: 'sandton' },
  { name: 'Midrand', slug: 'midrand' },
  { name: 'Centurion', slug: 'centurion' },
  { name: 'Randburg', slug: 'randburg' },
  { name: 'Roodepoort', slug: 'roodepoort' },
  { name: 'Kempton Park', slug: 'kempton-park' },
  { name: 'Boksburg', slug: 'boksburg' },
  { name: 'Benoni', slug: 'benoni' },
  { name: 'Germiston', slug: 'germiston' },
  { name: 'Alberton', slug: 'alberton' },
  { name: 'Edenvale', slug: 'edenvale' },
  { name: 'Krugersdorp', slug: 'krugersdorp' },
  { name: 'Springs', slug: 'springs' },
  { name: 'Soweto', slug: 'soweto' },
  { name: 'Fourways', slug: 'fourways' },
  { name: 'Vereeniging', slug: 'vereeniging' },
]

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'All faults, all brands' },
  { href: '/generator-servicing', label: 'Generator Servicing', desc: 'Full inspection & service' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts', desc: 'Same-day response' },
  { href: '/generator-maintenance', label: 'Maintenance Plans', desc: 'Scheduled service contracts' },
  { href: '/generator-installation', label: 'Generator Installation', desc: 'Setup & commissioning' },
  { href: '/avr-repairs', label: 'AVR Repairs', desc: 'Stable voltage output' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs', desc: 'Controllers & relays' },
  { href: '/fuel-system-repairs', label: 'Fuel System Repairs', desc: 'Injectors & pumps' },
  { href: '/load-bank-testing', label: 'Load Bank Testing', desc: 'Capacity verification' },
  { href: '/generator-rewinding', label: 'Generator Rewinding', desc: 'Alternator rewinding' },
]

const howItWorks = [
  {
    num: '01',
    title: 'Call or message us',
    body: 'Call 060 316 0484 or send a WhatsApp. Tell us your location in Gauteng and describe the fault. We will confirm availability and give you an estimated arrival time.',
  },
  {
    num: '02',
    title: 'We dispatch to your location',
    body: 'A mobile technician is dispatched to your site fully equipped with diagnostic tools and a comprehensive stock of common parts. No assessment visit — we arrive ready to work.',
  },
  {
    num: '03',
    title: 'On-site diagnosis & quote',
    body: 'We diagnose the fault on-site and give you a clear written quote before touching the generator. You approve it, we fix it — right there, right then in most cases.',
  },
  {
    num: '04',
    title: 'Repair completed, guaranteed',
    body: 'Most faults are resolved on the first visit. All work is backed by our 3-month workmanship guarantee. If something we fixed fails again, we come back — no charge.',
  },
]

export default function GeneratorRepairsNearMePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nearMeSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-black/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Generator Repairs Near Me' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_generator_repair_services.png"
            alt="Mobile generator repair technician coming to your location in Gauteng"
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
              Mobile Generator Repair · Gauteng
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Generator Repairs Near You.<br />
            <span className="text-[#c8a84b]">We Come to Your Location.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Wherever you are in Gauteng — we send a mobile technician directly to your
            site. No drop-off, no towing. Most generator repairs are completed on-site,
            on the first visit, the same day you call.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {[
              'All Gauteng areas covered',
              'Same-day emergency callouts',
              'No drop-off — we come to you',
              'All brands & all generator sizes',
            ].map((t) => (
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
              aria-label="Call Generator Repair Services on 060 316 0484"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call 060 316 0484
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#c8a84b]/40 text-[#c8a84b] font-semibold text-base hover:bg-[#c8a84b] hover:text-[#0a0a0a] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="how-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">
              How It Works
            </p>
            <h2 id="how-heading" className="text-2xl md:text-3xl font-black text-[#1a1a1a] leading-tight">
              From Your Call to a Fixed Generator — Here&apos;s What Happens
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.08]">
            {howItWorks.map((step) => (
              <div key={step.num} className="bg-white p-6 md:p-7 group hover:bg-[#0a0a0a] transition-colors duration-300">
                <span className="text-[#c8a84b]/25 font-black text-3xl leading-none block mb-4 group-hover:text-[#c8a84b]/50 transition-colors">
                  {step.num}
                </span>
                <h3 className="font-bold text-[#1a1a1a] text-sm mb-2 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#1a1a1a]/55 leading-relaxed group-hover:text-white/50 transition-colors">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body copy + services */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_340px] gap-12 lg:gap-20 items-start">

            {/* Left: copy */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">
                Why Choose Us
              </p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-5 leading-tight">
                The Generator Repair Company That Actually Comes to You
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-7" />

              <div className="space-y-5 text-base leading-relaxed text-[#1a1a1a]/70">
                <p>
                  When you search for &ldquo;generator repairs near me&rdquo; in Gauteng, you need more
                  than a company with a Gauteng address — you need technicians who will
                  actually get in a vehicle and come to your property today. That is exactly
                  what Generator Repair Services does. Our mobile workshop fleet is deployed
                  across Gauteng, and our technicians travel to your home, office, farm or
                  industrial site — fully equipped to diagnose and repair on the first visit.
                </p>
                <p>
                  We cover all 18 major Gauteng areas and their surrounding suburbs.
                  Whether you are in Sandton, Boksburg, Vereeniging or Krugersdorp — if you
                  are in Gauteng, we can reach you. For emergency callouts, most areas receive
                  a technician within 2–4 hours of your call. For planned service, we book
                  a time that suits you.
                </p>
                <p>
                  Our vehicles carry diagnostic equipment and a comprehensive stock of common
                  parts — oil, filters, batteries, AVRs, belts, fuses, relays and more. This
                  means that in the large majority of cases, we do not just diagnose on the
                  first visit and come back to repair. We diagnose, quote and fix in one
                  appointment. Your generator is back online before we leave.
                </p>
                <p>
                  All repairs are backed by our 3-month workmanship guarantee regardless of
                  where in Gauteng the work was carried out. We do not charge more because
                  you are in a less central area. Our pricing is consistent and our quotes
                  are written and agreed before we start.
                </p>
              </div>

              {/* Brands */}
              <div className="mt-8 p-6 bg-[#f5f4f0] border-l-2 border-[#c8a84b]">
                <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">
                  Generator Brands We Service
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Cummins', 'Perkins', 'Caterpillar', 'Deutz', 'Volvo', 'John Deere', 'FG Wilson', 'SDMO', 'Kipor', 'Honda', 'Yamaha', 'Atlas Copco'].map((brand) => (
                    <span key={brand} className="px-3 py-1.5 bg-white border border-black/[0.08] text-[#1a1a1a]/65 text-xs font-medium">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: services list */}
            <div className="lg:sticky lg:top-24">
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">
                Services Available Near You
              </p>
              {services.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between gap-4 py-4 group transition-colors ${
                    i < services.length - 1 ? 'border-b border-black/[0.08]' : ''
                  }`}
                >
                  <div>
                    <p className="font-bold text-[#1a1a1a] text-sm group-hover:text-[#c8a84b] transition-colors">
                      {item.label}
                    </p>
                    <p className="text-xs text-[#1a1a1a]/45 mt-0.5">{item.desc}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#c8a84b]/40 group-hover:text-[#c8a84b] transition-colors" aria-hidden="true">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}

              {/* Inline CTA */}
              <div className="mt-6 p-5 bg-[#0a0a0a]">
                <p className="text-white font-bold text-sm mb-1">Generator problem near you?</p>
                <p className="text-white/45 text-xs mb-4">Call now — we dispatch to your location today.</p>
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

      {/* All areas grid */}
      <section className="py-14 md:py-18 bg-[#f5f4f0]" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="areas-heading" className="text-2xl font-black text-[#1a1a1a] mb-3">
            Find Generator Repairs Near You — All Gauteng Areas
          </h2>
          <p className="text-[#1a1a1a]/55 text-base mb-8 max-w-2xl leading-relaxed">
            Select your area below to see dedicated service information, local suburbs covered
            and the specific services available at your location.
          </p>
          <nav aria-label="Generator repair service areas near you">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {allAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/generator-repairs-${area.slug}`}
                    className="group flex items-center justify-between px-4 py-3 bg-white border border-black/[0.08] hover:border-[#c8a84b]/50 transition-colors"
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

      {/* Emergency CTA */}
      <section className="relative bg-[#b91c1c] text-white overflow-hidden" aria-label="Emergency callout">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '8px 8px' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-white/60 text-[11px] font-bold tracking-[0.35em] uppercase mb-3">
                Emergency Service
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                Generator Broken Near You?<br />We Respond Fast.
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Same-day emergency callouts across all of Gauteng. Most areas receive a
                technician within 2–4 hours — stocked vehicle, ready to repair on arrival.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="tel:0603160484"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#b91c1c] font-black text-2xl hover:bg-[#f5f4f0] transition-colors"
                aria-label="Call our emergency line: 060 316 0484"
              >
                060 316 0484
              </a>
              <a
                href="https://wa.me/27603160484?text=Hi%2C%20I%20need%20generator%20repairs%20near%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-semibold hover:border-white hover:bg-white/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related internal links */}
      <section className="py-12 bg-[#0a0a0a]" aria-label="Related pages">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase mb-5">Related</p>
          <nav aria-label="Related generator repair pages">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { href: '/areas', label: 'All Service Areas' },
                { href: '/services', label: 'All Services' },
                { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
                { href: '/generator-repair-cost', label: 'Repair Cost Guide' },
                { href: '/generator-maintenance', label: 'Maintenance Plans' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
                { href: '/faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/30 hover:text-[#c8a84b] text-xs transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
