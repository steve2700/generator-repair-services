import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Soweto | Expert Service in Soweto',
  description: 'Professional generator repairs and servicing in Soweto. Emergency callouts, maintenance, and installation. Affordable generator service. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-soweto',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function SowetoPage() {
  return (
    <>
      <AreaSchema areaName="Soweto" url="/generator-repairs-soweto" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Soweto' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Soweto, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Soweto is a vibrant economic hub with growing businesses, retail centres, and 
              a thriving entrepreneurial community. Power reliability is essential for businesses 
              and residents navigating loadshedding. Generator Repair Services provides affordable, 
              professional generator services throughout Soweto.
            </p>

            <p>
              Our Soweto coverage includes Diepkloof, Meadowlands, Orlando, Pimville, Protea Glen, 
              Dobsonville, and surrounding areas. We service generators at businesses, schools, 
              clinics, and homes across Soweto.
            </p>

            <p>
              We understand the importance of value in Soweto. Our pricing is transparent and 
              competitive, and we focus on practical solutions that fit your budget while keeping 
              your power reliable.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Soweto</h2>
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
              Serving Soweto and surrounding areas including Diepkloof, Meadowlands, Orlando, 
              Pimville, Protea Glen, and Dobsonville.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Soweto?</h2>
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
