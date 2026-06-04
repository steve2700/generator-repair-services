import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Roodepoort | Expert Service in Roodepoort',
  description: 'Professional generator repairs and servicing in Roodepoort. Emergency callouts, maintenance, and installation. Serving Roodepoort and Florida. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-roodepoort',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function RoodepoortPage() {
  return (
    <>
      <AreaSchema areaName="Roodepoort" url="/generator-repairs-roodepoort" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Roodepoort' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Roodepoort, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Roodepoort on Johannesburg&apos;s western edge combines residential suburbs with significant 
              industrial and commercial areas. The region hosts manufacturing facilities, distribution 
              centres, and retail parks that all require reliable backup power. Generator Repair 
              Services provides comprehensive generator solutions throughout Roodepoort.
            </p>

            <p>
              Our coverage extends across Roodepoort, Florida, Honeydew, Little Falls, Strubensvalley, 
              and surrounding areas. We work with businesses in industrial parks and residents in 
              established suburbs, providing the same professional standard of service to all.
            </p>

            <p>
              Roodepoort&apos;s industrial clients often operate equipment that is sensitive to power 
              quality. Our servicing ensures generators provide clean, stable power, while our repairs 
              address any issues that could affect output quality.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Roodepoort</h2>
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
              Serving Roodepoort and surrounding areas including Florida, Honeydew, Little Falls, 
              Strubensvalley, and Wilgeheuwel.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Roodepoort?</h2>
          <p className="text-brand-white/80 mb-8">
            Call us today for fast, professional generator service in Roodepoort.
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
