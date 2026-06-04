import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Benoni | Expert Service in Benoni',
  description: 'Professional generator repairs and servicing in Benoni. Emergency callouts, maintenance, and installation. East Rand generator service. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-benoni',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function BenoniPage() {
  return (
    <>
      <AreaSchema areaName="Benoni" url="/generator-repairs-benoni" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Benoni' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Benoni, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Benoni combines residential charm with substantial commercial and light industrial 
              activity. The area&apos;s diverse economy includes retail, services, and manufacturing, 
              all requiring reliable backup power during Gauteng&apos;s frequent loadshedding periods. 
              Generator Repair Services keeps Benoni powered up.
            </p>

            <p>
              Our Benoni coverage includes Northmead, Rynfield, Farrarmere, Lakefield, Petit, 
              and surrounding areas. We service generators at shopping centres, office parks, 
              factories, and homes throughout the region.
            </p>

            <p>
              Benoni businesses understand the importance of continuity. Our maintenance contracts 
              provide the proactive care that prevents unexpected failures, while our emergency 
              service ensures rapid response when problems do occur.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Benoni</h2>
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
              Serving Benoni and surrounding areas including Northmead, Rynfield, Farrarmere, 
              Lakefield, and Petit.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Benoni?</h2>
          <p className="text-brand-white/80 mb-8">
            Call us today for fast, professional generator service.
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
