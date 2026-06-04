import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Randburg | Expert Service in Randburg',
  description: 'Professional generator repairs and servicing in Randburg. Emergency callouts, maintenance, and installation. Serving Randburg and surrounding suburbs. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-randburg',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function RandburgPage() {
  return (
    <>
      <AreaSchema areaName="Randburg" url="/generator-repairs-randburg" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Randburg' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Randburg, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Randburg is a diverse commercial and residential area with everything from industrial 
              parks to upmarket estates. The area&apos;s varied business landscape includes retail 
              centres, professional offices, and light manufacturing. Generator Repair Services 
              provides tailored generator solutions for Randburg&apos;s diverse needs.
            </p>

            <p>
              Our Randburg coverage includes Ferndale, Bordeaux, Blairgowrie, Linden, Northcliff, 
              Fairlands, and surrounding suburbs. We service generators at commercial properties, 
              industrial facilities, and residential homes throughout the area.
            </p>

            <p>
              Randburg&apos;s established infrastructure sometimes faces power challenges beyond 
              loadshedding. Our generators and maintenance services provide reliable backup power 
              for any situation, keeping your home or business operational when the grid fails.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Randburg</h2>
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
              Serving Randburg and surrounding areas including Ferndale, Bordeaux, Blairgowrie, 
              Linden, Northcliff, and Fairlands.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Randburg?</h2>
          <p className="text-brand-white/80 mb-8">
            Call us today for fast, professional generator service in Randburg.
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
