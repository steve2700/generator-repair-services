import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Krugersdorp | Expert Service',
  description: 'Professional generator repairs and servicing in Krugersdorp. Emergency callouts, maintenance, and installation. West Rand service. Call 060 316 0484.',
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-krugersdorp',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/generator-installation', label: 'Generator Installation' },
]

export default function KrugersdorpPage() {
  return (
    <>
      <AreaSchema areaName="Krugersdorp" url="/generator-repairs-krugersdorp" />

      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Krugersdorp' },
          ]}
        />
      </div>

      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Generator Repairs in Krugersdorp, Gauteng</h1>
          
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Krugersdorp on the West Rand has a rich mining heritage and continues as an 
              important industrial and commercial centre. The area&apos;s diverse economy includes 
              mining operations, manufacturing, agriculture, and tourism. Generator Repair 
              Services provides reliable generator solutions across Krugersdorp.
            </p>

            <p>
              Our Krugersdorp coverage includes the CBD, Noordheuwel, Monument, Kenmare, 
              Krugersdorp North, and surrounding areas. We service generators at industrial 
              sites, farms, game lodges, and residential properties.
            </p>

            <p>
              Agricultural and tourism operations in the area often have unique power requirements. 
              Our technicians understand these specialised needs and provide solutions that work 
              in rural and semi-rural environments.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Services Available in Krugersdorp</h2>
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
              Serving Krugersdorp and surrounding areas including Noordheuwel, Monument, 
              Kenmare, and Krugersdorp North.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Service in Krugersdorp?</h2>
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
