import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Johannesburg | Expert Service in JHB',
  description: 'Professional generator repairs and servicing in Johannesburg. Emergency callouts, maintenance, and installation. Serving JHB CBD, Northern and Southern Suburbs. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-johannesburg',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function JohannesburgPage() {
  return (
    <>
      <AreaSchema areaName="Johannesburg" url="/generator-repairs-johannesburg" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Johannesburg' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Johannesburg, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              As South Africa&apos;s economic hub, Johannesburg faces significant power challenges during 
              loadshedding. Businesses in the CBD, industrial operations in the south, and residents 
              across the city rely on generators to maintain operations and comfort. Generator Repair 
              Services provides expert generator repairs, servicing, and maintenance throughout 
              Johannesburg and surrounding areas.
            </p>

            <p>
              Our Johannesburg service coverage extends from the northern business districts to the 
              southern industrial zones. We service generators in Bryanston, Sandton, Rosebank, 
              Parktown, the CBD, Soweto, and all suburbs in between. Whether you have a small 
              residential generator or a large industrial standby system, our technicians have the 
              expertise to keep it running.
            </p>

            <p>
              Johannesburg businesses face intense competition and cannot afford extended downtime. 
              Our emergency response service gets technicians to your location quickly, often within 
              2-4 hours of your call. We arrive equipped to diagnose and repair common faults on-site, 
              minimising disruption to your operations.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Johannesburg</h2>
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
              Serving Johannesburg and surrounding neighbourhoods including Bryanston, Rosebank, 
              Parktown, Houghton, Melrose, Norwood, Kensington, Bedfordview, and the CBD.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Johannesburg?</h2>
          <p className="text-brand-white/80 mb-8">
            Call us today for fast, professional generator service in JHB.
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
