import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQSchema from '@/components/faq-schema'

export const metadata: Metadata = {
  title: 'Generator Repair Services Gauteng | Expert Repairs, Servicing & Maintenance',
  description:
    'Gauteng\'s trusted generator repair specialists. Same-day emergency callouts, all brands, diesel & petrol. Serving Johannesburg, Pretoria, Sandton, Centurion & all Gauteng areas. Call 060 316 0484.',
  keywords: [
    'generator repair Gauteng',
    'generator repairs Johannesburg',
    'generator servicing Pretoria',
    'emergency generator repair',
    'diesel generator repairs',
    'generator maintenance Gauteng',
    'generator not working Johannesburg',
    'generator repair near me',
    'industrial generator repairs Gauteng',
    'generator repairs Sandton',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.generatorrepairservices.co.za',
    siteName: 'Generator Repair Services',
    title: 'Generator Repair Services Gauteng | Expert Repairs & Servicing',
    description:
      'Gauteng\'s trusted generator repair specialists. Same-day emergency callouts, all brands, diesel & petrol. Call 060 316 0484.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Generator Repair Services Gauteng — Power When You Need It, Fixed Right, The First Time',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generator Repair Services Gauteng | Expert Repairs & Servicing',
    description:
      'Same-day emergency callouts. All brands. Diesel & petrol generators. Serving all of Gauteng. Call 060 316 0484.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/generator-maintenance', label: 'Generator Maintenance' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-installation', label: 'Generator Installation' },
  { href: '/load-bank-testing', label: 'Load Testing' },
  { href: '/avr-repairs', label: 'AVR Repairs' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs' },
  { href: '/fuel-system-repairs', label: 'Fuel System Repairs' },
  { href: '/generator-rewinding', label: 'Generator Rewinding' },
]

const areas = [
  { name: 'Johannesburg', slug: 'johannesburg' },
  { name: 'Pretoria', slug: 'pretoria' },
  { name: 'Sandton', slug: 'sandton' },
  { name: 'Centurion', slug: 'centurion' },
  { name: 'Midrand', slug: 'midrand' },
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

// Trust pillars matching the OG image — text only, no Lucide icons
const trustPillars = [
  {
    heading: 'Expert Technicians',
    body: 'Skilled. Certified. Reliable.',
  },
  {
    heading: 'Fast Response',
    body: 'We get you back up and running.',
  },
  {
    heading: 'All Generator Brands',
    body: 'Diesel · Petrol · Gas',
  },
  {
    heading: 'Quality Repairs',
    body: 'Done right. Built to last.',
  },
  {
    heading: 'Reliable Service',
    body: 'Honest. Professional. Dependable.',
  },
]

const homepageFAQs = [
  {
    question: 'How quickly can you respond to an emergency generator breakdown?',
    answer:
      'We offer same-day emergency callouts across all of Gauteng. In most cases we can have a technician on-site within 2–4 hours of your call. For businesses and essential services, we prioritise response times to minimise downtime during loadshedding or power outages.',
  },
  {
    question: 'Do you service all generator brands and types?',
    answer:
      'Yes. Our technicians are trained across all major brands including Cummins, Perkins, Caterpillar, Deutz, Volvo, John Deere, and many others. We work with diesel generators, petrol generators and industrial standby systems of all sizes.',
  },
  {
    question: 'What areas in Gauteng do you cover?',
    answer:
      'We cover the entire Gauteng province — Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton Park, Boksburg, Benoni, Germiston, Alberton, Edenvale, Krugersdorp, Springs, Soweto, Fourways and Vereeniging.',
  },
]

// JSON-LD: LocalBusiness + WebSite + BreadcrumbList
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.generatorrepairservices.co.za/#business',
      name: 'Generator Repair Services',
      description:
        'Professional generator repair, servicing and maintenance across Gauteng. Emergency callouts available for all brands of diesel and petrol generators.',
      url: 'https://www.generatorrepairservices.co.za',
      telephone: '+27603160484',
      email: 'info@generatorrepairservices.co.za',
      foundingDate: '2010',
      priceRange: '$$',
      currenciesAccepted: 'ZAR',
      paymentAccepted: 'Cash, EFT',
      areaServed: {
        '@type': 'State',
        name: 'Gauteng',
        containsPlace: areas.map((a) => ({ '@type': 'City', name: a.name })),
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Generator Services',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.label },
        })),
      },
      sameAs: [],
      image: 'https://www.generatorrepairservices.co.za/og-image.jpg',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.generatorrepairservices.co.za/#website',
      url: 'https://www.generatorrepairservices.co.za',
      name: 'Generator Repair Services',
      publisher: { '@id': 'https://www.generatorrepairservices.co.za/#business' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate:
            'https://www.generatorrepairservices.co.za/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <FAQSchema faqs={homepageFAQs} />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-[#0d0d0d]"
        aria-label="Hero — Generator Repair Services Gauteng"
      >
        {/* Background: OG-style dark industrial photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-generator.png"
            alt="Professional technician servicing an industrial diesel generator"
            fill
            priority
            className="object-cover object-center opacity-40"
            sizes="100vw"
          />
          {/* Left-to-right gradient — content readable on left, photo visible on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/75 to-[#0d0d0d]/20" />
          {/* Subtle vignette bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 lg:py-36">
          {/* Hexagon logo mark — SVG inline, no external icon library */}
          <div className="mb-8 flex items-center gap-4">
            <svg
              width="56"
              height="64"
              viewBox="0 0 56 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
            >
              {/* Hexagon outline */}
              <path
                d="M28 2L54 17V47L28 62L2 47V17L28 2Z"
                stroke="#c8a84b"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Inner hexagon fill */}
              <path
                d="M28 8L50 21V43L28 56L6 43V21L28 8Z"
                fill="#c8a84b"
                fillOpacity="0.12"
              />
              {/* Lightning bolt */}
              <path
                d="M32 14L20 33H28L24 50L38 28H30L32 14Z"
                fill="#c8a84b"
              />
            </svg>
            <div>
              <span className="block text-[#c8a84b] text-xs font-semibold tracking-[0.25em] uppercase">
                Generator
              </span>
              <span className="block text-white text-sm font-bold tracking-[0.2em] uppercase leading-tight">
                Repair Services
              </span>
              {/* Gold rule beneath name — matches OG image */}
              <span className="block mt-1 w-full h-px bg-[#c8a84b] opacity-60" />
            </div>
          </div>

          {/* H1 — matches OG headline style */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] text-white max-w-3xl mb-2">
            Power When
            <br />
            You Need It.
          </h1>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#c8a84b] mb-8">
            Fixed Right.
            <br />
            The First Time.
          </p>

          <p className="text-base md:text-lg text-white/75 max-w-lg mb-10 leading-relaxed">
            Expert generator repair, maintenance and diagnostics across all of
            Gauteng. Diesel, petrol and industrial systems — all brands, all sizes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0603160484"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#b91c1c] text-white font-bold text-lg tracking-wide hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
              aria-label="Call Generator Repair Services on 060 316 0484"
            >
              +27 60 316 0484
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#c8a84b] text-[#c8a84b] font-bold text-lg hover:bg-[#c8a84b] hover:text-[#0d0d0d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c8a84b] focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST PILLARS (matches OG image bottom strip) ───────────────── */}
      <section
        className="bg-[#111111] border-t border-[#c8a84b]/20"
        aria-label="Why choose Generator Repair Services"
      >
        <div className="max-w-6xl mx-auto px-6 py-10">
          <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {trustPillars.map((pillar) => (
              <div key={pillar.heading} className="text-center">
                {/* Gold top accent rule */}
                <div className="w-8 h-0.5 bg-[#c8a84b] mx-auto mb-3" />
                <dt className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                  {pillar.heading}
                </dt>
                <dd className="text-white/50 text-xs leading-relaxed">{pillar.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#f5f4f0]" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-10"
          >
            Our Generator Services
          </h2>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-lg leading-relaxed text-[#1a1a1a]/75 mb-6">
                Generator Repair Services is Gauteng&apos;s go-to team for
                everything generator-related. From emergency repairs that get you
                back online within hours, to scheduled maintenance that extends the
                life of your equipment, our certified technicians cover every
                scenario. We work with residential units, commercial standby systems
                and large industrial generators across the province.
              </p>
              <p className="text-lg leading-relaxed text-[#1a1a1a]/75 mb-8">
                Our vehicles are stocked with common parts and diagnostic tools,
                which means we resolve most faults on the first visit. No call-out
                to assess, then another to fix — we arrive prepared and we get the
                job done.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {services.map((service) => (
                  <li key={service.href} className="border-b border-[#1a1a1a]/10 pb-2">
                    <Link
                      href={service.href}
                      className="text-[#1a1a1a] hover:text-[#c8a84b] transition-colors font-medium text-sm"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/generator-repair-technician.png"
                alt="Certified generator repair technician working on a diesel generator in Gauteng"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gold accent border */}
              <div className="absolute inset-0 border border-[#c8a84b]/30 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="why-us-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
            <div>
              <h2
                id="why-us-heading"
                className="text-3xl md:text-4xl font-bold text-[#1a1a1a] sticky top-8"
              >
                Why Gauteng
                <br />
                Businesses
                <br />
                Trust Us
              </h2>
              <div className="mt-6 w-12 h-1 bg-[#c8a84b]" />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">
                  Experience &amp; Certification
                </h3>
                <p className="text-base leading-relaxed text-[#1a1a1a]/70">
                  With over a decade in the generator repair industry, our
                  technicians have worked on virtually every make and model available
                  in South Africa. We hold certifications across major brands and
                  continuously train on new systems so that your equipment is always
                  in expert hands — not guesswork.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">
                  Response Time &amp; Emergency Availability
                </h3>
                <p className="text-base leading-relaxed text-[#1a1a1a]/70">
                  When your generator fails during loadshedding, waiting is not an
                  option. Our technicians are deployed across Gauteng so that most
                  callouts receive an on-site response within 2–4 hours. Same-day
                  service is standard, not a premium add-on.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">
                  Transparent Pricing &amp; Workmanship Guarantee
                </h3>
                <p className="text-base leading-relaxed text-[#1a1a1a]/70">
                  You will receive a clear written assessment before a single bolt is
                  turned. Our pricing is honest, our parts are quality-sourced, and
                  every repair is backed by a workmanship guarantee. If something we
                  fixed fails again, we come back and sort it out — no arguments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AREAS WE SERVE ──────────────────────────────────────────────── */}
      <section
        className="py-16 md:py-24 bg-[#f5f4f0]"
        aria-labelledby="areas-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="areas-heading"
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
          >
            Generator Repairs Across Gauteng
          </h2>
          <p className="text-lg leading-relaxed text-[#1a1a1a]/70 mb-10 max-w-3xl">
            From the corporate parks of Sandton and Midrand to the farms outside
            Vereeniging, we cover every part of Gauteng. Our mobile technicians
            travel to you — no drop-off required.
          </p>
          <nav aria-label="Service areas in Gauteng">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/generator-repairs-${area.slug}`}
                    className="text-sm text-[#1a1a1a]/80 hover:text-[#c8a84b] transition-colors font-medium"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* ─── EMERGENCY CTA ───────────────────────────────────────────────── */}
      <section
        className="bg-[#b91c1c] text-white"
        aria-label="Emergency generator repair callout"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-3">
                Generator Emergency?
                <br />
                We Respond Fast.
              </h2>
              <p className="text-white/85 text-lg max-w-xl">
                Do not let a generator failure disrupt your operations or leave your
                property without power. Our Gauteng-wide emergency team is ready to
                mobilise now.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="tel:0603160484"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#b91c1c] font-black text-2xl hover:bg-[#f5f4f0] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#b91c1c]"
                aria-label="Call Generator Repair Services emergency line: 060 316 0484"
              >
                060 316 0484
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GENERATOR REPAIR COST TEASER ────────────────────────────────── */}
      <section
        className="py-16 md:py-20 bg-white border-b border-[#1a1a1a]/10"
        aria-labelledby="cost-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2
              id="cost-heading"
              className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4"
            >
              What Does Generator Repair Cost in Gauteng?
            </h2>
            <p className="text-base leading-relaxed text-[#1a1a1a]/70 mb-4">
              Repair costs depend on the fault, the generator brand, its age and
              whether parts need to be sourced. Minor faults such as a faulty AVR or
              a blocked fuel filter are typically resolved at significantly lower
              cost than a full engine overhaul or rewind. We provide honest written
              quotes before starting — no surprises.
            </p>
            <Link
              href="/generator-repair-cost"
              className="text-[#c8a84b] hover:text-[#1a1a1a] font-semibold transition-colors text-sm tracking-wide uppercase"
            >
              Read our full generator repair cost guide
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ TEASER ──────────────────────────────────────────────────── */}
      <section
        className="py-16 md:py-24 bg-[#f5f4f0]"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-10"
          >
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl space-y-8">
            {homepageFAQs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-[#1a1a1a]/10 pb-8"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">
                  {faq.question}
                </h3>
                <p className="text-base leading-relaxed text-[#1a1a1a]/70">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/faq"
              className="text-sm font-semibold tracking-wide uppercase text-[#c8a84b] hover:text-[#1a1a1a] transition-colors"
            >
              View all frequently asked questions
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom spacer for mobile sticky bar */}
      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
