import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Midrand | Expert Service in Midrand',
  description: 'Professional generator repairs and servicing in Midrand. Emergency callouts for commercial and industrial clients. Serving Midrand and Kyalami. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-midrand',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function MidrandPage() {
  return (
    <>
      <AreaSchema areaName="Midrand" url="/generator-repairs-midrand" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Midrand' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Midrand, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Strategically positioned between Johannesburg and Pretoria, Midrand has become a 
              major commercial and industrial centre. The area hosts large corporate parks, 
              distribution centres, and the Gallagher Convention Centre. Generator Repair Services 
              provides comprehensive generator solutions for Midrand&apos;s diverse business community.
            </p>

            <p>
              Our Midrand coverage includes Carlswald, Halfway House, Kyalami, Grand Central, 
              Noordwyk, and surrounding business parks. We service generators at office complexes, 
              warehouses, data centres, and manufacturing facilities throughout the area.
            </p>

            <p>
              Midrand&apos;s position along major transport corridors makes it a logistics hub where 
              downtime has cascading effects. Our maintenance contracts help prevent failures, 
              while our emergency response ensures that when problems do occur, they are resolved 
              quickly.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Midrand</h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-brand-gold hover:text-foreground transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 p-6 bg-brand-surface border border-border">
            <p className="text-foreground/80">
              Serving Midrand and surrounding areas including Carlswald, Halfway House, Kyalami, 
              Grand Central, Noordwyk, and surrounding business parks.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Midrand?</h2>
          <p className="text-brand-white/80 mb-8">
            Call us today for fast, professional generator service in Midrand.
          </p>
          <a
            href="tel:0603160484"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-red text-brand-white font-semibold hover:bg-red-800 transition-colors text-lg"
          >
            Call 060 316 0484
          </a>
        </div>
      </section>

      <div className="h-14 md:hidden" />
    </>
  )
}
